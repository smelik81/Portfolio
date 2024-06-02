document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.ac-header');
  const panels = document.querySelectorAll('.ac-panel');
  const svgs = document.querySelectorAll('.ac-svg');
  const items = document.querySelectorAll('.ac');

  items[0].classList.add('open');
  panels[0].classList.add('open');
  svgs[0].classList.add('rotate');
  triggers[0].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
  panels[0].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function () {
      const isOpen = items[index].classList.contains('open');

      items.forEach(item => {
        item.classList.remove('open');
      });
      panels.forEach(p => {
        p.classList.remove('open');
        p.style.backgroundColor = 'transparent';
      });
      svgs.forEach(svg => {
        svg.classList.remove('rotate');
      });
      triggers.forEach(t => {
        t.style.backgroundColor = '#1e2023';
      });

      if (!isOpen) {
        items[index].classList.add('open');
        panels[index].classList.add('open');
        svgs[index].classList.add('rotate');
        triggers[index].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
        panels[index].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
      }
    });
  });
});
