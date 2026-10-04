// ^ Write your JavaScript code here



//active navbar scroll

 const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', function(){
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop - sectionHeight / 3){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`){
      link.classList.add('active');
    }
  });
});

// dark & light mode toggle
const html = document.documentElement;
html.classList.toggle('dark');
const themebtn = document.querySelector('#theme-toggle-button');

themebtn.addEventListener('click', function(event) {
  html.classList.toggle('dark');
});
//nav&tabs js
const tabs = document.querySelectorAll('.portfolio-filter');
    const items = document.querySelectorAll('.portfolio-item');

tabs.forEach(tab => {
  tab.addEventListener("click", function() {
    const filter = tab.dataset.filter;

    items.forEach(item => {
    const category = item.dataset.category;

    if(filter === 'all' || filter === category){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }

});

  });
});

// testmonials
const testimonials = document.querySelector('#testimonials-carousel');
const testimonialBtns = document.querySelectorAll('.testimonial-card ');
const nextBtn = document.querySelector('#next-testimonial');
const prevBtn = document.querySelector('#prev-testimonial');

let currentTestimonial = 0;
let CSSTransformValue = `translateX(-${currentTestimonial * 100}%)`;
testimonials.style.transform = CSSTransformValue;
nextBtn.addEventListener('click', function() {
  currentTestimonial = (currentTestimonial + 1) % testimonialBtns.length;
  CSSTransformValue = `translateX(${currentTestimonial * 100}%)`;
  testimonials.style.transform = CSSTransformValue;
});

prevBtn.addEventListener('click', function() {
  currentTestimonial = (currentTestimonial - 1 + testimonialBtns.length) % testimonialBtns.length;
  CSSTransformValue = `translateX(${currentTestimonial * 100}%)`;
  testimonials.style.transform = CSSTransformValue;
});

const gearButton = document.querySelector('#settings-toggle');
const settingSidebar = document.querySelector('#settings-sidebar');
const closeSidebar = document.querySelector('#close-settings');

gearButton.addEventListener('click', function() {
  settingSidebar.classList.toggle('translate-x-full');
});

closeSidebar.addEventListener('click', function() {
  settingSidebar.classList.add('translate-x-full');
});

const fontOptions = document.querySelectorAll('.font-option');

fontOptions.forEach(function(fontBtn){
  fontBtn.addEventListener('click', function() {
    fontOptions.forEach(opt => opt.classList.remove('active'));
   const selectedFont = fontBtn.dataset.font;
   document.body.style.fontFamily = selectedFont;
    fontBtn.classList.add('active');
  });
});

const colorOptions = document.querySelector('#theme-colors-grid');
const colors = [ "cyan", "red", "green", "blue", "yellow", "purple" ];
colors.forEach(function(colorBtn){
  const button = document.createElement("button");
  button.style.backgroundColor =  colorBtn;
  button.style.width = '30px';
  button.style.height = '30px';
  button.style.borderRadius = '50%';
  button.style.border = 'none';
  colorOptions.appendChild(button);
  button.addEventListener('click', function() {
    document.documentElement.style.setProperty('--color-primary', colorBtn);
    button.classList.add('active');
    // Remove 'active' class from other buttons
    Array.from(colorOptions.children).forEach(btn => {
      if(btn !== button) {
        btn.classList.remove('active');
      }
    });
  });
});
const resetBtn = document.querySelector('#reset-settings');
resetBtn.addEventListener('click', function() {
  // Reset font
  document.body.style.fontFamily = '';
  fontOptions.forEach(opt => opt.classList.remove('active'));
  // Reset color
  document.documentElement.style.setProperty('--color-primary', '');
  Array.from(colorOptions.children).forEach(btn => btn.classList.remove('active'));
});
const scrollToTopBtn = document.querySelector('#scroll-to-top');
window.addEventListener('scroll', function() {
  if(window.scrollY > 300) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollToTopBtn.classList.add('opacity-0', 'invisible');
    scrollToTopBtn.classList.remove('opacity-100', 'visible');
  }
});
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
