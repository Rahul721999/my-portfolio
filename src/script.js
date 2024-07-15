
export const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
};


// window.onscroll = () =>{
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);
// }