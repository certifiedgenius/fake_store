



// Sort By Price
function sortByPriceFilter() {
    let select = document.getElementById("select").value;


    if (select === "Lowest-Price") {
        completeData.slice().sort((a, b) => a.price - b.price);
    } 
    
    
    else if (select === "Highest-Price") {
        completeData.slice().sort((a, b) => a.price - b.price);
    }

    
    else (select === "Default")
}

