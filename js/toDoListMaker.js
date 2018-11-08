document.getElementById('newLi').onclick = function(){
    var newListItem = document.getElementById('newText').value;
    var ul = document.getElementById("toDoList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newListItem));
    li.setAttribute("class", "list-group-item"); // added line
    ul.appendChild(li);
};

var elem = document.getElementById("newText");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
        var newListItem = document.getElementById('newText').value;
        var ul = document.getElementById("toDoList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newListItem));
        li.setAttribute("class", "list-group-item"); // added line
        ul.appendChild(li);
        document.getElementById('newText').value = "";
    }
}

document.getElementById('destroy').onclick = function(){
    document.getElementById("toDoList").innerHTML = "";
};