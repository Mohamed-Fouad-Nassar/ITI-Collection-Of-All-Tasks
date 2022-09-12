var Num1 = prompt("Enter The First Number");
var Num2 = prompt("Enter The Second Number");
var Result = 0;
if (Num1 == null || Num2 == null)
    alert("No Number Entered");
else if (Num1 == false || Num2 == false)
    alert("No Number Entered");
else {
    if (Num1 === Num2)
        Result = Num1 * 3;
    else {
        Num1 = parseInt(Num1);
        Num2 = parseInt(Num2);
        Result = Num1 + Num2;
    }
    console.log("The Result is : " + Result);
    document.write("<h1 class='Result'>The Result is : " + Result + "</h1>")
}