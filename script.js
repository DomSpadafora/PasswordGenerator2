//great function for generating a password

const passwordGenerator = () => {
  let length = prompt('How long would you like your password to be?');
    if (length <8 || length > 128){
      alert('Password nees to be between 8-128')
      return passwordGenerator();
    }

    let input = "";
    let password = "";

    let number = confirm('Would you like a number?')
    if(number) input += '0123456789';

    let lowerCase = confirm('Would you like a lower case letter?')
    if(lowerCase) input += 'abcdefghijklmnopqrstuvwxyz'

    let uppercase = confirm('Would you like an uppercase letter?')
    if(uppercase) input += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let special = confirm('Would you like a special character?')
    if (special) input += ('.?/!*&%')

    for (let i = 0; i < length; i++) {
      password += input[Math.floor(Math.random()*input.length)]
    }

    document.querySelector('#password').innerHTML = password;
    
}


document.querySelector('button').addEventListener('click', passwordGenerator)