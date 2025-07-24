const resultDiv = document.getElementById('result');
const copyBtn = document.getElementById('copyPassword');

document.getElementById('minLength').addEventListener('click', function() {
    document.getElementById('length').value = 4;
});
document.getElementById('maxLength').addEventListener('click', function() {
    document.getElementById('length').value = 64;
});

document.getElementById('lengthPreset').addEventListener('change', function() {
    const preset = this.value;
    if (preset) {
        document.getElementById('length').value = preset;
    }
});

document.getElementById('generate').addEventListener('click', function() {
    let length = parseInt(document.getElementById('length').value, 10);
    const warningDiv = document.getElementById('warning');
    warningDiv.innerText = '';
    resultDiv.innerText = '';

    if (isNaN(length) || length < 4 || length > 64) {
        warningDiv.innerText = "Password length must be between 4 and 64.";
        return;
    }

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*()-_=+[]{}|;:,.<>?/~`';
    const all = lower + upper + numbers + special;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += all.charAt(Math.floor(Math.random() * all.length));
    }
    resultDiv.innerText = password;
    copyBtn.style.display = 'inline-block'; // Show the copy button
    copyBtn.innerText = 'Copy'; // Reset button text if it was "Copied!"
});

copyBtn.addEventListener('click', function() {
    const passwordToCopy = resultDiv.innerText;
    if (passwordToCopy) {
        navigator.clipboard.writeText(passwordToCopy).then(() => {
            // Success feedback
            copyBtn.innerText = 'Copied!';
            setTimeout(() => {
                copyBtn.innerText = 'Copy';
            }, 2000); // Revert back after 2 seconds
        }).catch(err => {
            console.error('Failed to copy password: ', err);
        });
    }
});