
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('nav-menu')[0]

toggleButton.addEventListener('click',()=>{
  navbar.classList.toggle('active')
})


  $('.box-outer-gb').slick({
    dots: 2,
     infinite: true,
     speed: 300,
     slidesToShow: 6,
     slidesToScroll: 1,
     autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
                }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.slider-outer').slick({
    dots: 2,
     infinite: true,
     speed: 300,
     slidesToShow: 2,
     slidesToScroll: 1,
     autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
