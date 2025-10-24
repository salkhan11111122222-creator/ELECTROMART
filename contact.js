

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

const touched = { name: false, email: false, message: false };

// Validation Functions
function validateName(value) {
    if (!value.trim()) return 'Name is required';
    if (/\d/.test(value)) return 'Name cannot contain numbers';
    if (value.trim().length < 3) return 'Name must be at least 3 characters';
    return '';
}

function validateEmail(value) {
    if (!value.trim()) return 'Email is required';
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!pattern.test(value)) return 'Please enter a valid email address';
    return '';
}

function validateMessage(value) {
    if (!value.trim()) return 'Message is required';
    if (value.trim().length < 10) return 'Message must be at least 10 characters';
    return '';
}

// Update Input State
function updateInputState(input, errorElement, errorMessage) {
    if (errorMessage) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        errorElement.textContent = errorMessage;
        errorElement.classList.add('show');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

// Real-time Validation
nameInput.addEventListener('input', () => {
    if (touched.name) {
        updateInputState(nameInput, nameError, validateName(nameInput.value));
    }
});

emailInput.addEventListener('input', () => {
    if (touched.email) {
        updateInputState(emailInput, emailError, validateEmail(emailInput.value));
    }
});

messageInput.addEventListener('input', () => {
    if (touched.message) {
        updateInputState(messageInput, messageError, validateMessage(messageInput.value));
    }
});

// On Blur Validation
nameInput.addEventListener('blur', () => {
    touched.name = true;
    updateInputState(nameInput, nameError, validateName(nameInput.value));
});

emailInput.addEventListener('blur', () => {
    touched.email = true;
    updateInputState(emailInput, emailError, validateEmail(emailInput.value));
});

messageInput.addEventListener('blur', () => {
    touched.message = true;
    updateInputState(messageInput, messageError, validateMessage(messageInput.value));
});

// Form Submit
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    touched.name = touched.email = touched.message = true;

    const nameErr = validateName(nameInput.value);
    const emailErr = validateEmail(emailInput.value);
    const msgErr = validateMessage(messageInput.value);

    updateInputState(nameInput, nameError, nameErr);
    updateInputState(emailInput, emailError, emailErr);
    updateInputState(messageInput, messageError, msgErr);

    if (!nameErr && !emailErr && !msgErr) {
        successMessage.classList.add('show');

        setTimeout(() => {
            contactForm.reset();
            [nameInput, emailInput, messageInput].forEach((input) =>
                input.classList.remove('valid', 'invalid')
            );
            Object.keys(touched).forEach((key) => (touched[key] = false));
            successMessage.classList.remove('show');
        }, 3000);
    }
});
