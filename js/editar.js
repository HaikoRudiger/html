function carregalocalstorage(){
    return JSON.parse(localStorage.getItem('Funcionario'))
};

function limpar(event){
    event.prevenDefault();
    document.querySelector('form').reset();
    console.log('Limpando...');
};

function editar(event){
    event.prevenDefault();
    console.log('Salvando...');

    var id = document.getElementsByClassName('id')[0].value;
    var name = document.getElementsByClassName('name')[0].value;
    var cargo = document.getElementsByClassName('cargo')[0].value;
    var salario = document.getElementsByClassName('salario')[0].value;

    var Funcionario = {
        'id': id,
        'nome': name,
        'cargo': cargo,
        'salario': salario
    }
};

var lista = carregalocalstorage();
var novaLista = [];

lista.forEach(e => {
    if(e['id'] != id){
        novaLista.push(e);
    }
    else{
        novaLista.push(Funcionario);
    }
});

function carregadados(){
    var urlParamentros = new URLSearchParams(window.location.search);

    var id = parseInt = (urlParametros.get('id'));

    var alunos = JSON.parse(localStorage.getItem('Funcionarios'));

    funcionario.forEach(e =>{
        if(e['id'] == id){
            carregaCampos(e);
        }
    });
};

window.onload = carregadados()