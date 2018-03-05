'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createOrder = exports.orderFromRoute = exports.order = exports.orders = undefined;

var _shop = require('./shop');

var _customer = require('./customer');

var _order = require('../persistence/order');

var _customer2 = require('../persistence/customer');

var _producers = require('../connect/producers');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var orders = function orders() {};

var order = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
		var object;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _order.getOrder)(id);

					case 2:
						object = _context.sent;
						return _context.abrupt('return', buildOrder(object));

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function order(_x) {
		return _ref.apply(this, arguments);
	};
}();

var orderFromRoute = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(routeId) {
		var object;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return (0, _order.getOrderFromRoute)(routeId);

					case 2:
						object = _context2.sent;
						return _context2.abrupt('return', buildOrder(object));

					case 4:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function orderFromRoute(_x2) {
		return _ref2.apply(this, arguments);
	};
}();

var buildOrder = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(order) {
		var shopObject, customerObject, source;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return (0, _shop.shop)(order['order/shop']['db/id']);

					case 2:
						shopObject = _context3.sent;
						_context3.next = 5;
						return (0, _customer.customer)(order['order/customer']['db/id']);

					case 5:
						customerObject = _context3.sent;
						source = order['order/source']['db/ident'] === 'order.source/gui' ? 'gui' : 'generated';
						return _context3.abrupt('return', {
							id: order['db/id'],
							shop: shopObject,
							customer: customerObject,
							route: order['order/route']['db/id'],
							source: source
						});

					case 8:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function buildOrder(_x3) {
		return _ref3.apply(this, arguments);
	};
}();

var createOrder = function () {
	var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(order) {
		var customerObject, data, from, to, orderObject;
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						customerObject = {
							address: order.customer.address,
							xcoord: order.customer.longitude,
							ycoord: order.customer.latitude,
							name: 'not implemented yet'
						};
						_context4.next = 3;
						return (0, _customer2.postCustomer)(customerObject);

					case 3:
						data = _context4.sent;
						from = order.shop;
						to = '' + data.data['building/customer'][0]['db/id'];
						orderObject = {
							from: from,
							to: to
						};


						(0, _producers.produceOrder)(orderObject);

						return _context4.abrupt('return', true);

					case 9:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, undefined);
	}));

	return function createOrder(_x4) {
		return _ref4.apply(this, arguments);
	};
}();

exports.orders = orders;
exports.order = order;
exports.orderFromRoute = orderFromRoute;
exports.createOrder = createOrder;