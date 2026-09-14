const addButton: HTMLButtonElement|null = document.querySelector('#todoAddButton');
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField");
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer){

    addButton?.addEventListener('click',(e)=> {



        
    })
}