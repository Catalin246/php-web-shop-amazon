const leftBtn = document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");


rightBtn.addEventListener("click",
    function (event) {
        const content = document.querySelector(".product-slide");
        content.scrollLeft += 1100;
        event.preventDefault();

    })
leftBtn.addEventListener("click",
    function (event) {
        const content = document.querySelector(".product-slide");
        content.scrollLeft -= 1100;
        event.preventDefault();

    })
const leftBtn1 = document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");


rightBtn1.addEventListener("click",
    function (event) {
        const content = document.querySelector(".product-slide-1");
        content.scrollLeft += 1000;
        event.preventDefault();

    })
leftBtn1.addEventListener("click",
    function (event) {
        const content = document.querySelector(".product-slide-1");
        content.scrollLeft -= 1100;
        event.preventDefault();

    })
const leftBtn2 = document.querySelector(".btn-1c");
const rightBtn2 = document.querySelector(".btn-1d");


rightBtn2.addEventListener("click",
    function (event) {
        const content = document.querySelector(".product-slide-2");
        content.scrollLeft += 1100;
        event.preventDefault();

    })
leftBtn2.addEventListener("click",
    function (event) {
        const content = document.querySelector(".product-slide-2");
        content.scrollLeft -= 1100;
        event.preventDefault();

    })

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const solid = document.querySelector(".fa-solid");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    solid.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    solid.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})
