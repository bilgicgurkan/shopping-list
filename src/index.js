import { Request } from "./request";
import { Front } from "./front";

const request = new Request();
const front = new Front();

eventListener();

function eventListener() {
    document.addEventListener("DOMContentLoaded", loadList);
    document.querySelector("#save-list").addEventListener("click", addNewItem);
}

function loadList() {
    request.get()
        .then(allList => {
            // console.log(allList)
            // front.loadAllList(allList); burası da olabilir aşağıdaki şart da olabilir.
            if (allList.lenght === null) {
                console.log("selam")
            }
            else {
                front.loadAllList(allList)
            }
        })
        .catch(err => console.log(err))
}

function addNewItem() {
    if (document.querySelector("#name-input").value.trim() === "" || document.querySelector("#unit-input").value.trim() === "" || document.querySelector("#price-input").value.trim() === "") {
        console.log("burası boş");
    }
    else {
        request.post({ name: document.querySelector("#name-input").value.trim(), unit: document.querySelector("#unit-input").value.trim(), price: document.querySelector("#price-input").value.trim() })
            .then(addList => {
                console.log(addList)
            })
            .catch(err => console.log(err))

        // console.log(document.querySelector("#name-input").value.trim());
        // console.log(document.querySelector("#unit-input").value.trim());
        // console.log(document.querySelector("#price-input").value.trim())
    }
}

