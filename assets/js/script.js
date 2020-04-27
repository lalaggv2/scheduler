var toDos = ["item 1", "item 2", "item 3"];

function showToDos() {
    document.createElement("div")
    console.log(toDos);
    //document.getElementById("todos");
}

showToDos();
// I need a way to add new to dos
function addToDos(todo) {
    toDos.push(todo);
    showToDos();
}

addToDos("nothing");
addToDos("dormir");
// and a way to modify a todo
function changeToDos(index, newToDo) {
    toDos[index] = newToDo;
    showToDos();
}

changeToDos(0, "changed");
changeToDos(3, "nada");
// and a way to delete to dos
function deleteToDo(index) {
    toDos.splice(index, 1);
    showToDos();
}

deleteToDo(0);