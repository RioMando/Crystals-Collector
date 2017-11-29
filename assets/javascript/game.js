$("#jewel_1").html("<img src='assets/images/if_Amber_127310.png' />");
$("#jewel_2").html("<img src='assets/images/if_Amethyst_127306.png' />");
$("#jewel_3").html("<img src='assets/images/if_Aquamarine_127303.png' />");
$("#jewel_4").html("<img src='assets/images/if_Emerald_127302.png' />");

var number, guess, loss, win, scoreTotal, score = 0;
var jew1, jew2, jew3, jew4 = 5;
jew1=10;
$("#jewel_1").on("click", function() {
  $("jewel_1").html(jew1);
});