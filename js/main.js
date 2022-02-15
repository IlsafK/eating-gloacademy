const swiper = new Swiper('.swiper', {
// Optional parameters
loop: true,

// Navigation arrows
navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
},

});

const login = (user) => {

    console.log(user);
    buttonLogin.style.display = 'none'
    Username.style.display = 'flex'
    loginOut.style.display = 'flex'

    Username.textContent = user.login

    modalAuth.style.display = 'none'

}

const logout = () => {

}
const Login = document.querySelector('.button-login')
const modalAuth = document.querySelector('.modal-auth')
const authClose = document.querySelector('.button-modal-close')
const modalForm = document.getElementById('form')

const buttonLogin = document.querySelector('.button-login')
const Username = document.querySelector('.user')
const loginOut = document.querySelector('.login-out')

const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')

Login.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
})

authClose.addEventListener('click', () => {
    modalAuth.style.display = 'none'
})

loginOut.addEventListener('click', () => {
    buttonLogin.style.display = 'flex'
    Username.style.display = 'none'
    loginOut.style.display = 'none'

    Username.textContent = ''

    localStorage.removeItem('user')
})

modalForm.addEventListener('submit', (event) => {

    const user = {
        login: inputLogin.value,
        passsword: inputPassword.value
    }

    localStorage.setItem('user', JSON.stringify(user))
    login(user);
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}

