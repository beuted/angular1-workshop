export class RandomNameService {

    constructor(private $http) {
    }

    public getName() {
        var characterId = Math.floor(Math.random() * (87 - 1)) + 1;
        
        return this.$http.get('http://swapi.co/api/people/' + characterId)
            .then(function(res) {
                return res.data.name;
            }).catch(function(err){
                return err.data;
            });
     }
}

RandomNameService.$inject = ["$http"];