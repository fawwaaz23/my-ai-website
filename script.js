function showLogin() {
  document.querySelector('.landing').classList.add('hidden');
  document.getElementById('login').classList.remove('hidden');
}

function loginWithGoogle() {
  // Placeholder for Google login
  alert("Google login successful!");
  
  // Hide login and show main interface
  document.getElementById('login').classList.add('hidden');
  document.getElementById('main').style.display = "flex";
}
