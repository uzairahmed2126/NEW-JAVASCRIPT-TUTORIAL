let userName      = document.getElementById('user-name')
let userPassword  = document.getElementById('user-password')
let userNameError = document.getElementById('userNameError')
let userPassError = document.getElementById('userPassError')
let flag = 1;

function validateForm() {
  if (userName.value === '') {
        userNameError.style.visibility = 'visible'
        userNameError.innerHTML='User Name is Empty'
        flag = 0;
  } 
  else if(userName.value.length <= 5){
        userNameError.innerHTML='User Name require up to 5 character'
        flag = 0;
    }
  else if(userName.value === true){
        userNameError.style.visibility = 'hidden'
        flag = 0;
  }
  else{
    userNameError.innerHTML=''
    flag = 1;
  }
  if (userPassword.value === '') {
        userPassError.style.visibility = 'visible'
        userPassError.innerHTML='User password is Empty'
        flag = 0;
        
  }
  else if (userPassword.value === true) {
        userPassError.style.visibility = 'hidden'
        flag = 0;
  }
  else{
    userPassError.innerHTML=''
    flag = 1;
  }
  if(flag){
  return true
  }else{
    return false
  }
}
