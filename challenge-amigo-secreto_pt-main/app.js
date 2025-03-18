// Array para acrescentar o nome dos amigos
let amigos = [];

// Função para agregar amigos
function agregarAmigos() {
    const inputAmigo = document.getElementById('amigo'); // Corrigido para 'amigo'
    const nomeAmigo = inputAmigo.value.trim();

    // Validar que o campo está em vazio
    if (nomeAmigo === "") { 
        alert("Por gentileza insira um nome.");
        return; // Para a execução da função
    }

    // Verificar que o nome não está sendo repetido
    if (amigos.map(a => a.toLowerCase()).includes(nomeAmigo.toLowerCase())) {
        alert(`O nome ${nomeAmigo} já foi adicionado à lista`);
        return;
    }

    // Agregar o nome à lista de amigos
    amigos.push(nomeAmigo);

    // Atualizar a lista no HTML
    actualizarLista();

    // Limpar o campo de entrada
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Função para atualizar a lista de amigos na interface
function actualizarLista() {
    const listaAmigosUl = document.getElementById("listaAmigos"); // Corrigido para 'listaAmigos'

    // Limpar o conteúdo atual da lista
    listaAmigosUl.innerHTML = ""; // Apagar qualquer conteúdo prévio dentro da lista

    // Voltar ao array com um novo ciclo for
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo; // Corrigido para usar a variável correta
        listaAmigosUl.appendChild(li);
    });
}

// Função para selecionar um amigo aleatório
function sortearAmigo() {
    // Validar que tem amigos disponíveis
    if (amigos.length === 0) { // Comprove se a lista array está vazia.
        alert("Não há amigos para sortear, acrescente ao menos um.");
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um número aleatório entre 0 e a quantidade de array na lista

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // Usa o índice aleatório para obter um nome do array

    // Mostra o resultado no HTML
    const resultado = document.getElementById('resultado'); // Corrigido para 'resultado'
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigos);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});