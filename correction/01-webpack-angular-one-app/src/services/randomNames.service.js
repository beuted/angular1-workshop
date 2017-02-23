var angular = require('angular');

var RandomNamesService = function($http) {
  this.getName = function(characterId) {
    return $http.get('http://swapi.co/api/people/' + characterId)
      .then(function(res) {
        return res.data.name;
      }).catch(function(err){
        return err.data;
      });
  }

  return this;
}

module.exports = RandomNamesService;