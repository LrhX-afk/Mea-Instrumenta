const goTopBtn = document.getElementById('goTopBtn');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        goTopBtn.classList.add('show');
    } else {
        goTopBtn.classList.remove('show');
    }
});
goTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};