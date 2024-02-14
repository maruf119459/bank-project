document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-mail');
    const passwordField = document.getElementById('user-password');
    if(emailField.value === 'maruf@gmail.com' && passwordField.value === '12345'){
        window.location.href = 'bank.html';
    }
    else{
        const loginMessage = document.getElementById('login-message');
        loginMessage.innerText = 'Invalid Password or Mail Id! Please enter enter right password and mail.'
    }

})