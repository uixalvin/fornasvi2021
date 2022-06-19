// Nav Toggler
function navToggler(){
    $(".nav-contents").toggleClass("nav-open");
    $(".nav-contents").toggleClass("nav-closed");
}

// Search Toggler
function searchToggle(){
    $(".nav-search-input").toggleClass("search-closed");
    $(".nav-search-input").toggleClass("search-open");
}

// Countdown
// Set the date we're counting down to
var countDownDate = new Date("July 1, 2022 00:00:15").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
    $(".days").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer-countdown").innerHTML = "FORNAS VI 2021 SEDANG BERLANGSUNG";
  }
}, 1000);