let input = document.querySelector('input[name=task]'); //pegando o elemento pelo name

let button = document.querySelector('#botao'); //pegando o elemento pelo id

let list = document.querySelector('#list'); //pegando o elemento pelo id

let tasks = [
    'Work',
    'Estudar Js', 
    'Emagrecer',
];

function renderTasks(){
    for(task of tasks){
        //Criar o item da lista
       let = document.createElement('li');

       //Adicionar classes do item da lista
       itemList.setAttribute('class', 'list-group-item list-group-item-action');

       //criar um texto
       let itemText = document.createTextNode(task);

       //Adicionar o texto no item da lista
       itemList.appendChild(itemText);

       //Adicionar o item da lista na lista
       list.appendChild(itemList)

    }
}

renderTasks();
