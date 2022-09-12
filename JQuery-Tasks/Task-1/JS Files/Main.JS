// var New_Image;

function Mouse_In() {
    var New_Image = document.createElement("img");
    New_Image.src = this.src;
    New_Image.classList.add("Mag-Image");
    $("body").append(New_Image);
    $(this).mousemove(function(e) {
        $(New_Image).css({
            "position": "absolute",
            "top": e.pageY + 15,
            "left": e.pageX + 15
        });
    });
}

function Mouse_Out() {
    $("img:eq(6)").remove();
}

$("img").hover(Mouse_In, Mouse_Out);