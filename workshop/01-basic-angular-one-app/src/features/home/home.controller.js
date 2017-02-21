export default class HomeController {
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