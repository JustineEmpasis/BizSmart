let paymentMethod = document.getElementsByClassName("payment-bar")[0];
let paymentMethodPane = paymentMethod.getElementsByTagName("li");

console.log(paymentMethod);

for (let i = 0; i < paymentMethodPane.length; i++)
{
    paymentMethodPane[i].addEventListener("click", function() {
        paymentMethod.getElementsByClassName("active")[0].classList.remove("active");
        paymentMethodPane[i].classList.add("active");
    });
}