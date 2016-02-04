$(document).ready(function(){
  var boardArray = [0,0,0,0,0,0,0,0,0];
  var winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];
  var clicks = 0;
  $("#playerInputs").hide();
  $("#start").click(function(){
    $(this).hide();
    $("#playerInputs").show();
  })
  $(".box").click(function(){
    $(this).unbind('click');
    if (clicks % 2 === 0){
      $(this).css('background-image', 'url("images/x.png")');
      ++clicks;
      boardArray[parseInt(this.id)] = 1;
    }
    else if (clicks % 2 === 1) {
      $(this).css('background-image', 'url("images/o.png")');
      ++clicks;
      boardArray[parseInt(this.id)] = -1;
    };

    if (clicks === 9) {
      alert("Game Over")
    };
    console.log(boardArray);
    return boardArray;
  });
  // function winner() {
  //     if(boardArray[0] + boardArray[1] + boardArray[2] === 3 || boardArray[3] + boardArray[4] + boardArray[5] === 3 || boardArray[6] + boardArray[7] + boardArray[8] === 3 || boardArray[0] + boardArray[3] + boardArray[6] === 3 || boardArray[1] + boardArray[4] + boardArray[7] === 3 || boardArray[2] + boardArray[5] + boardArray[8] === 3 || boardArray[0] + boardArray[4] + boardArray[8] === 3 || boardArray[2] + boardArray[4] + boardArray[6] === 3 ) {
  //       alert("X wins");
  //     } else if (boardArray[0] + boardArray[1] + boardArray[2] === -3 || boardArray[3] + boardArray[4] + boardArray[5] === -3 || boardArray[6] + boardArray[7] + boardArray[8] === -3 || boardArray[0] + boardArray[3] + boardArray[6] === -3 || boardArray[1] + boardArray[4] + boardArray[7] === -3 || boardArray[2] + boardArray[5] + boardArray[8] === -3 || boardArray[0] + boardArray[4] + boardArray[8] === -3 || boardArray[2] + boardArray[4] + boardArray[6] === -3 )
  //     {
  //       alert("O wins");
  //     }
  // };
  // $("#field2").click(function(){
  //   $(this).unbind('click');
  //   if(clicks === 0){
  //     $(this).css('background-image', 'url("images/x.png")');
  //     ++clicks;
  //   }else{
  //     $(this).css('background-image', 'url("images/o.png")');
  //     --clicks;
  //   }
  // });
  // $("#field3").click(function(){
  //   $(this).unbind('click');
  //   if(clicks === 0){
  //     $(this).css('background-image', 'url("images/x.png")');
  //     ++clicks;
  //   }else{
  //     $(this).css('background-image', 'url("images/o.png")');
  //     --clicks;
  //   }
  // });
  // $("#field4").click(function(){
  //   $(this).unbind('click');
  //   if(clicks === 0){
  //     $(this).css('background-image', 'url("images/x.png")');
  //     ++clicks;
  //   }else{
  //     $(this).css('background-image', 'url("images/o.png")');
  //     --clicks;
  //   }
  // });
  // $("#field5").click(function(){
  //   $(this).unbind('click');
  //   if(clicks === 0){
  //     $(this).css('background-image', 'url("images/x.png")');
  //     ++clicks;
  //   }else{
  //     $(this).css('background-image', 'url("images/o.png")');
  //     --clicks;
  //   }
  // });
  // $("#field6").click(function(){
  //   $(this).unbind('click');
  //   if(clicks === 0){
  //     $(this).css('background-image', 'url("images/x.png")');
  //     ++clicks;
  //   }else{
  //     $(this).css('background-image', 'url("images/o.png")');
  //     --clicks;
  //   }
  // });
  // $("#field7").click(function(){
  //   $(this).unbind('click');
  //   if(clicks === 0){
  //     $(this).css('background-image', 'url("images/x.png")');
  //     ++clicks;
  //   }else{
  //     $(this).css('background-image', 'url("images/o.png")');
  //     --clicks;
  //   }
  // });
  // $("#field8").click(function(){
  //   $(this).unbind('click');
  //   if(clicks === 0){
  //     $(this).css('background-image', 'url("images/x.png")');
  //     ++clicks;
  //   }else{
  //     $(this).css('background-image', 'url("images/o.png")');
  //     --clicks;
  //   }
  // });
  // $("#field9").click(function(){
  //   $(this).unbind('click');
  //   if(clicks === 0){
  //     $(this).css('background-image', 'url("images/x.png")');
  //     ++clicks;
  //   }else{
  //     $(this).css('background-image', 'url("images/o.png")');
  //     --clicks;
  //   }
  // });
});
