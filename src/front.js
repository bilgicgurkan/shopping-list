export class Front {
    // constructor(){

    // }
    loadAllList(allList) {
        let result = "";

        allList.forEach(listItem => {
            console.log(listItem.name);
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
                <div class="main-table-area-body-check">
                <input type="checkbox">
                <i class="fa-solid fa-gear"></i>
                </div>
            `

            document.querySelector(".main-table-area-body").innerHTML = result;
        });

    }
}