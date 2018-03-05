'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var schema = 'union BuildingType = Hive | Shop | Customer';

var resolver = {
	BuildingType: {
		__resolveType: function __resolveType(obj, context, info) {
			return obj.demand ? 'Hive' : !obj.name ? 'Customer' : !obj.demand ? 'Shop' : null;
		}
	}
};

exports.schema = schema;
exports.resolver = resolver;