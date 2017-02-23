import * as angular from 'angular';

interface ICharacter {
  name: string;
}

export class RandomNamesService {
  private names: string[];

  constructor(private $http: angular.IHttpService) {
  }

  public getName(characterId: number): angular.IPromise<string> {
    return this.$http.get('http://swapi.co/api/people/' + characterId)
      .then((res: angular.IHttpPromiseCallbackArg<ICharacter>) => {
        return res.data.name;
      }).catch((err) => {
        return err.data;
      });
  }
}

