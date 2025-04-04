document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission

    const fields = ["name", "email", "company", "title", "message"];
    let hasErrors = false;

    fields.forEach(function (id) {
        const input = document.getElementById(id);
        const error = input.nextElementSibling;

        if (input.value.trim() === "") {
            input.classList.add("error");
            if (error && error.classList.contains("error-message")) {
                error.classList.add("active");
            }
            hasErrors = true;
        } else {
            input.classList.remove("error");
            if (error && error.classList.contains("error-message")) {
                error.classList.remove("active");
            }
        }
    });

    if (!hasErrors) {
        alert("Form submitted successfully!");
    }
});