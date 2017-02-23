var HomeController = function(RandomNamesService) {
  this.random = RandomNamesService;
  this.name = 'World';

  this.changeToLocalName = function() {
    this.name = 'Grenoble';
  }

  this.randomName = function() {
    this.name = this.random.getName();
  }

  return this;
}

HomeController.$inject = ['randomNames'];

module.exports = HomeController;