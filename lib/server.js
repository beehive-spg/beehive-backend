'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.axiosInstance = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _graphql = require('graphql');

var _http = require('http');

var _subscriptionsTransportWs = require('subscriptions-transport-ws');

var _apolloServerKoa = require('apollo-server-koa');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _graphqlSchema = require('./graphql-schema');

var _graphqlSchema2 = _interopRequireDefault(_graphqlSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ path: _path2.default.join(process.env.PWD, '.env') });

var axiosInstance = _axios2.default.create({
	baseURL: process.env.DATABASE_URL,
	timeout: 1000
});

var app = new _koa2.default();
var router = new _koaRouter2.default();
var PORT = 8080;

var whitelist = ['http://localhost:' + PORT, 'http://localhost:3000', 'http://localhost:5000'];

function checkOriginAgainstWhitelist(ctx) {
	var requestOrigin = ctx.accept.headers.origin;
	if (!whitelist.includes(requestOrigin)) {
		return ctx.throw(requestOrigin + ' is not a valid origin');
	}
	return requestOrigin;
}

app.use((0, _koaBodyparser2.default)());

router.post('/graphql', (0, _apolloServerKoa.graphqlKoa)({
	schema: _graphqlSchema2.default
}));

router.get('/graphiql', (0, _apolloServerKoa.graphiqlKoa)({
	endpointURL: '/graphql',
	subscriptionsEndpoint: 'ws://localhost:' + PORT + '/subscriptions'
}));

app.use(router.allowedMethods());
app.use((0, _koaConvert2.default)((0, _kcors2.default)({ origin: checkOriginAgainstWhitelist })));
app.use(router.routes());

var ws = (0, _http.createServer)(app.callback());
ws.listen(PORT, function () {
	new _subscriptionsTransportWs.SubscriptionServer({
		execute: _graphql.execute,
		subscribe: _graphql.subscribe,
		schema: _graphqlSchema2.default
	}, {
		server: ws,
		path: '/subscriptions'
	});
});

exports.axiosInstance = axiosInstance;