$(document).ready(function() {

	$('a[href^="#"]').click(function(){
    var el = $(this).attr('href');
    $('body, html').animate({
      scrollTop: $(el).offset().top}, 1000);
      return false; 
	});

	$('.portfolio-img img').click(function(){
    var el = $(this).attr('src');
    $('.modal-window img').attr({src: el});
    $('.modal-window').css({display: 'block'});
	});

  $('#close').click(function(){
    $('.modal-window').css({display: 'none'});
  });

  $('.menu-icon').click(function(){
    $('.mobile-menu').toggle();
  });

  var image = [
    "/img/foto-1.jpg",
    "/img/foto-2.jpg",
    "/img/foto-3.jpg",
    "/img/foto-4.jpg",
    "/img/foto-5.jpg",
    "/img/foto-6.jpg",
    "/img/foto-7.jpg",
    "/img/foto-8.jpg",
    "/img/foto-9.jpg",
    "/img/foto-10.jpg",
    "/img/foto-11.jpg",
    "/img/foto-12.jpg"
  ];

  $('#switchForward').click(function(){
    var el = $('.modal-window img').attr('src');
    var i = image.indexOf(el);
    i = i + 1;
    var x = image[i];
    $('.modal-window img').attr({src: x});
  });

  $('#switchBack').click(function(){
    var el = $('.modal-window img').attr('src');
    var i = image.indexOf(el);
    i = i - 1;
    var x = image[i];
    $('.modal-window img').attr({src: x});
  });


});