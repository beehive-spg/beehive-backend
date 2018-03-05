'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.building = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _building = require('../persistence/building');

var _hive = require('./hive');

var _shop = require('./shop');

var _customer = require('./customer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var building = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
		var object;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _building.getBuilding)(id);

					case 2:
						object = _context.sent;
						return _context.abrupt('return', buildBuilding(object));

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function building(_x) {
		return _ref.apply(this, arguments);
	};
}();

var buildBuilding = function buildBuilding(building) {
	if (building['building/hive']) return (0, _hive.buildHive)(building);else if (building['building/shop']) return (0, _shop.buildShop)(building);else if (building['building/customer']) return (0, _customer.buildCustomer)(building);
};
exports.building = building;