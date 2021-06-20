
let n , h ,sum=0;
let a=[7,6,8,9,10,5];

n= prompt("enter n ");
h= prompt("enter h ");
for (let i=0; i< n ;i++)
{
    if (a[i] > h)
    {
        sum+=2;
    }else {
        sum+=1;
    }
}

console.log(sum);
