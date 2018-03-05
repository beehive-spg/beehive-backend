'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.route = exports.routes = undefined;

var _hive = require('./hive');

var _route = require('../persistence/route');

var _building = require('./building');

var _speed = require('../utils/speed');

var _speed2 = _interopRequireDefault(_speed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var routes = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var objects;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _route.getRoutes)();

					case 2:
						objects = _context.sent;
						return _context.abrupt('return', objects.map(function (route) {
							return buildRoute(route);
						}));

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function routes() {
		return _ref.apply(this, arguments);
	};
}();

var route = function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
		var object;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return (0, _route.getRoute)(id);

					case 2:
						object = _context2.sent;
						return _context2.abrupt('return', buildRoute(object[0]));

					case 4:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function route(_x) {
		return _ref2.apply(this, arguments);
	};
}();

var buildRoute = function buildRoute(route) {
	var hops = route['hop/_route'].map(function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(hop) {
			var start, end, startdate, enddate, distance, droneSpeed;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return (0, _building.building)(hop['hop/start']['db/id']);

						case 2:
							start = _context3.sent;
							_context3.next = 5;
							return (0, _building.building)(hop['hop/end']['db/id']);

						case 5:
							end = _context3.sent;
							startdate = hop['hop/starttime'];
							enddate = hop['hop/endtime'];
							distance = hop['hop/distance'];
							droneSpeed = (0, _speed2.default)(startdate, enddate, distance);
							return _context3.abrupt('return', {
								id: hop['db/id'],
								start: start,
								end: end,
								startdate: startdate,
								enddate: enddate,
								speed: droneSpeed
							});

						case 11:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));

		return function (_x2) {
			return _ref3.apply(this, arguments);
		};
	}());

	var origin = route['route/origin']['db/ident'] === 'route.origin/order' ? 'order' : 'distribution';

	return {
		id: route['db/id'],
		hops: hops,
		origin: origin
	};
};

exports.routes = routes;
exports.route = route;