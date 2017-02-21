import { RandomNames } from '../../services/randomNames.service';

export default class HomeController {
  public name: string;
  
  private random: RandomNames;

  constructor(randomNames: RandomNames) {
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