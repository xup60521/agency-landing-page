import gsap from "gsap";

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
        toggleMenuOpen()
    })