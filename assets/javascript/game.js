//$("#jewel_1").html("<img src='assets/images/if_Amber_127310.png' />");
//$("#jewel_2").html("<img src='assets/images/if_Amethyst_127306.png' />");
//$("#jewel_3").html("<img src='assets/images/if_Aquamarine_127303.png' />");
//$("#jewel_4").html("<img src='assets/images/if_Emerald_127302.png' />");

var number=0, guess=0, loss=0, win=0, scoreTotal=0, score=0;
var jew1, jew2, jew3, jew4;
var jewels

//var scoreTotal = 0;
console.log("scoreTotal at begginning: " + scoreTotal);
//Random number
number = Math.floor(Math.random() * 101)+19;
$("#number").html(number);
var jewels = -0;
//Assign randon numbers to crystals
$("img").each(function() {
   $(this).attr("data-value", Math.floor(Math.random() * 12));
});

//Function to store the accumulated score from choosing the crystals
function addScore (num) {
	scoreTotal = scoreTotal + num;
	$("#scoret").html(scoreTotal); 
}

$("#jewel_1").click(function() {
	
	jew1 = $("#jewel_1").attr("data-value");
	console.log("tipo: " + typeof(jew1));
	jew1 = Number(jew1);
	console.log("Val de jew1: " + jew1);
    console.log("nuevo tipo: " + typeof(jew1));
  addScore(Number(jew1));
});

$("#jewel_2").click(function() {
	jew2 = $("img").attr("data-value");
	console.log("tipo: " + typeof(jew2));
	jew2 = Number(jew2);
	console.log("Val de jew2: " + jew2);
    console.log("nuevo tipo: " + typeof(jew2));
  addScore(Number(jew2));
});

$("#jewel_3").click(function() {
  addScore(Number($("img").attr("data-value")));
});

$("#jewel_4").click(function() {
  addScore(Number($("img").attr("data-value")));
});