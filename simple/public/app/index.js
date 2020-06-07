'use strict';

var weather = require('./weather');
weather.getForecast();

// simple/public/app/weather.js
module.exports = {
    'getForecast': function() {
    document.getElementById('forecast').innerHTML = 'Partly cloudy.';
    }
    };