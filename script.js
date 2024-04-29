document.addEventListener('DOMContentLoaded', function() {
    function addTask() {
        const taskTitleInput = document.getElementById('taskTitle');
        const taskTimeInput = document.getElementById('taskTime');
        const taskTypeRadio = document.querySelector('input[name="taskType"]:checked');

        const title = taskTitleInput.value.trim();
        const time = taskTimeInput.value.trim();
        const type = taskTypeRadio.value;

        if (title && time) {
            const targetList = type === 'personal' ? document.getElementById('personalTasks') : document.getElementById('workTasks');
            const taskDiv = document.createElement('div');
            taskDiv.className = 'list-item';
            taskDiv.innerHTML = `<span>${title}</span> <span>${time}</span>`; // Added space between spans
            targetList.appendChild(taskDiv);
            taskTitleInput.value = '';
            taskTimeInput.value = '';
        } else {
            alert('Please fill in both task title and time.');
        }
    }

    const addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.addEventListener('click', addTask);
});

const toggleModeBtn = document.getElementById('toggleMode');
toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Function to create a task element
function createTaskElement(title, time) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'list-item';
    taskDiv.innerHTML = `<span>${title}</span> <span>${time}</span>`; // Added space between spans
    return taskDiv;
}
