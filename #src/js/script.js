@@include('vendors.js');

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
});

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

const addFieldButton = document.querySelector('.form__add'),
      additionalField = document.querySelectorAll('.form__fieldset');

let i = 1;
addFieldButton.addEventListener('click', function (e) {
  e.preventDefault();
  i++;
  if (i < additionalField.length) {
     additionalField[i].classList.remove('dn');
     additionalField[i].classList.add('flip-in-diag-2-br');
  } else {
    addFieldButton.setAttribute('disabled', 'true')
  }
});


// forms

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let validateForms = function (selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form) {
      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert('Ваши данные успешно отправлены')
          }
        }
      }
      xhr.open('POST', 'mail.php', true)
      xhr.send(formData);
      form.reset();
    }
  });
}

validateForms('.form', { email: { required: true, email: true }, tel: { required: true } });


const checkbox = document.querySelector('.form__policy input[type="checkbox"]');
checkbox.addEventListener('change', function () {
  document.querySelector('.form__btn').removeAttribute("disabled");
});