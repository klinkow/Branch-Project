$(document).ready(function() {

  $("button").click(function(event) {

    var name = $("#name").val();
    $(".hello").show();
    $(".name").text(name);

    var cuisine = $("#cuisine").val();
    var cost = $("#cost").val();

    if (cuisine==="Asian" && cost==="MM") {
      $(".AsMM").show();
      $(".EuMM").hide();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".LaMM").hide();
      $(".AsMMM").hide();
      $(".EuMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine === "European" && cost==="MM") {
      $(".EuMM").show();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".LaMM").hide();
      $(".AsMMM").hide();
      $(".EuMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine === "American" && cost==="MM") {
      $(".AmMM").show();
      $(".EuMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".LaMM").hide();
      $(".AsMMM").hide();
      $(".EuMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine === "Modern-Fusion" && cost==="MM") {
      $(".MoMM").show();
      $(".EuMM").hide();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".LaMM").hide();
      $(".AsMMM").hide();
      $(".EuMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine === "Latin American" && cost==="MM") {
      $(".LaMM").show();
      $(".EuMM").hide();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".AsMMM").hide();
      $(".EuMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine==="Asian" && cost==="MMM") {
      $(".AsMMM").show();
      $(".EuMM").hide();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".LaMM").hide();
      $(".EuMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine === "European" && cost==="MMM") {
      $(".EuMMM").show();
      $(".EuMM").hide();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".LaMM").hide();
      $(".AsMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine === "American" && cost==="MMM") {
      $(".AmMMM").show();
      $(".EuMM").hide();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".LaMM").hide();
      $(".AsMMM").hide();
      $(".EuMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine === "Modern-Fusion" && cost==="MMM") {
      $(".MoMMM").show();
      $(".EuMM").hide();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".LaMM").hide();
      $(".AsMMM").hide();
      $(".EuMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".LaMMM").hide();
    } else if (cuisine === "Latin American" && cost==="MMM") {
      $(".LaMMM").show();
      $(".EuMM").hide();
      $(".AmMM").hide();
      $(".AfMM").hide();
      $(".MoMM").hide();
      $(".LaMM").hide();
      $(".AsMMM").hide();
      $(".EuMMM").hide();
      $(".AmMMM").hide();
      $(".AfMMM").hide();
      $(".MoMMM").hide();
    }


  })
})
