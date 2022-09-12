var cus_name = prompt("Enter Name : ");
var Num = prompt("Enter Number : ");
if (Num == null || cus_name == null)
    alert("No Data Entered");
else if (Num == false || cus_name == false)
    alert("No Data Entered");
else {
    Num = parseInt(Num);
    for (var i = 1; i <= Num; i++) {
        document.write("<h1 class='Result'>Hello " + cus_name + " </h1>");
        console.log("Hello " + cus_name);
    }
}