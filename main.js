let shareBtn = document.querySelector('.image > img');
let contact = document.querySelector('.contact');

contact.classList.add('hide');

shareBtn.addEventListener('click', function () {
    contact.classList.toggle('hide');
});

