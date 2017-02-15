$(document).ready(function(){

  // BG changer

  $('.pink').click(function(){
    $('body').css('background','#A23E48');
    $('.icons p').css('color','black');
  });
  $('.blue').click(function(){
    $('body').css('background','#3E7CB1');
    $('.icons p').css('color','black');
  });
  $('.yellow').click(function(){
    $('body').css('background','#FFD07B');
    $('.icons p').css('color','black');
  });
  $('.white').click(function(){
    $('body').css('background','white');
    $('.icons p').css('color','black');
  });
  $('.black').click(function(){
    $('body').css('background','black');
    $('.icons p').css('color','white');
  });

  // Date and Time

  function updatetime(){
    var now = new Date().toLocaleTimeString();
    $('#time').html(now);
  }

  setInterval(updatetime,1000);
  updatetime();
  
  function date(){
    var today = new Date().toLocaleDateString();
    $('#date').html(today);
  }
  date();

  // Fixed navbar

  var contentPlacement = $('.navbar').position().top + $('.navbar').height();
  $('#content').css('margin-top',contentPlacement);

});
