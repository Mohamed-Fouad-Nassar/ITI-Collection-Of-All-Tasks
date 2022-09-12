document.getElementsByClassName("Back")[0].addEventListener("click", BackWord);

function BackWord() {
    window.history.back();
}

function RandomColor() {
    var Ran = Math.random() * 1000000;
    Ran = Math.round(Ran);
    var Ran_color = "#" + Ran;
    return Ran_color;
}

function CreatNewDiv() {
    var New_Div = document.createElement("div");
    New_Div.classList.add("Shape");
    New_Div.style.backgroundColor = RandomColor();
    var i = 0;
    document.getElementsByClassName("Left")[0].insertBefore(New_Div, document.getElementsByClassName("Shape")[i]);
    i++;
}

document.getElementsByClassName("Insert")[0].addEventListener("click", CreatNewDiv);