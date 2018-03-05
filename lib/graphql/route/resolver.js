'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.resolver = undefined;

var _route2 = require('../../controller/route');

var resolver = {
	Query: {
		routes: function routes() {
			return (0, _route2.routes)();
		},
		route: function route(_, _ref) {
			var id = _ref.id;
			return (0, _route2.route)(id);
		}
	}
};

exports.resolver = resolver;