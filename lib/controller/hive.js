'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buildHive = exports.hives = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _hive = require('../persistence/hive');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hives = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		var objects;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _hive.getHives)();

					case 2:
						objects = _context.sent;
						return _context.abrupt('return', objects.map(function (building) {
							return buildHive(building);
						}));

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function hives() {
		return _ref.apply(this, arguments);
	};
}();

var buildHive = function () {
	var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(building) {
		var hive, costs, hiveObjects;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						hive = building['building/hive'];
						_context2.next = 3;
						return (0, _hive.getCosts)(building['db/id']);

					case 3:
						costs = _context2.sent;
						hiveObjects = [{
							id: hive['db/id'],
							name: hive['hive/name'],
							demand: hive['hive/demand'],
							costs: costs[0]['hive/cost']
						}];
						return _context2.abrupt('return', {
							id: building['db/id'],
							location: {
								address: building['building/address'],
								longitude: building['building/xcoord'],
								latitude: building['building/ycoord']
							},
							type: hiveObjects
						});

					case 6:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function buildHive(_x) {
		return _ref2.apply(this, arguments);
	};
}();

exports.hives = hives;
exports.buildHive = buildHive;