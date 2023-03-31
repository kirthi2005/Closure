/*W3School : "A closure is a function having access to the parent scope even after 
the parent function has closed"
*/

//A clsoure is created when we define a function, not when a function is executed.

//ex: football boundary is defined before the game is played like closure is
//created when we define the function


//child function has access to its local scope, parent scope aand global scope
//need to return child function from parent function

//global scope
let x = 1;

const parentFunction = () => {
    //parent scope 
    let myValue = 2;
    console.log(x);
    console.log(myValue);
    const childFunction = () => {
        //local scope
        console.log(x += 5);
        console.log(myValue += 1);  
    }
    return childFunction;
}
const result = parentFunction();
console.log(result); 
result(); //calling child function. it will access myValue in parent function 
//even the parent function has already been called and closed. child function 
//still has access to the scope and that makes myValue private variable that
//only child function has access to
//result(); //calling result again
//answer is 11 and 4 it continues to increment these values
//result(); //16 & 5 this is because it is incrementing both of these value and it has 
//access to global scope which is a public variable but it also has access to the
//scope of its parent function which is a private variable 
//console.log("x ouside function = "+ x);
//console.log("myValue outside function = " + myValue); //reference error
//because it is a private variable