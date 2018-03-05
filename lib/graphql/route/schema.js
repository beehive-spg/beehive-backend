"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var schema = "\n\ttype Hop {\n\t\tid: ID!,\n\t\tstart: Building!,\n\t\tend: Building!,\n\t\tstartdate: String!,\n\t\tenddate: String!,\n\t\tspeed: Float!\n\t}\n\n\ttype Route {\n\t\tid: ID!,\n\t\thops: [Hop]!,\n\t\torigin: String!\n\t}\n";

var query = "\n\troutes: [Route],\n\troute(id: ID!): Route\n";

exports.schema = schema;
exports.query = query;