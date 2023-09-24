const emailBtn = document.getElementsByClassName('emailBtn');
const emailText = document.getElementsByClassName('email');

emailBtn.addEventListener("click", function(){
const textArea = document.createElement('textarea');
textArea.value = emailText.textContent;
document.body.appendChild(textArea);
textArea.select();
document.execCommand("copy");
document.body.removeChild(textArea);
emailBtn.setAttribute
});

