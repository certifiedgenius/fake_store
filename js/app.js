fetch('https://fakestoreapi.com/products')
.then((data) => {
    return data.json();

}).then((completedata) => {
    let data = "";
    completedata.map((values) => {
        data += `<div id="${values.id}" class="card"> 
        <h1 class="title">${values.title}</h1>
        <img src="${values.image}" alt="img" class="images">
        <p class="price">${values.price} kr</p>
    </div>`
    });
    document.getElementById("cards").innerHTML = data;

}).catch((err) => {
    console.log(err);
})
