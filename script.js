//great function for generating a password

const passwordGenerator = () => {
  let length = prompt('How long would you like your password to be?');
    if (length <8 || length > 128){
      alert('Password nees to be between 8-128')
      return passwordGenerator();
    }

    let input = "";
    let passowrd = "";

    let number = confirm('Would you like a number?')
    if(number) input += '0123456789';

    let 

  
    
}





document.querySelector('button').addEventListener('click', passwordGenerator)