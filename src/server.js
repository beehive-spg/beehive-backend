import koa from 'koa'
import cors from 'kcors'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import { execute, subscribe } from 'graphql'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'

import schema from './graphql/schema'

const app = new koa()
const router = new koaRouter()
const PORT = 8080

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

app.use(router.routes())
app.use(router.allowedMethods())
app.use(
	cors({
		origin: `http://localhost:${PORT}`,
	}),
)

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
