//Step 4 - Get textfield and button from markup
var todoName = <HTMLInputElement>document.getElementById("todoName");
var todoButton = document.getElementById("todoButton");


//Step 5 - Add _empty_ button click event
//Step 10 - Add todo item to existing list
//Step 14 - Optional - Create instance of new class
//Step 16 - Optional - Add generics
todoButton.onclick = x => {
    todoListItems.push(new Todo(todoName.value));
    addTodo(todoName.value);
}


//Step 6 -- Get list container from markup
var todoList = document.getElementById("todoContainer");


//Step 13 - Optional - Create Todo class
//Step 17 - Optional - Add generics
class Todo<T> implements ITodo<T>{
    constructor(public name: T){
        
    }
}


//Step 7 - JavaScript array to contain all todo items
//Step 12 - Optional - Modify array to contain implementation of new interface
//Step 18 - Optional - Add generics
var todoListItems: ITodo<string>[] = [
  new Todo("1"),
  new Todo("2"),
  new Todo("3"),
  new Todo("4"),
  new Todo("5") 
];


//Step 8 - Create function to add element to container from "Step 5"
function addTodo(name: string){
    var todoTextItem = <HTMLLIElement>document.createElement("li");
    todoTextItem.textContent = name;
    
    todoList.appendChild(todoTextItem);
}


//Step 9 - Loop through all todo items and add to container from "Step 5"
todoListItems.forEach(x => addTodo(x.name));


//Step 11 - Optional - Create interface
//Step 15 - Optional - Modify to be generic
interface ITodo<T>{
    name: T;
}