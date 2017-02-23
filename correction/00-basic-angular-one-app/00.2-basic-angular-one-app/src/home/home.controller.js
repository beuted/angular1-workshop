var HomeController = function(randomNamesService) {
  var that = this;

  this.randomNamesService = randomNamesService;
  this.name = 'Human';

  this.changeToAbsurdName = function() {
    this.name = 'Spock';
  }

  this.randomName = function() {
    this.name = 'Random';
  }

  return this;
}

// TODO: Modify this controller to get random planet from your service and pass it to the directive
  