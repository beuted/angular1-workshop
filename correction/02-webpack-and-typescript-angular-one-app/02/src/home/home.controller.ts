export var HomeController = function(randomNameService) {
    var that = this;

    this.name = 'Grenoble';

    this.getRandomName = function() {
        randomNameService.getName().then(function(name) {
            that.name = name;
        });
    }
}

HomeController.$inject = ["randomName-service"];