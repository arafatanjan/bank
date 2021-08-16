document.getElementById('login-submit').addEventListener('click', function () {

    const emilFeild = document.getElementById('user-emil');
    const userEmil = emilFeild.value;
    // usser pssword
    const psswordField = document.getElementById('user-pssword');
    const userPssword = psswordField.value;
    // check emil ddress
    if (userEmil == 'wwwww@gmil.com' && userPssword == 'secret') {
        window.location.href = 'bnking.html';
    }

});

//hndle deposit button event

document.getElementById(deposit - button).addEventListener('click', function log() {
    console.log('deposit button clicked');
})