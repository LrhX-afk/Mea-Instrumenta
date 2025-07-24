document.getElementById('convert').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Manual exchange rates (example, update as needed)
    const rates = {
        USD: { USD: 1, EUR: 0.92, GBP: 0.78, JPY: 156.5, IDR: 16200 },
        EUR: { USD: 1.09, EUR: 1, GBP: 0.85, JPY: 170, IDR: 17600 },
        GBP: { USD: 1.28, EUR: 1.18, GBP: 1, JPY: 200, IDR: 20700 },
        JPY: { USD: 0.0064, EUR: 0.0059, GBP: 0.0050, JPY: 1, IDR: 104 },
        IDR: { USD: 0.000062, EUR: 0.000057, GBP: 0.000048, JPY: 0.0096, IDR: 1 }
    };

    let result;
    if (fromCurrency === toCurrency) {
        result = amount;
    } else if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
        result = amount * rates[fromCurrency][toCurrency];
    } else {
        document.getElementById('result').innerText = "Exchange rate not available.";
        return;
    }

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
});
