

let hideText_btn = document.getElementById("hideText_btn");
let hideText = document.getElementById("hideText");





hideText_btn.addEventListener("click", toggleText);

export default function toggleText(){
    hideText.classList.toggle("show");
}