let img1 = document.getElementById('product1');
let img2 = document.getElementById('product2');
let img3 = document.getElementById('product3');
let img4 = document.getElementById('product4');

let color = document.getElementsByClassName('colorChoices');
let colorselect = "none";
let fillselect = "none";

for (let i = 0; i < color.length; i++) {
  	color[i].addEventListener("click", function() {

    let selectedcol = document.querySelector(".colorChoices-selected");

    if (selectedcol && selectedcol !== this) {
      selectedcol.classList.remove("colorChoices-selected");
    }

    this.classList.toggle("colorChoices-selected");

    //Toggle Afternoon Special Selection
    if (color[i].id === "product1selector" && !selectedcol) {
  		img2.style.display = "none";
  		img3.style.display = "none";
  		img4.style.display = "none";
  		colorselect = "Afternoon Special";
  	} else if (color[i].id === "product1selector" && selectedcol) {
  		img2.style.display = "block";
  		img3.style.display = "block";
  		img4.style.display = "block";
  		colorselect = "none";
  	}

  	//Toggle Morning Haze Selection
  	 if (color[i].id === "product2selector" && !selectedcol) {
  		img1.style.display = "none";
  		img3.style.display = "none";
  		img4.style.display = "none";
  		colorselect = "Morning Haze";
  	} else if (color[i].id === "product2selector" && selectedcol) {
  		img1.style.display = "block";
  		img3.style.display = "block";
  		img4.style.display = "block";
  		colorselect = "none";
  	}

  	//Toggle Cozy Denim Selection
  	 if (color[i].id === "product3selector" && !selectedcol) {
  		img1.style.display = "none";
  		img2.style.display = "none";
  		img4.style.display = "none";
  		colorselect = "Cozy Denim";
  	} else if (color[i].id === "product3selector" && selectedcol) {
  		img1.style.display = "block";
  		img2.style.display = "block";
  		img4.style.display = "block";
  		colorselect = "none";
  	}

  	//Toggle Rainy Day Selection
  	 if (color[i].id === "product4selector" && !selectedcol) {
  		img1.style.display = "none";
  		img2.style.display = "none";
  		img3.style.display = "none";
  		colorselect = "Rainy Day";
  	} else if (color[i].id === "product4selector" && selectedcol) {
  		img1.style.display = "block";
  		img2.style.display = "block";
  		img3.style.display = "block";
  		colorselect = "none";
  	}

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

    if (fill[i].id === "duck" && !selectedfill) {
    	fillselect = "Duck Down";
    } else if (fill[i].id === "duck" && selectedfill) {
    	fillselect = "none";
    }

    if (fill[i].id === "foam" && !selectedfill) {
    	fillselect = "Memory Foam";
    } else if (fill[i].id === "foam" && selectedfill) {
    	fillselect = "none";
    }

    if (fill[i].id === "polyblend" && !selectedfill) {
    	fillselect = "Hypoallergenic Poly-Blend";
    } else if (fill[i].id === "polyblend" && selectedfill) {
    	fillselect = "none";
    }

  }, false);
}


let carts = document.querySelectorAll('.addCart');

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
		if (colorselect == "none" || fillselect == "none") {
			alert("Choose a color and a fill before adding to cart.");
		} else {
			cartNumber();
			if (productArray == null) var productArray = [];
			var product = {
				"name": "Round Pillow",
				"color": colorselect,
				"fill": fillselect,
				"price": "$160",
				"incart": 1,
			}
			localStorage.setItem("product", JSON.stringify(product));
			productArray.push(product);
			localStorage.setItem("productArray", JSON.stringify(productArray));
			console.log(productArray);
		}
	})
}

let productsInCart = JSON.parse(localStorage.getItem("productArray"));

if (productsInCart == null) {
	let emptydiv = document.createElement("div");
	emptydiv.className = "cartEmpty";
	emptydiv.innerHTML = "Your shopping cart is empty";
	document.getElementById("cartProducts").appendChild(emptydiv);
} else if (document.getElementById("cartProducts") != null){
	for (let i = 0; i < productsInCart.length; i++) {
		console.log(productsInCart[i]);

		let namediv = document.createElement("div");
		namediv.innerHTML = productsInCart[i]["name"];

		let colordiv = document.createElement("div");
		colordiv.innerHTML = productsInCart[i]["color"];

		let image = document.createElement("img");
		image.src = "assets/product1.jpg";
		image.setAttribute("id", "cartImg");

		// div.appendChild(innerdiv);
		document.getElementById("cartProducts").appendChild(image);
		document.getElementById("cartProducts").appendChild(namediv);
		document.getElementById("cartProducts").appendChild(colordiv);
	}
}

function onLoadCartNumber() {
	let productNumber = localStorage.getItem('cartNumber');
	productNumber = parseInt(productNumber);

	if(productNumber) {
		document.querySelector('.navbarText span').textContent = productNumber;
	}
}

function cartNumber() {
	let productNumber = localStorage.getItem('cartNumber');
	productNumber = parseInt(productNumber);

	if (productNumber) {
		localStorage.setItem('cartNumber', productNumber + 1);
		document.querySelector('.navbarText span').textContent = productNumber + 1;
	} else {
		localStorage.setItem('cartNumber', 1);
		document.querySelector('.navbarText span').textContent = 1;
	}
}

onLoadCartNumber();