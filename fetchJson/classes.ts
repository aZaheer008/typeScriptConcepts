class Vehicle {
    // color : string = 'red';
    // constructor(color:string){
    //     this.color = color;
    // }
    constructor(public color:string){}
    protected honk() : void{
        console.log('beep')
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car1 extends Vehicle {
    constructor(public wheels:number , color:string){
        super('red')
    }
    private drive():void {
        console.log('vroom');
    }

    startDrivingProcess():void{
        this.drive();
        this.honk()
    }
}

const car = new Car1(4,'red')
car.startDrivingProcess();