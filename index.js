const fs = require('fs');
const input = fs.readFileSync('./ipadict.txt', 'utf8');

// console.log(input.split('\n'));

const dict = [];

const ipaToKfa =(word = '') => {
    word = word.replace(/[ɑ]/ig, 'a');
    word = word.replace(/[ʌ]/ig, 'A');
    word = word.replace(/[ʧ]/ig, 'c');
    word = word.replace(/[ɔ]/ig, 'C');
    word = word.replace(/[ɛ]/ig, 'e');
    word = word.replace(/[æ]/ig, 'E');
    word = word.replace(/[θ]/ig, 'H');
    word = word.replace(/[ɪ]/ig, 'I');
    word = word.replace(/[ʤ]/ig, 'J');
    word = word.replace(/[ŋ]/ig, 'N');
    word = word.replace(/[o][w]/ig, 'o');
    word = word.replace(/[a][w]/ig, 'O');
    word = word.replace(/[C][j]/ig, 'Q');
    word = word.replace(/[ɹ]/ig, 'r');
    word = word.replace(/[ʃ]/ig, 'S');
    word = word.replace(/[ð]/ig, 'T');
    word = word.replace(/[ʊ]/ig, 'U');
    word = word.replace(/[ɚ]/ig, 'X');
    word = word.replace(/[a][j]/ig, 'y');
    word = word.replace(/[e][j]/ig, 'Y');
    word = word.replace(/[ʒ]/ig, 'Z');

    return word;
};

input.split('\n').forEach(line => {
    const pieces = line.split(/\s+/g);
    dict.push({
        english: pieces[0],
        ipa: pieces[1],
        kfa: ipaToKfa(pieces[1])
    });
});

// console.log(dict.find(w => w.english === 'vision'));

let word = "";
let result = "";
let build = false;

const toTrans = `
I had so much fun with this that I wrote a translator and now I can translate as fast as I can type :)

Go ahead, try me!
`;
for (let i = 0; i < toTrans.length; i++) {
    // console.log(toTrans[i]);
    if (toTrans[i].match(/[a-zA-Z]/)) {
        word += toTrans[i];
    } else {
        if (word) {
            const kfa = dict.find(w => w.english.toLowerCase() === word.toLowerCase());
            result += kfa ? kfa.kfa : word;
        }
        word = "";
        result += toTrans[i];
    }
}

console.log(result);