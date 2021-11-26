function closeCart() {
	const cart = document.querySelector('.productsOnCart');
	cart.classList.toggle('hide');
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.productsOnCart');
	cart.classList.toggle('hide');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);