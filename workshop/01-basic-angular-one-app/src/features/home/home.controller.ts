import { RandomNames } from '../../services/randomNames.service';

export default class HomeController {
  private random: RandomNames;
  private name: string;

  constructor(randomNames) {
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