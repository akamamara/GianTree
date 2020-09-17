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
const image = document.querySelector('.black-off')
const image1 = document.querySelector('.white-on')
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
                header.classList.remove("nav-dampak");
                image.classList.add('black-on');
                image.classList.remove('black-off');
                image1.classList.add('white-off');
                image1.classList.remove('white-on');
            } else {
                header.classList.remove("nav-scrolled");
                header.classList.add("nav-dampak");
                image.classList.add('black-off');
                image.classList.remove('black-on');
                image1.classList.add('white-on');
                image1.classList.remove('white-off');
            }
        });
    },
        sectionOneOptions);

sectionOneObserver.observe(sectionOne);