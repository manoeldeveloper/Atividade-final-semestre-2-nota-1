function addTask() {
    const taskInput = document.getElementById("task");
    const taskDateInput = document.getElementById("taskDate");
    const taskText = taskInput.value.trim();
    const taskDate = taskDateInput.value;

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <span class="task-date">Data: ${taskDate}</span>
            <button class="edit-button" onclick="editTask(this)">Editar</button>
            <button onclick="confirmDelete(this)">Excluir</button>
        `;
        listItem.setAttribute("data-criacao", taskDate); // Define a data de criação
        taskList.appendChild(listItem);
        taskInput.value = "";
        taskDateInput.value = "";
    }
}

function filterTasksByDate() {
    const selectedDate = document.getElementById("filterDate").value;

    const taskItems = document.querySelectorAll("#taskList li");

    taskItems.forEach((task) => {
        const taskDate = task.getAttribute("data-criacao");

        if (selectedDate === "" || selectedDate === taskDate) {
            task.style.display = "block"; 
        } else {
            task.style.display = "none"; 
        }
    });
}

function confirmDelete(button) {
    if (confirm("Tem certeza de que deseja excluir esta tarefa?")) {
        deleteTask(button);
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function editTask(button) {
    const span = button.parentElement.querySelector("span");
    const newText = prompt("Edite a tarefa:", span.textContent);

    if (newText !== null) {
        span.textContent = newText;
    }
}
