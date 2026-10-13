const emailAddress = ['yehor.yudin', 'gmail.com'].join(String.fromCharCode(64));

document.querySelectorAll('[data-obfuscated-email]').forEach((element) => {
  element.textContent = emailAddress;
});

document.addEventListener('copy', (event) => {
  const selection = window.getSelection();
  if (selection && selection.toString().includes(emailAddress)) {
    event.preventDefault();
  }
});
