const Todo = function({title, description, dueDate, priority, notes, checklist, status, project}){
    this.title = title
    this.description = description
    this.dueDate = dueDate,
    this.priority = priority
    this.notes = notes
    this.checklist = checklist
    this.status = status
    this.projectId = project

    this.id = todoList.length + 1
}

Todo.prototype.edit = function(props){
    Object.assign(this, props)
}

const todoList = []

function createTodo(title, projectId='default'){
    const newTodo = new Todo(title, projectId)
    todoList.push(newTodo)
}

function findTodo(todoId){
    return todoList.find(todo => todo.id === todoId)
}

function changeTodoProject(todoId, projectId){
    editTodo(todoId, {projectId})
}

function changeTodoPriority(todoId, priority){
    editTodo(todoId, {priority})
}

function changeStatus(todoId, status){
    editTodo(todoId, {status})
}

function editTodo(todoId, props){
    const todo = findTodo(todoId)
    todo.edit(props)
}

function showTodosForProject(projectId){
    console.log(`todos of project id ${projectId}`)
    const todos = todoList.filter(todo => todo.projectId === projectId)
    return todos
}

function showTodo(todoId){
    return todoList.find(todo => todo.id === todoId)
}

function deleteTodo(todoId){
    todoList = todoList.filter(todo => todo.id !== todoId)
}