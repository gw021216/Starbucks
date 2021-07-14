const serchEl = document.querySelector('.serch');
const serchInputEl = serchEl.querySelector('input');

serchEl.addEventListener('click', function(){
    serchInputEl.focus();
});

serchInputEl.addEventListener('focus', function() {
    serchEl.classList.add('focused');
    serchInputEl.setAttribute('placeholder','통합검색');
});

serchInputEl.addEventListener('blur', function(){
    serchEl.classList.remove('focused');
    serchInputEl.setAttribute('placeholder','');
});

const thisyear = document.querySelector('.this-year');
thisyear.textContent = new Date().getFullYear();