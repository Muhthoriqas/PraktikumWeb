var button = document.getElementById("add");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

var lis = document.querySelectorAll("li");

var deleteButton;


function inputLength() {
    return input.value.length;
}


function DeleteButton(parent) {

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("delete"));
    button.className = "delete";

    parent.appendChild(button);
}


function ListElement() {

    var li = document.createElement("li");
    var span = document.createElement("span");

    li.appendChild(span);
    span.appendChild(document.createTextNode(input.value));

    ul.appendChild(li);

    input.value = "";

    DeleteButton(li);

    deleteButton = document.querySelectorAll(".delete")


    updateDeleteButtons()

    li.addEventListener('click', toggleDoneClass)

   
}


function addList() {
    if (inputLength() > 0) {
        ListElement();
    }
}




function updateDeleteButtons() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function() {
            this.parentNode.remove()
        })
    }
}

button.addEventListener("click", addList);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', toggleDoneClass);

    DeleteButton(lis[i])
}

deleteButton = document.querySelectorAll(".delete")

updateDeleteButtons()