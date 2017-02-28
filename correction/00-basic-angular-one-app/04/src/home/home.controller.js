var homeController = function(randomNameService) {

    this.name = 'Grenoble';

    this.getRandomName = function() {
        this.name = randomNameService.getName();
    }
}