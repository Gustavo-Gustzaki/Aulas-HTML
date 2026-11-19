console.log("Sobrevivente conectado ao DOM!");

const cabecalho = document.querySelector('header');
console.log(cabecalho);

const btnTema = document.querySelector('#btn-tema');

const boasVindas = document.querySelector('#boas-vindas');

const tituloSite = document.querySelector('header h1');

const listaBeneficios = document.querySelectorAll('ol li');
console.log(listaBeneficios.length);

const campoNome = document.querySelector('input[type="text"]');

const campoEmail = document.querySelector('input[type="email"]');

tituloSite.textContent = "The Walking Date 🧟";

const figcaption = document.querySelector('figcaption');
figcaption.innerHTML = '- <strong>Zezinho da Foice</strong>, Sobrevivente Nível 5';

const textoBoasvindas = document.querySelector('#boas-vindas figcaption')?.textContent;
console.log(textoBoasvindas);

const aside = document.querySelector('aside');
aside.style.fontSize = '1.1rem';

const img = document.querySelector('img');
img.setAttribute('alt', 'Casal de zumbis apaixonados caminhando ao pôr do sol');
console.log(img.getAttribute('alt'));

campoNome.value = 'Sobrevivente Anônimo';

const tbodyTr = document.querySelector('tbody tr');
tbodyTr.classList.add('destaque-infectado');

const aviso = document.createElement('p');

aviso.style.whiteSpace = 'pre-line';
aviso.textContent = '⚠️  ALERTA DE HORDA:\nEncontros hoje apenas em zona seguras!';

aviso.style.left = '100px';
aviso.style.backgroundColor = 'red';
aviso.style.padding = '20px';
aviso.style.borderRadius = '50px';
const barraAlerta = document.querySelector('#barra-alerta');
barraAlerta.appendChild(aviso)

const novoBeneficio = document.createElement('li');
novoBeneficio.textContent = 'Seguro contra perda de menbros durante o primeiro encontro';

const beneficios = document.querySelector('#beneficios');
beneficios.appendChild(novoBeneficio);

const fecharAlerta = document.querySelector('#fechar-alerta');
fecharAlerta.addEventListener('click', () => {
    barraAlerta.remove();
});

const htmlRoot = document.documentElement;

btnTema.addEventListener('click', () => {
    if (htmlRoot.getAttribute('data-theme') === 'light') {
        htmlRoot.setAttribute('data-theme', 'dark');
        btnTema.textContent = 'Modo Sobrevivência ☀️';
    } else {
        htmlRoot.setAttribute('data-theme', 'light');
        btnTema.textContent = 'Modo Sombrio 🌕';
    }
});