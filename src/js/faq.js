document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.ac-header');
  const panels = document.querySelectorAll('.ac-panel');
  const svgs = document.querySelectorAll('.ac-svg');
  const items = document.querySelectorAll('.ac');

  items[0].classList.add('open');
  svgs[0].classList.add('rotate');
  triggers[0].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
  panels[0].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
  panels[0].style.maxHeight = panels[0].scrollHeight + 'px';

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', function () {
      const isOpen = items[index].classList.contains('open');

      items.forEach((item, i) => {
        item.classList.remove('open');
        svgs[i].classList.remove('rotate');
        panels[i].classList.remove('open');
        panels[i].style.maxHeight = null;
        triggers[i].style.backgroundColor = '#1e2023';
        panels[i].style.backgroundColor = 'transparent';
      });

      if (!isOpen) {
        items[index].classList.add('open');
        svgs[index].classList.add('rotate');
        panels[index].classList.add('open');
        panels[index].style.maxHeight = panels[index].scrollHeight + 'px';
        triggers[index].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
        panels[index].style.backgroundColor = 'rgba(20, 197, 124, 0.2)';
      }
    });
  });
});
