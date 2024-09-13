
const URL = 'http://localhost:3000/series'; 

async function getInfo(pagina, limit) { 

    const data = await fetch(`${URL}?pagina=${pagina}&limite=${limit}`) 

    const dados = await data.json() 

    return dados; 
}

export default getInfo;