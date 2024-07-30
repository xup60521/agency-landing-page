import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.getElementById("menuButton")?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenuOpen();
});

const menu = document.getElementById("menu");
function toggleMenuOpen() {
    if (!menu) return;
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";

        gsap.fromTo(
            menu,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    } else {
        gsap.to(menu, {
            opacity: 0,
            y: -50,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                menu.style.display = "none";
            },
        });
    }
}

document
    .getElementById("menu")
    ?.addEventListener("click", (e) => e.stopPropagation());

window.addEventListener("click", () => {
    if (menu?.style.display === "none" || menu?.style.display === "") return;
    toggleMenuOpen();
});

const fadeIns = gsap.utils.toArray<HTMLElement>(".fade-in");
fadeIns.forEach((c, index) => {
    gsap.from(c, {
        scrollTrigger: {
            trigger: c,
            start: "top 80%", // Trigger when the top of the box reaches 80% from the top of the viewport
            end: "top 50%",
            toggleActions: "play none none reverse", // Play animation on enter and reverse on exit
        },
        opacity: 0,
        y: 50,
        duration: 0.75,
        delay: index * 0.1
    });
});
