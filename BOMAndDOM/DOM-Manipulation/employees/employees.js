var employees = [{
        name: "kiran",
        age: "30",
        gender: "M"
},
    {
        name: "Vijay",
        age: 23,
        gender: "M"
                 }];

function buildTableOfEmployees(){
    let tableTag = document.getElementById("tblEmployees");
    //step1 Loop throwugh the employees
    for(let emp of employees){
        //console.log(emp);
        let tr= createTableRow(emp);
        tableTag.appendChild(tr);
    }
}

function createTableRow(data){
    //console.log(data);
    let trTag = document.createElement("tr");
    let nameColumn = createTableColumn(data.name);
    let ageColumn = createTableColumn(data.age);
    let genderColumn = createTableColumn(data.gender);
    console.log(nameColumn);
    console.log(ageColumn);
    console.log(genderColumn);
    trTag.appendChild(nameColumn);
    trTag.appendChild(ageColumn);
    trTag.appendChild(genderColumn);
    console.log(trTag);
    return trTag;
}

function createTableColumn(content){
    //console.log(content);
    let tdTag = document.createElement("td");
    let inputTag = document.createElement("input");
    
    inputTag.type="text";
    inputTag.value = content;
    inputTag.addEventListener("keypress",handleAdd);
    tdTag.appendChild(inputTag);
    return tdTag;
}

function attachEvents(){
    let btnAdd = document.getElementById("btnAddEmployee");
    btnAdd.addEventListener("click",handleAdd);
}

function handleAdd(){
    console.log("Employee added");
}


buildTableOfEmployees();
attachEvents();
