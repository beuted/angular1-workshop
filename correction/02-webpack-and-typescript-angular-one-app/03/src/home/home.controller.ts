export class HomeController {
    public name: string;

    constructor(private randomNameService) {
        this.name = 'Grenoble';        
    }

    public getRandomName() {
        this.randomNameService.getName().then((name) => {
            this.name = name;
        });
    }
}

HomeController.$inject = ["randomName-service"];