//syntax of interface
interface IVehicle{
    //getAllVehicles is method name
    // :Array<string> is return type
    getAllVehicles():Array<string>

    //getVehicleById is method name
    //:void is return type
    //it takes a parameter called id
    // parameter data type is number.
    getVehicleById(id:number,model:string,make:any):void
    
    //addVehilce is method name
    //return type is string.
    addVehilce():string
    updateVehicle()
}


class Vehicle implements IVehicle{
    constructor(){

    }
    
    //private member.
    //privat is called Aceess modifier
    // vin is called member
    //number is called as datatype.
    private vin:string

    public Year:number
    public Make:string
    public Model:string

      getAllVehicles():Array<string>{
          return ["Kiran"];
      }
    getVehicleById(){

    }
    addVehilce():string{
        return "string"
    }
    updateVehicle(){

    }

}

let vehicle = new Vehicle();
vehicle.Year=2016;
vehicle.Make="Audi";
vehicle.Model="A5";