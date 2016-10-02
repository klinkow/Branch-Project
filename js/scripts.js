$(document).ready(function() {

  $("button").click(function(event) {

    var name = $("#name").val();
    $(".hello").show();
    $(".name").text(name);

    var cuisine = $("#cuisine").val();
    var cost = $("#cost").val();

    if (cuisine==="Asian" && cost==="MM") {
      $(".AsMM").show();
    } else if (cuisine === "European" && cost==="MM") {
      $(".EuMM").show();
    } else if (cuisine === "American" && cost==="MM") {
      $(".AmMM").show();
    } else if (cuisine === "African" && cost==="MM") {
      $(".AfMM").show();
    } else if (cuisine === "Modern-Fusion" && cost==="MM") {
      $(".MoMM").show();
    } else if (cuisine === "Latin American" && cost==="MM") {
      $(".LaMM").show();
    } else if (cuisine==="Asian" && cost==="MMM") {
      $(".AsMMM").show();
    } else if (cuisine === "European" && cost==="MMM") {
      $(".EuMMM").show();
    } else if (cuisine === "American" && cost==="MMM") {
      $(".AmMMM").show();
    } else if (cuisine === "African" && cost==="MMM") {
      $(".AfMMM").show();
    } else if (cuisine === "Modern-Fusion" && cost==="MMM") {
      $(".MoMMM").show();
    } else if (cuisine === "Latin American" && cost==="MMM") {
      $(".LaMMM").show();
    }


  })
})
