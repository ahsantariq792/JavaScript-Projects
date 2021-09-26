let signup = () => {
    var a = document.getElementById('email').value;
    var b = document.getElementById('pass').value
    localStorage.setItem('email', a)
    localStorage.setItem('password', b)
}

let signin = () => {
    var a = document.getElementById('loginemail').value;
    var b = document.getElementById('loginpass').value;
    if (a == localStorage.getItem('email') && b == localStorage.getItem('password')) {
        window.location.href = './home.html'
    } else {
        alert('Invalid email or Pass')
    }
}

let logout = () => {
    localStorage.clear()
}