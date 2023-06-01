var quote = [
    "It's not the size of the dog in the fight, but the size of the fight in the dog.",
    "Nothing lasts forever. Not even your troubles.",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",
    "Take chances, make mistakes. That's how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.",
    "Being strong means rejoicing in who you are, complete with imperfections.",
    "If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place.",
    "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
    "The only place you find success before work is in the dictionary.","You're going to fail your way to success, you have nothing to be ashamed of so keep your head up. It’s much easier to come up with excuses of why you can't do it. If you do what is easy your life will be hard.",
    "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
    "Nobody can make you feel inferior without your consent.",
    "It took me a long time not to judge myself through someone else's eyes.","I quit being afraid when my first venture failed and the sky didn't fall down.",
    "Hope never abandons you, you abandon it.",
    "The only thing keeping you from getting what you want is the story you keep telling yourself about why you don't have it. People who are willing to die to succeed will tend to succeed.",
    "People are like stained-glass windows. They sparkle and shine when the sun is out, but when the darkness sets in their true beauty is revealed only if there is light from within.",
    "Nothing splendid has ever been achieved except by those who dared believe that something inside of them was superior to circumstance.","Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.",
    "The secret is in not giving up, of all the greats they didn't quit. If you quit I guarantee you're gonna fail, but you don't know what's gunna happen if you don't give in.",
    "Just decide; what's it's gonna be, who you're gonna be and how your gonna do it, and then from that point, the universe will get out of your way."
];

var writter=["-Archie Griffen",
"-Arnold H Glasgow",
"-Albert Einstein",
"-Mary Tyler Moore",
"-Margaret Woodhouse",
"-Nora Roberts",
"-Michael Jordan",
"-May V Smith",
"-Les Brown",
"-George Bernard Shaw",
"-Eleanor Roosevelt",
"-Sally Field",
"-Allen H Neuharth",
"-George Weinberg",
"-Tony Robbins",
"-Elisabeth Kübler-Ross",
"-Bruce Barton",
"-Mary Kay Ash",
"-Eric Thomas",
"-Will Smith"
]


function newQuote(){
    var randomnumber = Math.floor(Math.random()*(quote.length));
    document.getElementById('quote').innerHTML = quote[randomnumber];
    document.getElementById('writter').innerHTML = writter[randomnumber];
}

function copy(){
    var n = document.getElementById('quote');
    navigator.clipboard.writeText(n.innerText);
}

function speak(){
    var q = document.getElementById('quote');
    var w = document.getElementById('writter');
    let utter= new SpeechSynthesisUtterance(`${q.innerText} by ${w.innerText}`);
    speechSynthesis.speak(utter);
}
window.addEventListener('load', pageOpened, false);
function pageOpened() {
    var randomnumber = Math.floor(Math.random()*(quote.length));
    document.getElementById('quote').innerHTML = quote[randomnumber];
    document.getElementById('writter').innerHTML = writter[randomnumber];
}