//$(function(){

  var number=0, guess=0, loss=0, win=0, scoreTotal=0, score=0;
 initValues();
  //Random number to match
  function initValues() {
    number = Math.floor(Math.random() * 101)+19;
    $("#number").html(number);
    scoreTotal=0;  
    //Assign randon numbers to crystals
  /*  $("img").each(function() {
     $(this).attr("data-value", Math.floor(Math.random() * 12));
    });*/

    $("#jewel_1").attr("data-value", Math.floor(Math.random() * 12));
    $("#jewel_2").attr("data-value", Math.floor(Math.random() * 12));
    $("#jewel_3").attr("data-value", Math.floor(Math.random() * 12));
    $("#jewel_4").attr("data-value", Math.floor(Math.random() * 12));
    console.log("scoreTotal inside initValue: " + scoreTotal);
  }

  //Function to store the accumulated score from choosing the crystals
  function addScore (num) {
    scoreTotal = scoreTotal + num;
    $("#scoret").html(String(scoreTotal)); 
    if (number === scoreTotal) {
    	win++;
    	console.log("Win value: " + win);
    	$("#wins").html("Wins: " + win);
    	initValues();
    } else if ( number < scoreTotal ){
    	loss++;
    	$("#loss").html("Losses: " + loss);
    	$("#scoret").html(scoreTotal + " You Lost!");
    	initValues();
    }
  };

  //Get the value of crystals and call function to add its value
  $('#jewel_1').click(function () {
    addScore(Number($('#jewel_1').attr("data-value")));
  });

  $('#jewel_2').click(function () {
    addScore(Number($('#jewel_2').attr("data-value")));
  });

  $("#jewel_3").click(function() {
    addScore(Number($("#jewel_3").attr("data-value")));
  });

  $("#jewel_4").click(function() {
    addScore(Number($("#jewel_4").attr("data-value")));
  });
 
//});//End ready -for JQuery-