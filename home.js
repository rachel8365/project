function menu() {
    let menu = document.getElementById("mainHeader");
    menu.style.display = window.getComputedStyle(menu).display === 'none' ? 'block' : '';
}

function closeNavBar() {
    let menu = document.getElementById("mainHeader");
    menu.style.display = window.getComputedStyle(menu).display === 'block' ? '' : 'block';
}

const sentences = ['I worked for it..."', /* 'Passionate about coding.' */];

const sentence1El = document.querySelector('.movingText');

let charIndex = 0;
let sentenceIndex = 0;
let direction = 1;

function nextStep() {
    const sentence = sentences[sentenceIndex];
    sentence1El.innerText = sentence.substring(0, charIndex);
    if (direction === 1) {
        charIndex += 1;
        if (charIndex > sentence.length) {
            direction = -1;
            charIndex = sentence.length;
            setTimeout(nextStep, 2000); // Wait for 2 seconds before erasing
        } else {
            setTimeout(nextStep, 100); // Wait for 100 milliseconds before typing the next character
        }
    } else {
        charIndex -= 1;
        if (charIndex === -1) {
            direction = 1;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            setTimeout(nextStep, 1000); // Wait for 1 second before typing the next sentence
        } else {
            setTimeout(nextStep, 50); // Wait for 50 milliseconds before erasing the next character
        }
    }
}
nextStep();
