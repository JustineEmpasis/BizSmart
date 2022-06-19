// HEADER
let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabHeader.getElementsByTagName("div");

for (let i = 0; i < tabsPane.length; i++)
{
    tabsPane[i].addEventListener("click", function() {

        // Para ni sa indicator
        tabIndicator.style.left = `calc(calc(100% / 3) * ${i} )`;

        // Para ni sa header
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");

        // Para ni sa body
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("section")[i].classList.add("active");
    });
}

// FILTER DATE
let filterSelection = document.getElementsByClassName("filter")[0];
let filterPane = filterSelection.getElementsByTagName("div");

for (let i = 0; i < filterPane.length; i++)
{
    filterPane[i].addEventListener("click", function() {
        filterSelection.getElementsByClassName("active-date")[0].classList.remove("active-date");
        filterPane[i].classList.add("active-date");
    });
}


// FILTER PRODUCTS
let filterProduct = document.getElementsByClassName("products")[0];
let filterProductPane = filterProduct.getElementsByTagName("li");

for (let i = 0; i < filterProductPane.length; i++)
{
    filterProductPane[i].addEventListener("click", function() {
        filterProduct.getElementsByClassName("active-product")[0].classList.remove("active-product");
        filterProductPane[i].classList.add("active-product");
    });
}