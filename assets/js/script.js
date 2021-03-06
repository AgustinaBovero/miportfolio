$(document).ready(function(){

  $("a").click(function(event){      // SMOOTH SCROLLING
    if (this.hash !== "") {
      event.preventDefault();

      var numeral = this.hash;

      $("html, body").animate({
        scrollTop: $(numeral).offset().top
      }, 800, function(){
        window.location.hash = numeral;
      });
    }
  });

   $('[data-toggle="tooltip"]').tooltip()    // TOOLTIP

   $("footer a").attr({target: "_blank"});   // TARGET _BLANK
});
