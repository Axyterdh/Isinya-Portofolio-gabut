// Contoh JavaScript untuk smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Script untuk efek animasi saat scroll
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        let position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

// CSS untuk efek fade-in
.fade-in {
    opacity: 0;
    transition: opacity 1s;
}

.fade-in.visible {
    opacity: 1;
}
