$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
     
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    });
    
    // Slide in elements on scroll
    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });
  })
  
  
  
  
  
  
  const navbarMenu = document.querySelector(".navbar .links");
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const hideMenuBtn = navbarMenu.querySelector(".close-btn");
  const showPopupBtn = document.querySelector(".login-btn");
  const formPopup = document.querySelector(".form-popup");
  const hidePopupBtn = formPopup.querySelector(".close-btn");
  const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
  
  // Show mobile menu
  hamburgerBtn.addEventListener("click", () => {
      navbarMenu.classList.toggle("show-menu");
  });
  
  // Hide mobile menu
  hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());
  
  // Show login popup
  showPopupBtn.addEventListener("click", () => {
      document.body.classList.toggle("show-popup");
  });
  
  // Hide login popup
  hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
  
  // Show or hide signup form
  signupLoginLink.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
      });
  });