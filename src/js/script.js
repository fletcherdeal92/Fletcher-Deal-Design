// Modal

//get modal
var modal = document.getElementById('form');

//get button
var btn = document.getElementById('contact');

btn.onclick = function() {
    modal.style.display = 'block';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
} 