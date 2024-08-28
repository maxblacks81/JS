// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const  navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
// ********** fixed navbar ************
navToggle.addEventListener('click', function(){
    //linksContainer.classList.toggle('show-links'); <== non efficacec se il n° di link sono variabili
    const containerHeight = linksContainer.getBoundingClientRect().height ;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
    
})
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link")
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    } else  {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500){
        topLink.classList.add("show-links");
    } else {
        topLink.classList.remove("show-links");
    }
})
// ********** smooth scroll ************


// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        //navigate to the specific spot
        const id = e.currentTarget.getAttribute("href").slice(1); // rimuove l'#
        const element = document.getElementById(id);
        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav ){
            position = position - navHeight;
        }

        if (navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0, 
            top:position
        });
        linksContainer.style.height = 0; 
    })
})