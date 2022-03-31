/*var num1;
num1 = window.prompt("input the first integer");

function gre(num1){
    switch(num1){
case "8":
    return "hello " ;
case "7" :
    return "sab3a";  
    default :
    return "elli yji"
}  

}
console.log(gre(num1))*/
var num1,num2;
num1 = window.prompt("Input the first integer");
num2 = window.prompt("Input the second integer");
function Big(num1,num2){
    if (parseInt(num1,10) < parseInt(num2,10)){console.log(num1 + "<" + num2);}
    else if (parseInt(num1,10) > parseInt(num2,10)){console.log(num1 + ">" + num2);}
    else (console.log(num1 + "=" +num2))
}
Big(num1,num2)
