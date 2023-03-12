const emailRegex = 
 new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
 const isValidEmail = emailRegex.test("email_address@domain.com")

let emailField = document.querySelector('#your-email')
if (emailField) {
    let emailError = document.querySelector('.form-error-email')
    let submitButton = document.querySelector('#submit-button')
    emailField.addEventListener('keyup',function(){
        const isValidEmail = emailRegex.test(emailField.value)
        if (isValidEmail) {
            emailError.style.display = 'none'
            submitButton.disabled = 'false'
            submitButton.removeAttribute('disabled')
        } else {
            emailError.style.display = 'inline-block'
            submitButton.disabled = 'true'
        }
    })
}