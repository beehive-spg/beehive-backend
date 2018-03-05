'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getStatistics = undefined;

var _dateFns = require('date-fns');

var _server = require('../server');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getStatistics = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
		var time, data;
		return regeneratorRuntime.wrap(function _callee$(_context) {
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