let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
	if (navWrapper.classList.contains("active")) {
		this.setAttribute("aria-expanded", "false");
		this.setAttribute("aria-label", "menu");
		navWrapper.classList.remove("active");
		document.querySelector('.nav-icon1').classList.remove('open');
	} else {
		navWrapper.classList.add("active");
		this.setAttribute("aria-label", "close menu");
		this.setAttribute("aria-expanded", "true");
		document.querySelector('.nav-icon1').classList.add('open');
		navWrapper.style.paddingBottom = height + "px";
	}
});

//===========class with scroll============

//use window.scrollY
let scrollpos = window.scrollY;
let header = document.querySelector(".site-header");


function add_class_on_scroll() {
	header.classList.add("scrollable");
}

function remove_class_on_scroll() {
	header.classList.remove("scrollable");
}

window.addEventListener('scroll', function () {
	scrollpos = window.scrollY;

	if (scrollpos > 100) {
		add_class_on_scroll();
	} else {
		remove_class_on_scroll();
	}
	console.log(scrollpos);
});

//===========onClick forEach============

// document.querySelectorAll('.btn').forEach((element) => {
//     element.addEventListener('click', function () {
//        alert(this.innerHTML); 
//     });
// });

const swiper = new Swiper('.news__slider', {
   pagination: {
    el: '.swiper-pagination',
     clickable: true,
  },
});

const swiper2 = new Swiper('.gallery__container', {
    slidesPerView: 5,
    // spaceBetween: 15,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
    //  breakpoints: {
    //        1200: {
    //           slidesPerView: 'auto',
    //           spaceBetween: 40,
    //        },
    //        830: {
    //           slidesPerView: 'auto',
    //           spaceBetween: 10, //
    //        }
    //     }
});