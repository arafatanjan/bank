document.getElementById('login-submit').addEventListener('click', function () {

    const emilFeild = document.getElementById('user-emil');
    const userEmil = emilFeild.value;
    // usser pssword
    const psswordField = document.getElementById('user-pssword');
    const userPssword = psswordField.value;
    // check emil ddress
    if (userEmil == 'wwwww@gmail.com' && userPssword == 'secret') {
        window.location.href = 'bnking.html';
    }

});

//hndle deposit button event

