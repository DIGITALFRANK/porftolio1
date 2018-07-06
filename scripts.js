
$( document ).ready(function() {
    




    console.log("we ready!")





/* ///////////////////////////////////// SCROLL ANIMATIONS /////////////////////////////////////// */
    /* /////////// hide/show static header /////////// */
    let lastScrollTop = 0;
    let delta = 5;
    let didScroll;
    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function(event){
    didScroll = true;
    });
    // run hasScrolled() and reset didScroll status
    setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
    }, 250);
    function hasScrolled() {
        // do stuff here...
        let st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop){
            // Scroll Down
            $('.my_nav').removeClass('reveal-nav');
            $('.my_nav').addClass('hide-nav');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.my_nav').removeClass('hide-nav');
                $('.my_nav').addClass('reveal-nav');
            }
        }
        
        lastScrollTop = st;
    }
    /* /////////// end header scroll animation /////////// */



    // Add smooth scrolling to all anchor links
    $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        let hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 200, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
/* /////////////////////////////////// END SCROLL ANIMATIONS //////////////////////////////////// */



});