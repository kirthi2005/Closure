const credits = ((num) =>{
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return () => {
        credits -= 1;
        if(credits > 0)
            console.log(`credits remaining, ${credits}`);
        else
            console.log('not enough credits')
    }
})(3);

credits();
credits();
credits();

/* Output:
initial credits value: 3
credits remaining, 2
credits remaining, 1
not enough credits
*/

/* here credits is the private variable that is accessed because this anonymous 
function that we return from our immediately invoked function this anonymous function
has closure over the IIFE function that has the private credits variable because
this credits variable is private it's not available in the global scope and the
only way to access it through the child function that is an anonymous function here */