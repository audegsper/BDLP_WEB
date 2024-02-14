
function showDiv(){
	for (var i = 0; i < mainDivEl.length; i++) {
		animateM( mainDivEl.eq(i) );
	}
}

/* 이 상품 어때요? */
// let prdSwiper;
function initSwiper(bool, between, view) {
  
  return prdSwiper = new Swiper('.prd-slide1 .swiper-container', {
    spaceBetween: between,		
    slidesPerView: view,
    // loop: bool,
	centeredSlides: bool,
	speed: 1500,					
	grabCursor: true,
    autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	  },
	navigation: {	
		nextEl: '.prd-slide1 .swiper-button-next',
		prevEl: '.prd-slide1 .swiper-button-prev',
	},
	on: {
		activeIndexChange: function () {
		  var display_area = this.realIndex;
		  console.log(display_area);
		  $(
			".gallery_prd .gallery_prd_inner .right_area .right_title > div > ul > li"
		  )
			.eq(display_area)
			.addClass("show");
		  $(
			".gallery_prd .gallery_prd_inner .right_area .right_title > div > ul > li"
		  )
			.eq(display_area)
			.siblings()
			.removeClass("show");
		},
	  },
  });
}

function mainSizeListener() {
	if ( $(window).outerWidth() <= 768) {
		initSwiper(false, 10, 2.3);
	} else {
		initSwiper(true, 5, 'auto');
	}
}

$(document).ready(function(){
	mainSizeListener();
});
