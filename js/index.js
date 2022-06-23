const inputArea = document.querySelectorAll(".inputs input");
const submit = document.querySelector('.claim')
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

function checkForEmpty() {
    if (firstName.value.trim() == "") {
        document.querySelector('.error-first-name').classList.remove('hidden')
        document.querySelector('.first-name').id = "error"
    } else {
        document.querySelector('.error-first-name').classList.add('hidden')
        document.querySelector('.first-name').id = ""
        firstName.value = firstName.value.trim()
    }
    // 
    if (lastName.value.trim() == "") {
        document.querySelector('.error-last-name').classList.remove('hidden')
        document.querySelector('.last-name').id = "error"
    } else {
        document.querySelector('.error-last-name').classList.add('hidden')
        lastName.value = lastName.value.trim()
        document.querySelector('.last-name').id = ""
    }
    // 
    if (password.value == "" || password.value.length < 8) {
        document.querySelector('.error-password').classList.remove('hidden')
        document.querySelector('.password').id = "error"
    } else {
        document.querySelector('.error-password').classList.add('hidden')
        document.querySelector('.password').id = ""
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        document.querySelector('.error-email').classList.add('hidden')
        document.querySelector('.email').id = ""
    } else {
        document.querySelector('.error-email').classList.remove('hidden')
        document.querySelector('.email').id = "error"
    }
}
submit.addEventListener('click', () => {
    checkForEmpty()
})