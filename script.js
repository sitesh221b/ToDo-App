//have the text of to-do by the user
var txt = document.getElementById('task-text');

//the body of the list
let body = document.getElementById('tasks');

//stores the array of close buttons
var closeBtn = document.getElementsByClassName('remove');


function addTask(){
    // Each div for each item
    let div = document.createElement('div');
    // div.setAttribute('class', 'alert alert-warning alert-dismissible');
    div.setAttribute('class', 'alert alert-warning');
    let item = document.createElement('p');
    item.setAttribute('class', 'task');
    // content has the actual text
    let content = document.createTextNode(txt.value);
    let close_button = document.createElement('button');
    close_button.setAttribute('class', 'remove');
    // close_button.setAttribute('type', 'button');
    // close_button.setAttribute('data-dismiss', 'alert');
    // close_button.setAttribute('aria-label', 'Close');
    let icon = document.createElement('span');
    // icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '×';

    if(txt.value === ''){
        alert("Please enter a task!");
        txt.focus();
    }
    else{
        // localStorage.setItem('list', txt.value)
        item.appendChild(content);
        close_button.appendChild(icon);
        div.appendChild(item);
        div.appendChild(close_button);
        body.appendChild(div);
        txt.focus();
    }
    document.getElementById('task-text').value = '';

    for(var i=0; i<closeBtn.length; i++){
        closeBtn[i].onclick = function(){
            this.parentElement.remove();
        }
    }

}

// for(var i=0; i<closeBtn.length; i++){
//     closeBtn[i].onclick = function(){
//         this.parentElement.remove();
//     }
// }
