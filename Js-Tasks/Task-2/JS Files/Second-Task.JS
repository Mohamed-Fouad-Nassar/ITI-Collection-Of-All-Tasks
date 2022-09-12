function Greeting() {
    var Fir_Name = prompt("Enter First Name : ");
    var Last_Name = prompt("Enter Last Name : ");
    if (Fir_Name == null || Last_Name == null)
        alert("No Data Entered");
    else if (Fir_Name == false || Last_Name == false)
        alert("No Data Entered");
    else {
        var greeting = "Welcome, " + Fir_Name + " " + Last_Name;
        document.write("<h1 class='sty'>" + greeting.toUpperCase() + "</h1>");
        console.log(greeting.toUpperCase());
    }
}
Greeting();

function Ran_Number() {
    var Ran_f_Num = Math.random() * 10;
    var Ran_I_Num = Math.round(Ran_f_Num);
    console.log(Ran_I_Num);
    var Result = "None";
    for (var i = 0; i < 3; i++) {
        var Num = parseInt(prompt("Enter Number: "));
        if (Num === Ran_I_Num) {
            Result = "Congratulation";
            break;
        } else {
            alert("NO!")
        }
    }
    if (Result === "Congratulation") {
        console.log("Congratulation");
        document.write("<h1 class='sty'> Congratulation <br> Number was : " + Ran_I_Num + " </h1>");
    } else {
        console.log("Hard Luck ! \nNumber is : " + Ran_I_Num);
        document.write("<h1 class='sty'> Hard Luck ! <br> Number is : " + Ran_I_Num + "</h1>");
    }
}
Ran_Number();