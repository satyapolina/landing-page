
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Retrieve form values
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector('textarea');
  
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
  
    // Perform form validation
    if (name.trim() === '') {
      alert('Please enter your name.');
      nameInput.focus();
      return;
    }
  
    if (email.trim() === '') {
      alert('Please enter your email.');
      emailInput.focus();
      return;
    }
  
    if (message.trim() === '') {
      alert('Please enter a message.');
      messageInput.focus();
      return;
    }
  
    // Process the form submission (you can replace this with your own logic)
    // For this example, we simply log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // Reset the form
    form.reset();
  });
  