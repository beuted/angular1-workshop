import * as angular from 'angular';

export class RandomNamesService {
  constructor(private $http) {
  }

  public getName(characterId) {
    return this.$http.get('http://swapi.co/api/people/' + characterId)
      .then((res) => {
        return res.data.name;
      }).catch((err) => {
        return err.data;
      });
  }
}

