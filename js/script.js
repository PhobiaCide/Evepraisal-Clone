document.addEventListener('DOMContentLoaded', () => {
  const settingsBtn = document.getElementById('settings-btn');
  const uploadBtn = document.getElementById('upload-btn');
  const settingsPanel = document.getElementById('settings-panel');
  const screen = document.getElementById('screen');

  settingsBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('visible');
    screen.style.display = settingsPanel.classList.contains('visible') ? 'block' : 'none';
  });

  screen.addEventListener('click', () => {
    settingsPanel.classList.remove('visible');
    screen.style.display = 'none';
  });

  // For demonstration purposes, I'll add an event listener to the Upload button
  uploadBtn.addEventListener('click', () => {
    alert('Upload button clicked!');
  });

  // Code to handle other functionality in your app goes here...
});
