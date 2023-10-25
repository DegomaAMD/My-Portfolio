const emailBtn = document.querySelector('#email-btn');
const emailText = document.querySelector('.email-text');
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

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



if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
