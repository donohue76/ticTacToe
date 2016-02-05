$(document).ready(function(){
  $("#playerInputs").hide();
  $("#score").hide();
  $(".grid").hide();
  $("#reset").hide();
  $("#start").click(function(){
    $("#startBtn").hide();
    $("#playerInputs").show();
  })
  $("#submit").click(function(){
    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    if (player1.length <= 0 || player2.length <=0) {
      alert("Please enter a name");
    } else {
      $("#playerInputs").hide();
      $("#names h2").html(player1 + " vs. " + player2);
      $("#name1").html(player1);
      $("#name2").html(player2);
      $("#score").show();
      $(".grid").fadeIn(2000);
      ticTacToeGame();
    }
  })
  function ticTacToeGame(){
    var boardArray = [0,0,0,0,0,0,0,0,0];
    var clicks = 0;
    $(".box").click(function(){
      $(this).off('click');
      if (clicks % 2 === 0){
        $(this).css('background-image', 'url("images/x.png")');
        boardArray[parseInt(this.id)] = 1;
      } else if (clicks % 2 === 1) {
        $(this).css('background-image', 'url("images/o.png")');
        boardArray[parseInt(this.id)] = -1;
      };
      clicks++;
      draw(boardArray, clicks);
      console.log(boardArray);
      console.log(whoWon(boardArray));
    });
  };
  $("#reset").click(function(){
    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    $(".box").css('background-image','');
    $("#names h2").html(player1 + " vs. " + player2);
    $(".grid").bind('click', ticTacToeGame());
    $(this).fadeOut(2000);
  });
  function sum(arr,x,y,z) {
    return arr[x] + arr[y] + arr[z];
  };
  function findSum(arr) {
    if (sum(arr,0,1,2) === 3 || sum(arr,3,4,5) === 3 || sum(arr,6,7,8) === 3 || sum(arr,0,3,6) === 3 || sum(arr,1,4,7) === 3 || sum(arr,2,5,8) === 3 || sum(arr,2,4,6) === 3 || sum(arr,0,4,8) === 3) {
      return 3;
    } else if (sum(arr,0,1,2) === -3 || sum(arr,3,4,5) === -3 || sum(arr,6,7,8) === -3 || sum(arr,0,3,5) === -3 || sum(arr,1,4,7) === -3 || sum(arr,2,5,8) === -3 || sum(arr,2,4,6) === -3 || sum(arr,0,4,8) === -3) {
      return -3;
    } else {
      return 0;
    };
  };
  var player1Arr = [];
  var player2Arr = [];
  function whoWon(arr) {
    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    if(findSum(arr) === 3) {
      player1Arr.push(1);
      $("#names h2").html(player1 + " is the winner!");
      $("#player1Score p").html(player1Arr.length);
      $(".box").off('click');
      $("#reset").fadeIn(2000);
    } else if (findSum(arr) === -3) {
      player2Arr.push(1);
      $("#names h2").html(player2 + " is the winner!");
      $("#player2Score p").html(player2Arr.length);
      $(".box").off('click');
      $("#reset").fadeIn(2000);
    } else if (findSum(arr) === 0) {
      return "No winner yet";
    };
  };
  function draw(arr,clicks) {
    if (findSum(arr) === 0 && clicks === 9) {
      $("#names h2").html("Draw!");
      $("#reset").fadeIn(2000);
    };
  };
  $('footer').hover(function() {
    $(this).stop().animate({
        opacity: 1
    }, 100);
  }, function() {
    $(this).stop().animate({
        opacity: 0
    }, 100);
  }).css('opacity', 0);
});
