window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...
    var submitButton = document.getElementById('submit');
    var evenTextField = document.getElementById('evennumber');
    var oddTextField = document.getElementById('oddnumber');
    
    var num;
    
    submitButton.addEventListener('click', function() {
        num = Number(evenTextField.textContent);    
        if (num%2 != 1) { 
            evenTextField.classList.add('invalid');
        } else {
            evenTextField.classList.add('valid');
        }
    }, false);

});
