function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
        return true;
    } else {
        return false;
    }
}
function sendForm() {
    var email_user = document.getElementById("emailUser").value;
    var pass_user = document.getElementById("passUser").value;
    var pass1 = false;
    var pass2 = false;

    if (email_user == '') {
        alert('Indique el correo electrónico.');
        document.getElementById("emailUser").focus();
        pass1 = false;
        return false;
    } else {
        if (validarEmail(email_user)) {
            pass1 = true;
        } else {
            alert('El correo no es válido.');
            document.getElementById("emailUser").value = "";
            document.getElementById("emailUser").focus();
            pass1 = false;
            return false;
        }
    }

    if (pass_user == '') {
        alert('Escriba su contraseña.');
        document.getElementById("passUser").focus();
        pass2 = false;
        return false;
    } else {
        pass2 = true;
    }

    if (pass1 && pass2) {
        document.getElementById("formID").submit();
        return true;
    } else {
        return false;
    }
}