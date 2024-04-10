// Ejercicio 13
// https://2021.adventjs.dev/challenges/13

function wrapGifts(gifts) {
    let giftList = [];
    let largeOne = 1;
    for (const gift of gifts) {
        if (largeOne < gift.length) {
            largeOne = gift.length
        }
    }


    giftList.push('*' + getAsterisks(largeOne) + '*')
    for (let i = 0; i < gifts.length; i++) {
        if (largeOne > (gifts[i]).length) {
            let restAsterisks = getAsterisks(largeOne - (gifts[i]).length);
            gifts[i] = gifts[i] + restAsterisks;
            giftList.push('*' + gifts[i]);
        } else {
            giftList.push('*' + gifts[i] + '*');
        }
    }
    giftList.push('*' + getAsterisks(largeOne) + '*');

    return giftList;
}



function getAsterisks(amount) {  
    let asterisks = '';
    for (let j = 0; j < amount; j++) {
        asterisks += '*';
    }
    return asterisks;
}



console.log(wrapGifts(["📷📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸📷📷"]))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/