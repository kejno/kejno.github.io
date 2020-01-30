
//НАЖАТИЕ НА КНОПКИ EDIT COMP DELETE

function editCompDel() {
    // НАЖАЛИ НА COMPLATED

    let btnSuccess = document.querySelectorAll('.btn-success');
    let completedTasks = document.getElementById('completedTasks');
    let itemList = document.querySelectorAll('.list-group-item');

    for (let i = 0; i < btnSuccess.length; i++) {

        btnSuccess[i].onclick = (e) => {

            e.target.parentNode.children[0].style.display = 'none';
            e.target.parentNode.children[1].style.display = 'none';
            completedTasks.prepend(itemList[i]);

            count--;
            localStorage.setItem('a', count);
            document.querySelector('.todo').innerHTML = `ToDo (${count})`;

            count1++;
            localStorage.setItem('b', count1)
            document.querySelector('.completed').innerHTML = `Completed (${count1})`;

            localStorage.setItem('all', document.querySelector('.main').innerHTML)
        }
    }

    //НАЖАЛИ НА DELETE
    let btnDelete = document.querySelectorAll('.btn-danger');
    for (let i = 0; i < btnDelete.length; i++) {

        btnDelete[i].onclick = () => {

            if (itemList[i].parentElement.id == 'currentTasks') {
                count--;
                localStorage.setItem('a', count)
                document.querySelector('.todo').innerHTML = `ToDo (${count})`;
            } else {
                count1--;
                localStorage.setItem('b', count1)
                document.querySelector('.completed').innerHTML = `Completed (${count1})`;
            }
            itemList[i].remove();

            localStorage.setItem('all', document.querySelector('.main').innerHTML)
        }
    }

    //Нажимаем на кнопку EDIT

    let btnInfo = document.querySelectorAll('.btn-info');
    let todoText = document.querySelectorAll('.todo-text');
    let todoInputWrapp = document.querySelectorAll('.todo-input-wrapp');

    for (let i = 0; i < btnInfo.length; i++) {

        btnInfo[i].onclick = () => {
            todoInputWrapp[i].classList.remove('d-none');
            todoInputWrapp[i].children[0].value = todoText[i].innerHTML;
            todoText[i].classList.add('d-none');

            todoInputWrapp[i].children[1].onclick = () => {
                todoInputWrapp[i].classList.add('d-none');
                todoText[i].classList.remove('d-none');
                todoText[i].innerHTML = todoInputWrapp[i].children[0].value;
            }
        }
    }
}

if (localStorage.getItem('all')) {
    document.querySelector('.main').innerHTML = localStorage.getItem('all');
}

document.querySelector('.filter-list-all').style.background = 'rgb(0, 98, 209)';
document.querySelector('.filter-list-all').style.color = '#fff';

let currentTasks = document.getElementById('currentTasks');

function createDiv() {
    return document.createElement('div')
}

let main_form = document.querySelector('.main-form');
let addTask = document.querySelector('#add-task');

document.getElementById('add-task-btn').onclick = () => {
    document.getElementById('inputTitle').value = '';
    document.getElementById('inputText').value = '';
}

//Количество задач ToDO
let count = 0;
if (localStorage.getItem('a')) {

    count = localStorage.getItem('a')
}

//Количество задач Complated
let count1 = 0;
if (localStorage.getItem('b')) {

    count1 = localStorage.getItem('b')
}



main_form.onsubmit = () => {

    document.querySelector('.modal').style.cssText = 'display: none;';
    document.querySelector('.modal-backdrop').remove();
    document.querySelector('.modal').classList.remove('show');
    document.querySelector('.modal').removeAttribute('aria-modal');
    document.querySelector('.modal').setAttribute('aria-hidden', 'true');
    document.querySelector('body').removeAttribute('style')
    document.querySelector('body').removeAttribute('class')

    let liItem = document.createElement('li');
    liItem.classList.add("list-group-item", "d-flex", "w-100", "mb-2");

    let divItem = createDiv();
    divItem.classList.add("w-100", "mr-2");

    let divContent = createDiv();
    divContent.classList.add("d-flex", "w-100", "justify-content-between");

    let titleItem = document.createElement('h5');
    titleItem.classList.add("mb-1", "todo-title");
    titleItem.innerHTML = document.getElementById('inputTitle').value

    let divTitle = createDiv();

    let priority = document.createElement('small');
    priority.classList.add("mr-2");

    let input_radio = document.querySelectorAll('.form-check-input');

    //ВЫБОР ПРИОРИТЕТА В ФОРМе

    for (let i = 0; i < input_radio.length; i++) {
        if (input_radio[i].checked == true) {
            priority.innerHTML = input_radio[i].value + ' priority';
            liItem.classList.add(input_radio[i].value.toLowerCase())
        }
    }

    //ВЫБОР ЦВЕТА ФОНА В ФОРМЕ

    let selectColor = document.querySelector('.select-color');
    let optionsColor = selectColor.options;
    for (let i = 1; i < optionsColor.length; i++) {

        if (optionsColor[i].selected == true) {
            liItem.style.background = optionsColor[i].value
        }
    }

    let date = new Date();

    date.getFullYear();
    let dateAdd = document.createElement('small');
    dateAdd.classList.add('add-date');
    let my_date = (date.getMonth() > 10) ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    dateAdd.innerHTML = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${my_date}.${date.getFullYear()}`;
    liItem.setAttribute('id', `${date.getTime()}`)


    let mainContent = document.createElement('p');
    mainContent.classList.add("mb-1", "w-100", "todo-text");
    mainContent.innerHTML = document.getElementById('inputText').value;

    //Заглавие, такст, приорити, дата
    currentTasks.prepend(liItem);
    liItem.prepend(divItem);
    divItem.prepend(divContent);
    divItem.append(mainContent)
    divContent.append(titleItem);
    divContent.append(divTitle);
    divTitle.append(priority);
    divTitle.append(dateAdd);

    //ИНПУТы И КНОПКА
    let todoInput_wrapp = createDiv();
    todoInput_wrapp.classList.add("d-none", "todo-input-wrapp");
    divItem.append(todoInput_wrapp);

    let todoInput = document.createElement('input');
    todoInput.value = document.getElementById('inputText').value;
    todoInput.classList.add("border", "border-primary", "rounded", "mt-2", "w-75", "todo-text-edit")
    todoInput_wrapp.append(todoInput);

    let todoBtn = document.createElement('button');
    todoBtn.classList.add("btn", "btn-primary", "ml-2");
    todoBtn.innerHTML = 'OK';
    todoInput_wrapp.append(todoBtn);

    //Кнопки
    let dropdown = createDiv();
    dropdown.classList.add("dropdown", "m-2", "dropleft");
    liItem.append(dropdown);

    let dropdown_btn = document.createElement('button');
    dropdown_btn.setAttribute('class', 'btn btn-secondary h-100');
    dropdown_btn.setAttribute('type', 'button');
    dropdown_btn.setAttribute('id', 'dropdownMenuItem1');
    dropdown_btn.setAttribute('data-toggle', 'dropdown');
    dropdown_btn.setAttribute('aria-haspopup', 'true');
    dropdown_btn.setAttribute('aria-expanded', 'false');
    dropdown.append(dropdown_btn);

    let icon_fas = document.createElement('i');
    icon_fas.setAttribute('class', 'fas fa-ellipsis-v');
    icon_fas.setAttribute('aria-hidden', 'true');
    dropdown_btn.append(icon_fas);

    let dropdown_menu = createDiv();
    dropdown_menu.setAttribute('class', 'dropdown-menu p-2 flex-column');
    dropdown_menu.setAttribute('id', 'dropdown');
    dropdown_menu.setAttribute('aria-labelledby', 'dropdownMenuItem1');
    dropdown_menu.setAttribute('x-placement', 'left-start');
    dropdown_menu.setAttribute('style', 'position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-2px, 0px, 0px);');
    dropdown.append(dropdown_menu);

    let complete_btn = document.createElement('button');
    let edit_btn = document.createElement('button');
    let delete_btn = document.createElement('button');
    complete_btn.setAttribute('type', 'button');
    edit_btn.setAttribute('type', 'button');
    delete_btn.setAttribute('type', 'button');
    complete_btn.setAttribute('class', 'btn btn-success w-100');
    edit_btn.setAttribute('class', 'btn btn-info w-100 my-2');
    delete_btn.setAttribute('class', 'btn btn-danger w-100');
    complete_btn.innerHTML = 'Complete';
    edit_btn.innerHTML = 'Edit';
    delete_btn.innerHTML = 'Delete'
    dropdown_menu.append(complete_btn);
    dropdown_menu.append(edit_btn);
    dropdown_menu.append(delete_btn);

    //ВЫВОД КОЛИЧЕСТВО ЗАВЕРШЕННЫХ И НЕЗАВЕРШЕННЫХ ЗАДАЧ

    count++;
    localStorage.setItem('a', count);

    document.querySelector('.todo').innerHTML = `ToDo (${count})`;

    localStorage.setItem('all', document.querySelector('.main').innerHTML)

    editCompDel();

    return false
}

editCompDel();
colorTheme();

//ВЫВОД КОЛИЧЕСТВО ЗАВЕРШЕННЫХ И НЕЗАВЕРШЕННЫХ ЗАДАЧ

document.querySelector('.todo').innerHTML = `ToDo (${count})`;
document.querySelector('.completed').innerHTML = `Completed (${count1})`;

//Filter High Medium Low

document.querySelector('.filter-list-low').onclick = () => {
    let liFilter = document.querySelectorAll('.list-group-item');
    document.querySelector('.filter-list-low').style.background = 'rgb(0, 98, 209)';
    document.querySelector('.filter-list-low').style.color = '#fff';
    document.querySelector('.filter-list-medium').style.background = '#fff';
    document.querySelector('.filter-list-medium').style.color = '#000';
    document.querySelector('.filter-list-high').style.background = '#fff';
    document.querySelector('.filter-list-high').style.color = '#000';
    document.querySelector('.filter-list-all').style.background = '#fff';
    document.querySelector('.filter-list-all').style.color = '#000';


    for (let i = 0; i < liFilter.length; i++) {

        if (liFilter[i].classList[liFilter[i].classList.length - 1] != 'low') {
            liFilter[i].classList.remove('d-flex');
            liFilter[i].style.display = 'none';
        } else {
            liFilter[i].style.display = 'block';
            liFilter[i].classList.add('d-flex');
        }
    }

    localStorage.setItem('all', document.querySelector('.main').innerHTML)
}

document.querySelector('.filter-list-medium').onclick = () => {
    let liFilter = document.querySelectorAll('.list-group-item');
    document.querySelector('.filter-list-medium').style.background = 'rgb(0, 98, 209)';
    document.querySelector('.filter-list-medium').style.color = '#fff';
    document.querySelector('.filter-list-high').style.background = '#fff';
    document.querySelector('.filter-list-high').style.color = '#000';
    document.querySelector('.filter-list-low').style.background = '#fff';
    document.querySelector('.filter-list-low').style.color = '#000';
    document.querySelector('.filter-list-all').style.background = '#fff';
    document.querySelector('.filter-list-all').style.color = '#000';

    for (let i = 0; i < liFilter.length; i++) {

        if (liFilter[i].classList[liFilter[i].classList.length - 1] != 'medium') {
            liFilter[i].classList.remove('d-flex');
            liFilter[i].style.display = 'none';
        } else {
            liFilter[i].style.display = 'block';
            liFilter[i].classList.add('d-flex');
        }
    }
    localStorage.setItem('all', document.querySelector('.main').innerHTML)
}

document.querySelector('.filter-list-high').onclick = () => {
    let liFilter = document.querySelectorAll('.list-group-item');
    document.querySelector('.filter-list-high').style.background = 'rgb(0, 98, 209)';
    document.querySelector('.filter-list-high').style.color = '#fff';
    document.querySelector('.filter-list-medium').style.background = '#fff';
    document.querySelector('.filter-list-medium').style.color = '#000';
    document.querySelector('.filter-list-low').style.background = '#fff';
    document.querySelector('.filter-list-low').style.color = '#000';
    document.querySelector('.filter-list-all').style.background = '#fff';
    document.querySelector('.filter-list-all').style.color = '#000';

    for (let i = 0; i < liFilter.length; i++) {

        if (liFilter[i].classList[liFilter[i].classList.length - 1] != 'high') {
            liFilter[i].classList.toggle('d-flex');
            liFilter[i].style.display = 'none';
        } else {
            liFilter[i].style.display = 'block';
            liFilter[i].classList.add('d-flex');
        }
    }
    localStorage.setItem('all', document.querySelector('.main').innerHTML)
}

document.querySelector('.filter-list-all').onclick = () => {
    let liFilter = document.querySelectorAll('.list-group-item');
    document.querySelector('.filter-list-high').style.background = '#fff';
    document.querySelector('.filter-list-high').style.color = '#000';
    document.querySelector('.filter-list-medium').style.background = '#fff';
    document.querySelector('.filter-list-medium').style.color = '#000';
    document.querySelector('.filter-list-low').style.background = '#fff';
    document.querySelector('.filter-list-low').style.color = '#000';
    document.querySelector('.filter-list-all').style.background = 'rgb(0, 98, 209)';
    document.querySelector('.filter-list-all').style.color = '#fff';

    for (let i = 0; i < liFilter.length; i++) {

        liFilter[i].classList.add('d-flex');

    }
    localStorage.setItem('all', document.querySelector('.main').innerHTML)
}

// Сделай сортировку по дате создания (от новых к старым и наоборот)

let btnSortUp = document.querySelector('.sort-numeric-up');
let currentTasksItems = document.getElementById('currentTasks').children;

btnSortUp.onclick = () => {

    if (currentTasksItems[0].id > currentTasksItems[currentTasksItems.length - 1].id) {
        for (let i = 0; i < currentTasksItems.length; i++) {
            document.querySelector('#currentTasks').prepend(currentTasksItems[i])
        }
    }
    localStorage.setItem('all', document.querySelector('.main').innerHTML)
}

let btnSortDown = document.querySelector('.sort-numeric-down');

btnSortDown.onclick = () => {

    if (currentTasksItems[0].id < currentTasksItems[currentTasksItems.length - 1].id) {
        for (let i = 0; i < currentTasksItems.length; i++) {
            document.querySelector('#currentTasks').prepend(currentTasksItems[i])
        }
    }
    localStorage.setItem('all', document.querySelector('.main').innerHTML)
}

//=============2 Добавь дополнительный функционал:==============

//-переключение на плиточное отображение задач и обратно (переключатель находится в настройках)

let displayTiled = document.getElementById('display-tiled');

displayTiled.onclick = () => {
    if (displayTiled.checked) {
    }
    localStorage.setItem('all', document.querySelector('.main').innerHTML)
}

//ВЫБОР ЦВЕТОВОЙ ТЕМЫ'
function colorTheme() {
    document.querySelector('#bg-color').onchange = () => {
        document.querySelector('.modal-open').style.background = document.querySelector('#bg-color').value
        localStorage.setItem('all', document.querySelector('.main').innerHTML)
    }
}
colorTheme();

//СОХРАРНЕНИЕ ЗАДАЧ С ИСПОЛЬЗОВАНИЕМ localStorage









