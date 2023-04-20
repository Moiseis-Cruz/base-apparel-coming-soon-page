const btnEnviar = document.getElementById("btn-enviar")

let email = document.getElementById("email")

btnEnviar.addEventListener("click", function (e) {
    e.preventDefault()

    let formControl = document.getElementsByClassName("form-control")

    if(email.value.trim() === ""){
        formControl[0].classList.add("invalid")
    }else{
        formControl[0].classList.remove("invalid")
    }
})