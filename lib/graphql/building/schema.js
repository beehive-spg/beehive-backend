"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var schema = "\n\ttype Location {\n\t\taddress: String!,\n\t\tlongitude: Float!,\n\t\tlatitude: Float!\n\t}\n\n\ttype Building {\n\t\tid: ID!,\n\t\tlocation: Location!\n\t\ttype: [BuildingType]!\n\t}\n\n\ttype Hive {\n\t\tid: ID!,\n\t\tname: String,\n\t\tdemand: Float,\n\t\tcosts: Int\n\t}\n\n\ttype Shop {\n\t\tid: ID!,\n\t\tname: String\n\t}\n\n\ttype Customer {\n\t\tid: ID!\n\t}\n";

var query = "\n\thives: [Building],\n\tshops: [Building],\n\tcustomers: [Building],\n\tshop(id: ID!): Building,\n\tcustomer(id: ID!): Building\n";

exports.schema = schema;
exports.query = query;