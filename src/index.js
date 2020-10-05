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

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
    let morseArr = []
    let strArr = expr.split('')
    strArr.forEach((element) => {
        if (Object.values(MORSE_TABLE).includes(element)) {
            morseArr.push(getKeyByValue(MORSE_TABLE, element))
        } else if (element == " ") {
            morseArr.push('**********');
        }
    });
    let morseFinalArr = []
    morseArr.forEach((item) => {
        if (item != '**********') {
            let internalArr = []
            for (let strItem = 0; strItem < item.length; strItem++) {
                if (item[strItem] == '.') {
                    internalArr.push(10)
                } else {
                    internalArr.push(11)
                }
            }
            if (internalArr.join('').length < 11) {
                let cyc = 11 - internalArr.join('').length
                for (let val = 1; val < cyc; val++) {
                    internalArr.unshift(0)
                }
            }
            morseFinalArr.push(internalArr.join(''))
        } else {
            morseFinalArr.push(item)
        }
    })
    return morseFinalArr.join('')
}

module.exports = {
    decode
}
