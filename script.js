const button = document.getElementById('button');
const main = document.querySelector('main');

const buttonClick = () => {
    if (main.classList.contains('open')) {
        main.classList.remove('open');
        main.classList.add('close');
        return;
    }

    main.classList.remove('close');
    main.classList.add('open');
}

button.addEventListener('click', buttonClick)