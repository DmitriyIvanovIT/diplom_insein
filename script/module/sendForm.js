const sendForm = () => {
    const popupConsultation = document.querySelector('.popup-consultation');
    const forms = document.querySelectorAll('form');
    const postData = body => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    const showError = (form, error) => {
        form.insertAdjacentHTML('beforebegin', `
            <div class="form-alarm-msg" style="font-size: 7; color: red; width: 350px; ">
            ${error}.</div>`);

        form.querySelectorAll('input').forEach((item) => {
            item.value = '';
        })

        setTimeout(() => {
            const el = form.parentElement.querySelectorAll('.form-alarm-msg');
            el.remove();
        }, 3000);
    };

    const showAlarm = (form) => {
        form.insertAdjacentHTML('beforebegin', `
            <div class="form-alarm-msg" style="font-size: 7; color: red; width: 350px; ">
            Пожалуйста, проверьте номер и согласитесь с политикой конфиденциальности!</div>`);

        form.querySelectorAll('input').forEach((item) => {
            item.value = '';
        })

        setTimeout(() => {
            const el = form.parentElement.querySelector('.form-alarm-msg');
            el.remove();
        }, 3000);
    };

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();

            const inputTel = form.querySelector('input[name="phone"]');
            const inputName = form.querySelector('input[name="name"]');
            const checkBox = form.querySelector('input[type="checkbox"]');
            let body;
            if (checkBox.checked && inputTel.value.length === 18) {
                if (inputName) {
                    body = {
                        tel: inputTel.value,
                        name: inputName.value
                    };
                } else {
                    body = {
                        tel: inputTel.value,
                    };
                }
                const outputData = () => {
                    const popupThank = document.querySelector('.popup-thank');

                    popupConsultation.style = '';
                    popupThank.style.visibility = 'visible';
                    popupThank.addEventListener('click', event => {
                        if (!(event.target.closest('.feedback-wrap')) || event.target.classList.contains('close-thank')) {
                            popupThank.style.visibility = 'hidden';
                        }
                    });
                    setTimeout(() => {
                        popupThank.style.visibility = 'hidden';
                    }, 5000);
                    const inputs = form.querySelectorAll('input');
                    inputs.forEach(item => {
                        item.value = '';
                        if (item.type === 'checkbox') {
                            item.checked = false;
                        }
                    });
                };
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('Произошла неизвестная ошибка. Пожалуйста, попробуйте позже.');
                        }
                        outputData();
                    })
                    .catch((error) => {
                        showError(form, error);
                    });
            } else {
                showAlarm(form);
            }
        });
    });  
};

export default sendForm;