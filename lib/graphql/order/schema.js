"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var schema = "\n\ttype Order {\n\t\tid: ID!,\n\t\tshop: Building!,\n\t\tcustomer: Building!\n\t\troute: ID!,\n\t\tsource: String\n\t}\n\n\tinput CoordinatesInput {\n\t\taddress: String!,\n\t\tlongitude: Float!,\n\t\tlatitude: Float!\n\t}\n\n\tinput OrderInput {\n\t\tshop: ID!,\n\t\tcustomer: CoordinatesInput!\n\t}\n";

var query = "\n\torders: [Order],\n\torder(id: ID!): Order,\n\torderFromRoute(routeId: ID!): Order\n";

var mutation = "\n\taddOrder(order: OrderInput!): Boolean\n";

exports.schema = schema;
exports.query = query;
exports.mutation = mutation;