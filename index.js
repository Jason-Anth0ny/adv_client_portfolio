(function() {
    emailjs.init("4gvDLvM4ExkRZ_g4c"); 
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message
    };
  
    emailjs.send('service_ygczyvl', 'template_fdvma44', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      }, function(error) {
        console.error('FAILED...', error);
        alert('Failed to send email.');
      });
  });