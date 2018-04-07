firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // obteniendo datos desde la cuenta de google del usuario
        var email = user.email;
        var name = user.displayName;
        var icon = user.photoURL;
        var userCode = user.uid;
        // haciendo referencia al espacio exclusivo creado para el usuario en la basedatos
        var userRef = firebase.database().ref('users').child(userCode);
        // guardando datos del usuario en la base datos
        var firebasePostREsf = userRef.child('email');
        firebasePostREsf.set(email);
        var firebasePostREsfName = userRef.child('name');
        firebasePostREsfName.set(name);
        var firebasePostREsfIcon = userRef.child('icon');
        firebasePostREsfIcon.set(icon);
        // mostrando los datos del usuario
        userRef.on('value', function(datasnapshot) {
            var showingName = datasnapshot.child('name').val();
            var showingIcon = datasnapshot.child('icon').val();
            var showingEmail = datasnapshot.child('email').val();
            $('#name').text(showingName);
            $('#email').text(showingEmail);
            $('#icon img').replaceWith('<img src="' + showingIcon + '">')
        });
    };
});

$('#out').on('click', function() {
    firebase.auth().signOut().then(function() {
        console.log('saliste');
        window.location.href = '../index.html';
    });
});