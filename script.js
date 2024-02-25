const rating_list = document.querySelectorAll(".list_item");
const submit = document.querySelector("#btn");
const rated = document.querySelector(".rated");
const rating_section = document.querySelector(".total-cont");
const result_show = document.querySelector(".thank-you-state");

let value;

rating_list.forEach((rated_num) => {
    rated_num.addEventListener("click", (num) => {
        rating_list.forEach((rated_num) => rated_num.classList.remove("list__change"));
        num.target.classList.add("list__change");
        value = num.target.textContent;
    })  
})
submit.addEventListener("click",() => {
    rated.textContent = value;
    rating_section.style.display = "none";
    result_show.style.display = "flex";
})
