import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { auth, db } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const statusMessage = document.getElementById('form-status-message');

    const showMessage = (message, isError = false) => {
        statusMessage.textContent = message;
        statusMessage.className = isError ? 'error' : 'success';
        statusMessage.style.display = 'block';
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 5000);
    };

    // Manejador del formulario de registro
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            try {
                // Crear usuario en Firebase Authentication
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Guardar información adicional en Firestore
                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    email: email,
                    createdAt: new Date()
                });

                showMessage('¡Registro exitoso! Ahora puedes iniciar sesión.', false);
                signupForm.reset();
                 // Cambiar a la vista de login después de un registro exitoso
                 setTimeout(() => {
                    document.querySelector('.form-box').classList.remove('show-signup');
                }, 2000);

            } catch (error) {
                console.error("Error en el registro:", error);
                showMessage(getAuthErrorMessage(error.code), true);
            }
        });
    }

    // Manejador del formulario de inicio de sesión
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            try {
                await signInWithEmailAndPassword(auth, email, password);
                showMessage('¡Inicio de sesión exitoso! Redirigiendo...', false);
                
                // Redirigir al usuario después de un inicio de sesión exitoso
                setTimeout(() => {
                    window.location.href = 'index.html'; // O a una página de perfil
                }, 2000);

            } catch (error) {
                console.error("Error en el inicio de sesión:", error);
                showMessage(getAuthErrorMessage(error.code), true);
            }
        });
    }

    // Función para traducir códigos de error de Firebase a mensajes amigables
    function getAuthErrorMessage(errorCode) {
        switch (errorCode) {
            case 'auth/email-already-in-use':
                return 'Este correo electrónico ya está registrado.';
            case 'auth/invalid-email':
                return 'El formato del correo electrónico no es válido.';
            case 'auth/weak-password':
                return 'La contraseña es demasiado débil. Debe tener al menos 6 caracteres.';
            case 'auth/user-not-found':
            case 'auth/wrong-password':
                 return 'El correo electrónico o la contraseña son incorrectos.';
            case 'auth/too-many-requests':
                return 'Demasiados intentos fallidos. Por favor, intenta de nuevo más tarde.';
            default:
                return 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.';
        }
    }
});
