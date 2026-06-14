document.addEventListener('DOMContentLoaded', function () {
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
});