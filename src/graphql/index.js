import { makeExecutableSchema } from 'graphql-tools'
import { graphqls2s } from 'graphql-s2s'
import { glue } from 'schemaglue'
import { PubSub } from 'graphql-subscriptions'

const transpileSchema = graphqls2s.transpileSchema

const pubsub = new PubSub()

const options = {
	ignore: '**/index.js',
}

const { schema, resolver } = glue('src/graphql', options)

const executableSchema = makeExecutableSchema({
	typeDefs: [transpileSchema(schema)],
	resolvers: resolver,
})

export { pubsub }
export default executableSchema
