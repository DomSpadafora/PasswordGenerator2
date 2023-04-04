//great function for generating a password

const passwordGenerator = () => {
  let length = prompt('how long would you like your password to be?');
    if (length <8 || length > 128){
      alert('Password nees to be between 8-128')
      return passwordGenerator();
    }

  
    
}





document.querySelector('button').addEventListener('click', passwordGenerator)