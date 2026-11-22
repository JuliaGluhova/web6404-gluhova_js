
class Application {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    showInfo() {
        console.log("Новая заявка");
        console.log("Имя: " + this.name);
        console.log("Email: " + this.email);
        console.log("Сообщение: " + this.message);
    }
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const application = new Application(name, email, message);

    application.showInfo();
    document.getElementById("status").textContent = "Заявка успешно отправлена!";
});
