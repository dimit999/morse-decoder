const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    function splitArray(arr, len) {
        let chunks = [];
        let i = 0;
        let n = arr.length;
        while (i < n) {
          chunks.push(arr.slice(i, i += len));
        }
        return chunks;
      }
    debugger
    let bitArr = []
    let morseArr = []
    let decodedArr = []
    let splittedArr = splitArray(expr.split('').join(''), 10)
    for (let item = 0; item < splittedArr.length; item++) {
        if (splittedArr[item] == "**********") {
            bitArr.push(" ")
        } else {
            debugger
            let oneLetterArr = []
            for (let i = 0; i < splittedArr[item].length; i++) {
                if (splittedArr[item][i] == "1" && (splittedArr[item][i + 1] == "0" || splittedArr[item][i + 1] == "1") ) {
                    oneLetterArr.push([splittedArr[item][i], splittedArr[item][i+1]].join(''))
                    i++
                }
            }
            bitArr.push(oneLetterArr)
        }
    }
    bitArr.forEach((groupItems) => {
        if (groupItems == " ") {
            morseArr.push(groupItems)
        } else {
            let internalMorseArr = []
            groupItems.forEach((item) => {
                if (item == "10") {
                    internalMorseArr.push(".")
                } else {
                    internalMorseArr.push("-")
                }
            })
            morseArr.push(internalMorseArr.join(''))
        }
    })
    morseArr.forEach((arrEl) => {
        if (MORSE_TABLE.hasOwnProperty(arrEl)) {
            decodedArr.push(MORSE_TABLE[arrEl])
        } else if (arrEl == " ") {
            decodedArr.push(" ")
        }
    })
    return decodedArr.join('')
}

module.exports = {
    decode
}


// function encode(expr) {
//     // "hello world"
//     // to "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"

//     function getKeyByValue(object, value) {
//         return Object.keys(object).find(key => object[key] === value);
//       }
//     let morseArr = []
//     let strArr = expr.split('')
//     strArr.forEach((element) => {
//         if (Object.values(MORSE_TABLE).includes(element)) {
//             morseArr.push(getKeyByValue(MORSE_TABLE, element))
//         } else if (element == " ") {
//             morseArr.push('**********');
//         }
//     });
//     let morseFinalArr = []
//     morseArr.forEach((item) => {
//         if (item != '**********') {
//             let internalArr = []
//             for (let strItem = 0; strItem < item.length; strItem++) {
//                 if (item[strItem] == '.') {
//                     internalArr.push(10)
//                 } else {
//                     internalArr.push(11)
//                 }
//             }
//             if (internalArr.join('').length < 11) {
//                 let cyc = 11 - internalArr.join('').length
//                 for (let val = 1; val < cyc; val++) {
//                     internalArr.unshift(0)
//                 }
//             }
//             morseFinalArr.push(internalArr.join(''))
//         } else {
//             morseFinalArr.push(item)
//         }
//     })
//     return morseFinalArr.join('')
// }