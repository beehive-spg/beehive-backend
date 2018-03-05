"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var schema = "\n\ttype Flight {\n\t\thopId: ID!,\n\t\trouteId: ID!,\n\t}\n";

var query = "\n\tongoingFlights: [Flight]\n";
var subscription = "\n\tdeparture: Flight,\n\tarrival: Flight\n";

exports.schema = schema;
exports.query = query;
exports.subscription = subscription;