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
let header = document.getElementById("header");


function add_class_on_scroll() {
	header.classList.add("scrollable");
}

function remove_class_on_scroll() {
	header.classList.remove("scrollable");
}

window.addEventListener('scroll', function () {
	//Here you forgot to update the value
	scrollpos = window.scrollY;

	if (scrollpos > 10) {
		add_class_on_scroll();
	} else {
		remove_class_on_scroll();
	}
	console.log(scrollpos);
});

//===========onClick forEach============

document.querySelectorAll('.btn').forEach((element) => {
    element.addEventListener('click', function () {
       alert(this.innerHTML); 
    });
});