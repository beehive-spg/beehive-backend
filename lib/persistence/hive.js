'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getCosts = exports.getHives = undefined;

var _dateFns = require('date-fns');

var _server = require('../server');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getHives = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var data;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return _server.axiosInstance.get('/hives');

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

	return function getHives() {
		return _ref.apply(this, arguments);
	};
}();

var getCosts = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var time, data;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						time = parseInt((0, _dateFns.format)((0, _dateFns.addHours)(Date.now(), 1), 'x'));
						_context2.next = 3;
						return _server.axiosInstance.get('/api/hivecosts?ids=' + id + '&time=' + time);

					case 3:
						data = _context2.sent;
						return _context2.abrupt('return', data.data);

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getCosts(_x) {
		return _ref2.apply(this, arguments);
	};
}();

exports.getHives = getHives;
exports.getCosts = getCosts;