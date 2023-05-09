import { menuArray } from "./data.js";

let main = document.getElementById("main");
let footer = document.getElementById("footerdiv")
let money = document.getElementById("totalCost");
let order = document.getElementById("button");

menuArray.forEach((item) => {

    main.innerHTML +=
        `
    <section class="section1">
        <div class="div1">${item.emoji}</div>
        <div class="div2">
            <header class="header1">${item.name}</header>
            <section class="section2">${item.ingredients}</section>
            <footer class="footer1">${item.price}</footer>
        </div>
        <div class="div3">
            ➕
        </div>
    </section>
    `
});

let data = document.querySelectorAll(".div3");

data.forEach((item) => {
    item.addEventListener("click", () => {
        footer.innerHTML +=
            `
        <section>
            <div>
                <div class="big">${item.parentElement.getElementsByClassName("header1")[0].innerHTML}</div>
                <div class="small">remove</div>
            </div>
            <div class="medium">
            ${"$" + item.parentElement.getElementsByClassName("footer1")[0].innerHTML}
            </div>
        </section>
        `
        let removes = document.querySelectorAll(".small");
        removes.forEach((item) => {
            item.addEventListener("click", () => {
                item.parentElement.parentElement.remove();
                money.innerHTML = "$" + calculateCost();
            })
        });
        money.innerHTML = "$" + calculateCost();
    });
})

function calculateCost() {
    let total = 0;
    let costs = document.querySelectorAll(".medium");
    costs.forEach((item) => {
        // total += parseInt(item.innerHTML);
        total += parseFloat(item.innerHTML.replace("$", ""));
    })
    return total;
}

order.addEventListener("click", () => {
    alert("Your order is placed. Thank you for ordering from us.");
    footer.innerHTML = "";
    money.innerHTML = "$0";
});

