let addTask = function(){
    let txt = document.getElementById('task-text');
    let body = document.getElementById('tasks');
    let div = document.createElement('div');
    div.setAttribute('class', 'alert alert-warning alert-dismissible');
    let item = document.createElement('p');
    item.setAttribute('class', 'task');
    let content = document.createTextNode(txt.value);
    let close_button = document.createElement('button');
    close_button.setAttribute('class', 'close');
    close_button.setAttribute('type', 'button');
    close_button.setAttribute('data-dismiss', 'alert');
    // close_button.setAttribute('aria-label', 'Close');
    let icon = document.createElement('span');
    // icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '×';

    if(txt.value === ''){
        alert("Please enter a task!");
        txt.focus();
    }
    else{
        item.appendChild(content);
        close_button.appendChild(icon);
        div.appendChild(item);
        div.appendChild(close_button);
        body.appendChild(div);
        txt.focus();
    }
    document.getElementById('task-text').value = '';
};
