document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', validateData);
});

function validateData(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var fullname=document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(fullname.length<3){
        alert("Name must be at least 3 characters");
    }
    else if (!email.endsWith("@gmail.com")) {
        alert("The inputted email must end with @gmail.com");
    } else if (password.length < 1) {
        alert("Password must not be empty");
    } else {
        filter();
    }
}

function filter() {
    window.location.href = '../../catalogue/bestseller.html';
}
