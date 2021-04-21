const showDisplay = document.getElementById("screen");
const ul = document.querySelector(".ul");
const li = ul.querySelectorAll("li.contact-item");
const aSection = document.querySelector('.a-letter');
const bSection = document.querySelector('.b-letter');
const cSection = document.querySelector('.c-letter');
const dSection = document.querySelector('.d-letter');
const eSection = document.querySelector('.e-letter');
const fSection = document.querySelector('.f-letter');
const gSection = document.querySelector('.g-letter');
const hSection = document.querySelector('.h-letter');
const iSection = document.querySelector('.i-letter');
const jSection = document.querySelector('.j-letter');
const kSection = document.querySelector('.k-letter');
const lSection = document.querySelector('.l-letter');
const mSection = document.querySelector('.m-letter');
const enter = document.querySelector('.enter');
const save = document.querySelector('.save-btn');
const enterSection = document.querySelector('.entry-section');
const addBtn = document.querySelector('.add-contacts');

let status = false;

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

addBtn.addEventListener("click", function () {
    if (status == false) {
        enterSection.style.display = 'flex';
        addBtn.innerHTML = "Cancel";
        status = true;
    } else if (status == true) {
        enterSection.style.display = 'none';
        addBtn.innerHTML = 'Add +';
        status = false;
    }
});
save.addEventListener("click", function () {
    addContact()
    enter.value = '';
    enterSection.style.display = 'none';
    addBtn.innerHTML = 'Add +';
});

function addContact() {

    let li = document.createElement('li');
    li.setAttribute("class", "contact-item");
    li.innerHTML = enter.value;


    if (li.innerHTML.toUpperCase().charAt(0) == "A") {
        aSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "B") {
        bSection.appendChild(li);

    }

    if (li.innerHTML.toUpperCase().charAt(0) == "C") {
        cSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "D") {
        dSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "E") {
        eSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "F") {
        fSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "G") {
        gSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "H") {
        hSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "I") {
        iSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "J") {
        jSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "K") {
        kSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "L") {
        lSection.appendChild(li);
    }

    if (li.innerHTML.toUpperCase().charAt(0) == "M") {
        mSection.appendChild(li);
    }


}