function adicionarAluno() {
    let itemArray = JSON.parse(localStorage.getItem('tabela2'));
    let aluno = document.getElementById('nome').value;
    let html = parseFloat(document.getElementById('html').value);
    let css = parseFloat(document.getElementById('css').value);
    let js = parseFloat(document.getElementById('js').value);
    
    let total = html + css + js;
    let media = total / 3;
    let resultado = "Reprovado";
    if (media >= 7) {
        resultado = "Aprovado";
    }
    const estudante = { "name": aluno, "total": total.toFixed(1), "average": media.toFixed(2), "resultado": resultado };
    if (itemArray == null) {
        itemArray = [];
    }
    itemArray.push(estudante);
    localStorage.setItem('tabela2', JSON.stringify(itemArray));
    alert(`Nota do aluno ${aluno} registrada!`);
    adicionarNaTabela(estudante);
}

function recarregar() {
const gradesData = JSON.parse(localStorage.getItem('tabela2'));
if (gradesData !== null) {
    criarTabela(gradesData);
}
}

function adicionarNaTabela(evento) {
const tabela2Corpo = document.getElementById("tabela2-corpo");
var linha = document.createElement('tr');
linha.setAttribute("id", "rowData");
Object.keys(evento).forEach(function (event) {
    let celula = document.createElement('td');
    celula.classList.add('centralize');
    switch (evento[event]) {
        case "Reprovado":
            celula.classList.add('negado');
            break;
        case "Aprovado":
            celula.classList.add('vaiLa');
            break;
    }
    celula.appendChild(document.createTextNode(evento[event]));
    linha.appendChild(celula);
});
tabela2Corpo.appendChild(linha);
}

function criarTabela(tableD) {
const tabela2 = document.getElementById("tabela2");
const tabela2Corpo = document.getElementById("tabela2-corpo");

tableD.forEach(function (row) {
    let linha = document.createElement('tr');
    linha.setAttribute("id", "row");
    Object.keys(row).forEach(function (evento) {
        let celula = document.createElement('td');
        celula.classList.add('centralize');
        switch (row[evento]) {
            case "Reprovado":
                celula.classList.add('repproved');
                break;
            case "Aprovado":
                celula.classList.add('approved');
                break;
        }
        celula.appendChild(document.createTextNode(row[evento]));
        linha.appendChild(celula);
    });
    tabela2Corpo.appendChild(linha);
});
tabela2.appendChild(tabela2Corpo);
}

function limparTabela() {
const tableBody = document.getElementById("tabela2-corpo");
const rows = tableBody.getElementsByTagName("tr");

for (const row of rows) {
    row.remove();
}
}

window.onload = function () {
recarregar();
};
