import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const modal = document.getElementById('modal');
    const backdrop = document.getElementById('backdrop');
    const closeButton = document.querySelector('.close-button');

    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');
  
    emailInput.addEventListener('focus', handleFocus);
    emailInput.addEventListener('blur', handleEmailBlur);

    messageInput.addEventListener('focus', handleFocus);
    messageInput.addEventListener('blur', handleMessageBlur);

    function handleFocus(event) {
        event.target.classList.remove('invalid');
    }

    function handleEmailBlur(event) {
        const input = event.target;
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            displayErrorMessage('Please enter a valid email address');
        }
    }

    function handleMessageBlur(event) {
        const input = event.target;
        if (!input.value.trim()) {
            input.classList.add('invalid');
            displayErrorMessage('Please enter a message');
        }
    }

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const comment = messageInput.value.trim();

        if (!emailInput.checkValidity()) {
            displayErrorMessage('Please enter a valid email address.', 'Error');
            return;
        }

        if (!comment) {
            displayErrorMessage('Please enter a message.', 'Error');
            return;
        }

        const payload = { email, comment };
        console.log('Sending payload:', payload);

        try {
            const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server response:', errorData);
                throw new Error('Network response was not ok');
            }

            openModal();
            contactForm.reset();
        } catch (error) {
            displayErrorMessage('Failed to send the message. Please try again later.', 'Error');
            console.error('Error fetching data:', error);
        }
    });

    closeButton.addEventListener('click', () => {
        closeModal();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function openModal() {
        modal.style.display = 'block';
        backdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
         document.addEventListener('keydown', handleKeyDown);
    }

    function closeModal() {
        modal.style.display = 'none';
        backdrop.classList.remove('show');
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleKeyDown);
    }

    function handleKeyDown(event) {
        console.log('Key pressed:', event.key);
        if (event.key === 'Escape') {
          closeModal();
        }
    }

     backdrop.addEventListener('click', closeModal);


    const iziToastConfig = {
        position: 'topRight',
        titleColor: '#FFF',
        titleSize: '16',
        titleLineHeight: '24',
        messageColor: '#FFF',
        messageSize: '16',
        messageLineHeight: '24',
    };

    function displayErrorMessage(message, title, color = '#EF4040') {
        iziToast.error({
            ...iziToastConfig,
            title: title || '',
            message: `(${message}, ${title})`,
            backgroundColor: color
        });
    }
});
