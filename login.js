function showForgotPasswordForm() {
    document.getElementById("forgotPasswordForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform login validation and submission (requires backend)
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform registration validation and submission (requires backend)
  });
  
  document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform forgot password submission (requires backend)
  });
  