const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const card = flashcards[currentIndex];
    const content = document.getElementById("card-content");
    content.textContent = showingTerm ? card.term : card.definition;
}

// The rest of the code you will write is apart of event listeners
document.getElementById("flashcard").addEventListener("click", function() {
    showingTerm = !showingTerm;
    displayCard();
});

document.getElementById("prev-btn").addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        showingTerm = true;
    }
    displayCard();
});

document.getElementById("next-btn").addEventListener("click", function() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        showingTerm = true;
    }
    displayCard();
});

document.getElementById("add-card-btn").addEventListener("click", function() {
    const term = document.getElementById("new-term").value;
    const definition = document.getElementById("new-definition").value;
    
    if (term !== "" && definition != "") {
        flashcards.push({ term: term, definition: definition });
        document.getElementById("new-term").value = "";
        document.getElementById("new-definition").value = "";
    }
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
