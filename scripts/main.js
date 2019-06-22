// TODO: If screen width is greater than 768px, add
// functionality to remove "nav-responsive"


$(document).ready(function() {

    function ViewModel() {
        var self = this;

        self.toggleNav = function() {
            var navItems = document.getElementById("nav-items");
            
            navItems.classList.toggle("nav-responsive");
        }
    };
    
    ko.applyBindings(new ViewModel);
});

