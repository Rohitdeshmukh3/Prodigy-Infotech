document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  // Debounce function to limit how often a function is called on a frequent event
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // Function to handle the scroll effect
  const handleScrollEffect = () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Add the debounced scroll event listener
  window.addEventListener('scroll', debounce(handleScrollEffect, 50));

  // Toggle for the mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
  });

});
