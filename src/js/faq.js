document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.ac-trigger');
  const panels = document.querySelectorAll('.ac-panel');

  triggers[0].classList.add('open');
  panels[0].classList.add('open');
  triggers[0].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
  panels[0].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function () {
      const isOpen = this.classList.contains('open');

      triggers.forEach(t => {
        t.classList.remove('open');
        t.style.backgroundColor = '#1e2023';
      });
      panels.forEach(p => {
        p.classList.remove('open');
        p.style.backgroundColor = 'transparent';
      });

      if (!isOpen) {
        this.classList.add('open');
        panels[index].classList.add('open');
        this.style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
        panels[index].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
      }
    });
  });
});
