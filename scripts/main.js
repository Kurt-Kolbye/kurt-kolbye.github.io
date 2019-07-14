$(document).ready(function() {

    function ViewModel() {
        var self = this;

        self.templateView = ko.observable('Home');

        // Navigate around the site
        self.changeView = function(viewName) {
            self.templateView(viewName);
            self.updateActiveNav();
        };

        // Updates the current navigation item's class
        self.updateActiveNav = function () {
            // Remove the nav-active class from current nav item
            $('.nav-active').removeClass('nav-active');

            switch (self.templateView()) {
                case 'Home':
                    $('#nav-home').addClass('nav-active');
                    break;
                case 'About':
                    $('#nav-about').addClass('nav-active');
                    break;
                case 'Projects':
                    $('#nav-projects').addClass('nav-active');
                    break;
                case 'Contact':
                    $('#nav-contact').addClass('nav-active');
                    break;
                default:
                    break;
            }
        };

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
        };
    };
    
    ko.applyBindings(new ViewModel());
});

