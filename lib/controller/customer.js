'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buildCustomer = exports.customer = exports.customers = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _customer = require('../persistence/customer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customers = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		var objects;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _customer.getCustomers)();

					case 2:
						objects = _context.sent;
						return _context.abrupt('return', objects.map(function (building) {
							return buildCustomer(building);
						}));

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function customers() {
		return _ref.apply(this, arguments);
	};
}();

var customer = function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
		var object;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return (0, _customer.getCustomer)(id);

					case 2:
						object = _context2.sent;
						return _context2.abrupt('return', buildCustomer(object[0]));

					case 4:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function customer(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var buildCustomer = function buildCustomer(building) {
	var customerObjects = building['building/customer'].map(function (customer) {
		return {
			id: customer['db/id']
		};
	});

	return {
		id: building['db/id'],
		location: {
			address: building['building/address'],
			longitude: building['building/xcoord'],
			latitude: building['building/ycoord']
		},
		type: customerObjects
	};
};

exports.customers = customers;
exports.customer = customer;
exports.buildCustomer = buildCustomer;