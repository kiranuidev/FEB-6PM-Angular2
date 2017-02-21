class  Bird{
    constructor(height, weight){
        this.height = height;
        this.wegith = weight;
    }
    fly(){
        console.log("I can Fly");
    }
    swim(){
        console.log("I can swim");
    }
    walk(){
        console.log("I can walk");
    }
}

var duck = new Bird();