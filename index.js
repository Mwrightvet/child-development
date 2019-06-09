// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*window.addEventListener("load", function () {
    function sendData() {
      var XHR = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      var FD = new FormData(form);
  
      // Define what happens on successful data submission
      XHR.addEventListener("load", function(event) {
        alert(event.target.responseText);
      });
  
      // Define what happens in case of error
      XHR.addEventListener("error", function(event) {
        alert('Oops! Something went wrong.');
      });
  
      // Set up our request
      XHR.open("POST", "https://example.com/cors.php");
  
      // The data sent is what the user provided in the form
      XHR.send(FD);
    }
   
    // Access the form element...
    var form = document.getElementById("myForm");
  
    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      sendData();
    });
  });
*/