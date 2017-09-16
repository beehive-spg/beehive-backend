import koa from 'koa'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
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
	}),
)

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)
