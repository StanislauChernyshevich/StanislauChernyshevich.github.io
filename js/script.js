const link = document.querySelectorAll('.nav__link'),
      line = document.querySelector('.line');

function addClass () {
    line.classList.add('orange');
}

function removeClass () {
    line.classList.remove('orange');
}

link.forEach(item => {
    item.addEventListener('mouseover', addClass);
});

link.forEach(item => {
    item.addEventListener('mouseout', removeClass);
});

const button = document.querySelector('.button_slide--about'),
      help = document.querySelector('.color-button');

button.addEventListener('mouseover', () => {
    help.classList.add('orange-text');
});

button.addEventListener('mouseout', () => {
    help.classList.remove('orange-text');
});