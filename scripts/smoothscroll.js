$(document).ready(function(){
  
  $(".navbar a, a[href='#about']").on('click', function(event) {

  if (this.hash !== "") {

    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1300, function(){

      window.location.hash = hash;
      });
    }
  });
})