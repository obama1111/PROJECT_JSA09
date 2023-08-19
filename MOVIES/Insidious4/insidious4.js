const themeBG = document.getElementById("theme-icon");
const NewIcon = "/IMGS/3.png"
const LastIcon = "/IMGS/2.png"
let themeOn = false;

function Darktheme() {
    const btn_color = document.getElementById("search_btn")
    btn_color.style.backgroundColor = "black"
    btn_color.style.color = "white"
    // btn_color.addEventListener("focusin", () => {
    //     btn_color.color = "white"
    // })
    const search_color = document.getElementById("search_bar")
    search_color.style.backgroundColor = "#212F3D"


    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "#212F3D";
    body.style.color = "white"
    const text_boxes = document.getElementsByClassName("nav-tabs");
    for (const textBox of text_boxes) {
        textBox.style.color = "#FFFFFF";
    }
    themeBG.style.backgroundColor = "yellow"
    themeBG.style.borderRadius = "2em"
    themeBG.src = NewIcon;
    themeBG.alt = "newicon"


}

function Lighttheme() {
    const btn_color = document.getElementById("search_btn")
    btn_color.style.backgroundColor = "#F0F0F0"
    btn_color.style.color = "black"
    // btn_color.addEventListener("focus-in", () => {
    //     btn_color.color = "black"
    // })



    const search_color = document.getElementById("search_bar")
    search_color.style.backgroundColor = "white"
    
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "white";
    body.style.color = "black"

    const text_boxes = document.getElementsByClassName("nav-tabs");
    for (const textBox of text_boxes) {
        textBox.style.color = "black";
    }
    themeBG.style.backgroundColor = "#212F3D"
    themeBG.style.borderRadius = "2em"
    themeBG.src = LastIcon;
    themeBG.alt = "lasticon"
}

themeBG.addEventListener("click", () => {
    if (themeOn === false) {
        Darktheme();
        themeOn = true;
    } else {
        Lighttheme();
        themeOn = false;
    }
})