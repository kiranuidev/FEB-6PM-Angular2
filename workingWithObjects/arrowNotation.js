/*
let userData = (data1,data2)=>{
    return data1+data2
};

console.log(userData("kiran","paturi"));
*/

let iterable = ['a', 'b','c'];
let countries =[{name:"India",code:"IN"},{name:"UnitedStates",code:"US"}]
for (let x of iterable) {
    console.log(x);
}

for(let y of countries){
    console.log(y.code);
    console.log(y.name);
}

/*var country = {name:"India",code:"IN"};
for(let c of country){
    console.log(c.prop);
}*/