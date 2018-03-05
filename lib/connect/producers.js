'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.produceOrder = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jackrabbit = require('jackrabbit');

var _jackrabbit2 = _interopRequireDefault(_jackrabbit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ path: _path2.default.join(process.env.PWD, '.env') });

var rabbit = (0, _jackrabbit2.default)(process.env.RABBITMQ_URL);
var exchange = rabbit.default({
	name: process.env.ORDERS_QUEUE,
	durable: true
});

var produceOrder = function produceOrder(order) {
	exchange.publish(order, { key: process.env.ORDERS_QUEUE });
};

exports.produceOrder = produceOrder;