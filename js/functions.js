function validaFormularioContato() {
    var number = document.getElementById("number").value;

    if(number.length < 8) {
        document.getElementById("success").innerHTML = ""
        document.getElementById("error").innerHTML = "Invalid ";
        document.getElementById("contactForm").reset();
        return false;
    } else {
        document.getElementById("error").innerHTML = "Tente novamente"
        document.getElementById("success").innerHTML = "Obrigada pelo contato!"
        return true;
    }
}
