console.log("Missão iniciada!");
console.log(document);

//PASSO # - Por ID (#)

const titulo = document.querySelector('#titulo');
titulo.textContent = 'Aula de DOM'
titulo.style.color = 'red';

//PASSO (.) - POR CLASSE

const p1 = document.querySelector('.texto');
p1.style.fontWeight = 'bold';

const textos = document.querySelectorAll('.texto');
textos.forEach(p => p.style.color = 'green')

const caixa = document.querySelector('div');
caixa.style.border = '3px solid blue';
caixa.style.padding = '28px';

const campoNome = document.querySelector('.container input[type="text"]');
campoNome.value = 'Maria';

textos[1].innerHTML = 'Segundo´com <em>ênfase</em>';

const campoEmail = document.querySelector('input[type="email"]');
campoEmail.setAttribute('placeholder','seu@gamil.com')