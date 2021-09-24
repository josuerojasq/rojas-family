const namesRojasFamily = [
    "Abigail",
    "Belen",
    "Carlita",
    "Gabriel",
    "Hortencia",
    "Joel",
    "Jose",
    "Keila",
    "Luciana",
    "Martha",
    "Raquel",
];

const nameGenerator = () => {
    const name = namesRojasFamily[Math.floor(Math.random() * namesRojasFamily.length)];
    console.log(name);
}

module.exports = { nameGenerator };