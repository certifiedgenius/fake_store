// Cart function import from store.js
// Thank you for your purchase
import {
    ready
} from "./store.js";






fetch('/data/data.json')
    .then((data) => {
        return data.json();


    }).then((completedata) => {
        let data = "";
        completedata.map((values) => {
            data += `
            <div class="shop-item card">
            <h1 class="title">${values.title}</h1>
            <img src="${values.image}" alt="img" class="images">
            <p class="description">${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">$${values.price}</p>
            <button class="btn btn-primary shop-item-button" type="button" data-id="${values.id}">ADD TO CART</button>
        </div>`;

        



            // Getting the table element
            var cards = document.getElementsByClassName("card");

            // Looping over tables
            for (var i = 0; i < cards.length; i++) {

                // Get the ith table
                var card = cards[i];

                // Set the id dynamically
                card.setAttribute("id", i + 1);

                // The line below will also give id
                // dynamically to the tables
                //table.id = i+1;
            }


        });
        document.getElementById("cards").innerHTML = data;



        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const images = document.querySelectorAll('img');
        images.forEach(image => {
            image.addEventListener('click', e => {
                lightbox.classList.add('active');
                const newDiv = document.createElement("img");
                const div = document.createElement("div");



                newDiv.src = image.src;


                const c = document.getElementsByClassName("card");


                c[0].children[2].style.display = "block";
                c[1].children[2].style.display = "block";
                c[2].children[2].style.display = "block";
                c[3].children[2].style.display = "block";
                c[4].children[2].style.display = "block";
                c[5].children[2].style.display = "block";
                c[6].children[2].style.display = "block";
                c[7].children[2].style.display = "block";
                c[8].children[2].style.display = "block";
                c[9].children[2].style.display = "block";
                c[10].children[2].style.display = "block";
                c[11].children[2].style.display = "block";
                c[12].children[2].style.display = "block";
                c[13].children[2].style.display = "block";
                c[14].children[2].style.display = "block";
                c[15].children[2].style.display = "block";
                c[16].children[2].style.display = "block";
                c[17].children[2].style.display = "block";
                c[18].children[2].style.display = "block";
                c[19].children[2].style.display = "block";

                if (newDiv.src == c[0].childNodes[3].currentSrc) {
                    div.innerHTML = c[0].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";

                } else if (newDiv.src == c[1].childNodes[3].currentSrc) {
                    div.innerHTML = c[1].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[2].childNodes[3].currentSrc) {
                    div.innerHTML = c[2].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[3].childNodes[3].currentSrc) {
                    div.innerHTML = c[3].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[4].childNodes[3].currentSrc) {
                    div.innerHTML = c[4].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[5].childNodes[3].currentSrc) {
                    div.innerHTML = c[5].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[6].childNodes[3].currentSrc) {
                    div.innerHTML = c[6].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[7].childNodes[3].currentSrc) {
                    div.innerHTML = c[7].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[8].childNodes[3].currentSrc) {
                    div.innerHTML = c[8].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[9].childNodes[3].currentSrc) {
                    div.innerHTML = c[9].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[10].childNodes[3].currentSrc) {
                    div.innerHTML = c[10].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[11].childNodes[3].currentSrc) {
                    div.innerHTML = c[11].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[12].childNodes[3].currentSrc) {
                    div.innerHTML = c[12].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[13].childNodes[3].currentSrc) {
                    div.innerHTML = c[13].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[14].childNodes[3].currentSrc) {
                    div.innerHTML = c[14].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[15].childNodes[3].currentSrc) {
                    div.innerHTML = c[15].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[16].childNodes[3].currentSrc) {
                    div.innerHTML = c[16].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[17].childNodes[3].currentSrc) {
                    div.innerHTML = c[17].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[18].childNodes[3].currentSrc) {
                    div.innerHTML = c[18].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                } else if (newDiv.src == c[19].childNodes[3].currentSrc) {
                    div.innerHTML = c[19].outerHTML;
                    c[0].children[2].style.display = "none";
                    c[1].children[2].style.display = "none";
                    c[2].children[2].style.display = "none";
                    c[3].children[2].style.display = "none";
                    c[4].children[2].style.display = "none";
                    c[5].children[2].style.display = "none";
                    c[6].children[2].style.display = "none";
                    c[7].children[2].style.display = "none";
                    c[8].children[2].style.display = "none";
                    c[9].children[2].style.display = "none";
                    c[10].children[2].style.display = "none";
                    c[11].children[2].style.display = "none";
                    c[12].children[2].style.display = "none";
                    c[13].children[2].style.display = "none";
                    c[14].children[2].style.display = "none";
                    c[15].children[2].style.display = "none";
                    c[16].children[2].style.display = "none";
                    c[17].children[2].style.display = "none";
                    c[18].children[2].style.display = "none";
                    c[19].children[2].style.display = "none";
                }




                document.body.appendChild(div);


                while (lightbox.firstChild) {
                    lightbox.removeChild(lightbox.firstChild);
                }
                lightbox.appendChild(div);
            });
        });

        lightbox.addEventListener('click', e => {
            if (e.target !== e.currentTarget) return;
            lightbox.classList.remove('active');

        });

        // Sort By Price
        document.getElementById("op1").addEventListener("click", function (e) {
            let lowprice = completedata.sort(function (a, b) {
                return a.price - b.price
            });
            document.querySelector(".shop-items").style.display = "none";
            document.querySelector(".shop-items-high").style.display = "none";
            document.querySelector(".shop-items-low").style.display = "flex";
            lowprice.forEach(values => {

                document.querySelector(".shop-items-low").innerHTML +=
                    `<div class="shop-item card">
            <h1 class="title">${values.title}</h1>
            <img src="${values.image}" alt="img" class="images">
            <p class="description">${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">$${values.price}</p>
            <button class="btn btn-primary shop-item-button" type="button" data-id="${values.id}">ADD TO CART</button>
        </div>`
            });



        });

        // Sort By Price
        document.getElementById("op2").addEventListener("click", function (e) {
            let highprice = completedata.sort(function (a, b) {
                return b.price - a.price
            });
            document.querySelector(".shop-items").style.display = "none";
            document.querySelector(".shop-items-low").style.display = "none";
            document.querySelector(".shop-items-high").style.display = "flex";
            highprice.forEach(values => {

                document.querySelector(".shop-items-high").innerHTML +=
                    `<div class="shop-item card">
                 <h1 class="title">${values.title}</h1>
                 <img src="${values.image}" alt="img" class="images">
                 <p class="description">${values.description}</p>
                 <p class="category">${values.category}</p>
                 <p class="price">$${values.price}</p>
                 <button class="btn btn-primary shop-item-button" type="button" data-id="${values.id}">ADD TO CART</button>
             </div>`
            });

        });

        document.getElementById("op0").addEventListener("click", function (e) {
            document.querySelector(".shop-items").style.display = "flex";
            document.querySelector(".shop-items-low").style.display = "none";
            document.querySelector(".shop-items-high").style.display = "none";
        });

        ready();
    }).catch((err) => {
        console.log(err);

    });