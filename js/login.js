document.getElementById('btn-submit').addEventListener('click', function () {
    // get the email address inside the email field
    const emailField = document.getElementById('user-mail');
    const email = emailField.value;
    // console.log(email);
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    // console.log(email);
    // console.log(password);

    if (email === 'amarbap@gmail.com' && password === '12345') {
        window.location.href = 'bank.html'
    }
    else {
        alert('invaild-user! try agmain!!!!!!!');
    }
})