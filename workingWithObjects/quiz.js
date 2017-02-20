
/*function multiply(x){
    return 10*x;
}

function adder(y){
    return 100+y;
}

function final(){
    var first =10;
    var second=30;
    var  mul = multiply(first);
    var result = adder(mul);
    console.log(result);
}

final();*/
//result is 200

function printData(){
    
    for(var i=0;i<100;i++){
        
    }
    console.log(i);
    console.log(++i);
    
}
printData();

function loopData(count){
    if(count<100){
        console.log(count);
        count =count+1;
        loopData(count);
    }
    console.log(count);
}
loopData(0);











