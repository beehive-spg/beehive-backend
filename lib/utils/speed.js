'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dateFns = require('date-fns');

var speed = function speed(start, end, distance) {
	var startdate = new Date(start);
	var enddate = new Date(end);
	var timespan = (0, _dateFns.differenceInSeconds)(enddate, startdate);

	var velocity = distance / timespan;
	return Math.round(velocity);
};

exports.default = speed;