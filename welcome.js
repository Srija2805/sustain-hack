document.addEventListener("DOMContentLoaded", function() {
    var companySection = document.getElementById("company-section");

    function checkScroll() {
        var position = companySection.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            companySection.style.opacity = "1";
            companySection.style.transform = "translateY(0px)";
        }
    }

    window.addEventListener("scroll", checkScroll);
});
