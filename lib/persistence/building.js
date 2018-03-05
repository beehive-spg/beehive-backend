'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getBuilding = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _server = require('../server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBuilding = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
		var data;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _server.axiosInstance)('/one/buildings/' + id);

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

	return function getBuilding(_x) {
		return _ref.apply(this, arguments);
	};
}(); // import { axiosInstance } from '~/src/server'
exports.getBuilding = getBuilding;