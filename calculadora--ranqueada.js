// Glória a Deus e a Jesus Cristo
//oi

function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let rank;

    if (saldoVitorias <= 10) {
        rank = "Ferro";
    } else if (saldoVitorias <= 20) {
        rank = "Bronze";
    } else if (saldoVitorias <= 50) {
        rank = "Prata";
    } else if (saldoVitorias <= 80) {
        rank = "Ouro";
    } else if (saldoVitorias <= 90) {
        rank = "Diamante";
    } else if (saldoVitorias <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no rank de ${rank}`);
}


calcularRank(25, 5);
