'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStatistics = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dateFns = require('date-fns');

var _server = require('../server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStatistics = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
		var time, data;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						time = (0, _dateFns.format)((0, _dateFns.addHours)(Date.now(), 1), 'x');
						_context.next = 3;
						return _server.axiosInstance.get('/api/statistics/' + id + '/' + time);

					case 3:
						data = _context.sent;
						return _context.abrupt('return', data.data);

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getStatistics(_x) {
		return _ref.apply(this, arguments);
	};
}();

exports.getStatistics = getStatistics;