let productsInCart = [];
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.product-under');


const countTheSumPrice = function () {
	let sumPrice = 0;
	productsInCart.forEach(product => {
		sumPrice += product.price;
	});
	return sumPrice;
}

const updateShoppingCartHTML = function () {
	if (productsInCart.length > 0) {
		let result = productsInCart.map(product => {
			return `
				<!-- <li class="buyItem">
                    <img src="${product.image}">
                    <div>
                        <h5>${product.title}</h5>
                        <h6>${product.price}</h6>
                        <div>
                            <button data-id="${product.id}">-</button>
                            <span class="countOfProduct">${product.count}</span>
                            <button data-id="${product.id}">+</button>
                        </div>
                    </div>
                </li> -->
			
			`
		});
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumPrice.innerHTML = "$" + countTheSumPrice();
	} else {
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
		cartSumPrice.innerHTML = "";
	}
}



function updateProductsInCart(product) {
	for (let i = 0; i > productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return
		}
	}
	productsInCart.push(product);
}


products.forEach(product => {
	product.addEventListener('click', (e) => {
		if (e.target.classlist.contains('addToCart')) {
			const productID = e.target.dataset.productID;
			const productName = product.querySelector('.title').innerHTML;
			const productPrice = product.querySelector('.price').innerHTML;
			const productImage = product.querySelector('img').src;
			let productToCart = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice
			}
			updateProductsInCart(productToCart);
			updateShoppingCartHTML();
		}
	})
})