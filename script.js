$.getJSON("https://candaan-api.vercel.app/api/text/random", function (joke) {
  let hasil = joke.data;
  $("#jokes").append("" + hasil + "");
});

$(document).ready(function () {
  $("button").click(function () {
    let content = "";
    $.getJSON("https://candaan-api.vercel.app/api/text/random", function (joke) {
      let hasil = joke.data;
      content = "" + hasil + "";
      $("#jokes").html(content);
    });
  });
});
