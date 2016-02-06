$(document).ready(function(){
  //hides the player inputs, score div, table, and reset button
  $("#playerInputs").hide();
  $("#score").hide();
  $(".grid").hide();
  $("#reset").hide();
  //start button clicks to player inputs
  $("#start").click(function(){
    $("#startBtn").hide();
    $("#playerInputs").show();
  })
  //submit button for player names
  $("#submit").click(function(){
    //pulls names from the text box input
    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    //if names are not present do not continue and prompts them to input names
    if (player1.length <= 0 || player2.length <=0) {
      alert("Please enter a name");
    } else {
      //hides the player input
      $("#playerInputs").hide();
      //displays names at bottom of page
      $("#names h2").html(player1 + " vs. " + player2);
      //shows the score at the bottom
      $("#name1").html(player1);
      $("#name2").html(player2);
      $("#score").show();
      //fades in tic tac toe game and initializes the game function
      $(".grid").fadeIn(2000);
      ticTacToeGame();
    }
  })
  //function for the tic tac toe game
  function ticTacToeGame(){
    //initialize an array for position of x and o clicks
    var boardArray = [0,0,0,0,0,0,0,0,0];
    //defines a variable clicks
    var clicks = 0;
    //when a box is clicked do the following:
    $(".box").click(function(){
      //turns off click for the already clicked box
      $(this).off('click');
      //if statement to switch between x and o
      //if click is even display an x
      if (clicks % 2 === 0){
        $(this).css('background-image', 'url("images/x.png")');
        //insert a 1 in the index position of that box for the click
        //1 represents x
        boardArray[parseInt(this.id)] = 1;
      } else if (clicks % 2 === 1) {
        $(this).css('background-image', 'url("images/o.png")');
        //insert a -1 in the index position of that box for the click
        //-1 represents 0
        boardArray[parseInt(this.id)] = -1;
      };
      //increases click by 1 every time a box is clicked
      clicks++;
      draw(boardArray, clicks);
      console.log(boardArray);
      console.log(whoWon(boardArray));
    });
  };
  //reset button function
  $("#reset").click(function(){
    //calls player names again
    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    //clears background images
    $(".box").css('background-image','');
    //displays names again
    $("#names h2").html(player1 + " vs. " + player2);
    //reinitializes the tic tac toe game
    $(".grid").bind('click', ticTacToeGame());
    //hides the reset button
    $(this).fadeOut(2000);
  });
  //function that takes the sum of 3 positions in an array
  function sum(arr,x,y,z) {
    return arr[x] + arr[y] + arr[z];
  };
  //function that looks for winning combos
  function findSum(arr) {
    //if winning combos = 3 then return 3
    if (sum(arr,0,1,2) === 3 || sum(arr,3,4,5) === 3 || sum(arr,6,7,8) === 3 || sum(arr,0,3,6) === 3 || sum(arr,1,4,7) === 3 || sum(arr,2,5,8) === 3 || sum(arr,2,4,6) === 3 || sum(arr,0,4,8) === 3) {
      return 3;
    }//if winning combos = -3 then return -3
    else if (sum(arr,0,1,2) === -3 || sum(arr,3,4,5) === -3 || sum(arr,6,7,8) === -3 || sum(arr,0,3,5) === -3 || sum(arr,1,4,7) === -3 || sum(arr,2,5,8) === -3 || sum(arr,2,4,6) === -3 || sum(arr,0,4,8) === -3) {
      return -3;
    } //if there is no winner yet
    else {
      return 0;
    };
  };
  //make arrays for both players which store the wins
  var player1Arr = [];
  var player2Arr = [];
  //function to display the winner
  function whoWon(arr) {
    //takes player name inputs
    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    //if the sum is 3 show that the first player won
    if(findSum(arr) === 3) {
      //adds a 1 to the player 1 array
      player1Arr.push(1);
      //display the winner
      $("#names h2").html(player1 + " is the winner!");
      //takes the length of the array and displays that as number of wins
      $("#player1Score p").html(player1Arr.length);
      //stops the boxes from being clickable
      $(".box").off('click');
      //fade in the reset button
      $("#reset").fadeIn(2000);
    } //if the sum is -3 then player 2 wins
    else if (findSum(arr) === -3) {
      //add a 1 to the player 2 array
      player2Arr.push(1);
      //display the winner
      $("#names h2").html(player2 + " is the winner!");
      //takes the length of the array and displays that as number of wins
      $("#player2Score p").html(player2Arr.length);
      //stops the boxes from being clickable
      $(".box").off('click');
      //fade in the reset button
      $("#reset").fadeIn(2000);
    } //if there is no winner yet
    else if (findSum(arr) === 0) {
      return "No winner yet";
    };
  };
  //function to determine a draw, takes the parameters of array and clicks
  function draw(arr,clicks) {
    //if the sum is 0 and the clicks are 9
    if (findSum(arr) === 0 && clicks === 9) {
      //display draw on the screen
      $("#names h2").html("Draw!");
      //show the reset button
      $("#reset").fadeIn(2000);
    };
  };
  //fade in the footer on hover
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
