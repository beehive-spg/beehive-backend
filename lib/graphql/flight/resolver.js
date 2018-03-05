'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resolver = undefined;

var _flight = require('../../controller/flight');

var _pubsub = require('../pubsub');

var _pubsub2 = _interopRequireDefault(_pubsub);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = {
	Query: {
		ongoingFlights: function ongoingFlights() {
			return (0, _flight.ongoingFlights)();
		}
	},
	Subscription: {
		departure: {
			subscribe: function subscribe() {
				return _pubsub2.default.asyncIterator(_constants.DEPARTURE);
			}
		},
		arrival: {
			subscribe: function subscribe() {
				return _pubsub2.default.asyncIterator(_constants.ARRIVAL);
			}
		}
	}
};

exports.resolver = resolver;