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
            <div class="card card-body mb-1">
            <h4>${match.title}</h4>
            <img src="${match.image}">
            <p class="text-primary">${match.description}</p>
            <p class="text-primary">${match.category}</p>
            <small>${match.price} SEK</small>
            </div>
        `
        ).join('');

        matchList.innerHTML = html;
    }
};

search.addEventListener('input', () => searchProduct(search.value));