var homeController = function(randomNameService) {

    this.name = 'Grenoble';

    this.getRandomName = function() {
        randomNameService.getName().then(function(name) {
            this.name = name;
        });
    }
}