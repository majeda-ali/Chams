let result =  document.getElementById('result');
document.addEventListener("click" ,(event)=>{
    result.value+= event.target.value.trim();


if(event.target.value.includes("="))
// includes function : Check if a string includes "=":
{
  let outcome= result.value;
  result.value=outcome.substring(0,outcome.length -1);
  //substring function : use this to extract last character 


  console.log(result.value)
     result.value=eval(result.value );

     /* function eval 
     syntax -> eval(string)

      string :  JavaScript expression, variable, statement, or sequence of statements
        The eval() function evaluates or executes an argument.


     */
}


if(event.target.value.includes("ac")){
    result.value = ""; 
    // to remove the inner text in  <input>->  {result }
}
});
