const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        message.innerText = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        message.innerText = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    message.innerText = "we will reach you soon";
    message.style.color = "green";

    contactForm.reset();
});

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


function addTask() {

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.innerText = task;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }

});