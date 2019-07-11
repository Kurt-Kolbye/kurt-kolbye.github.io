$(document).ready(function() {

    function ViewModel() {
        var self = this;

        // Small screen open/close of navigation bar
        self.toggleNav = function() {
            var navItems = $("#nav-items");
            
            if (navItems.is(":visible")) {
                navItems.slideUp(function() {
                    // Catch and remove display: none in case a user resizes above a small screen
                    navItems.css('display', '');
                });
            }
            else {
                navItems.slideDown();
            }
        }
    };
    
    ko.applyBindings(new ViewModel);
});

