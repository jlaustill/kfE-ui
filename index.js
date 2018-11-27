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

    word = word.replace(/[ˈ]/ig, '');
    word = word.replace(/[']/ig, '');
    word = word.replace(/[ˌ]/ig, '');

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

const toTrans = `
All my friends are heathens, take it slow
Wait for them to ask you who you know
Please don't make any sudden moves
You don't know the half of the abuse
All my friends are heathens, take it slow
Wait for them to ask you who you know
Please don't make any sudden moves
You don't know the half of the abuse
Welcome to the room of people
Who have rooms of people that they loved one day
Docked away
Just because we check the guns at the door
Doesn't mean our brains will change from hand grenades
You're lovin' on the psychopath sitting next to you
You're lovin' on the murderer sitting next to you
You'll think, "How'd I get here, sitting next to you?"
But after all I've said, please don't forget
All my friends are heathens, take it slow
Wait for them to ask you who you know
Please don't make any sudden moves
You don't know the half of the abuse
We don't deal with outsiders very well
They say newcomers have a certain smell
Yeah, I trust issues, not to mention
They say they can smell your intentions
You're lovin' on the freakshow sitting next to you
You'll have some weird people sitting next to you
You'll think "How did I get here, sitting next to you?"
But after all I've said, please don't forget
(Watch it, watch it)
All my friends are heathens, take it slow
Wait for them to ask you who you know
Please don't make any sudden moves
You don't know the half of the abuse
All my friends are heathens, take it slow
(Watch it)
Wait for them to ask you who you know
(Watch it)
All my friends are heathens, take it slow
(Watch it)
Wait for them to ask you who you know
(Watch it)
Why'd you come, you knew you should have stayed
(It's blasphemy)
I tried to warn you just to stay away
And now they're outside ready to bust
It looks like you might be one of us

`;
for (let i = 0; i < toTrans.length; i++) {
    // console.log(toTrans[i]);
    if (toTrans[i].match(/[a-zA-Z']/)) {
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
