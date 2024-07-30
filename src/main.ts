import gsap from "gsap";

document.getElementById('menuButton')?.addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (!menu) return;
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
  
      gsap.fromTo(menu, 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    } else {
      gsap.to(menu, 
        { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in', onComplete: () => { menu.style.display = 'none'; } }
      );
    }
  });