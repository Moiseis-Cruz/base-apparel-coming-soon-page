// const btnEnviar = document.getElementById("btn-enviar")

// let email = document.getElementById("email")

// btnEnviar.addEventListener("click", function (e) {
//     e.preventDefault()

//     let formControl = document.getElementsByClassName("form-control")

//     if(email.value.trim() === ""){
//         formControl[0].classList.add("invalid")
//     }else{
//         formControl[0].classList.remove("invalid")
//     }
// })

const form = document.getElementById("form")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let formControl = document.querySelector(".form-control")
    
    let email = document.getElementById("email")
    
    let emailValue = email.value.trim()
    
    if(emailValue === ""){
        //formControl.classList.remove("enabled")
        formControl.classList.add("invalid")
    }else{
        formControl.classList.remove("invalid")
        //formControl.classList.add("enabled")
    }
})