$(document).ready(function(){
  var clicks = 0;
  $("#field1").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
  $("#field2").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
  $("#field3").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
  $("#field4").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
  $("#field5").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
  $("#field6").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
  $("#field7").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
  $("#field8").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
  $("#field9").click(function(){
    $(this).unbind('click');
    if(clicks === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
    }else{
      $(this).css('background-image', 'url("images/o.png")');
      --clicks;
    }
  });
});
