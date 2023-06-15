// Get the modal and the button that opens it
const modal = document.getElementById("myModal");
const button = document.getElementById("login-button");
//const btnIn = document.getElementById("btn-in");


// Get the close button and the form inside the modal
const close = modal.querySelector(".close");
//const form = modal.querySelector("#login-form");

// When the user clicks on the button, open the modal
//btnIn.onclick = function() {
//    modal.style.display = "block";
//}

//button.onclick = function() {
//  modal.style.display = "block";
//}

// When the user clicks on the close button, close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks outside the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user submits the login form, send the data to the server
//form.onsubmit = function(event) {
//  event.preventDefault();
//  const data = new FormData(form);
//  fetch('/login/', {
//    method: 'POST',
//    body: data
//  }).then(response => {
//    if (response.ok) {
//      // Redirect the user to the authorized content
//      window.location.href = '/authorized/';
//    } else {
//      // Display an error message to the user
//      alert('Invalid username or password');
//    }
//  });
//}


