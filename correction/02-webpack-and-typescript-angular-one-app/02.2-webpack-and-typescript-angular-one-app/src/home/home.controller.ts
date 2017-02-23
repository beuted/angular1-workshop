import { RandomNamesService } from '../services/randomNames.service';

export class HomeController {
  public name;
  
  private randomNamesService;

  constructor(randomNamesService) {
    this.randomNamesService = randomNamesService;
    this.name = 'World';
  }

  changeToAbsurdName() {
    this.name = 'Spock';
  }

  randomName() {
    // Get a random character id
    var i = Math.floor(Math.random() * (87 - 1)) + 1;

    this.randomNamesService.getName(i).then((name) => {
      this.name = name;
    });
  }
}

HomeController.$inject = ['randomNames'];