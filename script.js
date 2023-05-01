 var Webflow = Webflow || [];
    Webflow.push(function () {
      // DOMready has fired
      // May now use jQuery and Webflow api

// start everything
      var tabTimeout;
      clearTimeout(tabTimeout);
      tabLoop();

    // Cycle through all tabs. Match class names
    function tabLoop() {
        tabTimeout = setTimeout(function() {
            var $next = $('.tabs-menu').children('.w--current:first').next();

            if($next.length) {
                $next.click();  // user click resets timeout
            } else {
                $('.standard-tab:first').click();
            }
        }, 6000);  // 6 second tab loop (change this)
    }

    // Reset loop if a tab is clicked
    $('.standard-tab').click(function() {
        clearTimeout(tabTimeout);
        tabLoop();
        });
    });
