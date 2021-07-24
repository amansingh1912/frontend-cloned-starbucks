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
shrink = document.querySelectorAll(".shrink");
aboutUl = document.querySelectorAll(".about-in-ul");


//About us part js handling

// expand[0].addEventListener("click", function() {

//     aboutUl[0].classList.add("show-ul");
//     expand[0].style.display = "none";
//     shrink[0].style.display = "flex";
// })
// shrink[0].addEventListener("click", function() {

//     aboutUl[0].classList.remove("show-ul");
//     shrink[0].style.display = "none";
//     expand[0].style.display = "flex";
// })
// expand[1].addEventListener("click", function() {

//     aboutUl[1].classList.add("show-ul");
//     expand[1].style.display = "none";
//     shrink[1].style.display = "flex";
// })

// shrink[1].addEventListener("click", function() {

//     aboutUl[1].classList.remove("show-ul");
//     shrink[1].style.display = "none";
//     expand[1].style.display = "flex";
// })
// expand[2].addEventListener("click", function() {

//     aboutUl[2].classList.add("show-ul");
//     expand[2].style.display = "none";
//     shrink[2].style.display = "flex";
// })

// shrink[2].addEventListener("click", function() {

//     aboutUl[2].classList.remove("show-ul");
//     shrink[2].style.display = "none";
//     expand[2].style.display = "flex";
// })

// expand[3].addEventListener("click", function() {

//     aboutUl[3].classList.add("show-ul");
//     expand[3].style.display = "none";
//     shrink[3].style.display = "flex";
// })

// shrink[3].addEventListener("click", function() {

//     aboutUl[3].classList.remove("show-ul");
//     shrink[3].style.display = "none";
//     expand[3].style.display = "flex";
// })
// expand[4].addEventListener("click", function() {

//     aboutUl[4].classList.add("show-ul");
//     expand[4].style.display = "none";
//     shrink[4].style.display = "flex";
// })

// shrink[4].addEventListener("click", function() {

//     aboutUl[4].classList.remove("show-ul");
//     shrink[4].style.display = "none";
//     expand[4].style.display = "flex";
// })

//Optimized code: alternate way 

expand = document.querySelectorAll(".expand");
shrink = document.querySelectorAll(".shrink");
aboutUl = document.querySelectorAll(".about-in-ul");

for (let i = 0; i < 5; i++) {
    expand[i].addEventListener("click", function() {
        aboutUl[i].classList.add("show-ul");
        expand[i].style.display = "none";
        shrink[i].style.display = "flex";
    });
}
for (let i = 0; i < 5; i++) {
    shrink[i].addEventListener("click", function() {
        aboutUl[i].classList.remove("show-ul");
        shrink[i].style.display = "flex";
        expand[i].style.display = "none";
    });
}









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

        //important one but "closebtn" gets removed in the mobile version
        // document.getElementsByTagName("body")[0].style.position = "fixed";
    })

}

if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        leftRight.classList.remove("show-right");
        burger.style.display = "block";
        closeBtn.style.display = "none";
        //important one:
        // document.getElementsByTagName("body")[0].style.position = "inherit";
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
