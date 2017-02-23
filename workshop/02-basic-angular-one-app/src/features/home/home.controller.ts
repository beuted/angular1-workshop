import { RandomNamesService } from '../../services/randomNames.service';

export class HomeController {
  public name: string;
  
  private random: RandomNamesService;

  constructor(randomNames: RandomNamesService) {
    this.random = randomNames;
    this.name = 'World';
  }

  changeToLocalName() {
    this.name = 'Grenoble';
  }

  randomName() {
    this.name = this.random.getName();
  }
}

HomeController.$inject = ['randomNames'];