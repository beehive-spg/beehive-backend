'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resolver = undefined;

var _statistics2 = require('../../controller/statistics');

var resolver = {
	Query: {
		statistics: function statistics(_, _ref) {
			var id = _ref.id;
			return (0, _statistics2.statistics)(id);
		}
	}
}; // import { statistics } from '~/src/controller/statistics'
exports.resolver = resolver;