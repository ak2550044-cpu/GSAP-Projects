const h1 = document.querySelector("h1");

function breakText() {
    const text = h1.textContent.trim();
    const words = text.split(/\s+/);

    h1.innerHTML = words
        .map((word) => {
            const half = Math.ceil(word.length / 2);
            const firstHalf = word.slice(0, half);
            const secondHalf = word.slice(half);
            return `
                <span class="word">
                    <span class="half up">${firstHalf}</span>
                    <span class="half down">${secondHalf}</span>
                </span>
            `;
        })
        .join(" ");
}

breakText();

gsap.from(".word .up", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: {
        each: 0.15,
        from: "start"
    },
   
    onComplete: function () {
        gsap.to(this.targets(), {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    }
});

gsap.from(".word .down", {
    y: -80,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: {
        each: 0.15,
        from: "start"
    },
    
    onComplete: function () {
        gsap.to(this.targets(), {
            y: 0,
            opacity: 1,
            duration: 0.5,
          
        });
    }
});