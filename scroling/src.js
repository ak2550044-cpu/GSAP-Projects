gsap.registerPlugin(ScrollTrigger);

const marquee = document.querySelector(".marquee");

gsap.to(marquee, {
	x: () => -(marquee.scrollWidth - window.innerWidth),
	ease: "none",
	scrollTrigger: {
		trigger: "#page2",
		start: "top top",
		end: () => `+=${marquee.scrollWidth - window.innerWidth}`,
		pin: true,
		scrub: 1,
		invalidateOnRefresh: true
	}
});

window.addEventListener("load", () => ScrollTrigger.refresh());
