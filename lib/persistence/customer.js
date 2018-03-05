'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.postCustomer = exports.getCustomer = exports.getCustomers = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _server = require('../server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCustomers = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		var data;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return _server.axiosInstance.get('/customers');

					case 2:
						data = _context.sent;
						return _context.abrupt('return', data.data);

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getCustomers() {
		return _ref.apply(this, arguments);
	};
}();
var getCustomer = function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
		var data;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return _server.axiosInstance.get('/api/tobuilding/' + id);

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

	return function getCustomer(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var postCustomer = function postCustomer(customer) {
	return _server.axiosInstance.post('/customers', customer);
};

exports.getCustomers = getCustomers;
exports.getCustomer = getCustomer;
exports.postCustomer = postCustomer;