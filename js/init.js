(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('ul.tabs').tabs();
        $('.slider').slider({full_width: false});
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        });
    var logoHeight = $('#myDiv img').height();
    if (logoHeight < 104) {
        var margintop = (104 - logoHeight) / 2;
        $('#myDiv img').css('margin-top', margintop);
    }
    }); // end of document ready
})(jQuery); // end of jQuery name space
