var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
    // Esto le da un token de acceso de Google. Puede usarlo para acceder a la API de Google.
    var token = result.credential.accessToken;
    // La información de usuario iniciada.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Manejar errores aquí.
    var errorCode = error.code;
    var errorMessage = error.message;
    // El correo electrónico de la cuenta del usuario utilizada
    var email = error.email;
    // El tipo firebase.auth.AuthCredential que se usó ...
    var credential = error.credential;
    // ...
});
