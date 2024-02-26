var nome = 'João';
var obj = {
    nome: 'joao',
    idade: 19,
    altura: 1.83,
    especialidades: ['c#', 'programação', 'banco de dados']
}
    //objetos
    // JSON javascript object notation
var objetos = [
    {
        nome: 'joao',
        idade: 19,
        altura: 1.83,
        especialidades: ['c#', 'programação', 'banco de dados']
    },
    {
        nome: 'ana',
        idade: 17,
        altura: 1.65,
        especialidades: ['pisicologia', 'fala']
    }
]
//funções
function alterarParagrafo(cor, tamanho, texto, id) {
    //elemento que pega o id do pagrafo, nesse caso seria id
    var paragrafo = documento.getElementById(id);

    paragrafo.style.color = cor;
    paragrafo.style.fontSize = tamanho;
    //inner é o campo do html de texto
    paragrafo.style.innerHTML = text;
    //document.getElementById('paragrafo').style.color = cor;
    //document.getElementById('paragrafo').style.fontSize = tamanho;
    //document.getElementById('paragrafo').innerHTML = texto;

    var nome2 = 'joao';
    var numero = 1;
    //array
    var lista = [12, 15, 17, 'joao'];
}
    function somar(valor1, valor2) {

        var resultado = valor1 + valor2;
        return resultado;
    }

function mostrarResultado() {
    var valor1 = parseInt(document.getElementById('valor1').value);
    var valor2 = parseInt(document.getElementById('valor2').value);

    //valor1 = parseInt(valor1);
    //valor2 = parseInt(valor2);

        var resultado = somar(valor1, valor2);
        document.getElementById('resultado').innerHTML = resultado;
    }

function mudarCor() {
    //for foreach e while

    var cor = document.getElementById('cor').value;
    var paragrafo = document.getElementById('meutexto');

    if (cor == 'vermelho') {
        cor = 'red';

    }
    paragrafo.style.color = cor;
}

function mostrarMarcasDeCarro() {
    var marcas = ['Volsk', 'chevrolet', 'ford', 'honda', 'toyota', 'mitisubish']
    var i = 0;
    while (i < marcas.length) {
        document.write(marcas[i]);
        i++;
    }
    marcas.forEach(function (item) {
        document.write(item);
    })

    //for (var i = 0; i < marcas.length; i++) {
    //    document.write(marcas[i]+"<br>");
    //}

}


}
function verificarNome() {
    var nome = document.getElementById('nome').value;
    while (nome != 'Joao') {
        documento.getElementById('reposta').innerHTML = 'nome errado';
    }
verificarNome();