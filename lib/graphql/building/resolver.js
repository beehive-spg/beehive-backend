'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resolver = undefined;

var _hive = require('../../controller/hive');

var _shop2 = require('../../controller/shop');

var _customer2 = require('../../controller/customer');

var resolver = {
	Query: {
		hives: function hives() {
			return (0, _hive.hives)();
		},
		shops: function shops() {
			return (0, _shop2.shops)();
		},
		customers: function customers() {
			return (0, _customer2.customers)();
		},
		shop: function shop(_, _ref) {
			var id = _ref.id;
			return (0, _shop2.shop)(id);
		},
		customer: function customer(_, _ref2) {
			var id = _ref2.id;
			return (0, _customer2.customer)(id);
		}
	}
};

exports.resolver = resolver;