import { makeExecutableSchema } from 'graphql-tools'
import { graphqls2s } from 'graphql-s2s'
import { glue } from 'schemaglue'
// import consumers from '~/src/connect/consumers'
import consumers from '~/connect/consumers'

const transpileSchema = graphqls2s.transpileSchema

const options = {
	ignore: '**/index.js',
}

const { schema, resolver } = glue('src/graphql', options)

const executableSchema = makeExecutableSchema({
	typeDefs: [transpileSchema(schema)],
	resolvers: resolver,
})

consumers()

export default executableSchema
