const product = {
    crazy: {
        name: "Crazy",
        price: 31000,
        img: "images/burger_1.png",
        amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    light: {
        name: "Light",
        price: 26000,
        img: "images/burger_2.png",
        amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    cheeseBurger: {
        name: "CheeseBurger",
        price: 29000,
        img: "images/burger_3.png",
        amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
    dBurger: {
        name: "dBurger",
        price: 24000,
        img: "images/burger_4.png",
        amount: 0,
        get Summ() {
            return this.price * this.amount
        }
    },
}

const btns = document.querySelectorAll('.card__add')


btns.forEach(btn => {
    btn.addEventListener("click", function () {
        addBurger(this)
    })
})
function addBurger(btn) {
    const parent = btn.closest('.card'),
        span = parent.querySelector('.card__span'),
        parentId = parent.getAttribute("id")
    product[parentId].amount++
    span.innerHTML = product[parentId].amount
    span.classList.add("active")
}   


const pics = document.querySelectorAll('.card__img');
const header = document.querySelector('.header__img');

pics.forEach(pic => {
    pic.addEventListener("click", function(){
        addPic(this)
    })
})
function addPic(pic){
    span = pic.querySelector(".card__img")
    pic = pic.getAttribute("src")
    header.setAttribute("src", pic)
}