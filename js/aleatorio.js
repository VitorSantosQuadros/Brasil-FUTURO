const nomes = ["GIOVANI", "MARCOS", "VINICIUS MACHADO", "VITOR", "GUSTAVO", "NICOLAS", "EDILSON"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
