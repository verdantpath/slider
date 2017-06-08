$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide-group');
  var $slides = $this.find('.slide');
  var buttonArray = [];
  var currentIndex = 0;
  var timeout;

  // move() = The function to move the slides goes here

  function advance() {
    clearTimeout(timeout);
    // Start timer to run an anonymous function every 4 seconds
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $.each($slides, function(index) {
    //create a button element for the button
  });


});
