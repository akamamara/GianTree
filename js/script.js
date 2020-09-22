
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow",function() {
        $( ".loader-wrapper" ).remove(); 
    });
});

function myFunction() {
    var x = document.getElementById("nav-content");

    if (x.style.display === "block") {
        x.style.display = "none";
    }

    else {
        x.style.display = "block";
    }
}

const header = document.querySelector('nav');
const sectionOne = document.querySelector('header');

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
    (function (
        entries, sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });
    },
        sectionOneOptions);

sectionOneObserver.observe(sectionOne);