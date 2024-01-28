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
    document.querySelector(".save-new").addEventListener("click", updateListItem);
    document.querySelector(".main-table-area-body").addEventListener("click", deleteItem);
    document.querySelector(".cancel-new").addEventListener("click", cancelUpdate)

}

function loadList() {
    return new Promise((resolve, reject) => {
        request.get()
            .then(allList => {
                front.loadAllList(allList);
                resolve(allList);
            })
            .catch(err => {
                reject(err);
            });
    });
}

function addNewItem() {
    if (
        document.querySelector("#name-input").value.trim() === "" ||
        document.querySelector("#unit-input").value.trim() === ""
    ) {
        front.setAlert("Fill in the all required areas");
    }
    else {
        request.post({
            name: document.querySelector("#name-input").value.trim(),
            unit: document.querySelector("#unit-input").value.trim(),
            price: document.querySelector("#price-input").value.trim()
        })
            .then(addList => {
                front.setAlert("Saved as new item");
            })
            .catch(err => console.log(err))
    }
}

function ifChecked(e) {
    if (e.target.checked === true) {
        front.textStyle(e.target);
        front.setAlert("marked")
        front.checkedTrueDisabledTrue(e.target.nextElementSibling)
    }
    if (e.target.checked === false) {
        front.textStyleRemove(e.target);
        front.setAlert("mark removed")
        front.checkedFalseDisabledFalse(e.target.nextElementSibling)
    }

}

let updateState = "";

function updateItem(e) {
    if (e.target.id === "setting-icon") {
        // changeItem ile ayar ikonuna tıkladığımızda üstteki inputlara gidiyor
        front.changeItem(e.target);
        front.forUpdateButtonGroup(e)
        front.setAlert("sıra değişiklik için taşındı")

        if (!updateState) {
            updateState = {
                updateID: e.target.parentElement.previousElementSibling.textContent.trim(),
                // updateParent: e.target.parentElement
            }
        }
        else {
            updateState = {
                updateID: e.target.parentElement.previousElementSibling.textContent.trim(),
                // updateParent: e.target.parentElement
            }

        }
    }
}


function updateListItem(e) {
    if (updateState) {
        const newName = document.querySelector("#name-input").value.trim();
        const newUnit = document.querySelector("#unit-input").value.trim();
        const newPrice = document.querySelector("#price-input").value.trim();

        loadList()
            .then(loadedList => {
                let hasChanges = true; // Değişiklik kontrolü

                loadedList.forEach(listItem => {
                    if (
                        listItem.name === newName &&
                        listItem.unit === newUnit &&
                        listItem.price === newPrice
                    ) {
                        // Değişiklik yapılmamış
                        hasChanges = false;
                    }
                });

                if (!hasChanges) {
                    // Kullanıcı herhangi bir değişiklik yapmadıysa
                    // window.alert(`${updateState.updateID}` + ". sırada zaten var");
                    front.setAlert("Below is the same item.")
                } else {
                    // Kullanıcı değişiklik yapmışsa
                    const data = {
                        name: newName,
                        unit: newUnit,
                        price: newPrice
                    };

                    request.put(updateState.updateID, data)
                        .then(updatedData => console.log(updatedData))
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log("Liste yüklenirken hata oluştu: ", err));
    } else {
        console.log("Değiştirecek bir şey seçmediniz");
    }
}

function deleteItem(e) {

    if (e.target.id === "delete-icon") {
        const userConfirmed = window.confirm("Silme İşlemi OK?");

        if (userConfirmed) {
            let deleteItem = e.target.parentElement.previousElementSibling.textContent.trim()
            request.delete(deleteItem)
                .then()
                .catch(err => console.log(err))
        }
    }
}

function cancelUpdate(e) {
    updateState;

    updateState = {
        updateID: ""
    }

    front.setAlert("Discard all change request")

    document.querySelector("#name-input").value = "";
    document.querySelector("#unit-input").value = "";
    document.querySelector("#price-input").value = "";

    document.querySelector(".save-new").style.display = "none";
    document.querySelector(".cancel-new").style.display = "none";
    document.querySelector(".update-input").style.gridTemplateColumns = "100%"
}











