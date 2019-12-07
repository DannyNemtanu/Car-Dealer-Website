
$('.fst').ready(function(){
  $images1 = $('.fst #subimages');
  $largeImage1 = $('.fst #largeImage');
  $images1.delegate('img','click', function(){
      $largeImage1.attr('src',$(this).attr('src').replace($images1,$largeImage1));
  });
});
$('.scnd').ready(function(){
  $images2 = $('.scnd #subimagesright')
  $largeImage2 = $('.scnd #largeImage')
  $images2.delegate('img','click', function(){
      $largeImage2.attr('src',$(this).attr('src').replace($images2,$largeImage2));
  });
});
$('.thrd').ready(function(){
  $images3 = $('.thrd #subimages');
  $largeImage3 = $('.thrd #largeImage');
  $images3.delegate('img','click', function(){
      $largeImage3.attr('src',$(this).attr('src').replace($images3,$largeImage3));
  });
});
$('.frth').ready(function(){
  $images4 = $('.frth #subimagesright');
  $largeImage4 = $('.frth #largeImage');
  $images4.delegate('img','click', function(){
      $largeImage4.attr('src',$(this).attr('src').replace($images4,$largeImage4));
  });
});

$('.fst').ready( function(){
  $specs1 = $('.fst #infospecs');
  $infobtn1 = $('.fst #important>a>img');

  $infobtn1.click(function(){
    $specs1.slideToggle();
  });
});
$('.scnd').ready( function(){
  $specs2 = $('.scnd #infospecs');
  $infobtn2 = $('.scnd #important>a>img');

  $infobtn2.click(function(){
    $specs2.slideToggle();
  });
});

$('.thrd').ready( function(){
  $specs3 = $('.thrd #infospecs');
  $infobtn3 = $('.thrd #important>a>img');

  $infobtn3.click(function(){
    $specs3.slideToggle();
  });
});

$('.frth').ready( function(){
  $specs4 = $('.frth #infospecs');
  $infobtn4 = $('.frth #important>a>img');

  $infobtn4.click(function(){
    $specs4.slideToggle();
  });
});

