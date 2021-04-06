const showDisplay = document.getElementById("screen");
const ul = document.querySelector(".ul");
const li = ul.querySelectorAll("li.contact-item");
//console.log(li);

showDisplay.addEventListener("keyup", function () {

    let show = showDisplay.value.toUpperCase();
    //console.log(show)
    for (let i = 0; i < li.length; i++) {
        let x = li[i];
        //let y = x[0];
        if (x.innerHTML.toUpperCase().indexOf(show) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});