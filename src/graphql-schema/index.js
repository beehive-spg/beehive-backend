import path from 'path'
import { makeExecutableSchema } from 'graphql-tools'
import { graphqls2s } from 'graphql-s2s'
import { glue } from 'schemaglue'
import consumers from 'connect/consumers'

const transpileSchema = graphqls2s.transpileSchema

const options = {
	ignore: '**/index.js',
}

const basename = path.basename(path.dirname(require.main.filename))
const { schema, resolver } = glue(`${basename}/graphql-schema`, options)

const executableSchema = makeExecutableSchema({
	typeDefs: [transpileSchema(schema)],
	resolvers: resolver,
})

consumers()

export default executableSchema
