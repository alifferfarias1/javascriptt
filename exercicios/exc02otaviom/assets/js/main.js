const h1 = document.querySelector('.container h1');
const data = new Date('09-26-2019 22:52');

h1.innerHTML = data.toLocaleString('pt-br', {dateStyle: 'full', timeStyle: 'short'});