export class Front {
    // constructor(){

    // }

    loadAllList(allList) {
        let result = "";

        allList.forEach(listItem => {
            // console.log(listItem);
            result +=
                `
                <div class="main-table-area-body-name">
                    ${listItem.name}
                </div>
                <div class="main-table-area-body-unit">
                    ${listItem.unit}
                </div>
                <div class="main-table-area-body-price">
                    ${listItem.price}
                </div>
                <div style="display:none" class="main-table-area-body-id">
                    ${listItem.id}
                </div>
                <div class="main-table-area-body-check">
                <input type="checkbox">
                <i id="setting-icon" class="fa-solid fa-gear"></i>
                <i id="delete-icon" class="fa-solid fa-delete-left"></i>
                </div>
            `

            document.querySelector(".main-table-area-body").innerHTML = result;
        });

    }

    // deleteListItem(target){
    //     console.log(target)
    //     target.remove();
    // }

    repeatTextItem() {
        console.log("gurkan")
        document.querySelector(".main-table-area-name-input").innerHTML = "sa kanka"
    }

    textStyle(e) {
        if (
            e.parentElement.previousElementSibling.previousElementSibling.style.textDecoration !== "line-through" ||
            e.parentElement.previousElementSibling.previousElementSibling.style.color !== "#c0bfbf" ||
            e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration !== "line-through" ||
            e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.style.color !== "#c0bfbf" ||
            e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration !== "line-through" ||
            e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.color !== "#c0bfbf"
        ) {
            e.parentElement.previousElementSibling.previousElementSibling.style.textDecoration = "line-through";
            e.parentElement.previousElementSibling.previousElementSibling.style.color = "#c0bfbf";
            e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration = "line-through";
            e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.style.color = "#c0bfbf";
            e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration = "line-through";
            e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.color = "#c0bfbf";
        }
    }

    textStyleRemove(e) {
        e.parentElement.previousElementSibling.previousElementSibling.style.removeProperty("text-decoration");
        e.parentElement.previousElementSibling.previousElementSibling.style.removeProperty("color");
        e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.style.removeProperty("text-decoration");
        e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.style.removeProperty("color");
        e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.removeProperty("text-decoration");
        e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.removeProperty("color");
    }

    changeItem(e) {
        // console.log(e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling)
        // name alanı
        document.querySelector("#name-input").value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim();
        // unit alanı
        document.querySelector("#unit-input").value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim();
        // price alanı
        document.querySelector("#price-input").value = e.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
    }

    forUpdateButtonGroup(e) {
        document.querySelector(".save-new").style.display = "block";
        document.querySelector(".cancel-new").style.display = "block";
        document.querySelector(".update-input").style.gridTemplateColumns = "40% 40% 20%"
    }

    setAlert(text) {
        // Belirli bir süre sonra text'i göster
        setTimeout(() => {
            document.querySelector(".header-desc-area-for-alert").innerHTML = text;

            // Belirli bir süre sonra text'i sil
            setTimeout(() => {
                document.querySelector(".header-desc-area-for-alert").innerHTML = "";
            }, 2000);
        });
    }

    checkedTrueDisabledTrue(e) {
        e.style.cssText = "pointer-events: none; color: rgb(235, 235, 235)";
        e.nextElementSibling.style.cssText = "pointer-events: none; color: rgb(235, 235, 235)";
    }

    checkedFalseDisabledFalse(e) {
        e.style.cssText = "pointer-events: auto; color: #000";
        e.nextElementSibling.style.cssText = "pointer-events: u; color: #000";
    }

}