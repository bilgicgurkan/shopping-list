import { Request } from "./request";

const request = new Request();

eventListener();

function eventListener() {
    document.addEventListener("DOMContentLoaded", loadList);
    document.querySelector("#save-list").addEventListener("click", addNewItem);
}

function loadList(){
    request.get()
    .then(allList => {
        console.log(allList)
    }) 
}

function addNewItem() {
    if (document.querySelector("#name-input").value.trim() === "" || document.querySelector("#unit-input").value.trim() === "" || document.querySelector("#price-input").value.trim() === "") {
        console.log("burası boş");
    }
    else {
        request.post({name : document.querySelector("#name-input").value.trim(), unit : document.querySelector("#unit-input").value.trim(), price : document.querySelector("#price-input").value.trim()})
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))

        // console.log(document.querySelector("#name-input").value.trim());
        // console.log(document.querySelector("#unit-input").value.trim());
        // console.log(document.querySelector("#price-input").value.trim())
    }
}

