function submit(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)

    var a = localStorage.getItem("name")
    var b = localStorage.getItem("email")
    console.log(a)
    console.log(b)
}


function logout(){
    localStorage.clear()
    window.location.href=".login.html"
}