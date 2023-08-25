const addTaskBtn = document.getElementById('addTask');
const taskNameInput = document.getElementById('taskName');
const assignedToInput = document.getElementById('assignedTo');
const categoriesSelect = document.getElementById('categories');
const taskDateInput = document.getElementById('taskDate');
const recordsDisplay = document.getElementById('records');

let taskArray = [];
let edit_id = null;

let objStr = localStorage.getItem('tasks');

if (objStr != null) {
    taskArray = JSON.parse(objStr);
}


addTaskBtn.onclick = () => {
    const taskName = taskNameInput.value;
    const assignedTo = assignedToInput.value;
    const categories = categoriesSelect.value;
    const taskDate = taskDateInput.value;

    taskArray.push({
        'taskName': taskName,
        'assignedTo': assignedTo,
        'categories': categories,
        'taskDate': taskDate,
        'status': 'Pending'
    });

    SaveTasks(taskArray);

    taskNameInput.value = '';
    assignedToInput.value = '';
    categoriesSelect.value = 'Work';
    taskDateInput.value = '';
    addTaskBtn.innerText = 'Add Task';
};

function SaveTasks(taskArray) {
    let str = JSON.stringify(taskArray);
    localStorage.setItem('tasks', str);
    DisplayTasks();
}







