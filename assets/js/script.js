var regexName = /^[a-zA-Z\-çéèëïô]+$/;
    var regexEmail = /^[a-zA-Z\-._0-9]+@[a-zA-Z\-0-9]+\.[a-zA-Z]{2,4}$/;
    var regexPhoneNumber = /^[0]{1}[1-9]{1}[\d]{8}$/;
    $('button').click(function(){
      //Récupération des informations rentrées en variables
      var lastname = $('#lastname').val();
      var firstname = $ ('#firstname').val();
      var email = $('#email').val();
      var phoneNumber = $('#phoneNumber').val();
      //Début de la condition
      if ((regexName.test(lastname)) && (regexName.test(firstname)) && (regexEmail.test(email)) && (regexPhoneNumber.test(phoneNumber))){//Condition avec vérification nom et prénom
        alert('Votre nom : ' + lastname + '\nVotre prénom : ' + firstname + '\nVotre email : ' + email + '\nVotre numéro de téléphone : ' + phoneNumber);
      } else {
        alert('Un de vos champs contient des caractères incorrects !');
      }
    });
