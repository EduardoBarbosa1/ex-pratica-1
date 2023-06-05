// exercicio 1
var idade = 25;
console.log("minha idade é " + idade);

// // exercicio2
// var a = 10;
// var b = 77;
// var soma = a + b;
// document.write(`O resultado de ${a} e ${b} é igual a ${soma} `);

// exercicio 3
let totalValue = 489.95;
let amountinstallments = 5;
let valueInstallments = totalValue / amountinstallments;

console.log(`O valor total da compra foi: ${totalValue}`);
console.log(
    `Forma de pagamento: ${amountinstallments} vezes de ${valueInstallments}`
);

// exercicio 4
var minutos = 10;
var segundos = minutos * 60;
document.write(`  ${minutos} minutos são equivalentes a ${segundos} segundos`);

// exercicio 5
var nome = "pepe";
var nota1 = 10;
var nota2 = 10;
var nota3 = 10;
var sum = nota1 + nota2 + nota3;
var media = sum / 3;
document.write(`  O aluno ${nome} ficou com média ${media}`);

//exercicio6
var vala = 10;
var valb = 20;
let a = valb;
let b = vala;
document.write(`   ${a} e ${b}`);

// exercicio7



// exercicio8
let numero1 = 5;
let numero2 = 7;
if (numero1 === numero2) {
    alert("primeiro caso")
} else {
    if (numero1 > numero2) {
        alert("segundo caso")
    } else {
        alert("terceiro caso")
    }
}

//exercicio9
var vate11 = 0.30
var vduz = 0.25
var numeroMaça = 10
if (numeroMaça >= 12) {
    document.write(` Sua compra deu ${numeroMaça * vduz}R$`)
} else {
    document.write(` Sua compra deu ${numeroMaça * vate11}R$ `)
}

// exercicio10
var nome = "pepe";
var idade = 25;
var ano = 2023 - idade;
document.write(`  ${nome} nasceu em ${ano} `)


// exercicio 11
var impar = 17;
var par = 20;
if (impar % 2 === 0) {
    alert("numero é par")
} else {
    alert("numero é impar")
}

// exexrcicio 12
var nascimento = 1998;
var anoAtual = 2023;
var op = anoAtual - nascimento;
if (op >= 16) {
    alert("vota esse ano")
} else {
    alert("nao vota ainda")
}

// var nota1, nota2, nota3;
// nota1 = 10;
// nota2 = 10;
// nota3 = 10;
// var media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5);
// if (media >= 7) {
//     console.log("aprovado")
// } else {
//     console.log("reprovado")
// }
// console.log("a media é " + media)

// var idadeEmAnos = 25;
// var idadeEmMeses = idadeEmAnos * 12;
// var idadeEmDias = idadeEmAnos * 365;

// console.log("a idade é de " + idadeEmDias + "  dias")
