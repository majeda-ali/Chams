let contentArray =[5,6,7,"hello", "javaScript"];
let numArry=[],stringArr=[], UnknownArr=[];
let numCounter=0,
    stringCounter=0,
    UNKCounter=0;

    function switcher (param1 ,param2) 
   {
        contentArray.forEach(element => {  
            if(typeof element === 'number')
            {
                numArry.push(element);
                numCounter++;
              }   else if (typeof element === 'string')  {
                stringArr.push(element);
                stringCounter++;  }    
            else { UnknownArr.push(element);   UNKCounter++; }
        });
 param1(param2 ,numCounter, stringCounter,UNKCounter);  } // end function switcher
//   function counterPrinter 
    function counterPrinter (Checker ,count1=0 ,count2=0 ,count3=0 ){
       
        console.log(count1 + "  ", count2 + "  ",count3 );
           Checker(count1 ,count2 ,count3 );
       }
//function counterChecker
    function counterChecker(count1 ,count2 ,count3 ) 
{
 if (count1 == numArry.length && count2 == stringArr.length && count3 == UnknownArr.length )
     {
      console.log("Yes");  
     }
        else
    {  
            console.log(" NO  ");
        }    
 }

    switcher (counterPrinter,counterChecker);
