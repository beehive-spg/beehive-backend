"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var schema = "\n\ttype Section {\n\t\ttime: String,\n\t\tvalue: Int\n\t}\n";

var query = "\n\tstatistics(id: ID!): [Section]\n";

exports.schema = schema;
exports.query = query;