document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
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

  
      document.querySelectorAll('.modale-item a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
            });
            closeMobileMenu(); 
          }
        });
      });

      document.querySelectorAll('#mobileWindow a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          closeMobileMenu(); 
        });
      });





});