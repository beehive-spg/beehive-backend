'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jackrabbit = require('jackrabbit');

var _jackrabbit2 = _interopRequireDefault(_jackrabbit);

var _flight = require('../controller/flight');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ path: _path2.default.join(process.env.PWD, '.env') });

var rabbit = (0, _jackrabbit2.default)(process.env.RABBITMQ_URL);
var flights = rabbit.default().queue({ name: process.env.FLIGHTS_QUEUE });

var consumeFlights = function consumeFlights() {
	flights.consume(onFlight, { noAck: true });
};

var onFlight = function onFlight(data) {
	if (Buffer.byteLength(data, 'utf-8') === 0) return;
	data = JSON.parse(data);
	(0, _flight.processFlight)(data);
};

var startConsumers = function startConsumers() {
	consumeFlights();
};

exports.default = startConsumers;