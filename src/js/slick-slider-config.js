'use strict';

$('.glazing-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: true
      }
    },
    {
      breakpoint: 529,
      settings: {
        slidesToShow: 1,
        arrows: true
      }
    }
  ]
});

$('.order-finishing-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: true
      }
    }
  ]
});
