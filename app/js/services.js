'use strict';

/* Services */
angular.module('F1FeederApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {},
    host = 'http://ergast.com/api/f1/2013';

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: host + '/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: host + '/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: host + '/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }
    
    return ergastAPI;
  });
