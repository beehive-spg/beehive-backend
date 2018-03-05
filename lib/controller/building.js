'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.building = undefined;

var _building = require('../persistence/building');

var _hive = require('./hive');

var _shop = require('./shop');

var _customer = require('./customer');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var building = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
		var object;
		return regeneratorRuntime.wrap(function _callee$(_context) {
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