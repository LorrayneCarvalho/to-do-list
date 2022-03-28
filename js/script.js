let input = document.querySelector('input[name=task]'); //pegando o elemento pelo name

let button = document.querySelector('#botao'); //pegando o elemento pelo id

let list = document.querySelector('#list'); //pegando o elemento pelo id

let card = document.querySelector('.card');

let tasks = JSON.parse(localStorage.getItem('tasks'))  || [];

function renderTasks(){
    list.innerHTML = '';
    for(task of tasks){
        //Criar o item da lista
       let itemList = document.createElement('li');

       //Adicionar classes do item da lista
       itemList.setAttribute('class', 'list-group-item list-group-item-action');

       //Adicionar evento de clique no item da lista
       itemList.onclick = function(){
            removeTasks(this);
       }

       //criar um texto
       let itemText = document.createTextNode(task);

       //Adicionar o texto no item da lista
       itemList.appendChild(itemText);

       //Adicionar o item da lista na lista
       list.appendChild(itemList)

    }
}

renderTasks();

//aplicando funcionalidade ao botão 
button.onclick = function(){
    let newTask = input.value;

    if(newTask != ''){
        tasks.push(newTask);
        renderTasks();
        input.value = ''
        removeSpans();

        saveDateToStorage();
    }else {
        removeSpans();
        let card = document.querySelector('.card');
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');
        let msg = document.createTextNode('You need to inform the task!')
        span.appendChild(msg);
        card.appendChild(span);
    }
}

function removeSpans(){
    let spans = document.querySelectorAll('span');
    
    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function removeTasks(tas){
    tasks.splice(tasks.indexOf(tas.textContent), 1);      

    renderTasks();

    //Salvar os dados no Storage
    saveDateToStorage();
}

function saveDateToStorage(){
    // Todo navegador web possui esta capacidade. 
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


