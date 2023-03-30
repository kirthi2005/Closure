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
   
