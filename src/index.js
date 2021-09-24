const namesRojasFamily = [
    "Joel",
    "Luciana",
    "Carlita",
    "Martha",
    "Hortencia",
    "Jose",
    "Keila",
    "Gabriel",
    "Abigail",
];

const nameGenerator = () => {
    const name = namesRojasFamily[Math.floor(Math.random() * namesRojasFamily.length)];
    console.log(name);
}

module.exports = { nameGenerator };