(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

//  Contact Mailing script

// function sendEmail(){
//   Email.send({
//     SecureToken : "  dc4f2bc8-d717-4380-93dd-49aab6e9f048 ",
//       // Host : "smtp.gmail.com",
//       // Username : "pascalosemene@gmail.com",
//       // Password : "2D1861F199C1F67ACF9A7C5138FBC2AEB0AE",
//       To : 'pascalosemene@gmail.com',
//       From : document.getElementById("email").value,
//       Subject : document.getElementById("subject").value,
//       Body : "Name: " + document.getElementById("name").value
//               + "<br> Email: " + document.getElementById("email").value
//               + "<br> Message: " + document.getElementById("message").value
//   }).then(
//     message => alert("Message sent successfully")
//   );
// }
