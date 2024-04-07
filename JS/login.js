
function logeo() {
    let user = document.getElementById("Usuario").value
    let pass = document.getElementById("password").value

    if(user=="Juan" && pass=="1234") {
        window.location="https://www.youtube.com/watch?v=9nkg00WkzvA"
    } else {
        alert("Contraseña incorrepta, se ha activado el mecanismo de autodestrucción")
    } 
}
console.log("hola mundo")