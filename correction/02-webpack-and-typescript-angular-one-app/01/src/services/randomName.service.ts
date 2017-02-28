var randomNameService = <any>function ($http) {
     this.getName = function() {
        var characterId = Math.floor(Math.random() * (87 - 1)) + 1;
        
        return $http.get('http://swapi.co/api/people/' + characterId)
            .then(function(res) {
                return res.data.name;
            }).catch(function(err){
                return err.data;
            });
     }
}

randomNameService.$inject = ["$http"];

module.exports = randomNameService;