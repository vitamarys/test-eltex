const form = document.querySelector('form');
const nav = document.querySelector('.header-nav');
const links = nav.querySelectorAll('li')
const burger = document.querySelector('.bugrer');

const swiper = new Swiper(".slider", {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".counter",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return `
       <span class="current ${currentClass}">1</span>
             <span>/</span>
        <span class="total ${totalClass}">5</span>`;
    },
    function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    form.reset();
})
burger.addEventListener('click',()=>{
    nav.classList.toggle('open');
    burger.classList.toggle('open');

})
links.forEach(el=>{
    el.addEventListener('click',()=>{
        links.forEach(link=>{
            link.classList.remove('active')
        }) 
        el.classList.add('active')
    })
})