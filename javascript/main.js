/* Javascript bzw jquery: focus, click auf icon */
$(document).ready(function() {
    /* Focus - boxshadow, dass nicht nur der hover effekt stimmt */
    $('#searchbar').focus(function(event) {
        $('.searchbar_container').addClass('focus')
    })
    $('#searchbar').blur(function(event) {
        $('.searchbar_container').removeClass('focus')
    })
    /* Klick aufs Icon soll ins input feld springen */
    $('.searchbar-icon').click(function(event) {
        $('#searchbar').focus();
    })

})