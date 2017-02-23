var HomeController = function(randomNamesService) {
  var that = this;

  this.randomNamesService = randomNamesService;
  this.name = 'Human';

  this.changeToAbsurdName = function() {
    this.name = 'Spock';
  }

  this.randomName = function() {
    // Get a random character id
    var i = Math.floor(Math.random() * (87 - 1)) + 1;

    that.randomNamesService.getName(i).then(function(name) {
      that.name = name;
    });
  }

  return this;
}

// TODO: Modify this controller to get random planet from your service and pass it to the directive
  