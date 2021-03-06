const renderPopup = () => {
    const postData = () => fetch("./db/db.json");
    const addStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .active-list {
            border: 3px solid #c05d00!important;
            }
        `;
        document.head.append(style);
    };
    const render = response => {
        addStyles();
        let navListPopupRepair = document.querySelector('.nav-list-popup-repair');
        navListPopupRepair.textContent = '';
        const popupRepairTypesContentHeadDate = document.querySelector('.popup-repair-types-content__head-date');
        response.forEach((item, index) => {
            if (index !== 0) {
                navListPopupRepair.insertAdjacentHTML('beforeend', `
                    <button class="button_o popup-repair-types-nav__item">${item.title}</button>
                `);
            } else {
                popupRepairTypesContentHeadDate.textContent = item.date;
            }
        });
        navListPopupRepair = document.querySelector('.nav-list-popup-repair');
        const popupRepairTypesNavItem = navListPopupRepair.querySelectorAll('.popup-repair-types-nav__item');

        const createInfo = (elem) => {
            const switchInner = document.getElementById('switch-inner');
            const popupRepairTypesContentTableList = document.querySelector('.popup-repair-types-content-table__list');
            popupRepairTypesContentTableList.textContent = '';
            popupRepairTypesContentTableList.append(document.createElement('tbody'));
            const tbody = popupRepairTypesContentTableList.querySelector('tbody');
            let list;
            response.forEach(item => {
                if (item.title === elem.textContent) {
                    list = item.priceList;
                    switchInner.textContent = item.title;
                }
            });
            list.forEach(element => {
                tbody.insertAdjacentHTML('beforeend', `
                        <tr class="mobile-row">
                        <td class="repair-types-name">${element.typeService}</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                        <td class="repair-types-value">${element.units}</td>
                        <td class="repair-types-value">${element.cost} руб.</td>
                        </tr>
                    `);
            });
        }
        popupRepairTypesNavItem[0].classList.add('active-list');
        createInfo(popupRepairTypesNavItem[0]);
        popupRepairTypesNavItem.forEach(elem => {
            elem.addEventListener('click', () => {
                if (navListPopupRepair.querySelector('.active-list')) {
                    navListPopupRepair.querySelector('.active-list').classList.remove('active-list');
                }
                elem.classList.add('active-list');
                createInfo(elem);

            });
        });
    };

    postData()
        .then(response => {
            if (response.status !== 200) {
                throw new Error("Status network is not 200");
            }
            return response.json();
        })
        .then(response => {
            render(response);
        })
        .catch(error => {
            console.error(error);
        });
};

export default renderPopup;