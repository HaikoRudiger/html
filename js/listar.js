var elemento = document.querySelector('h1')

elemento.innerHTML += 'JS';

elemento.style.color = '#blue';

console.log(elemento);

function limpar(event){
    event.preventDefault();
    document.querySelector('form').reset();
    console.log('Limpando....');

}

function salvar(event){
    event.preventDefault();
    console.log('Salvando...')

    var name = document.getElementsByName('nome')[0].value;
    var cargo = document.getElementsByName('cargo')[0].value;
    var salario = document.getElementsByName('salario')[0].value;

    var listaFuncionarios = JSON.parse(localStorge.getItem('Funcioarios'));

    if(listaFuncionarios == null){
        listaFuncionarios = [];
    }

    var id = JSON.parse(localStorage.getItem('IdFuncionarios'));
    if(listaFuncionarios == null){
        id = 0;
    }
    id = id + 1;

    var Funcionario = {
            'id': id,
            'nome': name,
            'cargo': cargo,
            'salario': salario
        };listaFuncionarios.push(Funcionario);

    localStorage.setItem('IdFuncionarios', JSON.stringify(id));
    localStorage.setItem('Funcionarios', JSON.stringify(listaFuncionarios));
    limpar(event)
};

document.getElementsById('salvar').addEventListener('click', salvar)
