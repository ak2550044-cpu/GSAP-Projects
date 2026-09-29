const menuButton = document.querySelector("#menu-toggle");
const closeButton = document.querySelector("#close-menu");
const menu = document.querySelector("#full");
const menuContent = menu.querySelectorAll("h4, button");

gsap.set(menu, { xPercent: 100 });
gsap.set(menuContent, { x: 60, opacity: 0 });

const menuTimeline = gsap.timeline({ paused: true });

menuTimeline
	.to(menu, {
		xPercent: 0,
		duration: 0.6,
		ease: "power3.out"
	})
	.to(menuContent, {
		x: 0,
		opacity: 1,
		duration: 0.4,
		stagger: 0.08,
		ease: "power2.out"
	}, "-=0.25");

menuButton.addEventListener("click", () => {
	menuTimeline.play();
	menuButton.setAttribute("aria-expanded", "true");
	menu.setAttribute("aria-hidden", "false");
	menu.style.pointerEvents = "auto";
});

closeButton.addEventListener("click", () => {
	menuTimeline.reverse();
	menuButton.setAttribute("aria-expanded", "false");
	menu.setAttribute("aria-hidden", "true");
	menu.style.pointerEvents = "none";
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
		closeButton.click();
	}
});
