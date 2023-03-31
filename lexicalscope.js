// Example for lexical scope.

/*
Lexical Scope: Lexical scope defines how variable names are resolved in nested 
function. If we have a child function within a parent function then the child 
function has access to the scope of their parent function and has the access to the
global scope. Lexical scope is only an important part of closure. Lexical scope is 
not a closure
*/
//global scope
let x = 1;

const parentFunction = () => {
    //local scope 
    let myValue = 2;
    console.log(x);
    console.log(myValue);
    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);    
    }
    childFunction();
}
parentFunction();

//child function has closure over the scope of the parent function and
//global scope its not a complete example for closure  