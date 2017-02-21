function register(){
    //locate the first name text box
    //read the data 
    //print the data.
    /*let firstName = document.getElementById("txtFirstName");
    console.log(firstName.value);
        let lastName = document.getElementById("txtLastName");
    console.log(lastName.value);*/
    
    let divTags = document.getElementsByTagName("div");
    for(let tag of divTags){
        console.log(tag.innerHTML);
        
console.log(tag.outerHTML);
    }
}

function setDefaultValues(){
    let inputTags = document.getElementsByTagName("input");
    for(let tag of inputTags){
        tag.value="Enter Data";
    }
}