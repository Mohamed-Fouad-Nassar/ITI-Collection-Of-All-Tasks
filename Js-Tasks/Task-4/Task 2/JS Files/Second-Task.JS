// BAck Botton
document.getElementsByClassName("Back")[0].addEventListener("click", BackWord);

function BackWord() {
    window.history.back();
}



// Image Magnification 

for (var i = 0; i < document.images.length; i++) {
    document.images[i].onclick = function() {
        document.getElementsByClassName("Mag-label")[0].innerText = this.title;
        document.getElementsByClassName("Mag-image")[0].src = this.src;
    }
}

// function ReplaceImageOne() {
//     document.getElementsByTagName("label")[0].innerText = document.images[0].title;
//     document.images[3].src = document.images[0].src;
// }

// function ReplaceImageTwo() {
//     document.getElementsByTagName("label")[0].innerText = document.images[1].title;
//     document.images[3].src = document.images[1].src;
// }

// function ReplaceImageThree() {
//     document.getElementsByTagName("label")[0].innerText = document.images[2].title;
//     document.images[3].src = document.images[2].src;
// }

// document.images[0].addEventListener("click", ReplaceImageOne);
// document.images[1].addEventListener("click", ReplaceImageTwo);
// document.images[2].addEventListener("click", ReplaceImageThree);


// Open New Window

document.getElementsByClassName("Button")[0].addEventListener("click", OpenNewPage);

var New_Window;

function OpenNewPage() {
    New_Window = window.open('', '', 'width=500px, height=500px');
    var Src = document.images[3].src;
    New_Window.document.write("<img src=" + Src + " width='480px' />")
}

// Close The Other Windows

document.getElementsByClassName("Button")[1].addEventListener("click", CloseNewPage);

function CloseNewPage() {
    New_Window.close();
}