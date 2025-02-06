document.addEventListener('DOMContentLoaded', () => {
    const editForm = document.getElementById('editForm');
    if (editForm) {
        editForm.addEventListener('submit', handleFormSubmission);
    }

    const displayPage = document.getElementById('displayPage');
    if (displayPage) {
        displayStoredInput();
    }
});

function handleFormSubmission(event) {
    event.preventDefault();
    
    // Perform validation
    if (!validateInfo()) {
        return;
    }

    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;

    localStorage.setItem('username', username);
    localStorage.setItem('name', name);
    localStorage.setItem('password', password);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('address', address);

    window.location.href = 'hal1.html';
}

function displayStoredInput() {
    const username = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const address = localStorage.getItem('address');

    if (username && name && password && phoneNumber && address) {
        document.getElementById('displayUsername').textContent = username;
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayPassword').textContent = '*********';
        document.getElementById('displayPhoneNumber').textContent = phoneNumber;
        document.getElementById('displayAddress').textContent = address;
    } else {
        document.getElementById('displayUsername').textContent = 'Usermoedhe';
        document.getElementById('displayName').textContent = 'User';
        document.getElementById('displayPassword').textContent = '*****rd';
        document.getElementById('displayPhoneNumber').textContent = '+62 01939929';
        document.getElementById('displayAddress').textContent = 'User Address, Indonesia';
    }
}

function validateInfo() {
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;

    const errorMessage = document.getElementById('errorMessage');

    errorMessage.innerText = "";

    if (username.length === 0) {
        errorMessage.innerText = "Username must have input";
        return false;
    }

    if (name.length === 0) {
        errorMessage.innerText = "Name must have input";
        return false;
    }

    

    if (password.length < 8) {
        errorMessage.innerText = "Password must be at least 8 characters.";
        return false;
    }

    if(phoneNumber.length===0){
        errorMessage.innerText = "Phone number must have input.";
        return false;
    }

    if (isNaN(phoneNumber)) {
        errorMessage.innerText = "Phone number can only contain numbers.";
        return false;
    }
    if (address.length === 0) {
        errorMessage.innerText = "Address must have input";
        return false;
    }
    
    return true;
}
