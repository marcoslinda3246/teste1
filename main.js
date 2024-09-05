// Inicializando o EmailJS com sua User ID
(function() {
    emailjs.init("Tnblr85Mdf74SkEIE");
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o envio padrão do formulário
  
    // Coletando dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Enviando email usando EmailJS
    emailjs.send('service_tkgekd8', 'template_tczr71j', {
      name: name,
      email: email,
      message: message
    })
    .then(function(response) {
       document.getElementById('status').innerText = "Mensagem enviada com sucesso!";
    }, function(error) {
       document.getElementById('status').innerText = "Erro ao enviar mensagem: " + error.text;
    });
  });
  