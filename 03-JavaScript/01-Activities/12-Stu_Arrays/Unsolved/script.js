// WRITE YOUR CODE HERE

var studentName = ['tony', 'derek', 'spencer'];

console.log(studentName.length)

console.log('Welcome to the class ' + studentName[0])
console.log('Welcome to the class ' + studentName[1])
console.log('Welcome to the class ' + studentName[2])

studentName[0]= 'Phteven';

if (studentName[0] === 'Phteven') {
    console.log(studentName[0] + ' is in class!');
}