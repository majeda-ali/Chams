
let LuckNum ;
LuckNum= prompt("Enter number lucky ");
LuckNum=Math.abs(LuckNum);

LuckNum.toFixed(0);  

counter=0
for(const number in LuckNum) {
if (number ==4 || number ==7)
{
    counter=counter+1;
}
}

a_counter=0;
for(const number in toString(counter)){
    if (number == 4 || number ==7)
{
    a_counter=a_counter+1;
}

if(a_counter ==  counter.length ){
a="Yes";
}
else{
       a="No";
}
}

console.log(a);





