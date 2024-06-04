document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    console.log(mobileMenuBtn);
    const modaleClose = document.getElementById('modaleClose');
     const mobileWindow = document.getElementById('mobileWindow');

     function openMobileMenu() {
       mobileWindow.classList.add('is-open');
     }

     function closeMobileMenu() {
       mobileWindow.classList.remove('is-open');
     }

     mobileMenuBtn.addEventListener('click', openMobileMenu);
     modaleClose.addEventListener('click', closeMobileMenu);






});