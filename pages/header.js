// Load the header HTML file using an AJAX request
const xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (this.status === 200) {
    // Inject the HTML into the header element
    document.querySelector('header').innerHTML = this.responseText;
  }
};
xhr.open('GET', 'header.html');
xhr.send();
