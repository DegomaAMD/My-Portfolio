const emailBtn = document.querySelector('#email-btn');
const emailText = document.querySelector('.email-text');

emailBtn.addEventListener("click", () => {
const textArea = document.createElement('textarea');
textArea.value = emailText.textContent;
document.body.appendChild(textArea);
console.log(emailText.textContent)
textArea.select();
document.execCommand("copy");
document.body.removeChild(textArea);
emailBtn.setAttribute
});
