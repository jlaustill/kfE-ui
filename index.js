const fs = require('fs');
const input = fs.readFileSync('./ipadict.txt', 'utf8');
const express = require('express');
const cors = require('cors');

const dict = [];

const ipaToKfa = (word = '') => {
    word = word.replace(/[a][j]/ig, 'AE');
    word = word.replace(/[e][j]/ig, 'eE');
    word = word.replace(/[o][w]/ig, 'oU');
    word = word.replace(/[a][w]/ig, 'AU');
    word = word.replace(/[i]/ig, 'E');
    word = word.replace(/[u]/ig, 'U');
    word = word.replace(/[ɑ]/ig, 'o');
    word = word.replace(/[ʌ]/ig, 'u');
    word = word.replace(/[ʧ]/ig, 'c');
    word = word.replace(/[ɛ]/ig, 'e');
    word = word.replace(/[æ]/ig, 'a');
    word = word.replace(/[θ]/ig, 'T');
    word = word.replace(/[ɪ]/ig, 'i');
    word = word.replace(/[ʤ]/ig, 'j');
    word = word.replace(/[ŋ]/ig, 'N');
    word = word.replace(/[ɹ]/ig, 'r');
    word = word.replace(/[ʃ]/ig, 'S');
    word = word.replace(/[ð]/ig, 'T');
    word = word.replace(/[ʊ]/ig, 'O');
    word = word.replace(/[ɚ]/ig, 'R');
    word = word.replace(/[ʒ]/ig, 'Z');
    word = word.replace(/[ɔ][j]/ig, 'uUE');
    word = word.replace(/[ɔ]/ig, 'A');

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

function englishToKfa(_toTrans) {
  const toTrans = ` ${_toTrans} `;
  let word = "";
  let result = "";

  for (let i = 0; i < toTrans.length; i++) {
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

  return result.trim();
}

const app = express();
app.use(cors());

app.get('/translate', function(req, res) {
  const { english } = req.query;
  res.send({
    kfa: englishToKfa(english || ''),
    english,
  });
});

app.listen('8081', () => {
  console.log('Server listening on post 8081');
});
