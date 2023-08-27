// create the Stack class with two methods to remove and add an element
class Stack {
    constructor(container = []){    // advance
        this.container = container;
    }

    addToStack(newItem){
        this.container.push(newItem);
    }

    removeFromStack(){
        return this.container.pop();
    }
    
}

const  newStack = Stack([1,2,3,4]);

module.exports = Stack;
