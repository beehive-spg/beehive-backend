'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphqlTools = require('graphql-tools');

var _graphqlS2s = require('graphql-s2s');

var _schemaglue = require('schemaglue');

var _consumers = require('../connect/consumers');

var _consumers2 = _interopRequireDefault(_consumers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transpileSchema = _graphqlS2s.graphqls2s.transpileSchema;
// import consumers from '~/src/connect/consumers'


var options = {
	ignore: '**/index.js'
};

var _glue = (0, _schemaglue.glue)('src/graphql', options),
    schema = _glue.schema,
    resolver = _glue.resolver;

var executableSchema = (0, _graphqlTools.makeExecutableSchema)({
	typeDefs: [transpileSchema(schema)],
	resolvers: resolver
});

(0, _consumers2.default)();

exports.default = executableSchema;