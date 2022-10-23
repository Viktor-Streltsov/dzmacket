let info = document.getElementById('sabmit-click');
info.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let tel = document.getElementById('telep').value;
    if (tel === '' || name === '') {
        alert('Пусто');
    }else {
        alert(`Ваше имя : ${name}, Ваш тел. : ${tel}`);
    }
})