// search bar

const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search data.json and filter it
const searchProduct = async searchText => {
    const res = await fetch('../data/data.json');
    const data = await res.json();

    // Get matches to current text input
    let matches = data.filter(product => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return product.title.match(regex) || product.category.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class="card product-under input-container">
            <h1 class="title">${match.title}</h1>
            <img src="${match.image}" alt="img" class="images">
            <p class="description">${match.description}</p>
            <p class="category">${match.category}</p>
            <p class="price">$${match.price}</p>
            <button class="btnCart addToCart" data-product-id="${match.id}">Add To Cart</button>
            </div>
        `
        ).join('');

        matchList.innerHTML = html;
    }
};

search.addEventListener('input', () => searchProduct(search.value));