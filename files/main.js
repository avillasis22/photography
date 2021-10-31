$(function(){
  setTimeout(function(){
    $('html, body')
    .css({
      'overflow': 'auto'
    })
    .animate({
      scrollTop: $('.myDiv').offset().top
    }, 2000);
  }, 2000);
});

sr.reveal('.image, .caption, .bioDiv', {
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    easing: 'ease',
    mobile: true,
    reset: true,
    viewFactor: 0.2,
});
