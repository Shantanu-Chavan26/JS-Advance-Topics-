//PROTO,PROTOTYPE
// "prototype" refers to a mechanism by which objects can inherit properties and methods from other objects. 
// You can access an object's prototype using the __proto__ property
//Mostly used for inheritance.

let obj =
{
    fname:"John",
};

let obj2
={
    lname: "Cena",
};

obj2.__proto__ = obj;
console.log(obj2.fname);

//Example:
// Here runmethod in object p is pulled into object a through proto
let a = {
    name2:"Shantanu" , 
    language: "Javascript",
    
}

let p ={
    run:()=>{
        alert("Run")
    }

}

p.__proto__ = {
    name:"Shan"
}

a.__proto__ = p
a.run(); 
console.log(a.name());
//Now this a.name is in p object chya proto madhe so chaining hota