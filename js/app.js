var provider = new firebase.auth.GoogleAuthProvider();

// autenticando al usuario con google
$('#singin').on('click', function() {
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
    console.log(user);
  });
});

// realizando acciones cuando el usuario este autenticado
firebase.auth().onAuthStateChanged(function(user) {
  // si el usuario esta activo
  if (user) {
    window.location.href = 'views/main.html';
  } else {
    console.log('usuario no logeado');
  }
});