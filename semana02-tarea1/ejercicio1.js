// Ejercicio 18:
// https://2021.adventjs.dev/challenges/18

function fixFiles(files) {
    const counts = {};
    const result = [];

    for (const file of files) {
        if (counts[file]) {
            counts[file]++;
            result.push(`${file}(${counts[file] - 1})`);
        } else {
            counts[file] = 1;
            result.push(file);
        }
    }
    // console.log(counts)

    return result;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
console.log(fixFiles(files));
