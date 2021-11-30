// Fetch Catogory from json instead of data-category="" data-price="" in html
(function () {

    let field = document.getElementById('.cards');
    let li = Array.from(field.children); // WHAT IS FIELD CHILDREN?


    fetch('/data/data.json')
        .then(response => response.json())
        .then(json => {
            
            // Price Filter
            function SortProduct() {
                let select = document.getElementById('select');
                let ar = [];
                
                for (let i of json) {
                    const last = i.lastElementChild;
                    const x = last.textContent.trim();
                    const y = Number(x.substring(1));
                    i.setAttribute("data-price", y); // Tabort denna?
                    ar.push(i);
                }

                this.run = () => {
                    addevent();
                }

                function addevent() {
                    select.onchange = sortingValue;
                }

                function sortingValue() {
                    if (this.value === 'Default') {
                        while (field.firstChild) {
                            field.removeChild(field.firstChild);
                        }
                        field.append(...ar);
                    }
                    if (this.value === 'LowToHigh') {
                        SortElem(field, li, true)
                    }
                    if (this.value === 'HighToLow') {
                        SortElem(field, li, false)
                    }
                }

                function SortElem(field, li, asc) {
                    let dm, sortli;
                    dm = asc ? 1 : -1;
                    sortli = li.sort((a, b) => {
                        const ax = a.getAttribute('data-price'); // Tabort denna?
                        const bx = b.getAttribute('data-price'); // Tabort denna?
                        return ax > bx ? (1 * dm) : (-1 * dm);
                    });
                    while (field.firstChild) {
                        field.removeChild(field.firstChild);
                    }
                    field.append(...sortli);
                }
            }

            new SortProduct().run();
        });


})();