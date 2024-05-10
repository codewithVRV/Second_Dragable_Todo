

let inputTag = document.getElementById("inp")
const btnTag = document.getElementById("btn")
const leftSideTodo = document.querySelector(".parent-left-section")
const rightSideTodo = document.querySelector(".parent-right-section")

btnTag.addEventListener("click", handleNewTodo)

function handleNewTodo () {
    // all Adding functionality start;

    let inputValue = inputTag.value;
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("section")
    sectionDiv.draggable = "true";
    sectionDiv.id = "left-todo";
    let todoTag = document.createElement("p");
    todoTag.textContent = inputValue;
    sectionDiv.appendChild(todoTag);
    let hiddenInputTag = document.createElement("input");
    hiddenInputTag.type="hidden";
    hiddenInputTag.classList.add("input-field", "hidden-input");
    sectionDiv.appendChild(hiddenInputTag);
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttons")
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("button", "edit")
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("button", "delete");
    buttonDiv.append(editButton, deleteButton);
    sectionDiv.appendChild(buttonDiv);
    leftSideTodo.appendChild(sectionDiv)
    inputTag.value = "";

    // all Adding functionality end here;



    // delete functionality starts here;

    deleteButton.addEventListener("click", (e) => {
        // Reach to the parent element targeting child element and remove that element
        e.target.parentElement.parentElement.remove();
    })
    
    // delete functionality ends here;



    // edit functionality starts here;

    editButton.addEventListener("click", (e) => {
        hiddenInputTag.type = "text";
        hiddenInputTag.value = todoTag.textContent;
        hiddenInputTag.addEventListener("keypress", (e) => {
            if(e.code == "Enter"){
                todoTag.textContent = hiddenInputTag.value;
                console.log("pressing Enter:->", hiddenInputTag.value)
                hiddenInputTag.type = "hidden";
                editButton.textContent = "Edit";
            }
        })
    });

    // edit functionality ends here;


    // drag functionality starts here;

    let allTodos = document.querySelectorAll("#left-todo")
    allTodos.forEach((todo) => {
        todo.addEventListener("dragstart", (e) => {
            let selected = e.target;
            rightSideTodo.addEventListener('dragover', (e)=>{
                e.preventDefault()
            })
            rightSideTodo.addEventListener('drop', ()=>{
                rightSideTodo.appendChild(selected)
                selected = null;
            })
            leftSideTodo.addEventListener('dragover', (e)=>{
                e.preventDefault();
            })
            leftSideTodo.addEventListener('drop', ()=>{
                leftSideTodo.appendChild(selected)
                selected = null;
            })
        })
    })

    // drag functionality ends here;

};