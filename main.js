
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const menuTabs = document.querySelectorAll('.menu-tab');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        
        menuTabs.forEach(t => t.classList.remove('active'));
        
        tab.classList.add('active');
        
        
        console.log(`Switched to: ${tab.innerText}`);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});