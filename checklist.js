let textBox = document.querySelector("#input-bar");
let addBtn = document.querySelector("#enter-button");
let taskGroup = document.querySelector("#list");

// when task is clicked on draw a line and tick it
taskGroup.addEventListener("click",(ev) => {
    if(ev.target.classList.contains('task-bar')){
        ev.target.classList.toggle("task-bar-background");
        ev.target.children[1].classList.toggle("checked-text");
        ev.target.children[0].checked = !ev.target.children[0].checked;
    }
    else if(ev.target.classList.contains("text")){
        ev.target.parentElement.classList.toggle("task-bar-background");
        ev.target.classList.toggle("checked-text");
        ev.target.previousElementSibling.checked = !ev.target.previousElementSibling.checked;
    }
    else if(ev.target.classList.contains("check-box")){
        ev.target.parentElement.classList.toggle("task-bar-background");
        ev.target.nextElementSibling.classList.toggle("checked-text");
    }
    else if(ev.target.classList.contains("close")){
        ev.target.parentElement.remove();
    }
},false);

// to add tasks
addBtn.addEventListener("click",() => {
    
    let inputValue = textBox.value;
    if(inputValue.trim().length === 0){
        alert("You need to add something");
    }
    else{
        let divTaskbar = document.createElement("div");
        divTaskbar.classList.add("task-bar");

        let checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkBox");
        checkBox.classList.add("check-box");

        let spanText = document.createElement("span");
        spanText.classList.add("text");
        let txt = document.createTextNode(inputValue);
        spanText.appendChild(txt);

        let closeDiv = document.createElement("div");
        closeDiv.classList.add("close");
        let closeTxt = document.createTextNode("\u00D7");
        closeDiv.appendChild(closeTxt);

        divTaskbar.appendChild(checkBox);
        divTaskbar.appendChild(spanText);
        divTaskbar.appendChild(closeDiv);

        taskGroup.appendChild(divTaskbar);

        textBox.value = "";
    }
});