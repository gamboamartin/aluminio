gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;

let panelsSectionP = document.querySelector("#panels-p"),
	panelsContainerP = document.querySelector("#panels-container-P"),
	tweenP;
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		if (targetElem && panelsContainerP.isSameNode(targetElem.parentElement)) {
			let totalScroll = tweenP.scrollTrigger.end - tweenP.scrollTrigger.start,
				totalMovement = (panelsP.length - 1) * targetElem.offsetWidth;
			y = Math.round(tweenP.scrollTriggerP.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
			},
			duration: 1
		});
	});
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});


const panelsP = gsap.utils.toArray("#panels-container-P .panel-producto");
tweenP = gsap.to(panelsP, {
	xPercentP: -100 * ( panelsP.length - 1 ),
	easeP: "none",
	scrollTriggerP: {
		trigger: "#panels-container-P",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panelsP.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainerP.offsetWidth - innerWidth)
	}
});







