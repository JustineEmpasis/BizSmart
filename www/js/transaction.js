// CATEGORIES VARIABLES
let category = document.getElementsByClassName("category")[0];
let categoryPane = category.getElementsByTagName("div");

// CREATE TRANSACTION VARIABLES
let createTransSec = document.getElementsByClassName("create-transaction")[0];
let createTransBtn = createTransSec.getElementsByTagName("button")[0];

// VALUE
orders = [];

for (let i = 0; i < categoryPane.length; i++)
{
    console.log(categoryPane[i]);
    let categoryPaneList = categoryPane[i].getElementsByTagName("li");
    for (let o = 0; o < categoryPaneList.length; o++)
    {
        if (categoryPaneList[o].getElementsByClassName(""))
        console.log(categoryPaneList[o])
        categoryPaneList[o].addEventListener("click", function() {
            orders.push(categoryPaneList[o].innerHTML)

            createTransBtn.innerHTML = `Create Transaction (${orders.length})`;

            console.log(orders)
        });
    }
}


