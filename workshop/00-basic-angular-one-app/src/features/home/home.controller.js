var HomeController = function(randomNames) {
  this.random = randomNames;
  this.name = 'World';

  this.changeToLocalName = function() {
    this.name = 'Grenoble';
  }

  this.randomName = function() {
    this.name = this.random.getName();
  }

  return this;
}

angular.module('app.home')
  .controller('HomeController', ['randomNames', HomeController])