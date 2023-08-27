// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'

function Developer(name,tech){
    this.name = name;
    this.tech = tech;
    this.introduction = ()=>{
        console.log(name);  // did not afect the function print out.
        console.log(this.tech);
    }
}

// TODO: Create a new object using the 'Developer' constructor

const variable = new Developer("Cristian","Coding");


// TODO: Call the 'introduction()' method on the new object

console.log(variable);
variable.introduction(); //print out the funtoin created in the Constructor DEVELOPER.
