(
    function () {

        var i = 10;
        if (i > 10) {
            console.log("i is greater than 10");
        } else if (i == 10) {
            console.log("i is equal to 10");
        } else {
            console.log("i is less than 10");
        }



    }
)();


(function () {
    var profiles = [{
            name: "kiran",
            gender: "M",
            age: 30,
            location: "India",
            salary:40000
            
        },
        {
            name: "john",
            gender: "M",
            age: 25,
            location: "USA",
            salary:50000
        },
        {
            name: "siri",
            gender: "f",
            age: 24,
            location: "India",
            salary:60000
        },
        {
            name: "swetha",
            gender: "f",
            age: 22,
            location: "India",
            salary:70000
        }];

    for (var i = 0; i < 4; i++) {
        console.log(profiles[i]);
        var profile= profiles[i];
        if( profile.gender=="f"  && profile.salary>50000){
            console.log("Select this profile");
        }
    }
    

})();

(function(){
    
    var i=10;
    if(i){
        console.log("Hey it is true");
    }
    else{
        console.log("Hey it is false");
    }
})();











