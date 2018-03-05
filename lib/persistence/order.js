'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getOrderFromRoute = exports.getOrder = exports.getOrders = undefined;

var _server = require('../server');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getOrders = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.abrupt('return', []);

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getOrders() {
		return _ref.apply(this, arguments);
	};
}();

var getOrder = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var data;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return _server.axiosInstance.get('/one/orders/' + id);

					case 2:
						data = _context2.sent;
						return _context2.abrupt('return', data.data);

					case 4:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getOrder(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var getOrderFromRoute = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(routeId) {
		var data;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return _server.axiosInstance.get('/orders/' + routeId);

					case 2:
						data = _context3.sent;
						return _context3.abrupt('return', data.data);

					case 4:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function getOrderFromRoute(_x2) {
		return _ref3.apply(this, arguments);
	};
}();

exports.getOrders = getOrders;
exports.getOrder = getOrder;
exports.getOrderFromRoute = getOrderFromRoute;