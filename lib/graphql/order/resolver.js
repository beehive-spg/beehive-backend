'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resolver = undefined;

var _order2 = require('../../controller/order');

var resolver = {
	Query: {
		orders: function orders() {
			return (0, _order2.orders)();
		},
		order: function order(_, _ref) {
			var id = _ref.id;
			return (0, _order2.order)(id);
		},
		orderFromRoute: function orderFromRoute(_, _ref2) {
			var routeId = _ref2.routeId;
			return (0, _order2.orderFromRoute)(routeId);
		}
	},
	Mutation: {
		addOrder: function addOrder(_, _ref3) {
			var order = _ref3.order;
			return (0, _order2.createOrder)(order);
		}
	}
};

exports.resolver = resolver;