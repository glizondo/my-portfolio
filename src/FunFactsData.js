const facts = [
  {
    id: 1,
    fact: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
  },
  {
    id: 2,
    fact: "Bananas are berries, but strawberries are not.",
  },
  {
    id: 3,
    fact: "A group of flamingos is called a 'flamboyance.'",
  },
  {
    id: 4,
    fact: "A single cloud can weigh more than a million pounds.",
  },
  {
    id: 5,
    fact: "There are more stars in the universe than grains of sand on all the Earth's beaches.",
  },
  {
    id: 6,
    fact: "Octopuses have three hearts.",
  },
  {
    id: 7,
    fact: "Sharks existed before trees.",
  },
  {
    id: 8,
    fact: "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat.",
  },
  {
    id: 9,
    fact: "Cleopatra lived closer in time to the moon landing than to the construction of the Great Pyramid of Giza.",
  },
  {
    id: 10,
    fact: "Hot water freezes faster than cold water under certain conditions, a phenomenon known as the Mpemba effect.",
  },
  {
    id: 11,
    fact: "There are more possible iterations of a game of chess than there are atoms in the known universe.",
  },
  {
    id: 12,
    fact: "Koalas have fingerprints that are almost indistinguishable from human fingerprints.",
  },
  {
    id: 13,
    fact: "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
  },
  {
    id: 14,
    fact: "Humans share 60% of their DNA with bananas.",
  },
  {
    id: 15,
    fact: "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  },
  {
    id: 16,
    fact: "A day on Venus is longer than a year on Venus.",
  },
  {
    id: 17,
    fact: "Cows have best friends and can become stressed when they are separated.",
  },
  {
    id: 18,
    fact: "The longest hiccuping spree lasted 68 years.",
  },
  {
    id: 19,
    fact: "There are more public libraries in the United States than McDonald's restaurants.",
  },
  {
    id: 20,
    fact: "A narwhal's tusk is actually an elongated tooth.",
  },
  {
    id: 21,
    fact: "Some cats are allergic to humans.",
  },
  {
    id: 22,
    fact: "There are more possible combinations of a deck of cards than there are seconds since the Big Bang.",
  },
  {
    id: 23,
    fact: "Sloths can hold their breath longer than dolphins can.",
  },
  {
    id: 24,
    fact: "The inventor of the Frisbee was turned into a Frisbee after he died.",
  },
  {
    id: 25,
    fact: "It rains diamonds on Saturn and Jupiter.",
  },
  {
    id: 26,
    fact: "The world's largest pyramid isn't in Egypt, but in Mexico.",
  },
  {
    id: 27,
    fact: "The average person will spend six months of their life waiting for red lights to turn green.",
  },
  {
    id: 28,
    fact: "Wombat poop is cube-shaped.",
  },
  {
    id: 29,
    fact: "The heart of a shrimp is located in its head.",
  },
  {
    id: 30,
    fact: "A blue whale's heart is the size of a small car.",
  },
  {
    id: 31,
    fact: "The hashtag symbol is technically called an 'octothorpe.'",
  },
  {
    id: 32,
    fact: "Pineapples take about two years to grow.",
  },
  {
    id: 33,
    fact: "The first oranges weren't orange—they were green.",
  },
  {
    id: 34,
    fact: "Humans are the only animals that blush.",
  },
  {
    id: 35,
    fact: "Butterflies taste with their feet.",
  },
  {
    id: 36,
    fact: "The moon has moonquakes, just like Earth has earthquakes.",
  },
  {
    id: 37,
    fact: "A crocodile cannot stick its tongue out.",
  },
  {
    id: 38,
    fact: "Giraffes have the same number of neck vertebrae as humans—seven.",
  },
  {
    id: 39,
    fact: "A small child could swim through the veins of a blue whale.",
  },
  {
    id: 40,
    fact: "If you tried a new variety of apple every day, it would take you over 20 years to try them all.",
  },
  {
    id: 41,
    fact: "A day on Mercury is longer than its year.",
  },
  {
    id: 42,
    fact: "The largest snowflake ever recorded was 15 inches wide.",
  },
  {
    id: 43,
    fact: "The name 'Google' is derived from the mathematical term 'googol,' which is a 1 followed by 100 zeros.",
  },
  {
    id: 44,
    fact: "A sneeze can travel up to 100 miles per hour.",
  },
  {
    id: 45,
    fact: "There are more trees on Earth than stars in the Milky Way galaxy.",
  },
  {
    id: 46,
    fact: "Dolphins have names for each other.",
  },
  {
    id: 47,
    fact: "Humans share 98% of their DNA with chimpanzees.",
  },
  {
    id: 48,
    fact: "A jiffy is an actual unit of time: 1/100th of a second.",
  },
  {
    id: 49,
    fact: "Polar bears have black skin under their white fur.",
  },
  {
    id: 50,
    fact: "The hottest planet in our solar system is Venus, not Mercury.",
  },
  {
    id: 51,
    fact: "The unicorn is the national animal of Scotland.",
  },
  {
    id: 52,
    fact: "The shortest commercial flight in the world is in Scotland and lasts just 1.5 minutes.",
  },
  {
    id: 53,
    fact: "A snail can sleep for three years.",
  },
  {
    id: 54,
    fact: "The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo.'",
  },
  {
    id: 55,
    fact: "An octopus has nine brains, one in each arm and one central brain.",
  },
  {
    id: 56,
    fact: "There are more plastic flamingos in the U.S. than real ones.",
  },
  {
    id: 57,
    fact: "A blue whale's tongue weighs as much as an elephant.",
  },
  {
    id: 58,
    fact: "Some fungi create zombies, then control their minds.",
  },
  {
    id: 59,
    fact: "A group of porcupines is called a 'prickle.'",
  },
  {
    id: 60,
    fact: "The first computer virus was created in 1983.",
  },
  {
    id: 61,
    fact: "Cows produce more milk when they listen to soothing music.",
  },
  {
    id: 62,
    fact: "The average person walks the equivalent of five times around the world in their lifetime.",
  },
  {
    id: 63,
    fact: "The M's in M&M's stand for 'Mars' and 'Murrie,' the last names of the candy's founders.",
  },
  {
    id: 64,
    fact: "Sea otters hold hands when they sleep to avoid drifting apart.",
  },
  {
    id: 65,
    fact: "A rhinoceros' horn is made of hair.",
  },
  {
    id: 66,
    fact: "Jellyfish are 95% water.",
  },
  {
    id: 67,
    fact: "The Empire State Building has its own zip code.",
  },
  {
    id: 68,
    fact: "The human nose can remember 50,000 different scents.",
  },
  {
    id: 69,
    fact: "It's impossible to hum while holding your nose.",
  },
  {
    id: 70,
    fact: "Banging your head against a wall burns 150 calories an hour.",
  },
  {
    id: 71,
    fact: "Cheetahs can't roar, they can only meow like a house cat.",
  },
  {
    id: 72,
    fact: "Humans and giraffes have the same number of bones in their necks.",
  },
  {
    id: 73,
    fact: "The world's largest desert is actually Antarctica.",
  },
  {
    id: 74,
    fact: "The average adult human has about 2,000 to 4,000 taste buds.",
  },
  {
    id: 75,
    fact: "A bolt of lightning is five times hotter than the surface of the sun.",
  },
  {
    id: 76,
    fact: "The fingerprints of a koala are so indistinguishable from humans that they have been confused at crime scenes.",
  },
  {
    id: 77,
    fact: "Kangaroos can't walk backward.",
  },
  {
    id: 78,
    fact: "Venus is the only planet that rotates clockwise.",
  },
  {
    id: 79,
    fact: "A tarantula can survive for more than two years without food.",
  },
  {
    id: 80,
    fact: "Cats have fewer toes on their back paws.",
  },
  {
    id: 81,
    fact: "There’s a basketball court in the U.S. Supreme Court building.",
  },
  {
    id: 82,
    fact: "The first oranges weren’t orange—they were green.",
  },
  {
    id: 83,
    fact: "The dot over a lowercase 'i' or 'j' is known as a 'tittle.'",
  },
  {
    id: 84,
    fact: "A cockroach can live for several weeks without its head.",
  },
  {
    id: 85,
    fact: "Alaska is the only state whose name is on one row on a keyboard.",
  },
  {
    id: 86,
    fact: "The average person spends six months of their lifetime waiting for red lights to turn green.",
  },
  {
    id: 87,
    fact: "You can’t hum if you hold your nose.",
  },
  {
    id: 88,
    fact: "Water makes different sounds when it’s boiling depending on the temperature.",
  },
  {
    id: 89,
    fact: "The scientific term for brain freeze is 'sphenopalatine ganglioneuralgia.'",
  },
  {
    id: 90,
    fact: "You’re more likely to get a computer virus from visiting religious sites than porn sites.",
  },
  {
    id: 91,
    fact: "Polar bears have black skin and actually their fur isn't white—it's transparent.",
  },
  {
    id: 92,
    fact: "Humans are the only animals that blush.",
  },
  {
    id: 93,
    fact: "One lightyear is about 5.88 trillion miles (9.5 trillion km).",
  },
  {
    id: 94,
    fact: "Dolphins have been known to protect swimmers from sharks.",
  },
  {
    id: 95,
    fact: "Walt Disney was afraid of mice.",
  },
  {
    id: 96,
    fact: "You can’t fold a paper in half more than seven times.",
  },
  {
    id: 97,
    fact: "Apples are more effective at waking you up in the morning than coffee.",
  },
  {
    id: 98,
    fact: "There’s a town in Canada called 'Dildo.'",
  },
  {
    id: 99,
    fact: "Avocados are berries.",
  },
  {
    id: 100,
    fact: "The first email was sent by Ray Tomlinson to himself in 1971.",
  },
];

export default facts;
