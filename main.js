const background = document.getElementById('bg');
const password = document.getElementById('Password');


password.addEventListener('input',(e)=>{
    var numbers = /[0-9]/g;
    var upperCaseLetters = /[A-Z]/g;
    if(password.value.match(numbers) && password.value.match(upperCaseLetters)) {
    if (e.target.value.length==1) {
        background.style.filter='blur(70px)'
    }
    else if (e.target.value.length==2) {
        background.style.filter='blur(60px)'
    }
    else if (e.target.value.length==3) {
        background.style.filter='blur(50px)'
    }
    else if (e.target.value.length==4) {
        background.style.filter='blur(40px)'
    }
    else if (e.target.value.length==5) {
        background.style.filter='blur(30px)'
    }
    else if (e.target.value.length==6) {
        background.style.filter='blur(20px)'
    }
    else if (e.target.value.length==7) {
        background.style.filter='blur(10px)'
    }
    else if (e.target.value.length==8) {
        background.style.filter='blur(0px)'
    }
}
})