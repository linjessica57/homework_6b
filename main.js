let img1 = document.getElementById('product1');
let img2 = document.getElementById('product2');
let img3 = document.getElementById('product3');
let img4 = document.getElementById('product4');

let color = document.getElementsByClassName('colorChoices');
let colorselect = "none";
let fillselect = "none";
let imgselect = "none";

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
  		imgselect = "assets/product1.jpg";
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
  		imgselect = "assets/product2.jpg";
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
  		imgselect = "assets/product3.jpg";
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
  		imgselect = "assets/product4.jpg";
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
				"img": imgselect,
				"price": "$160",
				"qty": 1,
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

		//Add name of cart item
		let namediv = document.createElement("div");
		namediv.innerHTML = productsInCart[i]["name"];
		namediv.setAttribute("id", "itemName");

		//Add selections of cart item
		let selectdiv = document.createElement("div");
		selectdiv.innerHTML = productsInCart[i]["color"] + "<br>" + productsInCart[i]["fill"];
		selectdiv.setAttribute("id", "itemSelection");

		//Add image of cart item
		let image = document.createElement("img");
		console.log(productsInCart[i]["img"]);
		image.src = productsInCart[i]["img"];
		image.setAttribute("id", "cartImg");

		//Add qty of item 
		let qtydiv = document.createElement("div");
		qtydiv.innerHTML = productsInCart[i]["qty"];
		qtydiv.setAttribute("id", "itemQty");

		//Add price of item
		let pricediv = document.createElement("div");
		pricediv.innerHTML = productsInCart[i]["price"];
		pricediv.setAttribute("id", "itemPrice");

		//Add a remove button
		let removeimg = document.createElement("img");
		removeimg.src = "assets/remove.png";
		removeimg.setAttribute("id", "remove");

		document.getElementById("cartProducts").appendChild(image);
		document.getElementById("cartProducts").appendChild(namediv);
		document.getElementById("cartProducts").appendChild(selectdiv);
		document.getElementById("cartProducts").appendChild(qtydiv);
		document.getElementById("cartProducts").appendChild(pricediv);
		document.getElementById("cartProducts").appendChild(removeimg);
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

function removeCart() {
	let removes = document.querySelector('#remove');

	removes.addEventListener('click', () => {
		console.log("entered loop");
		localStorage.removeItem("productArray");
		localStorage.removeItem("cartNumber");
		window.location.reload(true);
	})
}

removeCart();
