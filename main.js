let img1 = document.getElementById('product1');
let img2 = document.getElementById('product2');
let img3 = document.getElementById('product3');
let img4 = document.getElementById('product4');

let color = document.getElementsByClassName('colorChoices')
for (let i = 0; i < color.length; i++) {
  	color[i].addEventListener("click", function() {

    let selectedcol = document.querySelector(".colorChoices-selected");

    if (selectedcol && selectedcol !== this) {
      selectedcol.classList.remove("colorChoices-selected");
    }

    this.classList.toggle("colorChoices-selected");

  }, false);
}

let fill = document.getElementsByClassName('fillChoices')
for (let i = 0; i < fill.length; i++) {
  fill[i].addEventListener("click", function() {

    let selectedfill = document.querySelector(".fillChoices-selected");

    if (selectedfill && selectedfill !== this) {
      selectedfill.classList.remove("fillChoices-selected");
    }

    this.classList.toggle("fillChoices-selected");

  }, false);
}


function Product(name, color, fill, price, inCart) {
	this.name = name;
	this.color = color;
	this.fill = fill;
	this.price = price;
	this.inCart = inCart;
}

let carts = document.querySelectorAll('.addCart');
let products = [new Product()];

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		cartNumbers();
	})
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if(productNumbers) {
		document.querySelector('.navbarText span').textContent = productNumbers;
	}
}

function cartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.navbarText span').textContent = productNumbers + 1;
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.navbarText span').textContent = 1;
	}
}

onLoadCartNumbers();
