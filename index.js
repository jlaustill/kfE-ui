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
Cracks split the asphalt, a myriad of concrete rivers that are a map to home, anywhere and nowhere. My toes are burning cold and numb, my ass too. Alleys are one of the few places people might actually leave you alone, but they’re somehow always wet. Wet with snow, wet from storm drains, wet with dumpster leakage, and no matter how many layers you wear, eventually it seeps through and sinks its rotten breath into your flesh.

I plunge into my pocket for the half sandwich I saved from yesterday, but my fingers find only lumps of thread and lint. I reach for my other pocket, tracing every edge of the lining in toiling denial. I check the pockets in the sweatpants under my jeans, empty. My coat, empty. I grunt as I shift my weight from my frozen, sleeping rear. My hand lands in a puddle of rot, and I shake it off as I stand. I look down the alley, willing the sandwich to show itself, but it isn’t there.

“Shit,” I mutter. My stomach rolls and pulls like it’s mad at me. “I know!” I yell at it.

“Are you okay?” a small voice says from behind me. I spin. The kid’s hair looks like a big electrified tangle, like someone gathered grass and twigs and steel wool and put it on his head, like a fixture sewn into his scalp but not growing. His pants are too long for him by a foot, and the extra fabric is dark and soaked from dragging under his feet.

“I lost my sandwich,” I say. “Must’ve fallen out of my pocket.”

“Can you get another one?”

“No.”

“I can show you something,” he says. “Come on.”

He starts walking away, then checks over his shoulder for me. His face is stained with splashes of black slush from city streets, but it makes his smile flash like diamonds. I gather my blankets, drape them over my shoulder, and follow him. Maybe he has an arrangement with a bagel shop or something. A lot of the guys do. He notices my limp and slows down.

“What happened to you?”

“Just old, kid.”

He nods and leads me to the closest fast food joint. He opens the door and gets in line.

“I don’t have any money,” I say.

“Me either.”

I can tell I stink from the people trying to sneak glances over cold shoulders. The employees are already eyeing us when we’re still three back in line. They’re all uncomfortable. They don’t want to see this kind of life, not up close and dripping in the lobby.

The kid falls into a fit of sneezes, one right after the other, controlled puffs of air giving way to a loud, full-body sneeze that bends him over. He wipes his nose on his sleeve and looks ahead like nothing happened. They’re all looking at me like this kid is mine, like I’ve done something horrible to him.

“Can we just get two cups of hot water?” the kid asks.

The cashier is a young girl, too young to fathom the sacrifice of dignity that occurs when walking into a business covered in rat shit and putrid fruit juices. I’m waiting for her to turn us away. I’m certain she will, but her eyes linger on the boy and she nods.

“Sure, hun.”

The kid smiles like she just adopted him. He takes the steaming Styrofoam cups from the counter and hands one to me.

“Here,” he says with a big, dopey, diamond grin.

“Water?”

“That’s not all, don’t drink it yet.”

He makes his way to the condiments and shoves his hand into the ketchup packets, trying for more than his fingers can jail. He shoves them into his pocket and follows with another massive scoop. He nearly cleans them out of ketchup. He’s more modest with the salt and pepper, taking only a quarter of the stock of those. Last, he grabs two spoons and nods at the door.

“Let’s go.”

I try to keep up with the bubbly scamp, but my limp and a full cup of steaming water go together like orange juice and toothpaste. When I get to the alley, he’s on the ground with his legs locked in a V, his cup of water between them.

“Come on,” he says, like I’m about to miss him turning water to wine. He looks at me like he can’t wait for me and I’ll miss it, and somehow the kid convinces me to hurry enough that I spill a little of the water on my frozen fingers. The burn strikes me like a hissing tongue. I sit, set the cup between my legs, and look at him. His big brown eyes are specked with hazel and wonder. He hands me a fistful of ketchup packets, then starts tearing his own open with his teeth. When he has five open, he stacks them together and squeezes them over the water, then starts over.

“Go on,” he says to me. “It doesn’t work right if the water gets cold.”

I can’t remember the last time I smiled. It feels like my face is tugging under a mask of plastic wrap when the urge strikes me. I start squeezing ketchup packets into the water. The ketchup falls to the bottom in blobs, but I don’t say anything, just keep squeezing.

“Now these.” The boy holds out salt and pepper. I dump them in too. He hands me a spoon and we both hunch over our cups and start to stir. The ketchup doesn’t want to break up at first. It just swirls in a disgusting blob, but I keep going, and eventually it starts to tear apart and break down until finally the whole mix is the pale color between orange and red. When the kid is happy with his mix he sits upright again. He stares at me expectantly.

“Now what?” I ask.

“That’s it.”

“That’s it?”

“It’s tomato soup,” he says.

I look down at the sweating Styrofoam, then glance at him. His face betrays hopeful anticipation. It’s like he’s presenting a crude clay handprint for my birthday and the whole of time hangs on whether I crush him or see him. I lean over the cup and smell. Ketchup water steams into my nose, but I somehow feel tomato soup inside. I scoop with the spoon and have a taste.

“Well, I’ll be damned,” I say. “That’s tomato soup, all right.”

The kid lights up and pops the spoon into his mouth.

“You figure that out yourself?” I ask.

“Yeah. I like it when I’m sick.” He wipes snot on his sleeve.

“You’re sick now,” I say. “You figured it out today?”

“No,” he shakes his head. “I’m sick a lot.”

I take another look at him. The moisture is deepening the color of his jeans and creeping up the sides of his legs now, spidery fingers trying to spin a web around him.

“That’s probably because you’re always cold,” I say. “You have someplace to stay? Inside?”

“No.”

“You have a sleeping bag, though? Blankets?”

He looks over and shakes his head again.

“Jeez, kid. Follow me.”

We creak to a stand, fighting the stiffness of the air. I take him down the alley until we’re at my favorite place to sleep. There’s a large metal box protruding from the back of the brick building emitting steam.

“Go on,” I say. “Get close to that.”

He glances at me, then steps closer to the box. He closes his eyes as the warm steam hits his face. His mouth breaks into a smile.

“It smells so good,” he says.

“Smells like laundry,” I say. “It’s a dry cleaner.”

He holds his hands in front of it. “It’s amazing.”

I lean over and pull back the piece of plywood I use to keep my spot out of sight. It’s a nook between the dumpster and the wall.

“That’s a good place to sleep,” I say. “Stinks, but you get used to it. And it stays pretty warm.”

“Cool.”

“You can have it.”

He snaps to attention, his eyes ricocheting between the nook and my face.

“You mean it?”

“Sure,” I say. “This too.” I pull one of the blankets from my shoulder and hand it to him.

“What about you?”

I hold up the Styrofoam cup. “I have tomato soup to keep me warm until I find a new spot.” I tap my cup into his to toast him. He lights up and wraps the blanket around his shoulders.

“See you around, kid.”
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