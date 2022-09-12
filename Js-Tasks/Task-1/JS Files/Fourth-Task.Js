var Num = prompt("Enter Number : ");
if (Num == null)
    alert("No Number Entered");
else if (Num == false)
    alert("No Number Entered");
else {
    Num = parseInt(Num);
    if (Num % 2 == 0) {
        document.write("<h1 class='Result'>The Enter Number " + Num + " is Even </h1>");
        console.log("The Enter Number " + Num + " is Even");
    } else {
        document.write("<h1 class='Result'>The Enter Number " + Num + " is Odd </h1>");
        console.log("The Enter Number " + Num + " is Odd");
    }
}