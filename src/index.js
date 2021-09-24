const messages = [
    "Joel",
    "Luciana",
    "Carlita",
    "Martha",
    "Hortencia",
    "Jose",
    "Keila",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };