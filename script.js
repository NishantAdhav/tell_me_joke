// Array of jokes
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",

    "Parallel lines have so much in common. It's a shame they'll never meet.",

    "Why don't skeletons fight each other? They don't have the guts.",

    "I told my wife she should embrace her mistakes. She gave me a hug.",

    "What's orange and sounds like a parrot? A carrot!",

    "Why don't oysters donate to charity? Because they're shellfish.",

    "What does a storm cloud wear under his raincoat? Thunderwear.",

    "What is fast, loud and crunchy? A rocket chip.",

   "How does the ocean say hi? It waves!",

  "What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",

  "Why did the teddy bear say no to dessert? Because she was stuffed.",

  " Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.",

   " Name the kind of tree you can hold in your hand? A palm tree!",

   "What do birds give out on Halloween? Tweets."
];

// Function to display a random joke
function tellJoke() {
    const jokeContainer = document.getElementById('joke-text');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeContainer.textContent = jokes[randomIndex];
}

// Event listener for the joke button
document.getElementById('joke-button').addEventListener('click', tellJoke);
