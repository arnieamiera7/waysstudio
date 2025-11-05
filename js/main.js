// main.js — Handles form validation and modal success

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('registerForm');

  if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent page reload

      if (!registerForm.checkValidity()) {
        event.stopPropagation();
        registerForm.classList.add('was-validated');
      } else {
        // Form is valid — show success modal
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // Reset form after a short delay
        setTimeout(() => {
          registerForm.reset();
          registerForm.classList.remove('was-validated');
        }, 1000);
      }
    });
  }

  // Optional: Contact form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
      } else {
        alert('Your message has been sent successfully!');
        contactForm.reset();
        contactForm.classList.remove('was-validated');
      }
    });
  }
});
