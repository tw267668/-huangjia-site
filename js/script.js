document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('nav');

    toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('open');
        });
    });

    // Lightbox
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightboxImg');

    document.querySelectorAll('.product-img').forEach(function (el) {
        el.addEventListener('click', function () {
            var bg = this.style.backgroundImage;
            var url = bg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
            if (url) {
                lightboxImg.src = url;
                lightbox.classList.add('show');
            }
        });
    });

    lightbox.addEventListener('click', function () {
        this.classList.remove('show');
    });

    // About image clickable
    var aboutImg = document.querySelector('.about-image img');
    if (aboutImg) {
        aboutImg.style.cursor = 'pointer';
        aboutImg.addEventListener('click', function () {
            lightboxImg.src = this.src;
            lightbox.classList.add('show');
        });
    }
});