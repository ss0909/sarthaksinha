const typingText = document.querySelector('.typing-effect');
const words = ["Web Developer", "Designer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    let displayText = currentWord.substring(0, charIndex);
    
    if (typingText) {
        typingText.textContent = displayText;
    }

    if (!isDeleting && charIndex <= currentWord.length) {
        charIndex++;
        setTimeout(type, 200);
    } else if (isDeleting && charIndex >= 0) {
        charIndex--;
        setTimeout(type, 100);
    }

    if (charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 2000); // Wait before deleting
    } else if (charIndex === -1) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        setTimeout(type, 500); // Wait before typing new word
    }
}

document.addEventListener('DOMContentLoaded', () => {
   if(document.querySelector('.typing-effect')) {
       type(); 
   }
});
