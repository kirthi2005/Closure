//Immediately Invoked Function Expression IIFE

const privateCounter = (() => {
    let count = 0;
    console.log(`initial count value: ${count}`);
    return () =>{ count += 1;console.log(count)}
})();

// as it is IIFE output is : initial count value: 0. Function is returned but not
//called immediately. privateCounter() will call the function
privateCounter();
privateCounter();
privateCounter();

//count is a private variable. we are incrementing the count value and count
//value is not available in the global scope.the only way the count variable can be 
//accessed is through the lexical scope of the child function (here anonymous
//function in return) and so it has closure over the private counter scope and also
//has closure over the global scope


// let count = 0;
//console.log(`initial count value: ${count}`); remember these statements are called
// only once when we call privateCounter() we are calling only the function in
//return statement

