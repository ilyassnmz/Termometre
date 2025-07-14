const temperatureInput = document.getElementById("temperatureInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");

function updateTheme() {
    const hour = new Date().getHours();
    if (hour >= 19 || hour <= 6) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

function convertTemperature(value, from, to) {
    let celsius;

    switch (from) {
        case "celsius":
            celsius = value;
            break;
        case "fahrenheit":
            celsius = (value - 32) / 1.8;
            break;
        case "kelvin":
            celsius = value - 273.15;
            break;
        case "rankine":
            celsius = (value - 491.67) * 5/9;
            break;
        case "reaumur":
            celsius = value * 1.25;
            break;
        case "newton":
            celsius = value * 100 / 33;
            break;
        default:
            return null;
    }

    switch (to) {
        case "celsius":
            return celsius;
        case "fahrenheit":
            return celsius * 1.8 + 32;
        case "kelvin":
            return celsius + 273.15;
        case "rankine":
            return (celsius + 273.15) * 9/5;
        case "reaumur":
            return celsius * 0.8;
        case "newton":
            return celsius * 33 / 100;
        default:
            return null;
    }
}

function handleConversion() {
    const inputVal = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (isNaN(inputVal)) {
        result.textContent = "Sonuç: -";
        return;
    }

    const converted = convertTemperature(inputVal, from, to);
    if (converted !== null) {
        result.textContent = `Sonuç: ${converted.toFixed(2)} ${to}`;
    } else {
        result.textContent = "Dönüştürme yapılamadı.";
    }
}

temperatureInput.addEventListener("input", handleConversion);
fromUnit.addEventListener("change", handleConversion);
toUnit.addEventListener("change", handleConversion);

updateTheme();
