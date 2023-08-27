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
// Calculate total, completed, and pending tasks from taskArray
const totalTasksCount = taskArray.length;
const completedTasksCount = taskArray.filter(task => task.status === 'Complete').length;
const pendingTasksCount = totalTasksCount - completedTasksCount;

// Update the task counts in the HTML
document.getElementById('totalTasks').textContent = totalTasksCount;
document.getElementById('completedTasks').textContent = completedTasksCount;
document.getElementById('pendingTasks').textContent = pendingTasksCount;

// Function to display past tasks
function ShowPastFiveTasks() {
    const currentDate = new Date();

    // Filter and sort tasks that have taskDate in the past
    const pastTasks = taskArray.filter(task => new Date(task.taskDate) < currentDate)
        .sort((a, b) => new Date(b.taskDate) - new Date(a.taskDate));

    let statement = '';

    const pastTasksToDisplay = pastTasks.slice(0, 5);

    pastTasksToDisplay.forEach((task, i) => {
        const rowColor = 'style="color: white;"';
        const taskStatus = task.status === 'Complete' ? 'Complete' : 'Past Due';

        statement += `<tr ${rowColor}>
            <th scope="row">${i + 1}</th>
            <td>${task.taskName}</td>
            <td>${task.assignedTo}</td>
            <td>${task.categories}</td>
            <td>${task.taskDate}</td>
            <td>${taskStatus}</td>
        </tr>`;
    });

    recordsDisplay.innerHTML = statement;

    if (pastTasksToDisplay.length === 0) {
        recordsDisplay.innerHTML = '<tr><td colspan="7">No past records found.</td></tr>';
    }
}

// Call the function to display past tasks and update counts
ShowPastFiveTasks();



const clock = document.querySelector(".clock");
        const timeElement = document.querySelector(".time");
        const dateElement = document.querySelector(".date");

        function updateClock() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            const time = `${hours}:${minutes}:${seconds}`;
            const month = now.toLocaleString("default", {
                month: "long"
            });
            const day = now.getDate();
            const year = now.getFullYear();
            const date = `${month} ${day}, ${year}`;
            timeElement.textContent = time;
            dateElement.textContent = date;
        }

        setInterval(updateClock, 1000);