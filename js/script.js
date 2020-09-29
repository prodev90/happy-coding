$(document).ready(function(){
$(".btn").click(function(){
  var value = $(this).attr("data-filter");
  if (value == "all")
  {
    $(".filter").show("1000");
  }
  else
  {
  $(".filter").not("."+value).hide("1000");
  $(".filter").filter("."+value).show("1000");
  }
  //add active class
  $("ul .btn").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  })

})

});

/* 1 carousel */
$('.carousel-pegaronline').carousel({
     interval: 4000,
     wrap: true,
     keyboard: true
});


/* 2 carousel */
$('#carousel').carousel({
     interval: 6000,
     wrap: true,
     keyboard: true
});


$(document).ready(function() {
  $('#top-btn').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  });
});
