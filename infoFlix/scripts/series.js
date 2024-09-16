function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search); // Obtém os parâmetros da URL
    return params.get('id'); // Retorna o valor do parâmetro 'id'
}

// Exemplo de uso:
const id = getIdFromUrl();
console.log(`ID recebido: ${id}`);

console.log("oi")