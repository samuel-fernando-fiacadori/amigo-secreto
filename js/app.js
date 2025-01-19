let array_amigo_adicionado = []

function adicionar() {
 // pegar variavel do nome e a barra de "amigos incluidos"
 let lista_amigo = document.getElementById("lista-amigos");
 let nome_amigo = document.getElementById("nome-amigo").value;
 // adicionar ela a barra de "amigos incluidos"
 array_amigo_adicionado.push(nome_amigo);

 let vigurla = array_amigo_adicionado[0] == nome_amigo ? " " : ",";

 lista_amigo.textContent = lista_amigo.textContent + `${vigurla} ${nome_amigo}`;

 document.getElementById("nome-amigo").value = "";
}

function sortear() {
 // declarar a variavel da barra de amigos incluidos, e de sorteio, 
 let lista_sorteio = document.getElementById("lista-sorteio");
 // fazer um codigo de sorteio
 array_amigo_adicionado = shuffle(array_amigo_adicionado);

for (let i = 0; i < array_amigo_adicionado.length; i++) {
    if (i == array_amigo_adicionado.length - 1) {
        lista_sorteio.innerHTML = lista_sorteio.innerHTML + array_amigo_adicionado[i] + " --> " + array_amigo_adicionado[0] + "<br>"
    } else {
        lista_sorteio.innerHTML = lista_sorteio.innerHTML + array_amigo_adicionado[i] + " --> " + array_amigo_adicionado[i + 1] + "<br>"
    }

}
}

function reiniciar() {
 // resetar tudo o que foi feito
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }