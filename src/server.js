import path from 'path'
import koa from 'koa'
import cors from 'kcors'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import convert from 'koa-convert'
import { execute, subscribe } from 'graphql'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import axios from 'axios'

import schema from './graphql-schema'

require('dotenv').config({ path: path.join(process.env.PWD, '.env') })

const axiosInstance = axios.create({
	baseURL: process.env.DATABASE_URL,
	timeout: 1000,
})

const app = new koa()
const router = new koaRouter()
const PORT = 8080

const whitelist = [
	`http://localhost:${PORT}`,
	'http://localhost:3000',
	'http://localhost:5000',
]

function checkOriginAgainstWhitelist(ctx) {
	const requestOrigin = ctx.accept.headers.origin
	if (!whitelist.includes(requestOrigin)) {
		return ctx.throw(`${requestOrigin} is not a valid origin`)
	}
	return requestOrigin
}

app.use(koaBody())

router.post(
	'/graphql',
	graphqlKoa({
		schema: schema,
	}),
)

router.get(
	'/graphiql',
	graphiqlKoa({
		endpointURL: '/graphql',
		subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
	}),
)

app.use(router.allowedMethods())
app.use(convert(cors({ origin: checkOriginAgainstWhitelist })))
app.use(router.routes())

const ws = createServer(app.callback())
ws.listen(PORT, () => {
	new SubscriptionServer(
		{
			execute,
			subscribe,
			schema,
		},
		{
			server: ws,
			path: '/subscriptions',
		},
	)
})

export { axiosInstance }
