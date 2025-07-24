function xorCipher(str, key) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

document.getElementById('encrypt').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    const key = document.getElementById('key').value;
    if (!text || !key) {
        document.getElementById('result').innerText = "Please enter both text and key.";
        return;
    }
    let encrypted = btoa(xorCipher(text, key));
    encrypted = encrypted.replace(/=+$/, ''); // Remove trailing '='
    document.getElementById('result').innerText = `Encrypted: ${encrypted}`;
});

document.getElementById('decrypt').addEventListener('click', function() {
    let text = document.getElementById('text').value;
    const key = document.getElementById('key').value;
    if (!text || !key) {
        document.getElementById('result').innerText = "Please enter both encrypted text and key.";
        return;
    }
    // Add padding back if needed
    while (text.length % 4 !== 0) {
        text += '=';
    }
    try {
        const decrypted = xorCipher(atob(text), key);
        document.getElementById('result').innerText = `Decrypted: ${decrypted}`;
    } catch {
        document.getElementById('result').innerText = "Invalid input or key.";
    }
});