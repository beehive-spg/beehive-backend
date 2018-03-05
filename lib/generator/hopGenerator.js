'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _turf = require('turf');

var _turf2 = _interopRequireDefault(_turf);

var _topicNames = require('../constants/topicNames');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialize = function initialize(pubsub) {
	var hives = [];
	_fs2.default.readFile(__dirname + '/../testFiles/hives.json', 'utf8', function (err, data) {
		if (err) {
			console.log(err); //eslint-disable-line
		}

		hives = JSON.parse(data);

		setInterval(function () {
			var hop = getHop(hives);
			if (hop.route.from === hop.route.to) {
				console.log(hop); //eslint-disable-line
			}

			pubsub.publish(_topicNames.DRONE_ADDED, {
				droneAdded: hop
			});

			setTimeout(function () {
				pubsub.publish(_topicNames.DRONE_REMOVED, {
					droneRemoved: hop.id
				});
			}, hop.time);
		}, 750);
	});
};

var getHop = function getHop(hives) {
	var from = Math.floor(Math.random() * (22 - 0));

	var reachable = [];
	hives.forEach(function (hive) {
		if (hive.id === from) {
			reachable = hive.reachable;
		}
	});

	var to = reachable[Math.floor(Math.random() * reachable.length)];

	var fromProperties = getProperties(from, hives);
	var toProperties = getProperties(to, hives);

	var time = getTime(fromProperties, toProperties);

	return {
		id: getId(),
		time: time,
		route: {
			from: fromProperties,
			to: toProperties,
			currentPosition: fromProperties
		}
	};
};

var getProperties = function getProperties(id, hives) {
	var hive = {};
	hives.forEach(function (res) {
		if (res.id === id) {
			hive = {
				location: res.location,
				longitude: res.coordinates.longitude,
				latitude: res.coordinates.latitude
			};
		}
	});
	return hive;
};

var getId = function getId() {
	var date = new Date();
	return date.getDay().toString() + date.getHours().toString() + date.getMinutes().toString() + date.getSeconds().toString() + date.getMilliseconds().toString();
};

var getTime = function getTime(from, to) {
	var fromPoint = _turf2.default.point([from.longitude, from.latitude]);
	var toPoint = _turf2.default.point([to.longitude, to.latitude]);
	var distance = _turf2.default.distance(fromPoint, toPoint);
	var velocity = 150;

	var time = distance / velocity;

	var ms = time * (60 * 60 * 1000);

	return ms;
};

exports.default = initialize;