'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.processFlight = exports.ongoingFlights = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dateFns = require('date-fns');

var _constants = require('../constants');

var _pubsub = require('../graphql/pubsub');

var _pubsub2 = _interopRequireDefault(_pubsub);

var _route = require('./route');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ongoingFlights = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
		var routeObjects, time, flights;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return (0, _route.routes)();

					case 2:
						routeObjects = _context2.sent;
						time = (0, _dateFns.format)((0, _dateFns.addHours)(Date.now(), 1), 'x');
						flights = routeObjects.map(function () {
							var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(route) {
								var hops, hop;
								return _regenerator2.default.wrap(function _callee$(_context) {
									while (1) {
										switch (_context.prev = _context.next) {
											case 0:
												_context.next = 2;
												return Promise.all(route.hops);

											case 2:
												hops = _context.sent;
												hop = hops.find(function (hop) {
													return hop.startdate < time && hop.enddate > time;
												});
												return _context.abrupt('return', {
													hopId: hop.id,
													routeId: route.id
												});

											case 5:
											case 'end':
												return _context.stop();
										}
									}
								}, _callee, undefined);
							}));

							return function (_x) {
								return _ref2.apply(this, arguments);
							};
						}());
						return _context2.abrupt('return', flights);

					case 6:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function ongoingFlights() {
		return _ref.apply(this, arguments);
	};
}();

var processFlight = function processFlight(data) {
	data.type === 'dep' ? sendDeparture(data) : sendArrival(data);
};

var sendDeparture = function sendDeparture(flight) {
	var departure = buildFlight(flight);
	_pubsub2.default.publish(_constants.DEPARTURE, {
		departure: departure
	});
};

var sendArrival = function sendArrival(flight) {
	var arrival = buildFlight(flight);
	_pubsub2.default.publish(_constants.ARRIVAL, {
		arrival: arrival
	});
};

var buildFlight = function buildFlight(flight) {
	return {
		hopId: flight.hop_id,
		routeId: flight.route_id
	};
};

exports.ongoingFlights = ongoingFlights;
exports.processFlight = processFlight;