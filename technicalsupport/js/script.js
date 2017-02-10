$(document).ready(function(){

  // BG changer

  $('.pink').click(function(){
    $('body').css('background','#A23E48');
  });
  $('.blue').click(function(){
    $('body').css('background','#3E7CB1');
  });
  $('.yellow').click(function(){
    $('body').css('background','#FFD07B');
  });
  $('.white').click(function(){
    $('body').css('background','white');
  });
  $('.black').click(function(){
    $('body').css('background','black');
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

  // var today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth()+1; //January is 0!

  // var yyyy = today.getFullYear();
  // if(dd<10){
  //     dd='0'+dd;
  // } 
  // if(mm<10){
  //     mm='0'+mm;
  // } 
  // var today = dd+'/'+mm+'/'+yyyy;
  // document.getElementById("DATE").value = today;
});
