import getInfo from "../scripts/get/getInfo.js";

const filmeContent = document.querySelector('#divSeries');

window.onload = () => {
  series(1, 10);
}

async function series(pagina, limit) {

  const dados = await getInfo(pagina, limit);

  dados.data.forEach(element => showSeries(element));

  if (pagina - 1 >= 1) {
    let back = document.getElementById('left')
    back.style.display = 'block'
    back.addEventListener("click", () => {
      series(pagina - 1, limit);
    })
  }
  if (pagina + 1 <= dados.total / limit) {
    let next = document.getElementById('right');
    next.addEventListener("click", () => {
      series(pagina + 1, limit);
    })
  }
}

function showSeries(element) {
  let div = document.createElement('div')
  div.className = 'oneSeries'
  let titulo = document.createElement('p')
  titulo.textContent = element.titulo
  let img = document.createElement('img')
  img.src = element.imagem;

  div.appendChild(titulo)
  div.appendChild(img)
  filmeContent.appendChild(div)
}

window.buscar = async function() {
  const inputBusca = document.getElementById('search').value.toLowerCase();

  filmeContent.innerHTML = '';

  
  const dados = await getInfo(1, 240);

  const resultadosFiltrados = dados.data.filter(elemento => {
    const titulo = elemento.titulo.toLowerCase();
    if (titulo.includes(inputBusca)) {
      const termoDestacado = titulo.replace(new RegExp(inputBusca, 'gi'), match => `<span class="destaque">${match}</span>`);
      elemento.tituloDestacado = termoDestacado;
      return true;
    }
    return false;
  });

  resultadosFiltrados.forEach(elemento => {
    showSeries(elemento);
  });

  if (resultadosFiltrados.length === 0) {
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Nenhum resultado encontrado.';
    filmeContent.appendChild(mensagem);
  }
}