/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
function toggleBoxContent(box) {
	box.classList.toggle("expand");
  }

// --------- for fade-scroll --------- //
const fadeElements = document.querySelectorAll('.fade-scroll');

const fadeInOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3, // Adjust this value to control the fade-in point
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, fadeInOptions);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});
// ------------------------------------- //

// --------- for pan-ins --------- //
const panElementsL = document.querySelectorAll('.pan-scroll-left');

const panInOptionsL = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3, // Adjust this value to control the fade-in point
};

const panObserverL = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('pan-in-left');
      observer.unobserve(entry.target);
    }
  });
}, panInOptionsL);

panElementsL.forEach((element) => {
  panObserverL.observe(element);
});


const panElementsR = document.querySelectorAll('.pan-scroll-right');

const panInOptionsR = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3, // Adjust this value to control the fade-in point
};

const panObserverR = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('pan-in-right');
      observer.unobserve(entry.target);
    }
  });
}, panInOptionsR);

panElementsR.forEach((element) => {
  panObserverR.observe(element);
});
// ------------------------------------- //


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);