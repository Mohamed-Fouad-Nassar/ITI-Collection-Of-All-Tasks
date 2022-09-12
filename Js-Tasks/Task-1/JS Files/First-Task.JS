var Num1 = prompt("Enter The First Number");
var Num2 = prompt("Enter The Second Number");
if (Num1 == null || Num2 == null)
    alert("No Number Entered");
else if (Num1 == false || Num2 == false)
    alert("No Number Entered");
else {
    Num1 = parseInt(Num1);
    Num2 = parseInt(Num2);
    (Num1 > Num2) ? document.write("<h1 class='Result'>(" + Num1 + ") is Bigger than (" + Num2 + ")</h1>"): document.write("<h1 class='Result' >(" + Num2 + ") is Bigger than (" + Num1 + ")</h1>");
    (Num1 > Num2) ? console.log("(" + Num1 + ") is Bigger than (" + Num2 + ")"): console.log("(" + Num2 + ") is Bigger than (" + Num1 + ")");
}