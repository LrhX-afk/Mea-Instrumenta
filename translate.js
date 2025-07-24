document.getElementById('translateBtn').addEventListener('click', async function() {
    const text = document.getElementById('sourceText').value;
    const source = document.getElementById('sourceLang').value;
    const target = document.getElementById('targetLang').value;
    const resultDiv = document.getElementById('translationResult');
    resultDiv.innerText = "Translating...";

    if (!text.trim()) {
        resultDiv.innerText = "Please enter text to translate.";
        return;
    }

    try {
        const response = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                source: source,
                target: target,
                format: "text"
            }),
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        resultDiv.innerText = data.translatedText || "Translation failed.";
    } catch (e) {
        resultDiv.innerText = "Error: Unable to translate. Try again later.";
    }
});