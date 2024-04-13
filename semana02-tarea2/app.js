function calculateIMC() {
    let height = document.getElementById('height').value / 100;
    let weight = document.getElementById('weight').value;
    
    if (height > 0 && weight > 0) {
        let imc = weight / (height * height);
        let result = "Tu IMC es: " + imc.toFixed(2) + "<br>";
        
        if (imc < 18.5) {
            result += "Condiciones del IMC: Baja";
        } else if (imc >= 18.5 && imc <= 24.9) {
            result += "Condiciones del IMC: Normal";
        } else if (imc >= 25 && imc <= 29.9) {
            result += "Condiciones del IMC: Sobrepeso";
        } else {
            result += "Condiciones del IMC: Obeso";
        }
        
        document.getElementById('result').innerHTML = result;
    } else {
        document.getElementById('result').innerHTML = "Por favor, introduce valores válidos.";
    }
}