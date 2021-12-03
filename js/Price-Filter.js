let allProducts = []; 
let completeData = [];


// Fetch Catogory from json 
fetch("/data/data.json")
    
    .then((data) => {
        return data.json();

    })
    .catch((error) => console.log(error));





// Sort By Price
function sortByPriceFilter() {
    let select = document.getElementById("select").value;


    if (select === "Lowest-Price") {
        let sorted = allProducts.slice().sort((a, b) => a.price - b.price);
    } 
    
    
    else if (select === "Highest-Price") {
        let sorted = allProducts.slice().sort((a, b) => a.price - b.price);
    }

    
    else (select === "Default")
}


completeData.sort();