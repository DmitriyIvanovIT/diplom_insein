const sendForm = () => {
    const forms = document.querySelectorAll('form');

    const postData = async body => await fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    forms.forEach(form => {
        const checkbox = form.querySelector('.checkbox__input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form),
                body = {};

            formData.forEach((item, key) => body[key] = item);
        

            if (!check) {
                console.log('no');
                alert('Требуется сщглашение с политикой конфиденциальности');
            } else {
                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(`status network ${response.status}!`);
                        }
                        form.reset();
                    })
                    .catch(error => console.error(error));
            }
        });
    });

};

export default sendForm;