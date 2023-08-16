document.addEventListener('DOMContentLoaded', function () {
    // Set a timeout for showing the alert after 3 seconds
    setTimeout(function () {
      var alertBox = document.getElementById("newsletter-alert");
      alertBox.style.display = "block";
  
      // Set an interval for hiding the alert after 8 seconds
      setTimeout(function () {
        alertBox.style.display = "none";
      }, 5000); // 8 seconds (5000 milliseconds)
    }, 3000); // 3 seconds (3000 milliseconds)
  
    document.getElementById("close-btn").addEventListener("click", function () {
      var alertBox = document.getElementById("newsletter-alert");
      alertBox.style.display = "none";
    });
  });
  