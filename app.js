li1 = document.querySelector("#f1");
li2 = document.querySelector("#f2");
li3 = document.querySelector("#f3");
li4 = document.querySelector("#f4");
firstDiv = document.querySelector(".first-div");
secondDiv = document.querySelector(".second-div");
thirdDiv = document.querySelector(".third-div");
fourthDiv = document.querySelector(".fourth-div");

//navigation part selecting classes
leftRight = document.querySelector(".left-right");
burger = document.querySelector(".burger");
closeBtn = document.querySelector(".close-btn");





//about-us part selecting classes
expand = document.querySelectorAll(".expand");
shrink = document.querySelector(".shrink");
aboutUl = document.querySelectorAll(".about-in-ul");


//about-us part js handling
// expand.addEventListener("click", function() {

//     aboutUl.classList.add("show-ul");
//     expand.style.display = "none";
//     shrink.style.display = "flex";
// })

for (let j = 0; j < expand.length; j++) {

    expand[j].addEventListener("click", exp);
}

for (let j = 0; j < shrink.length; j++) {

    shrink[j].addEventListener("click", shk);
}


function exp() {
    for (let i = 0; i < aboutUl.length; i++) {
        aboutUl[i].classList.add("show-ul");
        break;
    }
    // for (let i = 0; i < shrink.length; i++) {
    //     shrink[i].style.display = "flex"

    // }
}

function shrink() {
    for (let i = 0; i < aboutUl.length; i++) {
        shrink[i].classList.remove("show-ul");
    }
}








shrink.addEventListener("click", function() {

    aboutUl.classList.remove("show-ul");
    shrink.style.display = "none";
    expand.style.display = "flex";
})














//navigation part


//Method 1: via toggling

// burger.addEventListener("click", function() {
//     leftRight.classList.toggle("show-right");
// })


//Method 2: alternate

if (burger) {
    burger.addEventListener("click", function() {
        leftRight.classList.add("show-right");
        burger.style.display = "none";
        closeBtn.style.display = "block";
    })

}

if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        leftRight.classList.remove("show-right");
        burger.style.display = "block";
        closeBtn.style.display = "none";
    })
}












//navigation-Part -- THE END

if ('li1') {
    li1.addEventListener("click", function() {
        firstDiv.style.display = "flex";
        secondDiv.style.display = "none";
        thirdDiv.style.display = "none";
        fourthDiv.style.display = "none";
    })

} else {
    firstDiv.style.display = "none";
}


if ('li2') {
    li2.addEventListener("click", function() {
        secondDiv.style.display = "flex";
        firstDiv.style.display = "none";
        thirdDiv.style.display = "none";
        fourthDiv.style.display = "none";
    })

} else {
    secondDiv.style.display = "none";
}

if ('li3') {
    li3.addEventListener("click", function() {

        thirdDiv.style.display = "flex";
        secondDiv.style.display = "none";
        firstDiv.style.display = "none";
        fourthDiv.style.display = "none";
    })

} else {
    thirdDiv.style.display = "none";
}
if ('li4') {
    li4.addEventListener("click", function() {

        fourthDiv.style.display = "flex";
        secondDiv.style.display = "none";
        thirdDiv.style.display = "none";
        firstDiv.style.display = "none";
    })


} else {
    fourthDiv.style.display = "none";
}