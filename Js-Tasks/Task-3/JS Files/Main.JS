let input_name = document.querySelector("[name='User Name']");
let input_pass = document.querySelector("[name= 'Password']");
let input_age = document.querySelector("[name='Age']");
let input_mail = document.querySelector("[name='E-mail']");
let input_grn = document.querySelector("[name='Gender']");
let input_Inters = document.querySelectorAll("[name='Interests']");
let input_city = document.querySelector("[name='City']");

function User_vali() {
    // console.log(input_name);
    // console.log(input_name.value);
    //console.log(input_name.value.length);
    if (input_name.value.length <= 2)
        document.getElementsByClassName("hidden")[0].innerText = "Enter User Name!";
    else
        document.getElementsByClassName("hidden")[0].innerText = "";
}

function Pass_Vali() {
    // console.log(input_pass);
    // console.log(input_pass.value);
    // console.log(input_pass.value.length);
    if (input_pass.value.length <= 7)
        document.getElementsByClassName("hidden")[1].innerText = "Enter User Password!";
    else
        document.getElementsByClassName("hidden")[1].innerText = "";
}


function Age_Vali() {
    // console.log(input_age);
    // console.log(input_age.value);
    // console.log(input_age.value.length);
    if (input_age.value <= 15 || input_age.value >= 60)
        document.getElementsByClassName("hidden")[2].innerText = "Invalid age Entered!";
    else
        document.getElementsByClassName("hidden")[2].innerText = "";
}

function Email_Vali() {

    // console.log(input_mail);
    // console.log(input_mail.value);
    // console.log(input_mail.value.length);
    let y = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    // console.log(input_mail.value.match(y));
    if (input_mail.value.match(y) === null || input_mail.value.length === 0)
        document.getElementsByClassName("hidden")[3].innerText = "Invalid E-mail Entered!";
    else
        document.getElementsByClassName("hidden")[3].innerText = "";
}

function Gen_Vali() {
    // console.log(input_grn);
    // console.log(input_grn.value);
    // console.log(input_grn.value.length);
    if (input_grn.value === null)
        document.getElementsByClassName("hidden")[4].innerText = "No Gender Choiced!";
    else
        document.getElementsByClassName("hidden")[4].innerText = "";
}

function Inters_Vali() {
    var count = 0;
    // console.log(input_Inters);
    // console.log(input_Inters.value);
    // console.log(input_Inters.value.length);
    for (var i = 0; i <= 2; i++) {
        if (input_Inters[i].value === undefined)
            count++;
        else
            continue;
    }
    if (count === 3)
        document.getElementsByClassName("hidden")[5].innerText = "No Interests Choiced!";
    else
        document.getElementsByClassName("hidden")[5].innerText = "";
}

function City_vali() {
    // console.log(input_city);
    // console.log(input_city.value);
    // console.log(input_city.value.length);
    if (input_city.value === null)
        document.getElementsByClassName("hidden")[6].innerText = "No Interests Choiced!";
    else
        document.getElementsByClassName("hidden")[6].innerText = "";
}

document.getElementsByClassName("Btn-one")[0].onclick = function() {
    User_vali();
    Pass_Vali();
    Age_Vali();
    Email_Vali();
    Gen_Vali();
    Inters_Vali();
    City_vali();
}

document.getElementsByClassName("Btn-two")[0].onclick = function() {
    input_name.value = null;
    input_pass.value = null;
    input_age.value = null;
    input_mail.value = null;
    input_grn.value = null;
    input_Inters.value = null;
    input_city.value = null;
    for (var i = 0; i <= 6; i++)
        document.getElementsByClassName("hidden")[i].innerText = "";
}