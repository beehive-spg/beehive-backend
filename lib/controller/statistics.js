'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.statistics = undefined;

var _statistics = require('../persistence/statistics');

var statistics = function statistics(id) {
	return (0, _statistics.getStatistics)(id);
};

exports.statistics = statistics;