let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }];

function calcularMediaAtletas(listaAtletas) {
    for (let i = 0; i < listaAtletas.length; i++) {
        let atleta = listaAtletas[i];
        
        // 1. Ordenar as notas (Dica: sort precisa de uma função de comparação para números)
        let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
        
        // 2. Eliminar a maior e a menor nota usando slice
        let notasComputadas = notasOrdenadas.slice(1, 4);
        
        // 3. Calcular a soma das notas restantes
        let soma = 0;
        notasComputadas.forEach(function(nota) {
            soma += nota;
        });
        
        // 4. Calcular a média
        let media = soma / notasComputadas.length;
        
        // 5. Apresentar os resultados no console
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas}`);
        console.log(`Média Válida: ${media}`);
        console.log(""); // Linha em branco para separar os atletas
    }
}

// Executando a função
calcularMediaAtletas(atletas);