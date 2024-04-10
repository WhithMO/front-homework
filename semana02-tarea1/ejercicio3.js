function isValid(letter) {
    if (letter.includes('{') || letter.includes('}') || letter.includes('[') || letter.includes(']')){
        return false;
    }
    else if (letter.includes('(') && letter.includes(')')) {
        const dataElement = letter.match(/\((.*?)\)/);
        if (dataElement[1] && dataElement[1].length > 0) {
            return true
        }
        return false
    }
    else {
        return false;
    }
}


console.log(isValid("bici coche (balón) bici coche peluche"))
console.log(isValid("(muñeca) consola bici"))

console.log(isValid("bici coche (balón bici coche"))
console.log(isValid("peluche (bici [coche) bici coche balón"))
console.log(isValid("(peluche {) bici"))
console.log(isValid("() bici"))