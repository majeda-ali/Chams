

let words=["word", "localization", "internationalization", "pneumonoultramicroscopicsilicovolcanoconiosis"]

for (let i=0 ; i<=words.length ;i++)
{
 if (words[i].length < 10){
      console.log( words[i]);
 }else{
  

console.log(` ${words[i].charAt(0)}${words[i].length-2}${words[i].charAt(words[i].length-1)}`);
 }
 
 
};
