// ================================
// Academic Planner
// ================================

let tasks = [];

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);

    displayTasks();

    input.value = "";
}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach(function (task, index) {

        let li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>

            <div>

                <button onclick="completeTask(this)">
                    ✔
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>

            </div>
        `;

        list.appendChild(li);

    });

}

function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();

}

function completeTask(button) {

    let task = button.parentElement.parentElement;

    task.style.textDecoration = "line-through";
    task.style.color = "gray";

}


// ================================
// Contact Form Validation
// ================================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        formMessage.textContent = "";
        formMessage.className = "";

        if (name === "" || email === "" || phone === "" || message === "") {

            formMessage.textContent = "Please fill in all fields.";
            formMessage.classList.add("error");
            return;

        }

        if (!emailPattern.test(email)) {

            formMessage.textContent = "Please enter a valid email address.";
            formMessage.classList.add("error");
            return;

        }

        if (!/^\d+$/.test(phone)) {

            formMessage.textContent = "Phone number must contain only digits.";
            formMessage.classList.add("error");
            return;

        }

        formMessage.textContent = "✅ Thank you! Your message has been received successfully.";
        formMessage.classList.add("success");

        form.reset();

    });

}