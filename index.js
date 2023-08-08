document.getElementById('form-fields').addEventListener('input', function (event) {
   event.preventDefault();

  var fullName = document.getElementById('fullName').value;
  var emailAdd = document.getElementById('emailAdd').value;
  var sendMessage = document.getElementById('sendMessage').value;
  var submitButton = document.getElementById('form-btn');

  if (fullName !== '' && emailAdd !== '' && sendMessage !== '') {
    submitButton.disabled = false;
    submitButton.classList.remove('btn-disabled');
  } else {
    submitButton.disabled = true;
    submitButton.classList.add('btn-disabled');
  }
});

 function showAlert(message, type) {
    var alertContainer = document.createElement('div');
    alertContainer.className = 'alert alert-' + type;
    alertContainer.textContent = message;
    document.getElementById('form-fields').prepend(alertContainer);
  }



function submitForm() {
  var fullName = document.getElementById('fullName').value;
  var emailAdd = document.getElementById('emailAdd').value;
  var sendMessage = document.getElementById('sendMessage').value;

  if (fullName === '' && emailAdd === '' && sendMessage === '') {
    showAlert('Kindly fill in all required fields.', "danger");
    return;
  }

  // If all fields are complete, you can proceed with sending the email
  sendMail();
}



function sendMail() {
  var fullName = document.getElementById('fullName').value;
  var emailAdd = document.getElementById('emailAdd').value;
  var sendMessage = document.getElementById('sendMessage').value;

  var params = {
    fullName: fullName,
    emailAdd: emailAdd,
    sendMessage: sendMessage
  };

  const serviceID = "service_9jiikdt";
  const templateID = "template_f9djjsq";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("fullName").value = "";
      document.getElementById("emailAdd").value = "";
      document.getElementById("sendMessage").value = "";
      console.log(res);
      showAlert("Message sent successfully, will get back to you the soonest!", "success");
    })
    .catch(err => console.log(err));


     return false;
}


