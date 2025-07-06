function hamburgerClick() {
    let navbar = document.getElementById("navbar");
    let leftNavbar = document.getElementById("left-navbar");
    let navbarOptions = document.getElementById("navbar-option");

    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        leftNavbar.className += " responsive";
        navbarOptions.className += " responsive";
    } else {
        navbar.className = "navbar";
        leftNavbar.className = "left-navbar";
        navbarOptions.className = "navbar-option";
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelectorAll('.review');
    let currentReview = 0;

    function showReview(index) {
        reviews.forEach((rev, i) => {
            rev.style.display = i === index ? 'flex' : 'none';
        });
    }

    function nextReview() {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    }

    function prevReview() {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        showReview(currentReview);
    }

    document.querySelectorAll('.next-review').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            nextReview();
        });
    });

    document.querySelectorAll('.prev-review').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            prevReview();
        });
    });

    showReview(currentReview);
});

