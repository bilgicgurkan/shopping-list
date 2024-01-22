import { Request } from "./request";
import { Front } from "./front";

const request = new Request();
const front = new Front();

eventListener();

function eventListener() {
    document.addEventListener("DOMContentLoaded", loadList);
    document.querySelector("#save-list").addEventListener("click", addNewItem);
    document.querySelector(".main-table-area-body").addEventListener("click", ifChecked);
    document.querySelector(".main-table-area-body").addEventListener("click", updateItem);
    document.querySelector(".saveNew").addEventListener("click", updateListItem);
}

function loadList() {
    request.get()
        .then(allList => {
            front.loadAllList(allList);
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

function ifChecked(e) {
    if (e.target.checked === true) {
        front.textStyle(e.target);
    }
    if (e.target.checked === false) {
        front.textStyleRemove(e.target);
    }

}

let updateState = null;

function updateItem(e) {
    if (e.target.id === "setting-icon") {
        // changeItem ile ayar ikonuna tıkladığımızda üstteki inputlara gidiyor
        front.changeItem(e.target);

        if (updateState === null) {
            updateState = {
                updateID: e.target.parentElement.previousElementSibling.textContent.trim(),
                updateParent: e.target
            }
            console.log(updateState)
        }
        else {
            let updateState = null;
        }
    }
    // if (e.target.id === "setting-icon") {
    //     // front.repeatTextItem(e.target)
    //     console.log("burası silme işlemi olacak yani üzerini çizme")
    // }
}

function updateListItem() {
    if (updateState) {
        const data = { name: document.querySelector("#name-input").value.trim(), unit: document.querySelector("#unit-input").value.trim(), price: document.querySelector("#price-input").value.trim() }
        request.put(updateState.updateID, data)
            .then()
            .catch(err => console.log(err))
    }
}
