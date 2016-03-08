window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...
    var submitButton = document.getElementById('submit');
    var evenTextField = document.getElementById('evennumber');
    var oddTextField = document.getElementById('oddnumber');

    submitButton.addEventListener('click', function() {
        validateText(oddTextField, 1);
        validateText(evenTextField, 0);
    }, false);

});


function validateText(textField, modulus) {
    var num = +textField.value;
    if (num%2 === modulus) { 
        textField.classList.remove('invalid');
        textField.classList.add('valid');
    } else {
        textField.classList.remove('valid');
        textField.classList.add('invalid');
    }
}
