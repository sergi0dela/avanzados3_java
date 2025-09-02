const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const soundCounts = {};

for (const user of users) {
  for (const soundName in user.favoritesSounds) {
    if (soundCounts[soundName]) {
      soundCounts[soundName]++;
    } else {
      soundCounts[soundName] = 1;
    }
  }
}

console.log(soundCounts);

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Darth Vader"));

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const charactersAfterRemoval1 = removeItem(mainCharacters, "Han Solo");
console.log(charactersAfterRemoval1);

const charactersAfterRemoval2 = removeItem(charactersAfterRemoval1, "Luke");
console.log(charactersAfterRemoval2);

const charactersAfterRemoval3 = removeItem(charactersAfterRemoval2, "Pikachu");
console.log(charactersAfterRemoval3);