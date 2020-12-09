var grid = document.querySelector(".grid-container");
var items = document.querySelectorAll(".info");

function startAnimation() {
  for (var item of items) {
        item.classList.add("active");
  }
}

window.addEventListener('scroll', function(e) {
    var scroll = window.pageYOffset;
    document.querySelector("header").style.transform = 'translateY(' + scroll * .8 + 'px)';

    var position = grid.getBoundingClientRect().top;
    if (position <= scroll){
      window.requestAnimationFrame(function() {
        startAnimation();
      })
    }
})

function addActive() {
  var nav = document.getElementsByClassName(".nav-container");
  nav.classList.add("active");
}
