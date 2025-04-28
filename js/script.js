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

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".NavList")
const kryziukas = document.querySelector(".kryziukas")
const overlay = document.querySelector(".overlay")

hamburger.addEventListener('click', ()=>{
    overlay.classList.toggle('slide') 
    kryziukas.classList.toggle('active')
});

kryziukas.addEventListener('click', ()=>{
    overlay.classList.toggle('slide')
    kryziukas.classList.toggle('active')
})