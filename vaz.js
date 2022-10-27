const form = document.querySelector("form")

form.addEventListener("submit", Myfunc)

function Myfunc(event) {
    event.preventDefault();
    const Email = event.target[1].value
    const Password = event.target[2].value
    console.log(Email)
    console.log(Password)

    const localEmail = localStorage.getItem("email")
    const localPassword = localStorage.getItem("password")

    if (localEmail === Email || localPassword === Password) {
        location.replace("./va.html")
    } else {
        alert("nimadur hato")
    }
}