'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buildCustomer = exports.customer = exports.customers = undefined;

var _customer = require('../persistence/customer');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var customers = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var objects;
		return regeneratorRuntime.wrap(function _callee$(_context) {
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
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var object;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
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