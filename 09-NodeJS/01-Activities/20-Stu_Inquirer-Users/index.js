const inq = require("inquirer");
const fs = require("fs");

inq.prompt([{
    type: "input",
    name: "name",
    message: "what is your Name"
},{
    type: "input",
    name: "Lenguages",
    message: "What languages do you know?"
},{
    type: "input",
    name: "communication",
    message: "What is your preferred method of communication?"
}
]).then((data)=>{
    console.log(data);
    fs.writeFile("text.txt", JSON.stringify(data),(err)=>{
        if (err){
            console.log(err);
        }
    });
});