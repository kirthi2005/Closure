# Closure

Defnition:
  "A closure is a function having access to the parent scope even after the parent function has closed"
   
Example: 
  
    let x = 1; //global scope
    const parentFunction = () => {
        //parent scope 
        let y = 2;
        console.log(x);
        console.log(y);
        const childFunction = () => {
            //local scope
            console.log(x += 5);
            console.log(y += 1);  
        }
        return childFunction;
    }
    const result = parentFunction();
    console.log(result); 
    result(); /* calling child function. it will access y in parent function 
    even the parent function has already been called and closed. child function 
    still has access to the scope and that makes y private variable that
    only child function has access to */
    
   Output:
      
      1
      2
      ()=>{
        //local scope
            console.log(x += 5);
            console.log(y += 1);
      }
      6
      3
   
   Points to Remember:
   
    - controls the variable that are being shared with the nested function
    - the inner function has access to the variables in its local scope, parent function and in the global scope 
    - In Js, we can use private variables and methods using closure
    - helps in maintaining the state between each function calls without using a global variable.
    - closure is created at function definition not at function invocation.

