/**
 * Created by Desant on 06.05.2017.
 */
$( document ).ready(function() {
    $( ".js-show-popup" ).on( "click", function() {
        $("#contact-popup").addClass("is-active");
        $("body").addClass("modal-open");
    });
    $( ".js-close-popup" ).on( "click", function() {
        $("#contact-popup").removeClass("is-active");
        $("body").removeClass("modal-open");
    });
});