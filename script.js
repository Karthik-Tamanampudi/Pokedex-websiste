// 1️⃣ Pokémon data
const pokedex = {
  1: {
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    height: "2 feet 4 inches",
    weight: "15.2 lbs",
    description: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  2: {
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    height: "3 feet 3 inches",
    weight: "28.7 lbs",
    description: "The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  3: {
    name: "Venusaur",
    type: ["Grass", "Poison"],
    height: "6 feet 7 inches",
    weight: "220.5 lbs",
    description: "While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  4: {
  name: "Charmander",
  type: ["Fire"],
  height: "2 feet",
  weight: "18.7 lbs",
  description: "The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
},
5: {
  name: "Charmeleon",
  type: ["Fire"],
  height: "3 feet 7 inches",
  weight: "41.9 lbs",
  description: "When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
},
6: {
  name: "Charizard",
  type: ["Fire", "Flying"],
  height: "5 feet 11 inches",
  weight: "199.5 lbs",
  description: "If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
},
7: {
  name: "Squirtle",
  type: ["Water"],
  height: "1 feet 8 inches",
  weight: "19.8 lbs",
  description: "After birth, its back swells and hardens into a shell. It sprays a potent foam from its mouth.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
},
8: {
  name: "Wartortle",
  type: ["Water"],
  height: "3 feet 3 inches",
  weight: "49.6 lbs",
  description: "Wartortle’s long, furry tail is a symbol of longevity, so this Pokémon is quite popular among older people.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
},
9: {
  name: "Blastoise",
  type: ["Water"],
  height: "5 feet 3 inches",
  weight: "188.5 lbs",
  description: "It has jet nozzles on its shell. This impressive Pokémon uses these jets to charge toward foes with all the force of a rocket.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
},
10: {
  name: "Caterpie",
  type: ["Bug"],
  height: "1 foot",
  weight: "6.4 lbs",
  description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
},
11: {
  name: "Metapod",
  type: ["Bug"],
  height: "2 feet 4 inches",
  weight: "21.8 lbs",
  description: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
},
12: {
  name: "Butterfree",
  type: ["Bug", "Flying"],
  height: "3 feet 7 inches",
  weight: "70.5 lbs",
  description: "It loves the nectar of flowers and can locate flower patches that have even tiny amounts of pollen.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
},
13: {
  name: "Weedle",
  type: ["Bug", "Poison"],
  height: "1 foot",
  weight: "7.1 lbs",
  description: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
},
14: {
  name: "Kakuna",
  type: ["Bug", "Poison"],
  height: "2 feet",
  weight: "22.0 lbs",
  description: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
},
15: {
  name: "Beedrill",
  type: ["Bug", "Poison"],
  height: "3 feet 3 inches",
  weight: "65 lbs",
  description: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
},
16: {
  name: "Pidgey",
  type: ["Normal", "Flying"],
  height: "1 foot",
  weight: "4 lbs",
  description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
},
17: {
  name: "Pidgeotto",
  type: ["Normal", "Flying"],
  height: "3 feet 7 inches",
  weight: "66.1 lbs",
  description: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
},
18: {
  name: "Pidgeot",
  type: ["Normal", "Flying"],
  height: "4 feet 11 inches",
  weight: "87.1 lbs",
  description: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
},
19: {
  name: "Rattata",
  type: ["Normal"],
  height: "1 foot",
  weight: "7.7 lbs",
  description: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
},
20: {
  name: "Raticate",
  type: ["Normal"],
  height: "2 feet 4 inches",
  weight: "40.8 lbs",
  description: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
},
21: {
  name: "Spearow",
  type: ["Normal", "Flying"],
  height: "1 foot",
  weight: "4.4 lbs",
  description: "Inept at flying high. However, it can fly around very fast to protect its territory.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
},
22: {
  name: "Fearow",
  type: ["Normal", "Flying"],
  height: "3 feet 11 inches",
  weight: "83.8 lbs",
  description: "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
},
23: {
  name: "Ekans",
  type: ["Poison"],
  height: "6 feet 7 inches",
  weight: "15.2 lbs",
  description: "It can freely detach its jaw to swallow large prey whole. It can become too heavy to move, however.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
},
24: {
  name: "Arbok",
  type: ["Poison"],
  height: "11 feet 6 inches",
  weight: "143.3 lbs",
  description: "The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
},
25: {
  name: "Pikachu",
  type: ["Electric"],
  height: "1 foot 4 inches",
  weight: "13.2 lbs",
  description: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
},
26: {
  name: "Raichu",
  type: ["Electric"],
  height: "2 feet 7 inches",
  weight: "66.1 lbs",
  description: "Its tail discharges electricity into the ground, protecting it from getting shocked.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
},
27: {
  name: "Sandshrew",
  type: ["Ground"],
  height: "2 feet",
  weight: "26.5 lbs",
  description: "It digs deep burrows to live in. When in danger, it rolls up its body to withstand attacks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
},
28: {
  name: "Sandslash",
  type: ["Ground"],
  height: "3 feet 11 inches",
  weight: "65 lbs",
  description: "It is adept at attacking with the spines on its back and its sharp claws while quickly scurrying about.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
},
29: {
  name: "Nidoran♀",
  type: ["Poison"],
  height: "1 foot 4 inches",
  weight: "15.4 lbs",
  description: "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
},
30: {
  name: "Nidorina",
  type: ["Poison"],
  height: "2 feet 7 inches",
  weight: "44.1 lbs",
  description: "The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
},
31: {
  name: "Nidoqueen",
  type: ["Poison", "Ground"],
  height: "4 feet 3 inches",
  weight: "132.3 lbs",
  description: "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
},
32: {
  name: "Nidoran♂",
  type: ["Poison"],
  height: "1 foot 8 inches",
  weight: "19.8 lbs",
  description: "The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
},
33: {
  name: "Nidorino",
  type: ["Poison"],
  height: "2 feet 7 inches",
  weight: "43.0 lbs",
  description: "With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
},
34: {
  name: "Nidoking",
  type: ["Poison", "Ground"],
  height: "4 feet 11 inches",
  weight: "136.7 lbs",
  description: "When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
},
35: {
  name: "Clefairy",
  type: ["Fairy"],
  height: "2 feet",
  weight: "16.5 lbs",
  description: "On nights with a full moon, Clefairy gather from all over and dance. Bathing in moonlight makes them float.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
},
36: {
  name: "Clefable",
  type: ["Fairy"],
  height: "4 feet 3 inches",
  weight: "88.2 lbs",
  description: "Said to live in quiet, remote mountains, this type of fairy has a strong aversion to being seen.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
},
37: {
  name: "Vulpix",
  type: ["Fire"],
  height: "2 feet",
  weight: "21.8 lbs",
  description: "If it is attacked by an enemy that is stronger than itself, it feigns injury to fool the enemy and escapes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
},
38: {
  name: "Ninetales",
  type: ["Fire"],
  height: "3 feet 7 inches",
  weight: "43.9 lbs",
  description: "Some legends claim that each of its nine tails has its own unique type of special mystical power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
},
39: {
  name: "Jigglypuff",
  type: ["Normal", "Fairy"],
  height: "1 foot 8 inches",
  weight: "12.1 lbs",
  description: "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
},
40: {
  name: "Wigglytuff",
  type: ["Normal", "Fairy"],
  height: "3 feet 3 inches",
  weight: "26.5 lbs",
  description: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
},
41: {
  name: "Zubat",
  type: ["Poison", "Flying"],
  height: "2 feet 7 inches",
  weight: "16.5 lbs",
  description: "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
},
42: {
  name: "Golbat",
  type: ["Poison", "Flying"],
  height: "5 feet 3 inches",
  weight: "121.3 lbs",
  description: "It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
},
43: {
  name: "Oddish",
  type: ["Grass", "Poison"],
  height: "1 foot 8 inches",
  weight: "11.9 lbs",
  description: "Its scientific name is Oddium wanderus. It is said to cover distances as far as 1,000 feet when night falls, walking on its two roots.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
},
44: {
  name: "Gloom",
  type: ["Grass", "Poison"],
  height: "2 feet 7 inches",
  weight: "19.0 lbs",
  description: "It secretes a sticky, drool-like nectar. Though sweet, it smells too repulsive to get very close.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
},
45: {
  name: "Vileplume",
  type: ["Grass", "Poison"],
  height: "3 feet 11 inches",
  weight: "41.0 lbs",
  description: "The bud bursts into bloom with a bang. It then starts scattering allergenic, poisonous pollen.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
},
46: {
  name: "Paras",
  type: ["Bug", "Grass"],
  height: "1 foot",
  weight: "11.9 lbs",
  description: "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
},
47: {
  name: "Parasect",
  type: ["Bug", "Grass"],
  height: "3 feet 3 inches",
  weight: "65.0 lbs",
  description: "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
},
48: {
  name: "Venonat",
  type: ["Bug", "Poison"],
  height: "3 feet 3 inches",
  weight: "66.1 lbs",
  description: "Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
},
49: {
  name: "Venomoth",
  type: ["Bug", "Poison"],
  height: "4 feet 11 inches",
  weight: "27.6 lbs",
  description: "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
},
50: {
  name: "Diglett",
  type: ["Ground"],
  height: "8 inches",
  weight: "1.8 lbs",
  description: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
},
51: {
  name: "Dugtrio",
  type: ["Ground"],
  height: "2 feet 4 inches",
  weight: "73.4 lbs",
  description: "Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
},
52: {
  name: "Meowth",
  type: ["Normal"],
  height: "1 foot 4 inches",
  weight: "9.3 lbs",
  description: "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
},
53: {
  name: "Persian",
  type: ["Normal"],
  height: "3 feet 3 inches",
  weight: "70.5 lbs",
  description: "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
},
54: {
  name: "Psyduck",
  type: ["Water"],
  height: "2 feet 7 inches",
  weight: "43.2 lbs",
  description: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
},
55: {
  name: "Golduck",
  type: ["Water"],
  height: "5 feet 7 inches",
  weight: "168.9 lbs",
  description: "When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
},
56: {
  name: "Mankey",
  type: ["Fighting"],
  height: "1 foot 8 inches",
  weight: "55.0 lbs",
  description: "It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
},
57: {
  name: "Primeape",
  type: ["Fighting"],
  height: "3 feet 3 inches",
  weight: "70.5 lbs",
  description: "It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
},
58: {
  name: "Growlithe",
  type: ["Fire"],
  height: "2 feet 4 inches",
  weight: "41.9 lbs",
  description: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
},
59: {
  name: "Arcanine",
  type: ["Fire"],
  height: "6 feet 3 inches",
  weight: "341.7 lbs",
  description: "An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
},
60: {
  name: "Poliwag",
  type: ["Water"],
  height: "2 feet",
  weight: "27.3 lbs",
  description: "The swirl on its belly is its insides showing through the skin. It appears more clearly after Poliwag eats.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
},
61: {
  name: "Poliwhirl",
  type: ["Water"],
  height: "3 feet 3 inches",
  weight: "44.1 lbs",
  description: "Its two legs are well developed. Even though it can live on the ground, it prefers living in water.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
},
62: {
  name: "Poliwrath",
  type: ["Water", "Fighting"],
  height: "4 feet 3 inches",
  weight: "119.0 lbs",
  description: "Although it’s skilled in a style of dynamic swimming that uses all its muscles, for some reason it lives on dry land.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
},
63: {
  name: "Abra",
  type: ["Psychic"],
  height: "2 feet 11 inches",
  weight: "43.0 lbs",
  description: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
},
64: {
  name: "Kadabra",
  type: ["Psychic"],
  height: "4 feet 3 inches",
  weight: "124.6 lbs",
  description: "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
},
65: {
  name: "Alakazam",
  type: ["Psychic"],
  height: "4 feet 11 inches",
  weight: "105.8 lbs",
  description: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
},
66: {
  name: "Machop",
  type: ["Fighting"],
  height: "2 feet 7 inches",
  weight: "43.0 lbs",
  description: "Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
},
67: {
  name: "Machoke",
  type: ["Fighting"],
  height: "4 feet 11 inches",
  weight: "155.4 lbs",
  description: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
},
68: {
  name: "Machamp",
  type: ["Fighting"],
  height: "5 feet 3 inches",
  weight: "286.6 lbs",
  description: "It punches with its four arms at blinding speed. It can launch 1,000 punches in two seconds.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
},
69: {
  name: "Bellsprout",
  type: ["Grass", "Poison"],
  height: "2 feet 4 inches",
  weight: "8.8 lbs",
  description: "No matter what Bellsprout is doing, if it detects movement nearby, it will immediately react by reaching out with its thin vines.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
},
70: {
  name: "Weepinbell",
  type: ["Grass", "Poison"],
  height: "3 feet 3 inches",
  weight: "14.1 lbs",
  description: "Even though it is filled with acid, it does not melt because it also oozes a protective fluid.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
},
71: {
  name: "Victreebel",
  type: ["Grass", "Poison"],
  height: "5 feet 7 inches",
  weight: "34.2 lbs",
  description: "It lures prey into its mouth with a nectar-like aroma. The helpless prey is melted with a dissolving fluid.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
},
72: {
  name: "Tentacool",
  type: ["Water", "Poison"],
  height: "2 feet 11 inches",
  weight: "100.3 lbs",
  description: "When the tide goes out, dehydrated Tentacool can be found left behind on the shore.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
},
73: {
  name: "Tentacruel",
  type: ["Water", "Poison"],
  height: "5 feet 3 inches",
  weight: "121.3 lbs",
  description: "On the rare occasions that large outbreaks of Tentacruel occur, all fish Pokémon disappear from the surrounding sea.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
},
74: {
  name: "Geodude",
  type: ["Rock", "Ground"],
  height: "1 foot 4 inches",
  weight: "44.1 lbs",
  description: "At rest, it looks just like a rock. Carelessly stepping on it will make it swing its fists angrily.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
},
75: {
  name: "Graveler",
  type: ["Rock", "Ground"],
  height: "3 feet 3 inches",
  weight: "231.5 lbs",
  description: "A slow walker, it rolls to move. It pays no attention to any object that happens to be in its path.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
},
76: {
  name: "Golem",
  type: ["Rock", "Ground"],
  height: "4 feet 7 inches",
  weight: "661.4 lbs",
  description: "It is enclosed in a hard shell that is as rugged as slabs of rock. It sheds skin once a year to grow larger.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
},
77: {
  name: "Ponyta",
  type: ["Fire"],
  height: "3 feet 3 inches",
  weight: "66.1 lbs",
  description: "About an hour after birth, Ponyta’s fiery mane and tail grow out, giving the Pokémon an impressive appearance.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
},
78: {
  name: "Rapidash",
  type: ["Fire"],
  height: "5 feet 7 inches",
  weight: "209.4 lbs",
  description: "It gallops at nearly 150 mph. With its mane blazing ferociously, it races as if it were an arrow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
},
79: {
  name: "Slowpoke",
  type: ["Water", "Psychic"],
  height: "3 feet 11 inches",
  weight: "79.4 lbs",
  description: "It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
},
80: {
  name: "Slowbro",
  type: ["Water", "Psychic"],
  height: "5 feet 3 inches",
  weight: "173.1 lbs",
  description: "When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
},
81: {
  name: "Magnemite",
  type: ["Electric", "Steel"],
  height: "1 foot",
  weight: "13.2 lbs",
  description: "The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
},
82: {
  name: "Magneton",
  type: ["Electric", "Steel"],
  height: "3 feet 3 inches",
  weight: "132.3 lbs",
  description: "Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
},
83: {
  name: "Farfetch'd",
  type: ["Flying", "Normal"],
  height: "2 feet 7 inches",
  weight: "33.1 lbs",
  description: "It can’t live without the stalk it holds. That’s why it defends the stalk from attackers with its life.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
},
84: {
  name: "Doduo",
  type: ["Normal", "Flying"],
  height: "4 feet 7 inches",
  weight: "86.4 lbs",
  description: "Its twin heads have exactly the same genes and battle in perfect sync with each other.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
},
85: {
  name: "Dodrio",
  type: ["Normal", "Flying"],
  height: "5 feet 11 inches",
  weight: "187.8 lbs",
  description: "It now has three hearts and three sets of lungs. Though it can’t run as fast as Doduo, Dodrio can keep running for longer stretches of time.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
},
86: {
  name: "Seel",
  type: ["Water"],
  height: "3 feet 7 inches",
  weight: "198.4 lbs",
  description: "The protrusion on its head is very hard. It is used for bashing through thick ice.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
},
87: {
  name: "Dewgong",
  type: ["Water", "Ice"],
  height: "5 feet 7 inches",
  weight: "264.6 lbs",
  description: "It sleeps under shallow ocean waters during the day, then looks for food at night when it’s colder.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
},
88: {
  name: "Grimer",
  type: ["Poison"],
  height: "2 feet 11 inches",
  weight: "66.1 lbs",
  description: "Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
},
89: {
  name: "Muk",
  type: ["Poison"],
  height: "3 feet 11 inches",
  weight: "66.1 lbs",
  description: "It’s thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
},
90: {
  name: "Shellder",
  type: ["Water"],
  height: "1 foot",
  weight: "8.8 lbs",
  description: "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
},
91: {
  name: "Cloyster",
  type: ["Water", "Ice"],
  height: "4 feet 11 inches",
  weight: "292.1 lbs",
  description: "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
},
92: {
  name: "Gastly",
  type: ["Ghost", "Poison"],
  height: "4 feet 3 inches",
  weight: "0.2 lbs",
  description: "Its body is made of gas. Despite lacking substance, it can envelop an opponent of any size and cause suffocation.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
},
93: {
  name: "Haunter",
  type: ["Ghost", "Poison"],
  height: "5 feet 3 inches",
  weight: "0.2 lbs",
  description: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
},
94: {
  name: "Gengar",
  type: ["Ghost", "Poison"],
  height: "4 feet 11 inches",
  weight: "89.3 lbs",
  description: "To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
},
95: {
  name: "Onix",
  type: ["Rock", "Ground"],
  height: "28 feet 10 inches",
  weight: "286.6 lbs",
  description: "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
},
96: {
  name: "Drowzee",
  type: ["Psychic"],
  height: "3 feet 3 inches",
  weight: "71.4 lbs",
  description: "It remembers every dream it eats. It rarely eats the dreams of adults because children’s are much tastier.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
},
97: {
  name: "Hypno",
  type: ["Psychic"],
  height: "5 feet 3 inches",
  weight: "166.7 lbs",
  description: "When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
},
98: {
  name: "Krabby",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "14.3 lbs",
  description: "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
},
99: {
  name: "Kingler",
  type: ["Water"],
  height: "4 feet 3 inches",
  weight: "132.3 lbs",
  description: "The larger pincer has 10,000-horsepower strength. However, it is so heavy, it is difficult to aim.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
},
100: {
  name: "Voltorb",
  type: ["Electric"],
  height: "1 foot 8 inches",
  weight: "22.9 lbs",
  description: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
},
101: {
  name: "Electrode",
  type: ["Electric"],
  height: "3 feet 3 inches",
  weight: "146.8 lbs",
  description: "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
},
102: {
  name: "Exeggcute",
  type: ["Grass", "Psychic"],
  height: "1 foot 4 inches",
  weight: "5.5 lbs",
  description: "If you touch one of Exeggcute’s heads, mistaking it for an egg, the other heads will quickly gather and attack you in a swarm.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
},
103: {
  name: "Exeggutor",
  type: ["Grass", "Psychic"],
  height: "6 feet 11 inches",
  weight: "264.4 lbs",
  description: "It is called the Walking Jungle. Each of the nuts has a face and a will of its own.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
},
104: {
  name: "Cubone",
  type: ["Ground"],
  height: "1 foot 4 inches",
  weight: "14.3 lbs",
  description: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
},
105: {
  name: "Marowak",
  type: ["Ground"],
  height: "3 feet 3 inches",
  weight: "99.2 lbs",
  description: "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
},
106: {
  name: "Hitmonlee",
  type: ["Fighting"],
  height: "4 feet 11 inches",
  weight: "109.8 lbs",
  description: "At the exact moment it lands a kick on its target, Hitmonlee hardens the muscles on the sole of its foot, maximizing the power of the kick.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
},
107: {
  name: "Hitmonchan",
  type: ["Fighting"],
  height: "4 feet 7 inches",
  weight: "110.7 lbs",
  description: "It corners its foes with combo punches from both sides, then finishes them off with a single straight punch launched at over 300 mph.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
},
108: {
  name: "Lickitung",
  type: ["Normal"],
  height: "3 feet 11 inches",
  weight: "144.4 lbs",
  description: "If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
},
109: {
  name: "Koffing",
  type: ["Poison"],
  height: "2 feet",
  weight: "2.2 lbs",
  description: "Toxic gas is held within its thin, balloon-shaped body, so it can cause massive explosions.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
},
110: {
  name: "Weezing",
  type: ["Poison"],
  height: "3 feet 11 inches",
  weight: "20.9 lbs",
  description: "Top-grade perfume is made using its internal poison gases by diluting them to the highest level.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
},
111: {
  name: "Rhyhorn",
  type: ["Rock", "Ground"],
  height: "3 feet 3 inches",
  weight: "253.5 lbs",
  description: "Rhyhorn claims an area with over a six mile radius as its territory. It apparently forgets where this territory is when running, however.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
},
112: {
  name: "Rhydon",
  type: ["Rock", "Ground"],
  height: "6 feet 3 inches",
  weight: "264.7 lbs",
  description: "The horn of a Rhydon is powerful enough to crush raw diamonds. These Pokémon polish their horns by bashing them together.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
},
113: {
  name: "Chansey",
  type: ["Normal"],
  height: "3 feet 7 inches",
  weight: "76.3 lbs",
  description: "This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
},
114: {
  name: "Tangela",
  type: ["Grass"],
  height: "3 feet 3 inches",
  weight: "77.2 lbs",
  description: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
},
115: {
  name: "Kangaskhan",
  type: ["Normal"],
  height: "7 feet 3 inches",
  weight: "176.4 lbs",
  description: "Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
},
116: {
  name: "Horsea",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "17.6 lbs",
  description: "If attacked—even by a large enemy—Horsea effortlessly swims to safety by utilizing its well-developed dorsal fin.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
},
117: {
  name: "Seadra",
  type: ["Water"],
  height: "3 feet 11 inches",
  weight: "55.1 lbs",
  description: "The male raises the young. If it is approached while caring for young, it will use its toxic spines to fend off the intruder.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
},
118: {
  name: "Goldeen",
  type: ["Water"],
  height: "2 feet",
  weight: "33.1 lbs",
  description: "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
},
119: {
  name: "Seaking",
  type: ["Water"],
  height: "4 feet 3 inches",
  weight: "86.0 lbs",
  description: "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
},
120: {
  name: "Staryu",
  type: ["Water"],
  height: "2 feet 7 inches",
  weight: "76.1 lbs",
  description: "If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
},
121: {
  name: "Starmie",
  type: ["Water", "Psychic"],
  height: "3 feet 7 inches",
  weight: "176.4 lbs",
  description: "This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
},
122: {
  name: "Mr. Mime",
  type: ["Psychic", "Fairy"],
  height: "4 feet 3 inches",
  weight: "120.2 lbs",
  description: "It is a pantomime expert that can create invisible but solid walls using miming gestures.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
},
123: {
  name: "Scyther",
  type: ["Bug", "Flying"],
  height: "4 feet 11 inches",
  weight: "123.5 lbs",
  description: "It slashes through grass with its sharp scythes, moving too fast for the human eye to track.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
},
124: {
  name: "Jynx",
  type: ["Ice", "Psychic"],
  height: "4 feet 7 inches",
  weight: "89.5 lbs",
  description: "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
},
125: {
  name: "Electabuzz",
  type: ["Electric"],
  height: "3 feet 7 inches",
  weight: "66.1 lbs",
  description: "Its body constantly discharges electricity. Getting close to it will make your hair stand on end.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
},
126: {
  name: "Magmar",
  type: ["Fire"],
  height: "4 feet 3 inches",
  weight: "98.1 lbs",
  description: "Found near the mouth of a volcano. This fire-breather’s body temperature is nearly 2,200 degrees Fahrenheit.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
},
127: {
  name: "Pinsir",
  type: ["Bug"],
  height: "4 feet 11 inches",
  weight: "121.3 lbs",
  description: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
},
128: {
  name: "Tauros",
  type: ["Normal"],
  height: "4 feet 7 inches",
  weight: "194.9 lbs",
  description: "When it targets an enemy, it charges furiously while whipping its body with its long tails.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
},
129: {
  name: "Magikarp",
  type: ["Water"],
  height: "2 feet 11 inches",
  weight: "22.0 lbs",
  description: "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
},
130: {
  name: "Gyarados",
  type: ["Water", "Flying"],
  height: "21 feet 4 inches",
  weight: "518.1 lbs",
  description: "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
},
131: {
  name: "Lapras",
  type: ["Water", "Ice"],
  height: "8 feet 2 inches",
  weight: "485.0 lbs",
  description: "It ferries people across the sea on its back. It may sing an enchanting cry if it is in a good mood.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
},
132: {
  name: "Ditto",
  type: ["Normal"],
  height: "1 foot",
  weight: "8.8 lbs",
  description: "Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
},
133: {
  name: "Eevee",
  type: ["Normal"],
  height: "1 foot",
  weight: "14.3 lbs",
  description: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
},
134: {
  name: "Vaporeon",
  type: ["Water"],
  height: "3 feet 3 inches",
  weight: "63.9 lbs",
  description: "It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
},
135: {
  name: "Jolteon",
  type: ["Electric"],
  height: "2 feet 7 inches",
  weight: "54.0 lbs",
  description: "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
},
136: {
  name: "Flareon",
  type: ["Fire"],
  height: "2 feet 11 inches",
  weight: "55.1 lbs",
  description: "Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees Fahrenheit.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
},
137: {
  name: "Porygon",
  type: ["Normal"],
  height: "2 feet 7 inches",
  weight: "80.5 lbs",
  description: "It is an artificial Pokémon. Since it doesn’t breathe, people are excited by its potential to be useful in any environment.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
},
138: {
  name: "Omanyte",
  type: ["Rock", "Water"],
  height: "1 foot 4 inches",
  weight: "16.5 lbs",
  description: "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
},
139: {
  name: "Omastar",
  type: ["Rock", "Water"],
  height: "3 feet 3 inches",
  weight: "77.2 lbs",
  description: "Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
},
140: {
  name: "Kabuto",
  type: ["Rock", "Water"],
  height: "1 foot 8 inches",
  weight: "25.4 lbs",
  description: "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
},
141: {
  name: "Kabutops",
  type: ["Rock", "Water"],
  height: "4 feet 3 inches",
  weight: "89.3 lbs",
  description: "Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
},
142: {
  name: "Aerodactyl",
  type: ["Rock", "Flying"],
  height: "5 feet 11 inches",
  weight: "130.1 lbs",
  description: "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
},
143: {
  name: "Snorlax",
  type: ["Normal"],
  height: "6 feet 11 inches",
  weight: "1014.1 lbs",
  description: "This gluttonous Pokémon eats constantly, apart from when it’s asleep. It devours nearly 900 pounds of food per day.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
},
144: {
  name: "Articuno",
  type: ["Ice", "Flying"],
  height: "5 feet 11 inches",
  weight: "122.1 lbs",
  description: "This legendary bird Pokémon can create blizzards by freezing moisture in the air.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
},
145: {
  name: "Zapdos",
  type: ["Electric", "Flying"],
  height: "5 feet 3 inches",
  weight: "116.0 lbs",
  description: "This legendary Pokémon is said to live in thunderclouds. It freely controls lightning bolts.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
},
146: {
  name: "Moltres",
  type: ["Fire", "Flying"],
  height: "6 feet 7 inches",
  weight: "132.3 lbs",
  description: "It is one of the legendary bird Pokémon. Its appearance is said to indicate the coming of spring.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
},
147: {
  name: "Dratini",
  type: ["Dragon"],
  height: "5 feet 11 inches",
  weight: "7.3 lbs",
  description: "It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
},
148: {
  name: "Dragonair",
  type: ["Dragon"],
  height: "13 feet 1 inch",
  weight: "36.4 lbs",
  description: "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
},
149: {
  name: "Dragonite",
  type: ["Dragon", "Flying"],
  height: "7 feet 3 inches",
  weight: "463.0 lbs",
  description: "It is said that somewhere in the ocean lies an island where these gather. Only they live there.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
},
150: {
  name: "Mewtwo",
  type: ["Psychic"],
  height: "6 feet 7 inches",
  weight: "269.0 lbs",
  description: "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
},
151: {
  name: "Mew",
  type: ["Psychic"],
  height: "1 foot 4 inches",
  weight: "8.8 lbs",
  description: "The first Pokémon to exist on planet earth",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
},
152: {
  name: "Chikorita",
  type: ["Grass"],
  height: "2 feet 11 inches",
  weight: "14.1 lbs",
  description: "It loves to bask in the sunlight. It uses the leaf on its head to seek out warm places.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
},
153: {
  name: "Bayleef",
  type: ["Grass"],
  height: "3 feet 11 inches",
  weight: "34.8 lbs",
  description: "The spicy scent that wafts from around Bayleef's neck somehow makes those who smell it want to fight.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png"
},
154: {
  name: "Meganium",
  type: ["Grass"],
  height: "5 feet 11 inches",
  weight: "221.6 lbs",
  description: "Anyone who stands beside it becomes refreshed, just as if they were soaking in the soothing atmosphere of a forest.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png"
},
155: {
  name: "Cyndaquil",
  type: ["Fire"],
  height: "1 foot 8 inches",
  weight: "17.4 lbs",
  description: "It usually stays hunched over. If it is angry or surprised, it shoots flames out of its back.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
},
156: {
  name: "Quilava",
  type: ["Fire"],
  height: "2 feet 11 inches",
  weight: "41.9 lbs",
  description: "Before battle, it turns its back on its opponent to demonstrate how ferociously its fire blazes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png"
},
157: {
  name: "Typhlosion",
  type: ["Fire"],
  height: "5 feet 7 inches",
  weight: "175.3 lbs",
  description: "It has a secret, devastating move. It rubs its blazing fur to cause huge explosions.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png"
},
158: {
  name: "Totodile",
  type: ["Water"],
  height: "2 feet",
  weight: "20.9 lbs",
  description: "Its powerful, well-developed jaws are capable of crushing anything; even its trainer must be careful.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png"
},
159: {
  name: "Croconaw",
  type: ["Water"],
  height: "3 feet 7 inches",
  weight: "55.1 lbs",
  description: "The tips of its fangs are slanted backward. Once those fangs clamp down, the prey has no hope of escape.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png"
},
160: {
  name: "Feraligatr",
  type: ["Water"],
  height: "7 feet 7 inches",
  weight: "195.8 lbs",
  description: "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png"
},
161: {
  name: "Sentret",
  type: ["Normal"],
  height: "2 feet 7 inches",
  weight: "13.2 lbs",
  description: "This Pokémon is extremely cautious. Its supple tail is well-muscled and firm to the touch.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png"
},
162: {
  name: "Furret",
  type: ["Normal"],
  height: "5 feet 11 inches",
  weight: "71.7 lbs",
  description: "It raises its offspring inside a long, narrow nest. Once they’re old enough, it takes them outside the nest to prepare them for independence.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png"
},
163: {
  name: "Hoothoot",
  type: ["Normal", "Flying"],
  height: "2 feet 4 inches",
  weight: "46.7 lbs",
  description: "Hoothoot's internal clock is precise at all times. It tilts its head in a fixed rhythm to keep time.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png"
},
164: {
  name: "Noctowl",
  type: ["Normal", "Flying"],
  height: "5 feet 3 inches",
  weight: "89.9 lbs",
  description: "Its eyes are specially adapted. They concentrate even faint light and enable it to see in the dark.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png"
},
165: {
  name: "Ledyba",
  type: ["Bug", "Flying"],
  height: "3 feet 3 inches",
  weight: "23.8 lbs",
  description: "This Pokémon is very sensitive to cold. In the warmth of Alola, it appears quite lively.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png"
},
166: {
  name: "Ledian",
  type: ["Bug", "Flying"],
  height: "4 feet 7 inches",
  weight: "78.5 lbs",
  description: "It’s said that the patterns on its back are related to the stars in the night sky, but the details of that relationship remain unclear.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png"
},
167: {
  name: "Spinarak",
  type: ["Bug", "Poison"],
  height: "1 foot 8 inches",
  weight: "18.7 lbs",
  description: "Even while their prey is ensnared in its nest of spun thread, Spinarak will wait motionlessly until darkness falls.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png"
},
168: {
  name: "Ariados",
  type: ["Bug", "Poison"],
  height: "3 feet 7 inches",
  weight: "73.9 lbs",
  description: "A single strand of a special thread is endlessly spun out of its rear. The thread leads back to its nest.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png"
},
169: {
  name: "Crobat",
  type: ["Poison", "Flying"],
  height: "5 feet 11 inches",
  weight: "165.3 lbs",
  description: "Both of its legs have turned into wings. Without a sound, Crobat flies swiftly toward its prey and sinks its fangs into the nape of its target’s neck.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png"
},
170: {
  name: "Chinchou",
  type: ["Water", "Electric"],
  height: "1 foot 8 inches",
  weight: "26.5 lbs",
  description: "It lives in ocean depths beyond the reach of sunlight. It flashes lights on its antennae to communicate with others of its kind.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png"
},
171: {
  name: "Lanturn",
  type: ["Water", "Electric"],
  height: "3 feet 11 inches",
  weight: "49.6 lbs",
  description: "Portions of its dorsal fin mutated, becoming the parts that glow brightly to lure prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png"
},
172: {
  name: "Pichu",
  type: ["Electric"],
  height: "1 foot",
  weight: "4.4 lbs",
  description: "It is unskilled at storing electric power. Any kind of shock causes it to discharge energy spontaneously.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"
},
173: {
  name: "Cleffa",
  type: ["Fairy"],
  height: "1 foot",
  weight: "6.6 lbs",
  description: "On late nights illuminated by shooting stars, it gazes intently skyward, as if thinking of its home.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png"
},
174: {
  name: "Igglybuff",
  type: ["Normal", "Fairy"],
  height: "1 foot",
  weight: "2.2 lbs",
  description: "Its body has a faintly sweet scent and is bouncy and soft. If it bounces even once, it cannot stop.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png"
},
175: {
  name: "Togepi",
  type: ["Fairy"],
  height: "1 foot",
  weight: "3.3 lbs",
  description: "The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png"
},
176: {
  name: "Togetic",
  type: ["Fairy", "Flying"],
  height: "2 feet",
  weight: "7.1 lbs",
  description: "They say that it will appear before kindhearted, caring people and shower them with happiness.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png"
},
177: {
  name: "Natu",
  type: ["Psychic", "Flying"],
  height: "8 inches",
  weight: "4.4 lbs",
  description: "It is extremely good at climbing tree trunks and likes to eat the new sprouts on the trees.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png"
},
178: {
  name: "Xatu",
  type: ["Psychic", "Flying"],
  height: "4 feet 11 inches",
  weight: "33.1 lbs",
  description: "They say that it stays still and quiet because it is seeing both the past and future at the same time.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png"
},
179: {
  name: "Mareep",
  type: ["Electric"],
  height: "2 feet",
  weight: "17.2 lbs",
  description: "If static electricity builds in its body, its fleece doubles in volume. Touching it will shock you.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png"
},
180: {
  name: "Flaaffy",
  type: ["Electric"],
  height: "2 feet 7 inches",
  weight: "29.3 lbs",
  description: "As a result of storing too much electricity, it developed patches where even downy wool won’t grow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png"
},
181: {
  name: "Ampharos",
  type: ["Electric"],
  height: "4 feet 7 inches",
  weight: "135.6 lbs",
  description: "The Bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png"
},
182: {
  name: "Bellossom",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "12.8 lbs",
  description: "Due to the effects of the Sun Stone, it is now active during the daytime. It likes to dance in pools of sunlight.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png"
},
183: {
  name: "Marill",
  type: ["Water", "Fairy"],
  height: "2 feet",
  weight: "18.7 lbs",
  description: "The fur on its body naturally repels water. It can stay dry even when it plays in the water.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png"
},
184: {
  name: "Azumarill",
  type: ["Water", "Fairy"],
  height: "2 feet 7 inches",
  weight: "62.8 lbs",
  description: "Its long ears are superb sensors. It can distinguish the movements of things in water and tell what they are.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png"
},
185: {
  name: "Sudowoodo",
  type: ["Rock"],
  height: "3 feet 11 inches",
  weight: "83.8 lbs",
  description: "Although it always pretends to be a tree, its composition appears more similar to rock than to vegetation.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png"
},
186: {
  name: "Politoed",
  type: ["Water"],
  height: "3 feet 7 inches",
  weight: "74.7 lbs",
  description: "If Poliwag and Poliwhirl hear its echoing cry, they respond by gathering from far and wide.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png"
},
187: {
  name: "Hoppip",
  type: ["Grass", "Flying"],
  height: "1 foot 4 inches",
  weight: "1.1 lbs",
  description: "This Pokémon is blown across vast distances by the wind. It is unclear where the Hoppip of Paldea originally came from.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png"
},
188: {
  name: "Skiploom",
  type: ["Grass", "Flying"],
  height: "2 feet",
  weight: "2.2 lbs",
  description: "Skiploom enthusiasts can apparently tell where a Skiploom was born by the scent drifting from the flower on the Pokémon’s head.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png"
},
189: {
  name: "Jumpluff",
  type: ["Grass", "Flying"],
  height: "2 feet 7 inches",
  weight: "6.6 lbs",
  description: "Jumpluff travels on seasonal winds. Once its cotton spores run out, its journey ends, as does its life.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png"
},
190: {
  name: "Aipom",
  type: ["Normal"],
  height: "2 feet 7 inches",
  weight: "25.4 lbs",
  description: "It lives atop tall trees. When leaping from branch to branch, it deftly uses its tail for balance.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png"
},
191: {
  name: "Sunkern",
  type: ["Grass"],
  height: "1 foot",
  weight: "4 lbs",
  description: "It suddenly falls out of the sky in the morning. Knowing it’s weak, it simply feeds until it evolves.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png"
},
192: {
  name: "Sunflora",
  type: ["Grass"],
  height: "2 feet 7 inches",
  weight: "18.7 lbs",
  description: "In the daytime, it rushes about in a hectic manner, but it comes to a complete stop when the sun sets.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png"
},
193: {
  name: "Yanma",
  type: ["Bug", "Flying"],
  height: "3 feet 11 inches",
  weight: "83.8 lbs",
  description: "As Yanma surveys its territory, it periodically stops to hover in place by flapping its wings at high speeds.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
},
194: {
  name: "Wooper",
  type: ["Water", "Ground"],
  height: "1 foot 4 inches",
  weight: "18.7 lbs",
  description: "A transparent mucous membrane covers its body. Touching it bare-handed will cause a tingling numbness.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
},
195: {
  name: "Quagsire",
  type: ["Water", "Ground"],
  height: "4 feet 7 inches",
  weight: "165.3 lbs",
  description: "This carefree Pokémon has an easygoing nature. While swimming, it always bumps into boat hulls.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png"
},
196: {
  name: "Espeon",
  type: ["Psychic"],
  height: "2 feet 11 inches",
  weight: "58.4 lbs",
  description: "The tip of its forked tail quivers when it is predicting its opponent’s next move.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png"
},
197: {
  name: "Umbreon",
  type: ["Dark"],
  height: "3 feet 3 inches",
  weight: "59.5 lbs",
  description: "When exposed to the moon’s aura, the rings on its body glow faintly and it gains a mysterious power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
},
198: {
  name: "Murkrow",
  type: ["Dark", "Flying"],
  height: "1 foot 8 inches",
  weight: "4.6 lbs",
  description: "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png"
},
199: {
  name: "Slowking",
  type: ["Water", "Psychic"],
  height: "6 feet 7 inches",
  weight: "175.3 lbs",
  description: "When its head was bitten, toxins entered Slowpoke’s head and unlocked an extraordinary power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png"
},
200: {
  name: "Misdreavus",
  type: ["Ghost"],
  height: "2 feet 4 inches",
  weight: "2.2 lbs",
  description: "This Pokémon startles people in the middle of the night. It gathers fear as its energy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png"
},
201: {
  name: "Unown",
  type: ["Psychic"],
  height: "1 foot 8 inches",
  weight: "11.0 lbs",
  description: "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
},
202: {
  name: "Wobbuffet",
  type: ["Psychic"],
  height: "4 feet 3 inches",
  weight: "62.8 lbs",
  description: "It hates light and shock. If attacked, it inflates its body to pump up its counterstrike.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png"
},
203: {
  name: "Girafarig",
  type: ["Normal", "Psychic"],
  height: "4 feet 11 inches",
  weight: "91.5 lbs",
  description: "Though very small, the brain in its tail is still considered an important organ because it emits powerful psychic energy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png"
},
204: {
  name: "Pineco",
  type: ["Bug"],
  height: "2 feet",
  weight: "15.9 lbs",
  description: "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn’t bother it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png"
},
205: {
  name: "Forretress",
  type: ["Bug", "Steel"],
  height: "3 feet 11 inches",
  weight: "277.3 lbs",
  description: "It’s usually found hanging on to a fat tree trunk. It shoots out bits of its shell when it sees action.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png"
},
206: {
  name: "Dunsparce",
  type: ["Normal"],
  height: "4 feet 11 inches",
  weight: "30.9 lbs",
  description: "It creates mazes in dark locations. When spotted, it flees into the ground by digging with its tail.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png"
},
207: {
  name: "Gligar",
  type: ["Ground", "Flying"],
  height: "3 feet 7 inches",
  weight: "142.9 lbs",
  description: "It builds its nest on a steep cliff. When it is done gliding, it hops along the ground back to its nest.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png"
},
208: {
  name: "Steelix",
  type: ["Steel", "Ground"],
  height: "30 feet 2 inches",
  weight: "881.8 lbs",
  description: "It is said that if an Onix lives for over 100 years, its composition changes to become diamond-like.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png"
},
209: {
  name: "Snubbull",
  type: ["Fairy"],
  height: "2 feet",
  weight: "17.2 lbs",
  description: "In truth, it is a cowardly Pokémon. It growls eagerly in order to hide its fear from its opponent.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png"
},
210: {
  name: "Granbull",
  type: ["Fairy"],
  height: "4 feet 7 inches",
  weight: "107.4 lbs",
  description: "It is actually timid and easily spooked. If attacked, it desperately flails its limbs about in an attempt to repel its opponent.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png"
},
211: {
  name: "Qwilfish",
  type: ["Water", "Poison"],
  height: "1 foot 8 inches",
  weight: "8.6 lbs",
  description: "Be cautious if this Pokémon starts sucking in water—it will soon attack by scattering the toxic spikes that grow all over its body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png"
},
212: {
  name: "Scizor",
  type: ["Bug", "Steel"],
  height: "5 feet 11 inches",
  weight: "260.1 lbs",
  description: "This Pokémon’s pincers, which contain steel, can crush any hard object they get ahold of into bits.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"
},
213: {
  name: "Shuckle",
  type: ["Bug", "Rock"],
  height: "2 feet",
  weight: "45.2 lbs",
  description: "It stores berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png"
},
214: {
  name: "Heracross",
  type: ["Bug", "Flying"],
  height: "4 feet 11 inches",
  weight: "119.0 lbs",
  description: "It loves sweet nectar. To keep all the nectar to itself, it hurls rivals away with its prized horn.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png"
},
215: {
  name: "Sneasel",
  type: ["Dark", "Ice"],
  height: "2 feet 11 inches",
  weight: "61.7 lbs",
  description: "This cunning pokémon hides under the cover of darkness, waiting to attack its prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png"
},
216: {
  name: "Teddiursa",
  type: ["Normal"],
  height: "2 feet",
  weight: "19.4 lbs",
  description: "This Pokémon discreetly follows Combee to find their hive. It scoops up big dollops of honey in its palms to eat.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png"
},
217: {
  name: "Ursaring",
  type: ["Normal"],
  height: "5 feet 11 inches",
  weight: "227.3 lbs",
  description: "It usually wears a hardened expression, but when it’s licking up honey—which it loves—the joy it feels will cause it to break into a wide grin.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png"
},
218: {
  name: "Slugma",
  type: ["Fire"],
  height: "2 feet 4 inches",
  weight: "77.2 lbs",
  description: "Its lava body can cool and chip away at times, but a magma bath will heal it right up.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png"
},
219: {
  name: "Magcargo",
  type: ["Fire", "Rock"],
  height: "2 feet 7 inches",
  weight: "121.3 lbs",
  description: "This Pokémon lives near the craters of volcanoes. It stores fire energy in its shell of cooled and hardened magma.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png"
},
220: {
  name: "Swinub",
  type: ["Ice", "Ground"],
  height: "1 foot 4 inches",
  weight: "14.3 lbs",
  description: "It searches for food by digging into the ground with its snout. Even frozen ground doesn’t give it any trouble.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png"
},
221: {
  name: "Piloswine",
  type: ["Ice", "Ground"],
  height: "3 feet 7 inches",
  weight: "123.0 lbs",
  description: "Covered by a shaggy coat, it is resistant to the cold. Its tusks of ice thicken when it snows.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png"
},
222: {
  name: "Corsola",
  type: ["Water", "Rock"],
  height: "2 feet",
  weight: "11.0 lbs",
  description: "Many live in the clean seas of the south. They apparently can’t live in polluted waters.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png"
},
223: {
  name: "Remoraid",
  type: ["Water"],
  height: "2 feet",
  weight: "26.5 lbs",
  description: "The water they shoot from their mouths can hit moving prey from more than 300 feet away.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png"
},
224: {
  name: "Octillery",
  type: ["Water"],
  height: "2 feet 11 inches",
  weight: "62.8 lbs",
  description: "It has a tendency to want to be in holes. It prefers rock crags or pots and sprays ink from them before attacking.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png"
},
225: {
  name: "Delibird",
  type: ["Ice", "Flying"],
  height: "2 feet 11 inches",
  weight: "35.3 lbs",
  description: "It carries food all day long. There are tales about lost people who were saved by the food it had.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png"
},
226: {
  name: "Mantine",
  type: ["Water", "Flying"],
  height: "6 feet 11 inches",
  weight: "485.0 lbs",
  description: "If it builds up enough speed swimming, it can jump out above the waves and glide for over 300 feet.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png"
},
227: {
  name: "Skarmory",
  type: ["Steel", "Flying"],
  height: "5 feet 7 inches",
  weight: "111.3 lbs",
  description: "Its sturdy, heavy-looking iron body is actually thin and light, so it can fly at speeds over 180 mph.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png"
},
228: {
  name: "Houndour",
  type: ["Dark", "Fire"],
  height: "2 feet",
  weight: "23.8 lbs",
  description: "Its sturdy, heavy-looking iron body is actually thin and light, so it can fly at speeds over 180 mph.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png"
},
229: {
  name: "Houndoom",
  type: ["Dark", "Fire"],
  height: "4 feet 7 inches",
  weight: "77.2 lbs",
  description: "If you are burned by the flames it shoots from its mouth, the pain will never go away.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png"
},
230: {
  name: "Kingdra",
  type: ["Dragon", "Water"],
  height: "5 feet 11 inches",
  weight: "335.1 lbs",
  description: "It sleeps deep on the ocean floor to build its energy. It is said to cause tornadoes as it wakes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png"
},
231: {
  name: "Phanpy",
  type: ["Ground"],
  height: "1 foot 8 inches",
  weight: "73.9 lbs",
  description: "This Pokémon lives and nests on a riverbank. After playing in the mud, it won’t be able to settle down unless it washes its body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"
},
232: {
  name: "Donphan",
  type: ["Ground"],
  height: "3 feet 7 inches",
  weight: "264.6 lbs",
  description: "Donphan is covered in tough hide, so even being hit by a car won’t faze this Pokémon. However, it is extremely susceptible to rain.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png"
},
233: {
  name: "Porygon2",
  type: ["Normal"],
  height: "2 feet",
  weight: "71.7 lbs",
  description: "This artificial Pokémon evolved thanks to cutting-edge science. It sometimes displays behavior that is not in its programming.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png"
},
234: {
  name: "Stantler",
  type: ["Normal"],
  height: "4 feet 7 inches",
  weight: "157.0 lbs",
  description: "This Pokémon apparently used to live in much harsher environments, and thus it once had stronger psychic powers than it does now.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png"
},
  235: {
  name: "Smeargle",
  type: ["Normal"],  // Corrected from "Height" typo
  height: "3 feet 11 inches",
  weight: "127.9 lbs",
  description: "Once a Smeargle reaches adulthood, it will have other members of its species leave paw prints on its back.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png"
},
236: {
  name: "Tyrouge",
  type: ["Fighting"],
  height: "2 feet 4 inches",
  weight: "46.3 lbs",
  description: "This earnest Pokémon battles all sorts of opponents, searching for the fighting style that suits it best.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png"
},
237: {
  name: "Hitmontop",
  type: ["Fighting"],
  height: "4 feet 7 inches",
  weight: "105.8 lbs",
  description: "This Pokémon is adept at dance-like kicks. The horn atop its head is made from the same substance that generally forms fur and claws.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png"
},
238: {
  name: "Smoochum",
  type: ["Ice", "Psychic"],
  height: "1 foot 4 inches",
  weight: "13.2 lbs",
  description: "If its face gets even slightly dirty, Smoochum will bathe immediately. But if its body gets dirty, Smoochum doesn’t really seem to care.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png"
},
239: {
  name: "Elekid",
  type: ["Electric"],
  height: "2 feet",
  weight: "51.8 lbs",
  description: "It loves violent thunder. The space between its horns flickers bluish white when it is charging energy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png"
},
240: {
  name: "Magby",
  type: ["Fire"],
  height: "2 feet 4 inches",
  weight: "47.2 lbs",
  description: "Each and every time it inhales and exhales, sparks leak from its mouth and nostrils.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png"
},
241: {
  name: "Miltank",
  type: ["Normal"],
  height: "3 feet 11 inches",
  weight: "166.4 lbs",
  description: "Miltank produces highly nutritious milk, so it’s been supporting the lives of people and other Pokémon since ancient times.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"
},
242: {
  name: "Blissey",
  type: ["Normal"],
  height: "4 feet 11 inches",
  weight: "103.2 lbs",
  description: "Anyone who takes even one taste of Blissey’s egg becomes unfailingly caring and pleasant to everyone.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png"
},
243: {
  name: "Raikou",
  type: ["Electric"],
  height: "6 feet 3 inches",
  weight: "392.4 lbs",
  description: "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png"
},
244: {
  name: "Entei",
  type: ["Fire"],
  height: "6 feet 11 inches",
  weight: "436.5 lbs",
  description: "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png"
},
245: {
  name: "Suicune",
  type: ["Water"],
  height: "6 feet 7 inches",
  weight: "412.3 lbs",
  description: "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png"
},
246: {
  name: "Larvitar",
  type: ["Ground", "Rock"],
  height: "2 feet",
  weight: "158.7 lbs",
  description: "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png"
},
247: {
  name: "Pupitar",
  type: ["Rock", "Ground"],
  height: "3 feet 11 inches",
  weight: "335.1 lbs",
  description: "This pupa flies around wildly by venting with great force the gas pressurized inside its body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png"
},
248: {
  name: "Tyranitar",
  type: ["Rock", "Dark"],
  height: "6 feet 7 inches",
  weight: "445.3 lbs",
  description: "Extremely strong, it can change the landscape. It is so insolent that it doesn’t care about others.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png"
},
249: {
  name: "Lugia",
  type: ["Flying", "Psychic"],
  height: "17 feet 1 inch",
  weight: "476.2 lbs",
  description: "Lugia’s wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
},
250: {
  name: "Ho-Oh",
  type: ["Fire", "Flying"],
  height: "12 feet 6 inches",
  weight: "438.7 lbs",
  description: "Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png"
},
251: {
  name: "Celebi",
  type: ["Psychic", "Grass"],
  height: "2 feet",
  weight: "11.0 lbs",
  description: "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png"
},
252: {
  name: "Treecko",
  type: ["Grass"],
  height: "1 foot 8 inches",
  weight: "11.0 lbs",
  description: "The small hooks on the soles of its feet latch on to walls and ceilings, so it will never fall even while hanging upside down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
},
253: {
  name: "Grovyle",
  type: ["Grass"],
  height: "2 feet 11 inches",
  weight: "47.6 lbs",
  description: "Its strongly developed thigh muscles give it astounding agility and jumping performance.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png"
},
254: {
  name: "Sceptile",
  type: ["Grass"],
  height: "5 feet 7 inches",
  weight: "115.1 lbs",
  description: "It agilely flits through the jungle and uses the sharp-edged leaves on its arms to cut down its prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png"
},
255: {
  name: "Torchic",
  type: ["Fire"],
  height: "1 foot 4 inches",
  weight: "5.5 lbs",
  description: "Torchic feels toasty warm if you hug it. It has a flame sac inside its belly, and the flames burn continuously as long as Torchic has life in it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png"
},
256: {
  name: "Combusken",
  type: ["Fire", "Fighting"],
  height: "2 feet 11 inches",
  weight: "43.0 lbs",
  description: "It boosts its concentration by emitting harsh cries. Its kicks have outstanding destructive power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png"
},
257: {
  name: "Blaziken",
  type: ["Fire", "Fighting"],
  height: "6 feet 3 inches",
  weight: "114.6 lbs",
  description: "When facing a tough foe, it looses flames from its wrists. Its powerful legs let it jump clear over buildings.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
},
258: {
  name: "Mudkip",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "16.8 lbs",
  description: "It has the power to crush large boulders into pieces. To rest, it buries itself in mud at the bottom of a river.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png"
},
259: {
  name: "Marshtomp",
  type: ["Water", "Ground"],
  height: "2 feet 4 inches",
  weight: "61.7 lbs",
  description: "Living on muddy ground that provides poor footing has served to train its lower body and caused it to develop sturdy legs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png"
},
260: {
  name: "Swampert",
  type: ["Water", "Ground"],
  height: "4 feet 11 inches",
  weight: "180.6 lbs",
  description: "Its arms are hard as rock. With one swing, it can break an enormous boulder into pieces.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"
},
261: {
  name: "Poochyena",
  type: ["Dark"],
  height: "1 foot 8 inches",
  weight: "30.0 lbs",
  description: "It bares its large fangs and barks vigorously to try to intimidate opponents, but this is actually a manifestation of its cowardly nature.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png"
},
262: {
  name: "Mightyena",
  type: ["Dark"],
  height: "3 feet 3 inches",
  weight: "81.6 lbs",
  description: "They faithfully follow the orders of their leader. Prey targeted by Mightyena is never allowed to escape the outstanding teamwork of its pursuers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png"
},
263: {
  name: "Zigzagoon",
  type: ["Normal"],
  height: "1 foot 4 inches",
  weight: "38.6 lbs",
  description: "It walks in zigzags fashion. It's good at finding items in the grass and even in the ground.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png"
},
264: {
  name: "Linoone",
  type: ["Normal"],
  height: "1 foot 8 inches",
  weight: "71.7 lbs",
  description: "It charges prey at speeds over 60 mph. However, because it can only run straight, it often fails.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png"
},
265: {
  name: "Wurmple",
  type: ["Bug"],
  height: "1 foot",
  weight: "7.9 lbs",
  description: "Using the spikes on its rear end, Wurmple peels the bark off trees and feeds on the sap that oozes out. This Pokémon’s feet are tipped with suction pads that allow it to cling to glass without slipping.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png"
},
266: {
  name: "Silcoon",
  type: ["Bug"],
  height: "2 feet",
  weight: "22.0 lbs",
  description: "Silcoon tethers itself to a tree branch using silk to keep from falling. There, this Pokémon hangs quietly while it awaits evolution. It peers out of the silk cocoon through a small hole.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png"
},
267: {
  name: "Beautifly",
  type: ["Bug", "Flying"],
  height: "3 feet 3 inches",
  weight: "62.6 lbs",
  description: "Beautifly’s favorite food is the sweet pollen of flowers. If you want to see this Pokémon, just leave a potted flower by an open window. Beautifly is sure to come looking for pollen.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png"
},
268: {
  name: "Cascoon",
  type: ["Bug"],
  height: "2 feet 4 inches",
  weight: "25.4 lbs",
  description: "Cascoon makes its protective cocoon by wrapping its body entirely with a fine silk from its mouth. Once the silk goes around its body, it hardens. This Pokémon prepares for its evolution inside the cocoon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png"
},
269: {
  name: "Dustox",
  type: ["Bug", "Poison"],
  height: "3 feet 11 inches",
  weight: "69.7 lbs",
  description: "Dustox is instinctively drawn to light. Swarms of this Pokémon are attracted by the bright lights of cities, where they wreak havoc by stripping the leaves off roadside trees for food.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png"
},
270: {
  name: "Lotad",
  type: ["Grass", "Water"],
  height: "1 foot 8 inches",
  weight: "5.7 lbs",
  description: "The leaf on its head is naturally dirt repellent and will stay clean even after transporting Pokémon that are covered in mud.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png"
},
271: {
  name: "Lombre",
  type: ["Grass", "Water"],
  height: "3 feet 11 inches",
  weight: "71.7 lbs",
  description: "Old folklore in Kitakami tells of a mischievous child who was reborn as a Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png"
},
272: {
  name: "Ludicolo",
  type: ["Water", "Grass"],
  height: "4 feet 11 inches",
  weight: "121.3 lbs",
  description: "There are structures throughout its whole body that produce energy when hit by sound waves with a cheerful rhythm.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png"
},
273: {
  name: "Seedot",
  type: ["Grass"],
  height: "1 foot 8 inches",
  weight: "8.8 lbs",
  description: "To expand its habitat, it pretends to be a nut so that bird Pokémon will pick it up and carry it far away.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png"
},
274: {
  name: "Nuzleaf",
  type: ["Grass", "Dark"],
  height: "3 feet 3 inches",
  weight: "61.7 lbs",
  description: "It leads a quiet life deep in the forest. If anything wanders into its territory, Nuzleaf will warn the intruder by sounding its grass flute.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png"
},
275: {
  name: "Shiftry",
  type: ["Grass", "Dark"],
  height: "4 feet 4 inches",
  weight: "131.4 lbs",
  description: "It is said that when Shiftry flaps its leafy fans atop ancient trees, chilly winds blow and the season rolls into winter.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png"
},
276: {
  name: "Taillow",
  type: ["Flying"],
  height: "1 foot",
  weight: "5.1 lbs",
  description: "Taillow courageously stands its ground against foes, however strong they may be. This gutsy Pokémon will remain defiant even after a loss. On the other hand, it cries loudly if it becomes hungry.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png"
},
277: {
  name: "Swellow",
  type: ["Flying"],
  height: "2 feet 4 inches",
  weight: "43.7 lbs",
  description: "Swellow flies high above our heads, making graceful arcs in the sky. This Pokémon dives at a steep angle as soon as it spots its prey. The hapless prey is tightly grasped by Swellow’s clawed feet, preventing escape.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png"
},
278: {
  name: "Wingull",
  type: ["Flying", "Water"],
  height: "2 feet",
  weight: "20.9 lbs",
  description: "It soars high in the sky, riding on updrafts like a glider. It carries food tucked in its bill.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png"
},
279: {
  name: "Pelipper",
  type: ["Water", "Flying"],
  height: "3 feet 11 inches",
  weight: "61.7 lbs",
  description: "It is a flying transporter that carries small Pokémon in its beak. It bobs on the waves to rest its wings.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png"
},
280: {
  name: "Ralts",
  type: ["Psychic", "Fairy"],
  height: "1 foot 4 inches",
  weight: "14.6 lbs",
  description: "The horns on its head provide a strong power that enables it to sense people’s emotions.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png"
},
281: {
  name: "Kirlia",
  type: ["Psychic", "Fairy"],
  height: "2 feet 7 inches",
  weight: "44.5 lbs",
  description: "It has a psychic power that enables it to distort the space around it and see into the future.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png"
},
282: {
  name: "Gardevoir",
  type: ["Psychic", "Fairy"],
  height: "5 feet 3 inches",
  weight: "106.7 lbs",
  description: "To protect its Trainer, it will expend all its psychic power to create a small black hole.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
},
283: {
  name: "Surskit",
  type: ["Water", "Bug"],
  height: "1 foot 8 inches",
  weight: "3.7 lbs",
  description: "They usually live on ponds, but after an evening shower, they may appear on puddles in towns.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png"
},
284: {
  name: "Masquerain",
  type: ["Bug", "Flying"],
  height: "2 feet 7 inches",
  weight: "7.9 lbs",
  description: "It flaps its four wings to hover and fly freely in any direction—to and fro and sideways.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png"
},
285: {
  name: "Shroomish",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "9.9 lbs",
  description: "It prefers damp places. By day it remains still in the forest shade. It releases toxic powder from its head.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png"
},
286: {
  name: "Breloom",
  type: ["Grass", "Fighting"],
  height: "3 feet 11 inches",
  weight: "86.4 lbs",
  description: "It scatters poisonous spores and throws powerful punches while its foe is hampered by inhaled spores.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png"
},
287: {
  name: "Slakoth",
  type: ["Normal"],
  height: "2 feet 7 inches",
  weight: "52.9 lbs",
  description: "It sleeps for 20 hours every day. Making drowsy those that see it is one of its abilities.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png"
},
288: {
  name: "Vigoroth",
  type: ["Normal"],
  height: "4 feet 7 inches",
  weight: "102.5 lbs",
  description: "Its stress level rises if it cannot keep moving constantly. Too much stress makes it feel sick.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png"
},
289: {
  name: "Slaking",
  type: ["Normal"],
  height: "6 feet 7 inches",
  weight: "287.7 lbs",
  description: "It is the world’s most slothful Pokémon. However, it can exert horrifying power by releasing pent-up energy all at once.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png"
},
290: {
  name: "Nincada",
  type: ["Ground", "Bug"],
  height: "1 foot 8 inches",
  weight: "12.1 lbs",
  description: "Because it lived almost entirely underground, it is nearly blind. It uses its antennae instead.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png"
},
291: {
  name: "Ninjask",
  type: ["Bug", "Flying"],
  height: "2 feet 7 inches",
  weight: "26.5 lbs",
  description: "Its cry leaves a lasting headache if heard for too long. It moves so quickly that it is almost invisible.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png"
},
292: {
  name: "Shedinja",
  type: ["Bug", "Ghost"],
  height: "2 feet 7 inches",
  weight: "2.6 lbs",
  description: "A most peculiar Pokémon that somehow appears in a Poké Ball when a Nincada evolves.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png"
},
293: {
  name: "Whismur",
  type: ["Normal"],
  height: "2 feet",
  weight: "35.9 lbs",
  description: "The cry of a Whismur is over 100 decibels. If you’re close to a Whismur when it lets out a cry, you’ll be stuck with an all-day headache.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png"
},
294: {
  name: "Loudred",
  type: ["Normal"],
  height: "3 feet 3 inches",
  weight: "89.3 lbs",
  description: "Loudred’s ears serve as speakers, and they can put out sound waves powerful enough to blow away a house.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png"
},
295: {
  name: "Exploud",
  type: ["Normal"],
  height: "4 feet 11 inches",
  weight: "185.2 lbs",
  description: "In the past, people would use the loud voices of these Pokémon as a means of communication between distant cities.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png"
},
296: {
  name: "Makuhita",
  type: ["Fighting"],
  height: "3 feet 3 inches",
  weight: "190.5 lbs",
  description: "It grows stronger by enduring harsh training. It is a gutsy Pokémon that can withstand any attack.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png"
},
297: {
  name: "Hariyama",
  type: ["Fighting"],
  height: "7 feet 7 inches",
  weight: "559.5 lbs",
  description: "It loves challenging others to tests of strength. It has the power to stop a train with a slap.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png"
},
298: {
  name: "Azurill",
  type: ["Normal", "Fairy"],
  height: "8 inches",
  weight: "4.4 lbs",
  description: "Its tail bounces like a rubber ball. It flings that tail around to fight opponents bigger than itself.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png"
},
299: {
  name: "Nosepass",
  type: ["Rock"],
  height: "3 feet 3 inches",
  weight: "213.8 lbs",
  description: "The magnet in Nosepass’s nose provides an unerring compass, making this Pokémon an excellent partner for Trainers going on a journey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png"
},
300: {
  name: "Skitty",
  type: ["Normal"],
  height: "2 feet",
  weight: "24.3 lbs",
  description: "Skitty has the habit of becoming fascinated by moving objects and chasing them around. This Pokémon is known to chase after its own tail and become dizzy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png"
},
301: {
  name: "Delcatty",
  type: ["Normal"],
  height: "3 feet 7 inches",
  weight: "71.9 lbs",
  description: "Delcatty prefers to live an unfettered existence in which it can do as it pleases at its own pace. Because this Pokémon eats and sleeps whenever it decides, its daily routines are completely random.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png"
},
302: {
  name: "Sableye",
  type: ["Dark", "Ghost"],
  height: "1 foot 8 inches",
  weight: "24.3 lbs",
  description: "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png"
},
303: {
  name: "Mawile",
  type: ["Steel", "Fairy"],
  height: "2 feet",
  weight: "25.4 lbs",
  description: "It uses its docile-looking face to lull foes into complacency, then bites with its huge, relentless jaws.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png"
},
304: {
  name: "Aron",
  type: ["Steel", "Rock"],
  height: "1 foot 4 inches",
  weight: "132.3 lbs",
  description: "It eats iron ore—and sometimes railroad tracks— to build up the steel armor that protects its body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png"
},
305: {
  name: "Lairon",
  type: ["Steel", "Rock"],
  height: "2 feet 11 inches",
  weight: "264.6 lbs",
  description: "Lairon live in mountains brimming with spring water and iron ore, so these Pokémon often came into conflict with humans in the past.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png"
},
306: {
  name: "Aggron",
  type: ["Steel", "Rock"],
  height: "6 feet 11 inches",
  weight: "793.7 lbs",
  description: "Aggron has a horn sharp enough to perforate thick iron sheets. It brings down its opponents by ramming into them horn first.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png"
},
307: {
  name: "Meditie",
  type: ["Fighting", "Psychic"],
  height: "2 feet",
  weight: "24.7 lbs",
  description: "It never skips its daily yoga training. It heightens its inner strength through meditation.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png"
},
308: {
  name: "Medicham",
  type: ["Fighting", "Psychic"],
  height: "4 feet 3 inches",
  weight: "69.4 lbs",
  description: "Through yoga training, it gained the psychic power to predict its foe’s next move.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png"
},
309: {
  name: "Electrike",
  type: ["Electric"],
  height: "2 feet",
  weight: "33.5 lbs",
  description: "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png"
},
310: {
  name: "Manectric",
  type: ["Electric"],
  height: "4 feet 11 inches",
  weight: "88.6 lbs",
  description: "It stimulates its own muscles with electricity, so it can move quickly. It eases its soreness with electricity, too, so it can recover quickly as well.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png"
},
311: {
  name: "Plusle",
  type: ["Electric"],
  height: "1 foot 4 inches",
  weight: "9.3 lbs",
  description: "It cheers on partners while scattering sparks from its body. It climbs telephone poles to absorb electricity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png"
},
312: {
  name: "Minun",
  type: ["Electric"],
  height: "1 foot 4 inches",
  weight: "9.3 lbs",
  description: "Exposure to electricity from Minun and Plusle promotes blood circulation and relaxes muscles.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png"
},
313: {
  name: "Volbeat",
  type: ["Bug"],
  height: "2 feet 4 inches",
  weight: "39.0 lbs",
  description: "It lives around clean ponds. At night, its rear lights up. It converses with others by flashing its light.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png"
},
314: {
  name: "Illumise",
  type: ["Bug"],
  height: "2 feet",
  weight: "39.0 lbs",
  description: "Illumise uses its sweet scent to guide Volbeat, having them form over 200 patterns in the night sky.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png"
},
315: {
  name: "Roselia",
  type: ["Grass", "Poison"],
  height: "1 foot",
  weight: "4.4 lbs",
  description: "Its flowers give off a relaxing fragrance. The stronger its aroma, the healthier the Roselia is.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png"
},
316: {
  name: "Gulpin",
  type: ["Poison"],
  height: "1 foot 4 inches",
  weight: "22.7 lbs",
  description: "There is nothing its stomach can’t digest. While it is digesting, vile, overpowering gases are expelled.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png"
},
317: {
  name: "Swalot",
  type: ["Poison"],
  height: "5 feet 7 inches",
  weight: "176.4 lbs",
  description: "It gulps anything that fits in its mouth. Its special enzymes can dissolve anything.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png"
},
318: {
  name: "Carvanha",
  type: ["Water", "Dark"],
  height: "2 feet 7 inches",
  weight: "45.9 lbs",
  description: "It won’t attack while it’s alone—not even if it spots prey. Instead, it waits for other Carvanha to join it, and then the Pokémon attack as a group.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png"
},
319: {
  name: "Sharpedo",
  type: ["Water", "Dark"],
  height: "5 feet 11 inches",
  weight: "195.8 lbs",
  description: "As soon as it catches the scent of prey, Sharpedo will jet seawater from its backside, hurtling toward the target to attack at 75 mph.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png"
},
320: {
  name: "Wailmer",
  type: ["Water"],
  height: "6 feet 7 inches",
  weight: "286.6 lbs",
  description: "It shows off by spraying jets of seawater from the nostrils above its eyes. It eats a solid ton of Wishiwashi every day.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png"
},
321: {
  name: "Wailord",
  type: ["Water"],
  height: "47 feet 7 inches",
  weight: "887.4 lbs",
  description: "It can sometimes knock out opponents with the shock created by breaching and crashing its big body onto the water.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png"
},
322: {
  name: "Numel",
  type: ["Fire", "Ground"],
  height: "2 feet 4 inches",
  weight: "52.9 lbs",
  description: "Magma of almost 2,200 degrees Fahrenheit courses through its body. When it grows cold, the magma hardens and slows it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png"
},
323: {
  name: "Camerupt",
  type: ["Fire", "Ground"],
  height: "6 feet 3 inches",
  weight: "485.0 lbs",
  description: "It lives in the crater of a volcano. It is well known that the humps on its back erupt every 10 years.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png"
},
324: {
  name: "Torkoal",
  type: ["Fire"],
  height: "1 foot 8 inches",
  weight: "177.3 lbs",
  description: "It burns coal inside its shell for energy. It blows out black soot if it is endangered.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png"
},
325: {
  name: "Spoink",
  type: ["Psychic"],
  height: "2 feet 4 inches",
  weight: "67.5 lbs",
  description: "Spoink will die if it stops bouncing. The pearl on its head amplifies its psychic powers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png"
},
326: {
  name: "Grumpig",
  type: ["Psychic"],
  height: "2 feet 11 inches",
  weight: "157.6 lbs",
  description: "It can perform odd dance steps to influence foes. Its style of dancing became hugely popular overseas.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png"
},
327: {
  name: "Spinda",
  type: ["Normal"],
  height: "3 feet 7 inches",
  weight: "11 lbs",
  description: "Its steps are shaky and stumbling. Walking for a long time makes it feel sick.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png"
},
328: {
  name: "Trapinch",
  type: ["Ground"],
  height: "2 feet 4 inches",
  weight: "33.1 lbs",
  description: "This Pokémon lives in arid deserts. It patiently awaits prey inside its funnel-shaped nest.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png"
},
329: {
  name: "Vibrava",
  type: ["Ground", "Dragon"],
  height: "3 feet 7 inches",
  weight: "33.7 lbs",
  description: "Rather than using its underdeveloped wings for flight, it rubs them together, emitting ultrasonic waves to attack its enemies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png"
},
330: {
  name: "Flygon",
  type: ["Ground", "Dragon"],
  height: "6 feet 7 inches",
  weight: "180.8 lbs",
  description: "Known as the Desert Spirit, this Pokémon hides in the sandstorms it causes by beating its wings.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png"
},
331: {
  name: "Cacnea",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "113.1 lbs",
  description: "It prefers harsh environments, such as deserts. It can survive for 30 days on water stored in its body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png"
},
332: {
  name: "Cacturne",
  type: ["Grass", "Dark"],
  height: "4 feet 3 inches",
  weight: "170.6 lbs",
  description: "Packs of them follow travelers through the desert until the travelers can no longer move.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png"
},
333: {
  name: "Swablu",
  type: ["Normal", "Flying"],
  height: "1 foot 4 inches",
  weight: "2.6 lbs",
  description: "It constantly grooms its cotton-like wings. It takes a shower to clean itself if it becomes dirty.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png"
},
334: {
  name: "Altaria",
  type: ["Dragon", "Flying"],
  height: "3 feet 7 inches",
  weight: "45.4 lbs",
  description: "If it bonds with a person, it will gently envelop the friend with its soft wings, then hum.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png"
},
335: {
  name: "Zangoose",
  type: ["Normal"],
  height: "4 feet 3 inches",
  weight: "88.8 lbs",
  description: "It’s Seviper’s archrival. To threaten those it encounters, it fans out the claws on its front paws.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png"
},
336: {
  name: "Seviper",
  type: ["Poison"],
  height: "8 feet 10 inches",
  weight: "115.7 lbs",
  description: "It sharpens its swordlike tail on hard rocks. It hides in tall grass and strikes unwary prey with venomous fangs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png"
},
337: {
  name: "Lunatone",
  type: ["Rock", "Psychic"],
  height: "3 feet 3 inches",
  weight: "370.4 lbs",
  description: "The phase of the moon apparently has some effect on its power. It’s active on the night of a full moon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png"
},
338: {
  name: "Solrock",
  type: ["Rock", "Psychic"],
  height: "3 feet 11 inches",
  weight: "339.5 lbs",
  description: "When it rotates itself, it gives off light similar to the sun, thus blinding its foes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png"
},
339: {
  name: "Barboach",
  type: ["Water", "Ground"],
  height: "1 foot 4 inches",
  weight: "4.2 lbs",
  description: "Its two whiskers provide a sensitive radar. Even in muddy waters, it can detect its prey’s location.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png"
},
340: {
  name: "Whiscash",
  type: ["Water", "Ground"],
  height: "2 feet 11 inches",
  weight: "52.0 lbs",
  description: "It is extremely protective of its territory. If any foe approaches, it attacks using vicious tremors.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png"
},
341: {
  name: "Corphish",
  type: ["Water"],
  height: "2 feet",
  weight: "25.4 lbs",
  description: "It came from overseas. It is a very hardy creature that will quickly proliferate, even in polluted streams.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png"
},
342: {
  name: "Crawdaunt",
  type: ["Water", "Dark"],
  height: "3 feet 7 inches",
  weight: "72.3 lbs",
  description: "Loving to battle, this Pokémon pinches all Pokémon that enter its territory with its pincers and throws them out.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png"
},
343: {
  name: "Baltoy",
  type: ["Ground", "Psychic"],
  height: "1 foot 8 inches",
  weight: "47.4 lbs",
  description: "It moves while spinning around on its single foot. Some Baltoy have been seen spinning on their heads.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png"
},
344: {
  name: "Claydol",
  type: ["Ground", "Psychic"],
  height: "4 feet 11 inches",
  weight: "238.1 lbs",
  description: "This mysterious Pokémon started life as an ancient clay figurine made over 20,000 years ago.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png"
},
345: {
  name: "Lileep",
  type: ["Rock", "Grass"],
  height: "3 feet 3 inches",
  weight: "52.5 lbs",
  description: "This Pokémon was restored from a fossil. Lileep once lived in warm seas that existed approximately 100,000,000 years ago.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png"
},346: {
  name: "Cradily",
  type: ["Grass", "Rock"],
  height: "4 feet 11 inches",
  weight: "133.2 lbs",
  description: "It has short legs and can’t walk very fast, but its neck and tentacles can extend to over three times their usual length to nab distant prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png"
},
347: {
  name: "Anorith",
  type: ["Rock", "Bug"],
  height: "2 feet 4 inches",
  weight: "27.6 lbs",
  description: "This Pokémon was restored from a fossil. Anorith lived in the ocean about 100,000,000 years ago, hunting with its pair of claws.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png"
},
348: {
  name: "Armaldo",
  type: ["Rock", "Bug"],
  height: "4 feet 11 inches",
  weight: "150.4 lbs",
  description: "After evolution, this Pokémon emerged onto land. Its lower body has become stronger, and blows from its tail are devastating.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png"
},
349: {
  name: "Feebas",
  type: ["Water"],
  height: "2 feet",
  weight: "16.3 lbs",
  description: "This tough Pokémon is perfectly fine even in dirty water. However, due to its ragged, shabby appearance, it isn’t popular.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png"
},
350: {
  name: "Milotic",
  type: ["Water"],
  height: "20 feet 4 inches",
  weight: "357.1 lbs",
  description: "Its lovely scales are described as rainbow-colored. They change color depending on the viewing angle.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png"
},
351: {
  name: "Castform",
  type: ["Normal"],
  height: "1 foot",
  weight: "1.8 lbs",
  description: "Although its form changes with the weather, that is apparently the result of a chemical reaction and not the result of its own free will.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png"
},
352: {
  name: "Kecleon",
  type: ["Normal"],
  height: "3 feet 3 inches",
  weight: "48.5 lbs",
  description: "It changes its hue to blend into its surroundings. If no one takes notice of it for too long, it will pout and never reveal itself.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png"
},
353: {
  name: "Shuppet",
  type: ["Ghost"],
  height: "2 feet",
  weight: "5.1 lbs",
  description: "It loves to feed on feelings like envy and malice. Its upright horn catches the emotions of people.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png"
},
354: {
  name: "Banette",
  type: ["Ghost"],
  height: "3 feet 7 inches",
  weight: "27.6 lbs",
  description: "This Pokémon developed from an abandoned doll that amassed a grudge. It is seen in dark alleys.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png"
},
355: {
  name: "Duskull",
  type: ["Ghost"],
  height: "2 feet 7 inches",
  weight: "33.1 lbs",
  description: "In the dead of night, these Pokémon wander through towns in search of children, whose vital energy is a Duskull’s favorite food.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png"
},
356: {
  name: "Dusclops",
  type: ["Ghost"],
  height: "5 feet 3 inches",
  weight: "67.5 lbs",
  description: "Dusclops is feared because it’s said to pull the soul out of anyone who gazes upon the strange movements of its hands.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png"
},
357: {
  name: "Tropius",
  type: ["Grass", "Flying"],
  height: "6 feet 7 inches",
  weight: "220.5 lbs",
  description: "It lives in tropical jungles. The bunch of fruit around its neck is delicious. The fruit grows twice a year.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png"
},
358: {
  name: "Chimecho",
  type: ["Psychic"],
  height: "2 feet",
  weight: "2.2 lbs",
  description: "It uses the sucker on its head to hang from a tree or from eaves. It can produce seven different tones.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png"
},
359: {
  name: "Absol",
  type: ["Dark"],
  height: "3 feet 11 inches",
  weight: "103.6 lbs",
  description: "Swift as the wind, Absol races through fields and mountains. Its curved, bow-like horn is acutely sensitive to the warning signs of natural disasters.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png"
},
360: {
  name: "Wynaut",
  type: ["Psychic"],
  height: "2 feet",
  weight: "30.9 lbs",
  description: "It tends to move in a pack. Individuals squash against one another to toughen their spirits.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png"
},361: {
  name: "Snorunt",
  type: ["Ice"],
  height: "2 feet 4 inches",
  weight: "37.0 lbs",
  description: "It is said that several Snorunt gather under giant leaves and live together in harmony.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png"
},
362: {
  name: "Glalie",
  type: ["Ice"],
  height: "4 feet 11 inches",
  weight: "565.5 lbs",
  description: "Its prey is instantaneously frozen stiff by the cold air it exhales from its huge mouth. While they’re in that frozen state, it gobbles them up.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png"
},
363: {
  name: "Spheal",
  type: ["Ice", "Water"],
  height: "2 feet 7 inches",
  weight: "87.1 lbs",
  description: "This Pokémon’s body is covered in blubber and impressively round. It’s faster for Spheal to roll around than walk.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png"
},
364: {
  name: "Sealeo",
  type: ["Ice", "Water"],
  height: "3 feet 7 inches",
  weight: "193.1 lbs",
  description: "Sealeo live on top of drift ice. They go swimming when they’re on the hunt, seeking out their prey by scent.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png"
},
365: {
  name: "Walrein",
  type: ["Ice", "Water"],
  height: "4 feet 7 inches",
  weight: "332.0 lbs",
  description: "Walrein form herds of 20 to 30 individuals. When a threat appears, the herd’s leader will protect the group with its life.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png"
},
366: {
  name: "Clamperl",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "115.7 lbs",
  description: "Despite its appearance, it’s carnivorous. It clamps down on its prey with both sides of its shell and doesn’t let go until they stop moving.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png"
},
367: {
  name: "Huntail",
  type: ["Water"],
  height: "5 feet 7 inches",
  weight: "59.5 lbs",
  description: "It’s not the strongest swimmer. It wags its tail to lure in its prey and then gulps them down as soon as they get close.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png"
},
368: {
  name: "Gorebyss",
  type: ["Water"],
  height: "5 feet 11 inches",
  weight: "49.8 lbs",
  description: "The color of its body changes with the water temperature. The coloration of Gorebyss in Alola is almost blindingly vivid.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png"
},
369: {
  name: "Relicanth",
  type: ["Water", "Rock"],
  height: "3 feet 3 inches",
  weight: "51.6 lbs",
  description: "Rock-hard scales and oil-filled swim bladders allow this Pokémon to survive the intense water pressure of the deep sea.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png"
},
370: {
  name: "Luvdisc",
  type: ["Water"],
  height: "2 feet",
  weight: "19.2 lbs",
  description: "Its heart-shaped body makes it popular. In some places, you would give a Luvdisc to someone you love.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png"
},
371: {
  name: "Bagon",
  type: ["Dragon"],
  height: "2 feet",
  weight: "92.8 lbs",
  description: "Its steel-hard head can shatter boulders. It longingly hopes for wings to grow so it can fly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png"
},
372: {
  name: "Shelgon",
  type: ["Dragon"],
  height: "3 feet 7 inches",
  weight: "243.6 lbs",
  description: "The cells within its shell transform with explosive speed, preparing it for evolution.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png"
},
373: {
  name: "Salamence",
  type: ["Dragon", "Flying"],
  height: "4 feet 11 inches",
  weight: "226.2 lbs",
  description: "It flies around on its wings, which have grown in at last. In its happiness, it gushes hot flames, burning up everything it passes over.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png"
},
374: {
  name: "Beldum",
  type: ["Steel", "Psychic"],
  height: "2 feet",
  weight: "209.9 lbs",
  description: "The magnetic force generated by its body repels the ground’s natural magnetism, letting it float.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png"
},
375: {
  name: "Metang",
  type: ["Steel", "Psychic"],
  height: "3 feet 11 inches",
  weight: "446.4 lbs",
  description: "It is formed by two Beldum joining together. Its two brains are linked, amplifying its psychic power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png"
},
376: {
  name: "Metagross",
  type: ["Steel", "Psychic"],
  height: "5 feet 3 inches",
  weight: "1215.5 lbs",
  description: "It folds its four legs when flying. Its four brains are said to be superior to a supercomputer.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png"
},377: {
  name: "Regirock",
  type: ["Rock"],
  height: "5 feet 7 inches",
  weight: "507.1 lbs",
  description: "Every bit of Regirock’s body is made of stone. As parts of its body erode, this Pokémon sticks rocks to itself to repair what’s been lost.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png"
},
378: {
  name: "Regice",
  type: ["Ice"],
  height: "5 feet 11 inches",
  weight: "385.8 lbs",
  description: "With cold air that can reach temperatures as low as −328 degrees Fahrenheit, Regice instantly freezes any creature that approaches it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png"
},
379: {
  name: "Registeel",
  type: ["Steel"],
  height: "6 feet 3 inches",
  weight: "451.9 lbs",
  description: "Registeel’s body is made of a strange material that is flexible enough to stretch and shrink but also more durable than any metal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png"
},
380: {
  name: "Latias",
  type: ["Dragon", "Psychic"],
  height: "4 feet 7 inches",
  weight: "88.2 lbs",
  description: "Latias is highly sensitive to the emotions of people. If it senses any hostility, this Pokémon ruffles the feathers all over its body and cries shrilly to intimidate the foe.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png"
},
381: {
  name: "Latios",
  type: ["Dragon", "Psychic"],
  height: "6 feet 7 inches",
  weight: "132.3 lbs",
  description: "Latios has the ability to make others see an image of what it has seen or imagines in its head. This Pokémon is intelligent and understands human speech.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png"
},
382: {
  name: "Kyogre",
  type: ["Water"],
  height: "14 feet 9 inches",
  weight: "776.0 lbs",
  description: "Through Primal Reversion and with nature’s full power, it will take back its true form. It can summon storms that cause the sea levels to rise.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png"
},
383: {
  name: "Groudon",
  type: ["Ground"],
  height: "11 feet 6 inches",
  weight: "2094.4 lbs",
  description: "Groudon is said to be the personification of the land itself. Legends tell of its many clashes against Kyogre, as each sought to gain the power of nature.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png"
},
384: {
  name: "Rayquaza",
  type: ["Dragon", "Flying"],
  height: "23 feet",
  weight: "455.3 lbs",
  description: "Rayquaza is said to have lived for hundreds of millions of years. Legends remain of how it put to rest the clash between Kyogre and Groudon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"
},
385: {
  name: "Jirachi",
  type: ["Steel", "Psychic"],
  height: "1 foot",
  weight: "2.4 lbs",
  description: "A legend states that Jirachi will make true any wish that is written on notes attached to its head when it awakens. If this Pokémon senses danger, it will fight without awakening.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png"
},
386: {
  name: "Deoxys",
  type: ["Psychic"],
  height: "5 feet 7 inches",
  weight: "134.0 lbs",
  description: "The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in Deoxys. The crystalline organ on this Pokémon’s chest appears to be its brain.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png"
},
387: {
  name: "Turtwig",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "22.5 lbs",
  description: "The shell on its back is made of soil. If the shell is moist to the touch, Turtwig is very healthy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
},
388: {
  name: "Grotle",
  type: ["Grass"],
  height: "3 feet 7 inches",
  weight: "213.8 lbs",
  description: "Grotle live in the forest. Each is said to have its own secret place for getting clean springwater.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png"
},
389: {
  name: "Torterra",
  type: ["Grass", "Ground"],
  height: "7 feet 3 inches",
  weight: "683.4 lbs",
  description: "Ancient people imagined that beneath the ground dwelt a gigantic Torterra.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png"
},
390: {
  name: "Chimchar",
  type: ["Fire"],
  height: "1 foot 8 inches",
  weight: "13.7 lbs",
  description: "It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"
},
391: {
  name: "Monferno",
  type: ["Fire", "Fighting"],
  height: "2 feet 11 inches",
  weight: "48.5 lbs",
  description: "It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png"
},
392: {
  name: "Infernape",
  type: ["Fire", "Fighting"],
  height: "3 feet 11 inches",
  weight: "121.3 lbs",
  description: "This Pokémon confounds opponents with its speed. It uses all its limbs to fight in its own unique style.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"
},
393: {
  name: "Piplup",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "11.5 lbs",
  description: "A poor walker, it often falls down. However, its strong pride makes it puff up its chest without a care.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png"
},
394: {
  name: "Prinplup",
  type: ["Water"],
  height: "2 feet 7 inches",
  weight: "50.7 lbs",
  description: "It lives a solitary life. Its wings deliver wicked blows that can snap even the thickest of trees in half with a single hit.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png"
},
395: {
  name: "Empoleon",
  type: ["Water", "Steel"],
  height: "5 feet 7 inches",
  weight: "186.3 lbs",
  description: "If anyone were to hurt its pride, it would slash them in two with wings that can cleave through an ice floe.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png"
},387: {
  name: "Turtwig",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "22.5 lbs",
  description: "The shell on its back is made of soil. If the shell is moist to the touch, Turtwig is very healthy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
},
388: {
  name: "Grotle",
  type: ["Grass"],
  height: "3 feet 7 inches",
  weight: "213.8 lbs",
  description: "Grotle live in the forest. Each is said to have its own secret place for getting clean springwater.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png"
},
389: {
  name: "Torterra",
  type: ["Grass", "Ground"],
  height: "7 feet 3 inches",
  weight: "683.4 lbs",
  description: "Ancient people imagined that beneath the ground dwelt a gigantic Torterra.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png"
},
390: {
  name: "Chimchar",
  type: ["Fire"],
  height: "1 foot 8 inches",
  weight: "13.7 lbs",
  description: "It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"
},
391: {
  name: "Monferno",
  type: ["Fire", "Fighting"],
  height: "2 feet 11 inches",
  weight: "48.5 lbs",
  description: "It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png"
},
392: {
  name: "Infernape",
  type: ["Fire", "Fighting"],
  height: "3 feet 11 inches",
  weight: "121.3 lbs",
  description: "This Pokémon confounds opponents with its speed. It uses all its limbs to fight in its own unique style.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"
},
393: {
  name: "Piplup",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "11.5 lbs",
  description: "A poor walker, it often falls down. However, its strong pride makes it puff up its chest without a care.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png"
},
394: {
  name: "Prinplup",
  type: ["Water"],
  height: "2 feet 7 inches",
  weight: "50.7 lbs",
  description: "It lives a solitary life. Its wings deliver wicked blows that can snap even the thickest of trees in half with a single hit.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png"
},
395: {
  name: "Empoleon",
  type: ["Water", "Steel"],
  height: "5 feet 7 inches",
  weight: "186.3 lbs",
  description: "If anyone were to hurt its pride, it would slash them in two with wings that can cleave through an ice floe.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png"
},
396: {
  name: "Starly",
  type: ["Normal", "Flying"],
  height: "1 foot",
  weight: "4.4 lbs",
  description: "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png"
},
397: {
  name: "Staravia",
  type: ["Normal", "Flying"],
  height: "2 feet",
  weight: "34.2 lbs",
  description: "Recognizing their own weakness, they always live in a group. When alone, a Staravia cries noisily.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png"
},
398: {
  name: "Staraptor",
  type: ["Normal", "Flying"],
  height: "3 feet 11 inches",
  weight: "54.9 lbs",
  description: "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png"
},
399: {
  name: "Bidoof",
  type: ["Normal"],
  height: "1 foot 8 inches",
  weight: "44.1 lbs",
  description: "With nerves of steel, nothing can perturb it. It is more agile and active than it appears.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png"
},
400: {
  name: "Bibarel",
  type: ["Normal", "Water"],
  height: "3 feet 3 inches",
  weight: "69.4 lbs",
  description: "It busily makes its nest with stacks of branches and roots it has cut up with its sharp incisors.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png"
},
401: {
  name: "Kricketot",
  type: ["Bug"],
  height: "1 foot",
  weight: "4.9 lbs",
  description: "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png"
},
402: {
  name: "Kricketune",
  type: ["Bug"],
  height: "3 feet 3 inches",
  weight: "56.2 lbs",
  description: "By allowing its cry to resonate in the hollow of its belly, it produces a captivating sound.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png"
},
403: {
  name: "Shinx",
  type: ["Electric"],
  height: "1 foot 8 inches",
  weight: "20.9 lbs",
  description: "The extension and contraction of its muscles generates electricity. It glows when in trouble.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png"
},
404: {
  name: "Luxio",
  type: ["Electric"],
  height: "2 feet 11 inches",
  weight: "67.2 lbs",
  description: "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png"
},
405: {
  name: "Luxray",
  type: ["Electric"],
  height: "4 feet 7 inches",
  weight: "92.6 lbs",
  description: "It can see clearly through walls to track down its prey and seek its lost young.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png"
},
406: {
  name: "Budew",
  type: ["Grass", "Poison"],
  height: "8 inches",
  weight: "2.6 lbs",
  description: "The pollen it releases contains poison. If this Pokémon is raised on clean water, the poison’s toxicity is increased.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png"
},
407: {
  name: "Roserade",
  type: ["Grass", "Poison"],
  height: "2 feet 11 inches",
  weight: "32.0 lbs",
  description: "After captivating opponents with its sweet scent, it lashes them with its thorny whips.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png"
},
408: {
  name: "Cranidos",
  type: ["Rock"],
  height: "2 feet 11 inches",
  weight: "69.4 lbs",
  description: "It lived in jungles around a hundred million years ago. It used its skillful headbutts to combat Aerodactyl.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png"
},
409: {
  name: "Rampardos",
  type: ["Rock"],
  height: "5 feet 3 inches",
  weight: "226.0 lbs",
  description: "Stifled by a thick skull that can withstand any impact, this Pokémon’s brain never got very big.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png"
},
410: {
  name: "Shieldon",
  type: ["Rock", "Steel"],
  height: "1 foot 8 inches",
  weight: "125.7 lbs",
  description: "It is outstandingly armored. As a result, it has no particular need to battle with others and can spend its time feeding on grass and berries.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png"
},411: {
  name: "Bastiodon",
  type: ["Rock", "Steel"],
  height: "4 feet 3 inches",
  weight: "329.6 lbs",
  description: "While it can guard against any sort of attack from the front, it is left without recourse when attacked from behind.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png"
},
412: {
  name: "Burmy",
  type: ["Bug"],
  height: "8 inches",
  weight: "7.5 lbs",
  description: "To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png"
},
413: {
  name: "Wormadam",
  type: ["Bug", "Grass"],
  height: "1 foot 8 inches",
  weight: "14.3 lbs",
  description: "Its appearance changes depending on where it evolved. The materials on hand become a part of its body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png"
},
414: {
  name: "Mothim",
  type: ["Bug", "Flying"],
  height: "2 feet 11 inches",
  weight: "51.4 lbs",
  description: "It loves the honey of flowers and steals honey collected by Combee.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png"
},
415: {
  name: "Combee",
  type: ["Bug", "Flying"],
  height: "1 foot",
  weight: "12.1 lbs",
  description: "At night, Combee sleep in a group of about a hundred, packed closely together in a lump.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png"
},
416: {
  name: "Vespiquen",
  type: ["Bug", "Flying"],
  height: "3 feet 11 inches",
  weight: "84.9 lbs",
  description: "It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png"
},
417: {
  name: "Pachirisu",
  type: ["Electric"],
  height: "1 foot 4 inches",
  weight: "8.6 lbs",
  description: "It’s one of the kinds of Pokémon with electric cheek pouches. It shoots charges from its tail.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png"
},
418: {
  name: "Buizel",
  type: ["Water"],
  height: "2 feet 4 inches",
  weight: "65.0 lbs",
  description: "It spins its two tails like a screw to propel itself through water. The tails also slice clinging seaweed.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png"
},
419: {
  name: "Floatzel",
  type: ["Water"],
  height: "3 feet 7 inches",
  weight: "73.9 lbs",
  description: "With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png"
},
420: {
  name: "Cherubi",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "7.3 lbs",
  description: "It nimbly dashes about to avoid getting pecked by bird Pokémon that would love to make off with its small, nutrient-rich storage ball.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png"
},
421: {
  name: "Cherrim",
  type: ["Grass"],
  height: "1 foot 8 inches",
  weight: "20.5 lbs",
  description: "Overcast Form: As a bud, it barely moves. It sits still, placidly waiting for sunlight to appear.\nSunshine Form: After absorbing plenty of sunlight, Cherrim takes this form. It’s full of energy while it’s like this, and its liveliness will go on until sundown.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png"
},
422: {
  name: "Shellos",
  type: ["Water"],
  height: "1 foot",
  weight: "13.9 lbs",
  description: "It used to have a shell on its back long ago. This species is closely related to Pokémon like Shellder.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png"
},
423: {
  name: "Gastrodon",
  type: ["Water", "Ground"],
  height: "2 feet 11 inches",
  weight: "65.9 lbs",
  description: "Its whole body is sticky with mucus. In the past, this form of Gastrodon was by far the more numerous one.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png"
},
424: {
  name: "Ambipom",
  type: ["Normal"],
  height: "3 feet 11 inches",
  weight: "44.8 lbs",
  description: "They live on large trees. They are said to communicate by connecting their tails to those of others.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png"
},
425: {
  name: "Driftloon",
  type: ["Ghost", "Flying"],
  height: "1 foot 4 inches",
  weight: "2.6 lbs",
  description: "It is whispered that any child who mistakes Drifloon for a balloon and holds on to it could wind up missing.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png"
},
426: {
  name: "Drifblim",
  type: ["Ghost", "Flying"],
  height: "3 feet 11 inches",
  weight: "33.1 lbs",
  description: "It can generate and release gas within its body. That’s how it can control the altitude of its drift.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png"
},
427: {
  name: "Buneary",
  type: ["Normal"],
  height: "1 foot 4 inches",
  weight: "12.1 lbs",
  description: "If both of Buneary’s ears are rolled up, something is wrong with its body or mind. It’s a sure sign the Pokémon is in need of care.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png"
},
428: {
  name: "Lopunny",
  type: ["Normal"],
  height: "3 feet 11 inches",
  weight: "73.4 lbs",
  description: "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png"
},
429: {
  name: "Mismagius",
  type: ["Ghost"],
  height: "2 feet 11 inches",
  weight: "9.7 lbs",
  description: "Its cry sounds like an incantation. It is said the cry may rarely be imbued with happiness-giving power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png"
},
430: {
  name: "Honchkrow",
  type: ["Dark", "Flying"],
  height: "2 feet 11 inches",
  weight: "60.2 lbs",
  description: "It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png"
},431: {
  name: "Glameow",
  type: ["Normal"],
  height: "1 foot 8 inches",
  weight: "8.6 lbs",
  description: "It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png"
},
432: {
  name: "Purugly",
  type: ["Normal"],
  height: "unknown",
  weight: "96.6 lbs",
  description: "It would claim another Pokémon’s nest as its own if it finds a nest sufficiently comfortable.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png"
},
433: {
  name: "Chingling",
  type: ["Psychic"],
  height: "8 inches",
  weight: "1.3 lbs",
  description: "There is an orb inside its mouth. When it hops, the orb bounces all over and makes a ringing sound.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png"
},
434: {
  name: "Stunky",
  type: ["Poison", "Dark"],
  height: "1 foot 4 inches",
  weight: "42.3 lbs",
  description: "It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png"
},
435: {
  name: "Skuntank",
  type: ["Poison", "Dark"],
  height: "3 feet 3 inches",
  weight: "83.8 lbs",
  description: "It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png"
},
436: {
  name: "Bronzor",
  type: ["Steel", "Psychic"],
  height: "1 foot 8 inches",
  weight: "133.4 lbs",
  description: "Ancient people believed that the pattern on Bronzor’s back contained a mysterious power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png"
},
437: {
  name: "Bronzong",
  type: ["Steel", "Psychic"],
  height: "4 feet 3 inches",
  weight: "412.3 lbs",
  description: "In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png"
},
438: {
  name: "Bonsly",
  type: ["Rock"],
  height: "1 foot 8 inches",
  weight: "33.1 lbs",
  description: "In order to adjust the level of fluids in its body, it exudes water from its eyes. This makes it appear to be crying.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png"
},
439: {
  name: "Mime.Jr",
  type: ["Psychic", "Fairy"],
  height: "2 feet",
  weight: "28.7 lbs",
  description: "It mimics everyone it sees, but it puts extra effort into copying the graceful dance steps of Mr. Rime as practice.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png"
},
440: {
  name: "Happiny",
  type: ["Normal"],
  height: "2 feet",
  weight: "53.8 lbs",
  description: "It carries a round, white rock in its belly pouch. If it gets along well with someone, it will sometimes give that person the rock.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png"
},
441: {
  name: "Chatot",
  type: ["Normal"],
  height: "1 foot 8 inches",
  weight: "4.2 lbs",
  description: "It mimics the cries of other Pokémon to trick them into thinking it’s one of them. This way they won’t attack it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png"
},
442: {
  name: "Spiritomb",
  type: ["Ghost", "Dark"],
  height: "3 feet 3 inches",
  weight: "238.1 lbs",
  description: "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png"
},
443: {
  name: "Gible",
  type: ["Dragon", "Ground"],
  height: "2 feet 4 inches",
  weight: "45.2 lbs",
  description: "It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png"
},
444: {
  name: "Gabite",
  type: ["Dragon", "Ground"],
  height: "4 feet 7 inches",
  weight: "123.5 lbs",
  description: "In rare cases, it molts and sheds its scales. Medicine containing its scales as an ingredient will make a weary body feel invigorated.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png"
},
445: {
  name: "Garchomp",
  type: ["Dragon", "Ground"],
  height: "6 feet 3 inches",
  weight: "209.4 lbs",
  description: "It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"
},
446: {
  name: "Munchlax",
  type: ["Normal"],
  height: "2 feet",
  weight: "231.5 lbs",
  description: "It needs to consume its own weight in food every day. As far as flavor is concerned, it’s indifferent.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png"
},
447: {
  name: "Riolu",
  type: ["Fighting"],
  height: "2 feet 4 inches",
  weight: "44.5 lbs",
  description: "They communicate with one another using their auras. They are able to run all through the night.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png"
},
448: {
  name: "Lucario",
  type: ["Fighting", "Steel"],
  height: "3 feet 11 inches",
  weight: "119.0 lbs",
  description: "It’s said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
},
449: {
  name: "Hippopotas",
  type: ["Ground"],
  height: "2 feet 7 inches",
  weight: "1091.1 lbs",
  description: "It shuts its nostrils tight, then travels through sand as if walking. They form colonies of around 10.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png"
},
450: {
  name: "Hippowdon",
  type: ["Ground"],
  height: "6 feet 7 inches",
  weight: "661.4 lbs",
  description: "It is surprisingly quick to anger. It holds its mouth agape as a display of its strength.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png"
},451: {
  name: "Skorupi",
  type: ["Poison", "Bug"],
  height: "2 feet 7 inches",
  weight: "26.5 lbs",
  description: "After burrowing into the sand, it waits patiently for prey to come near. This Pokémon and Sizzlipede share common descent.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png"
},
452: {
  name: "Drapion",
  type: ["Poison", "Dark"],
  height: "4 feet 3 inches",
  weight: "135.6 lbs",
  description: "Its poison is potent, but it rarely sees use. This Pokémon prefers to use physical force instead, going on rampages with its car-crushing strength.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png"
},
453: {
  name: "Croagunk",
  type: ["Poison", "Fighting"],
  height: "2 feet 4 inches",
  weight: "50.7 lbs",
  description: "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png"
},
454: {
  name: "Toxicroak",
  type: ["Poison", "Fighting"],
  height: "4 feet 3 inches",
  weight: "97.9 lbs",
  description: "Swaying and dodging the attacks of its foes, it weaves its flexible body in close, then lunges out with its poisonous claws.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png"
},
455: {
  name: "Carnivine",
  type: ["Grass"],
  height: "4 feet 7 inches",
  weight: "59.5 lbs",
  description: "It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png"
},
456: {
  name: "Finneon",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "15.4 lbs",
  description: "The line running down its side can store sunlight. It shines vividly at night.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png"
},
457: {
  name: "Lumineon",
  type: ["Water"],
  height: "3 feet 11 inches",
  weight: "52.9 lbs",
  description: "With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png"
},
458: {
  name: "Mantyke",
  type: ["Water"],
  height: "3 feet 3 inches",
  weight: "143.3 lbs",
  description: "Mantyke living in Galar seem to be somewhat sluggish. The colder waters of the seas in this region may be the cause.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png"
},
459: {
  name: "Snover",
  type: ["Grass", "Ice"],
  height: "3 feet 3 inches",
  weight: "111.3 lbs",
  description: "During cold seasons, it migrates to the mountain’s lower reaches. It returns to the snow-covered summit in the spring.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png"
},
460: {
  name: "Abomasnow",
  type: ["Grass", "Ice"],
  height: "7 feet 3 inches",
  weight: "298.6 lbs",
  description: "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png"
},
461: {
  name: "Weavile",
  type: ["Dark", "Ice"],
  height: "3 feet 7 inches",
  weight: "75.0 lbs",
  description: "Evolution made it even more devious. It communicates by clawing signs in boulders.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png"
},
462: {
  name: "Magnezone",
  type: ["Electric", "Steel"],
  height: "3 feet 11 inches",
  weight: "396.8 lbs",
  description: "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin while transmitting signals of unknown purpose.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png"
},
463: {
  name: "Lickilicky",
  type: ["Normal"],
  height: "5 feet 7 inches",
  weight: "308.6 lbs",
  description: "Lickilicky’s strange tongue can stretch to many times the length of its body. No one has figured out how Lickilicky’s tongue can stretch so far.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png"
},
464: {
  name: "Rhyperior",
  type: ["Ground", "Rock"],
  height: "7 feet 10 inches",
  weight: "623.5 lbs",
  description: "This Pokémon’s sturdy carapace protects it from volcanic eruptions. It shoots round rocks from the holes in its hands.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png"
},
465: {
  name: "Tangrowth",
  type: ["Grass"],
  height: "6 feet 7 inches",
  weight: "283.5 lbs",
  description: "Tangrowth has two arms that it can extend as it pleases. Recent research has shown that these arms are, in fact, bundles of vines.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png"
},
466: {
  name: "Electivire",
  type: ["Electric"],
  height: "5 feet 11 inches",
  weight: "305.6 lbs",
  description: "When it gets excited, it thumps its chest. With every thud, thunder roars and electric sparks shower all around.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png"
},
467: {
  name: "Magmortar",
  type: ["Fire"],
  height: "5 feet 3 inches",
  weight: "149.9 lbs",
  description: "When shooting 3,600 degree Fahrenheit fireballs from its arms, its body takes on a whitish hue from the intense heat.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png"
},
468: {
  name: "Togekiss",
  type: ["Fairy", "Flying"],
  height: "4 feet 11 inches",
  weight: "83.8 lbs",
  description: "These Pokémon are never seen anywhere near conflict or turmoil. In recent times, they’ve hardly been seen at all.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png"
},
469: {
  name: "Yanmega",
  type: ["Bug", "Flying"],
  height: "6 feet 3 inches",
  weight: "113.5 lbs",
  description: "Yanmega’s wingbeats are so powerful that the Pokémon blows down huge trees nearby when it vigorously launches itself into flight.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png"
},
470: {
  name: "Leafeon",
  type: ["Grass"],
  height: "3 feet 3 inches",
  weight: "56.2 lbs",
  description: "When you see Leafeon asleep in a patch of sunshine, you’ll know it is using photosynthesis to produce clean air.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png"
},
471: {
  name: "Glaceon",
  type: ["Ice"],
  height: "2 feet 7 inches",
  weight: "56.2 lbs",
  description: "It can control its body temperature at will. This enables it to freeze the moisture in the atmosphere, creating flurries of diamond dust.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png"
},
472: {
  name: "Gliscor",
  type: ["Ground", "Flying"],
  height: "6 feet 7 inches",
  weight: "93.7 lbs",
  description: "If it succeeds in catching even a faint breeze properly, it can circle the globe without flapping once.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png"
},
473: {
  name: "Mamoswine",
  type: ["Ice", "Ground"],
  height: "8 feet 2 inches",
  weight: "641.5 lbs",
  description: "A frozen Mamoswine was dug from ice dating back 10,000 years. This Pokémon has been around a long, long, long time.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png"
},
474: {
  name: "Porygon-Z",
  type: ["Normal"],
  height: "2 feet 11 inches",
  weight: "75.0 lbs",
  description: "An additional program was installed to create a more advanced Pokémon, but it was apparently flawed. Porygon-Z moves oddly as a result.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png"
},
475: {
  name: "Gallade",
  type: ["Psychic", "Fighting"],
  height: "5 feet 3 inches",
  weight: "114.6 lbs",
  description: "When trying to protect someone, it extends its elbows as if they were swords and fights savagely.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png"
},
476: {
  name: "Probopass",
  type: ["Rock", "Steel"],
  height: "4 feet 7 inches",
  weight: "749.6 lbs",
  description: "It controls three units called Mini-Noses using magnetic force. With them, it can attack a foe from three directions.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png"
},
477: {
  name: "Dusknoir",
  type: ["Ghost"],
  height: "7 feet 3 inches",
  weight: "235.0 lbs",
  description: "It is said to take lost spirits into its pliant body and take them to the afterlife.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png"
},
478: {
  name: "Froslass",
  type: ["Ice", "Ghost"],
  height: "4 feet 3 inches",
  weight: "58.6 lbs",
  description: "When it finds humans or Pokémon it likes, it freezes them and takes them to its chilly den, where they become decorations.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png"
},
479: {
  name: "Rotom",
  type: ["Electric", "Ghost"],
  height: "1 foot",
  weight: "0.7 lbs",
  description: "Its electricity-like body can enter some kinds of machines and take control in order to make mischief.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png"
},
480: {
  name: "Uxie",
  type: ["Psychic"],
  height: "1 foot",
  weight: "0.7 lbs",
  description: "Known as “The Being of Knowledge.” It is said that it can wipe out the memory of those who see its eyes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png"
},
481: {
  name: "Mesprit",
  type: ["Psychic"],
  height: "1 foot",
  weight: "0.7 lbs",
  description: "Known as “The Being of Emotion.” It taught humans the nobility of sorrow, pain, and joy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png"
},
482: {
  name: "Azelf",
  type: ["Psychic"],
  height: "1 foot",
  weight: "0.7 lbs",
  description: "Known as “The Being of Willpower.” It sleeps at the bottom of a lake to keep the world in balance.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png"
},
483: {
  name: "Dialga",
  type: ["Steel", "Dragon"],
  height: "17 feet 9 inches",
  weight: "1505.8 lbs",
  description: "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png"
},
484: {
  name: "Palkia",
  type: ["Water", "Dragon"],
  height: "13 feet 9 inches",
  weight: "740.8 lbs",
  description: "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png"
},
485: {
  name: "Heatran",
  type: ["Fire", "Steel"],
  height: "5 feet 7 inches",
  weight: "948.0 lbs",
  description: "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png"
},
486: {
  name: "Regigigas",
  type: ["Normal"],
  height: "12 feet 2 inches",
  weight: "925.9 lbs",
  description: "It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png"
},
487: {
  name: "Giratina",
  type: ["Ghost", "Dragon"],
  height: "14 feet 9 inches",
  weight: "1653.5 lbs",
  description: "This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png"
},
488: {
  name: "Cresselia",
  type: ["Psychic"],
  height: "4 feet 11 inches",
  weight: "188.7 lbs",
  description: "When it flies, it releases shiny particles from its veil-like wings. It is said to represent the crescent moon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png"
},
489: {
  name: "Phione",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "6.8 lbs",
  description: "When the water warms, they inflate the flotation sac on their heads and drift languidly on the sea in packs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png"
},
490: {
  name: "Manaphy",
  type: ["Water"],
  height: "1 foot",
  weight: "3.1 lbs",
  description: "It is born with a wondrous power that lets it bond with any kind of Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png"
},491: {
  name: "Darkrai",
  type: ["Dark"],
  height: "4 feet 11 inches",
  weight: "111.3 lbs",
  description: "It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png"
},
492: {
  name: "Shaymin",
  type: ["Grass"],
  height: "8 inches",
  weight: "4.6 lbs",
  description: "It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png"
},
493: {
  name: "Arceus",
  type: ["Normal"],
  height: "10 feet 6 inches",
  weight: "705.5 lbs",
  description: "According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png"
},
494: {
  name: "Victini",
  type: ["Psychic", "Fire"],
  height: "1 foot 4 inches",
  weight: "8.8 lbs",
  description: "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png"
},
495: {
  name: "Snivy",
  type: ["Grass"],
  height: "2 feet",
  weight: "17.9 lbs",
  description: "The leaf on Snivy’s tail generates energy when exposed to sunlight, making Snivy swifter and adding an edge to its moves.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png"
},
496: {
  name: "Servine",
  type: ["Grass"],
  height: "2 feet 7 inches",
  weight: "35.3 lbs",
  description: "It runs low to the ground, weaving through the grass, then mercilessly pummels its target by whipping them with its vines.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png"
},
497: {
  name: "Serperior",
  type: ["Grass"],
  height: "10 feet 10 inches",
  weight: "138.9 lbs",
  description: "It generates energy from sunlight, then amplifies that energy dozens of times within its long body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png"
},
498: {
  name: "Tepig",
  type: ["Fire"],
  height: "1 foot 8 inches",
  weight: "21.8 lbs",
  description: "It’s more nimble than it looks, and it uses its speed to confound its enemies. It rapidly launches fireballs from both nostrils.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png"
},
499: {
  name: "Pignite",
  type: ["Fire", "Fighting"],
  height: "3 feet 3 inches",
  weight: "122.4 lbs",
  description: "When Pignite enters battle, its body temperature rapidly soars until Pignite itself is engulfed by a scorching fireball.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png"
},
500: {
  name: "Emboar",
  type: ["Fire", "Fighting"],
  height: "5 feet 3 inches",
  weight: "321.2 lbs",
  description: "The flames blazing deep inside Emboar’s chest erupt vigorously from its chin, forming a beard of fire.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png"
},
501: {
  name: "Oshawott",
  type: ["Water"],
  height: "1 foot 8 inches",
  weight: "13.0 lbs",
  description: "It wields the scalchop on its stomach like a knife, blocking the moves of its enemies before slashing back at them in swift retaliation.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png"
},
502: {
  name: "Dewott",
  type: ["Water"],
  height: "2 feet 7 inches",
  weight: "54.0 lbs",
  description: "It’s said that people modeled swordplay after the way Dewott’s movements flow like water while it’s wielding its two scalchops.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png"
},
503: {
  name: "Samurott",
  type: ["Water"],
  height: "4 feet 11 inches",
  weight: "208.6 lbs",
  description: "A master of a sword-drawing art called iaijutsu, Samurott settles its battles with a single swing of either large sword sheathed in its foreleg armor.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png"
},
504: {
  name: "Patrat",
  type: ["Normal"],
  height: "1 foot 8 inches",
  weight: "25.6 lbs",
  description: "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png"
},
505: {
  name: "Watchog",
  type: ["Normal"],
  height: "3 feet 7 inches",
  weight: "59.5 lbs",
  description: "Using luminescent matter, it makes its eyes and body glow and stuns attacking opponents.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png"
},
506: {
  name: "Lillipup",
  type: ["Normal"],
  height: "1 foot 4 inches",
  weight: "9.0 lbs",
  description: "This Pokémon is courageous but also cautious. It uses the soft fur covering its face to collect information about its surroundings.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png"
},
507: {
  name: "Herdier",
  type: ["Normal"],
  height: "2 feet 11 inches",
  weight: "32.4 lbs",
  description: "Herdier is a very smart and friendly Pokémon. So much so that there’s a theory that Herdier was the first Pokémon to partner with people.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png"
},
508: {
  name: "Stoutland",
  type: ["Normal"],
  height: "3 feet 11 inches",
  weight: "134.5 lbs",
  description: "These Pokémon seem to enjoy living with humans. Even a Stoutland caught in the wild will warm up to people in about three days.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png"
},
509: {
  name: "Purrloin",
  type: ["Dark"],
  height: "1 foot 4 inches",
  weight: "22.3 lbs",
  description: "It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png"
},
510: {
  name: "Liepard",
  type: ["Dark"],
  height: "3 feet 7 inches",
  weight: "82.7 lbs",
  description: "Don’t be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png"
},511: {
  name: "Pansage",
  type: ["Grass"],
  height: "2 feet",
  weight: "23.1 lbs",
  description: "It shares the leaf on its head with weary-looking Pokémon. These leaves are known to relieve stress.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png"
},
512: {
  name: "Simisage",
  type: ["Grass"],
  height: "3 feet 7 inches",
  weight: "67.2 lbs",
  description: "It attacks enemies with strikes of its thorn-covered tail. This Pokémon is wild tempered.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png"
},
513: {
  name: "Pansear",
  type: ["Fire"],
  height: "2 feet",
  weight: "24.3 lbs",
  description: "Very intelligent, it roasts berries before eating them. It likes to help people.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png"
},
514: {
  name: "Simisear",
  type: ["Fire"],
  height: "3 feet 3 inches",
  weight: "61.7 lbs",
  description: "A flame burns inside its body. It scatters embers from its head and tail to sear its opponents.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png"
},
515: {
  name: "Panpour",
  type: ["Water"],
  height: "2 feet",
  weight: "29.8 lbs",
  description: "The water stored inside the tuft on its head is full of nutrients. It waters plants with it using its tail.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png"
},
516: {
  name: "Simipour",
  type: ["Water"],
  height: "3 feet 3 inches",
  weight: "63.9 lbs",
  description: "The high-pressure water expelled from its tail is so powerful, it can destroy a concrete wall.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png"
},
517: {
  name: "Munna",
  type: ["Psychic"],
  height: "2 feet",
  weight: "51.4 lbs",
  description: "Late at night, it appears beside people’s pillows. As it feeds on dreams, the patterns on its body give off a faint glow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png"
},
518: {
  name: "Musharna",
  type: ["Psychic"],
  height: "3 feet 7 inches",
  weight: "133.4 lbs",
  description: "When dark mists emanate from its body, don’t get too near. If you do, your nightmares will become reality.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png"
},
519: {
  name: "Pidove",
  type: ["Normal", "Flying"],
  height: "1 foot",
  weight: "4.6 lbs",
  description: "Where people go, these Pokémon follow. If you’re scattering food for them, be careful—several hundred of them can gather at once.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png"
},
520: {
  name: "Tranquill",
  type: ["Normal", "Flying"],
  height: "2 feet",
  weight: "33.1 lbs",
  description: "It can fly moderately quickly. No matter how far it travels, it can always find its way back to its master and its nest.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png"
},
521: {
  name: "Unfezant",
  type: ["Normal", "Flying"],
  height: "3 feet 11 inches",
  weight: "63.9 lbs",
  description: "Unfezant are exceptional fliers. The females are known for their stamina, while the males outclass them in terms of speed.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png"
},
522: {
  name: "Blitzle",
  type: ["Electric"],
  height: "2 feet 7 inches",
  weight: "65.7 lbs",
  description: "Its heartbeat generates electricity. When Blitzle is surprised and its heart rate goes up, the voltage of its electricity also rises.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png"
},
523: {
  name: "Zebstrika",
  type: ["Electric"],
  height: "5 feet 3 inches",
  weight: "175.3 lbs",
  description: "This Pokémon is aggressive and has a volatile disposition. When agitated, it will illuminate its mane in yellow and fire off bolts of electricity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png"
},
524: {
  name: "Roggenrola",
  type: ["Rock"],
  height: "1 foot 4 inches",
  weight: "39.7 lbs",
  description: "It’s as hard as steel, but apparently a long soak in water will cause it to soften a bit.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png"
},
525: {
  name: "Boldore",
  type: ["Rock"],
  height: "2 feet 11 inches",
  weight: "224.9 lbs",
  description: "If you see its orange crystals start to glow, be wary. It’s about to fire off bursts of energy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png"
},
526: {
  name: "Gigalith",
  type: ["Rock"],
  height: "5 feet 7 inches",
  weight: "573.2 lbs",
  description: "This hardy Pokémon can often be found on construction sites and in mines, working alongside people and Copperajah.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png"
},
527: {
  name: "Woobat",
  type: ["Psychic", "Flying"],
  height: "1 foot 4 inches",
  weight: "4.6 lbs",
  description: "While inside a cave, if you look up and see lots of heart-shaped marks lining the walls, it’s evidence that Woobat live there.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png"
},
528: {
  name: "Swoobat",
  type: ["Psychic", "Flying"],
  height: "2 feet 11 inches",
  weight: "23.1 lbs",
  description: "Emitting powerful sound waves tires it out. Afterward, it won’t be able to fly for a little while.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png"
},
529: {
  name: "Drilbur",
  type: ["Ground"],
  height: "1 foot",
  weight: "18.7 lbs",
  description: "It can dig through the ground at a speed of 30 mph. It could give a car running aboveground a good race.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png"
},
530: {
  name: "Excadrill",
  type: ["Ground", "Steel"],
  height: "2 feet 4 inches",
  weight: "89.1 lbs",
  description: "Forming a drill with its steel claws and head, it can bore through a steel plate, no matter how thick it is.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png"
},531: {
  name: "Audino",
  type: ["Normal"],
  height: "3 feet 7 inches",
  weight: "63.8 lbs",
  description: "Audino’s sense of hearing is superb. Not even a pebble rolling along over a mile away will escape Audino’s ears.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png"
},
532: {
  name: "Timburr",
  type: ["Fighting"],
  height: "2 feet",
  weight: "27.6 lbs",
  description: "Always carrying squared logs, they help out with construction. As they grow, they carry bigger logs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png"
},
533: {
  name: "Gurdurr",
  type: ["Fighting"],
  height: "3 feet 11 inches",
  weight: "88.2 lbs",
  description: "They strengthen their bodies by carrying steel beams. They show off their big muscles to their friends.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png"
},
534: {
  name: "Conkeldurr",
  type: ["Fighting"],
  height: "4 feet 7 inches",
  weight: "191.8 lbs",
  description: "It is thought that Conkeldurr taught humans how to make concrete more than 2,000 years ago.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png"
},
535: {
  name: "Tympole",
  type: ["Water"],
  height: "1 foot 8 inches",
  weight: "9.9 lbs",
  description: "Graceful ripples running across the water’s surface are a sure sign that Tympole are singing in high-pitched voices below.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png"
},
536: {
  name: "Palpitoad",
  type: ["Water", "Ground"],
  height: "2 feet 7 inches",
  weight: "37.5 lbs",
  description: "It weakens its prey with sound waves intense enough to cause headaches, then entangles them with its sticky tongue.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png"
},
537: {
  name: "Seismitoad",
  type: ["Water", "Ground"],
  height: "4 feet 11 inches",
  weight: "136.7 lbs",
  description: "The vibrating of the bumps all over its body causes earthquake-like tremors. Seismitoad and Croagunk are similar species.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png"
},
538: {
  name: "Throh",
  type: ["Fighting"],
  height: "4 feet 3 inches",
  weight: "122.4 lbs",
  description: "It performs throwing moves with first-rate skill. Over the course of many battles, Throh’s belt grows darker as it absorbs its wearer’s sweat.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png"
},
539: {
  name: "Sawk",
  type: ["Fighting"],
  height: "4 feet 7 inches",
  weight: "112.4 lbs",
  description: "If you see a Sawk training in the mountains in its single-minded pursuit of strength, it’s best to quietly pass by.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png"
},
540: {
  name: "Sewaddle",
  type: ["Bug", "Grass"],
  height: "1 foot",
  weight: "5.5 lbs",
  description: "Sewaddle chews on leaves to make its clothing. It’s trying to mimic the leafy garment Leavanny first dressed it in.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png"
},
541: {
  name: "Swadloon",
  type: ["Bug", "Grass"],
  height: "1 foot 8 inches",
  weight: "16.1 lbs",
  description: "Swadloon lives quietly at the feet of trees. It prefers eating fallen leaves that have grown soft rather than fresh ones.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png"
},
542: {
  name: "Leavanny",
  type: ["Bug", "Grass"],
  height: "3 feet 11 inches",
  weight: "45.2 lbs",
  description: "This gentle Pokémon has strong protective instincts. The leaves on its arms are sharp enough to slice a thick tree in half with one stroke.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png"
},
543: {
  name: "Venipede",
  type: ["Bug", "Poison"],
  height: "1 foot 4 inches",
  weight: "11.7 lbs",
  description: "Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png"
},
544: {
  name: "Whirlipede",
  type: ["Bug", "Poison"],
  height: "3 feet 11 inches",
  weight: "129.0 lbs",
  description: "This Pokémon spins itself rapidly and charges into its opponents. Its top speed is just over 60 mph.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png"
},
545: {
  name: "Scolipede",
  type: ["Bug", "Poison"],
  height: "8 feet 2 inches",
  weight: "442.0 lbs",
  description: "Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claws’ toxic spikes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png"
},
546: {
  name: "Cottonee",
  type: ["Grass", "Fairy"],
  height: "1 foot",
  weight: "1.3 lbs",
  description: "Pillows and beds stuffed with cotton exhaled by Cottonee are soft and puffy, light and airy—altogether top quality.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png"
},
547: {
  name: "Whimsicott",
  type: ["Grass", "Fairy"],
  height: "2 feet 4 inches",
  weight: "14.6 lbs",
  description: "Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png"
},
548: {
  name: "Petilil",
  type: ["Grass"],
  height: "1 foot 8 inches",
  weight: "14.6 lbs",
  description: "The leaves on its head grow right back even if they fall out. These bitter leaves refresh those who eat them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png"
},
549: {
  name: "Lilligant",
  type: ["Grass"],
  height: "3 feet 7 inches",
  weight: "35.9 lbs",
  description: "The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png"
},
550: {
  name: "Basculin",
  type: ["Water"],
  height: "3 feet 3 inches",
  weight: "39.7 lbs",
  description: "They live in frigid seas, forming schools and sharing food among themselves. When the time comes, they return to the river they were born in.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png"
},
551: {
  name: "Sandile",
  type: ["Ground", "Dark"],
  height: "2 feet 4 inches",
  weight: "33.5 lbs",
  description: "It submerges itself in sand and moves as if swimming. This wise behavior keeps its enemies from finding it and maintains its temperature.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png"
},
552: {
  name: "Krokorok",
  type: ["Ground", "Dark"],
  height: "3 feet 3 inches",
  weight: "73.6 lbs",
  description: "Protected by thin membranes, their eyes can see even in the dead of night. They live in groups of a few individuals.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png"
},
553: {
  name: "Krookodile",
  type: ["Ground", "Dark"],
  height: "4 feet 11 inches",
  weight: "213.3 lbs",
  description: "After clamping down with its powerful jaws, it twists its body around to rip its prey in half.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png"
},
554: {
  name: "Darumaka",
  type: ["Fire"],
  height: "2 feet",
  weight: "82.7 lbs",
  description: "Darumaka’s droppings are hot, so people used to put them in their clothes to keep themselves warm.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png"
},
555: {
  name: "Darmanitan",
  type: ["Fire"],
  height: "4 feet 3 inches",
  weight: "204.8 lbs",
  description: "When one is injured in a fierce battle, it hardens into a stone-like form. Then it meditates and sharpens its mind.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png"
},
556: {
  name: "Maractus",
  type: ["Grass"],
  height: "3 feet 3 inches",
  weight: "61.7 lbs",
  description: "With noises that could be mistaken for the rattles of maracas, it creates an upbeat rhythm, startling bird Pokémon and making them fly off in a hurry.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png"
},
557: {
  name: "Dwebble",
  type: ["Bug", "Rock"],
  height: "1 foot",
  weight: "32.0 lbs",
  description: "When it finds a stone appealing, it creates a hole inside it and uses it as its home. This Pokémon is the natural enemy of Roggenrola and Rolycoly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png"
},
558: {
  name: "Crustle",
  type: ["Bug", "Rock"],
  height: "4 feet 7 inches",
  weight: "440.9 lbs",
  description: "This highly territorial Pokémon prefers dry climates. It won’t come out of its boulder on rainy days.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png"
},
559: {
  name: "Scraggy",
  type: ["Fighting", "Dark"],
  height: "2 feet",
  weight: "26.0 lbs",
  description: "It stretches its saggy skin up to its neck to protect itself. Among Scraggy, individuals with saggier skin apparently garner more respect.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png"
},
560: {
  name: "Scrafty",
  type: ["Fighting", "Dark"],
  height: "3 feet 7 inches",
  weight: "66.1 lbs",
  description: "Groups of them beat up anything that enters their territory. Each can spit acidic liquid from its mouth.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png"
},
561: {
  name: "Sigilyph",
  type: ["Psychic", "Flying"],
  height: "4 feet 7 inches",
  weight: "30.9 lbs",
  description: "Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians’ emissaries.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png"
},
562: {
  name: "Yamask",
  type: ["Ghost"],
  height: "1 foot 8 inches",
  weight: "3.3 lbs",
  description: "It wanders through ruins by night, carrying a mask that’s said to have been the face it had when it was still human.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png"
},
563: {
  name: "Cofagrigus",
  type: ["Ghost"],
  height: "5 feet 7 inches",
  weight: "168.7 lbs",
  description: "This Pokémon has a body of sparkling gold. People say it no longer remembers that it was once human.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png"
},
564: {
  name: "Tirtouga",
  type: ["Water", "Rock"],
  height: "2 feet 4 inches",
  weight: "36.4 lbs",
  description: "This Pokémon inhabited ancient seas. Although it can only crawl, it still comes up onto land in search of prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png"
},
565: {
  name: "Carracosta",
  type: ["Water", "Rock"],
  height: "3 feet 11 inches",
  weight: "178.6 lbs",
  description: "Carracosta completely devours its prey—bones, shells, and all. Because of this, Carracosta’s own shell grows thick and sturdy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png"
},
566: {
  name: "Archen",
  type: ["Rock", "Flying"],
  height: "1 foot 8 inches",
  weight: "20.9 lbs",
  description: "This Pokémon was successfully restored from a fossil. As research suggested, Archen is unable to fly. But it’s very good at jumping.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png"
},
567: {
  name: "Archeops",
  type: ["Rock", "Flying"],
  height: "4 feet 7 inches",
  weight: "70.5 lbs",
  description: "It needs a running start to take off. If Archeops wants to fly, it first needs to run nearly 25 mph, building speed over a course of about 2.5 miles.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png"
},
568: {
  name: "Trubbish",
  type: ["Poison"],
  height: "2 feet",
  weight: "68.3 lbs",
  description: "Its favorite places are unsanitary ones. If you leave trash lying around, you could even find one of these Pokémon living in your room.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png"
},
569: {
  name: "Garbodor",
  type: ["Poison"],
  height: "6 feet 3 inches",
  weight: "236.6 lbs",
  description: "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png"
},
570: {
  name: "Zorua",
  type: ["Dark"],
  height: "2 feet 4 inches",
  weight: "27.6 lbs",
  description: "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png"
},571: {
  name: "Zoroark",
  type: ["Dark"],
  height: "5 feet 3 inches",
  weight: "178.8 lbs",
  description: "Stories say those who tried to catch Zoroark were trapped in an illusion and punished.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png"
},
572: {
  name: "Minccino",
  type: ["Normal"],
  height: "1 foot 4 inches",
  weight: "12.8 lbs",
  description: "When its tail has gotten dirty from self-cleaning or from cleaning its nest, Minccino spends a whole day washing its tail in clean springwater.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png"
},
573: {
  name: "Cinccino",
  type: ["Normal"],
  height: "1 foot 8 inches",
  weight: "16.5 lbs",
  description: "Their white fur is coated in a special oil that makes it easy for them to deflect attacks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png"
},
574: {
  name: "Gothita",
  type: ["Psychic"],
  height: "1 foot 4 inches",
  weight: "12.8 lbs",
  description: "This Pokémon is normally very innocent. When it is staring at something invisible, it is unblinking and utterly silent.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png"
},
575: {
  name: "Gothorita",
  type: ["Psychic"],
  height: "2 feet 4 inches",
  weight: "39.7 lbs",
  description: "This Pokémon will hypnotize children to put them to sleep before carrying them away. Be wary of nights when the starlight is bright.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png"
},
576: {
  name: "Gothitelle",
  type: ["Psychic"],
  height: "4 feet 11 inches",
  weight: "97.0 lbs",
  description: "Gothitelle unleashes psychic energy and shows opponents dreams of the universe’s end. These dreams are apparently ethereal and beautiful.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png"
},
577: {
  name: "Solosis",
  type: ["Psychic"],
  height: "1 foot",
  weight: "2.2 lbs",
  description: "Because their bodies are enveloped in a special liquid, they can survive in any environment.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png"
},
578: {
  name: "Duosion",
  type: ["Psychic"],
  height: "2 feet",
  weight: "17.6 lbs",
  description: "Since they have two divided brains, at times they suddenly try to take two different actions at once.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png"
},
579: {
  name: "Reuniclus",
  type: ["Psychic"],
  height: "3 feet 3 inches",
  weight: "44.3 lbs",
  description: "Their arms are made of a special liquid. They use psychic power to control these arms and crush boulders.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png"
},
580: {
  name: "Ducklett",
  type: ["Water", "Flying"],
  height: "1 foot 8 inches",
  weight: "12.1 lbs",
  description: "It’s not very good at flying yet. It watches the dances of its Swanna parents to learn how to move its wings.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png"
},
581: {
  name: "Swanna",
  type: ["Water", "Flying"],
  height: "4 feet 3 inches",
  weight: "53.4 lbs",
  description: "Centered around its leader, the flock dances in perfect sync to strengthen its unity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png"
},
582: {
  name: "Vanillite",
  type: ["Ice"],
  height: "1 foot 4 inches",
  weight: "12.6 lbs",
  description: "Unable to survive in hot areas, it makes itself comfortable by breathing out air cold enough to cause snow. It burrows into the snow to sleep.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png"
},
583: {
  name: "Vanillish",
  type: ["Ice"],
  height: "3 feet 7 inches",
  weight: "90.4 lbs",
  description: "By drinking pure water, it grows its icy body. This Pokémon can be hard to find on days with warm, sunny weather.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png"
},
584: {
  name: "Vanilluxe",
  type: ["Ice"],
  height: "4 feet 3 inches",
  weight: "126.8 lbs",
  description: "When its anger reaches a breaking point, this Pokémon unleashes a fierce blizzard that freezes every creature around it, be they friend or foe.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png"
},
585: {
  name: "Deerling",
  type: ["Normal", "Grass"],
  height: "2 feet",
  weight: "43.0 lbs",
  description: "Deerling have different scents depending on the season. In early spring, these Pokémon give off a delicate, sweet, and calming scent.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png"
},
586: {
  name: "Sawsbuck",
  type: ["Normal", "Grass"],
  height: "6 feet 3 inches",
  weight: "203.9 lbs",
  description: "",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png"
},
587: {
  name: "Emolga",
  type: ["Electric", "Flying"],
  height: "1 foot 4 inches",
  weight: "11 lbs",
  description: "As Emolga flutters through the air, it crackles with electricity. This Pokémon is cute, but it can cause a lot of trouble.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png"
},
588: {
  name: "Karrablast",
  type: ["Bug"],
  height: "1 foot 8 inches",
  weight: "13 lbs",
  description: "Its strange physiology reacts to electrical energy in interesting ways. The presence of a Shelmet will cause this Pokémon to evolve.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png"
},
589: {
  name: "Escavalier",
  type: ["Bug", "Steel"],
  height: "3 feet 3 inches",
  weight: "72.8 lbs",
  description: "They use shells they’ve stolen from Shelmet to arm and protect themselves. They’re very popular Pokémon in the Galar region.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png"
},
590: {
  name: "Foongus",
  type: ["Grass", "Poison"],
  height: "8 inches",
  weight: "2.2 lbs",
  description: "There is a theory that the developer of the modern-day Poké Ball really liked Foongus, but this has not been confirmed.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png"
},591: {
  name: "Amoonguss",
  type: ["Grass", "Poison"],
  height: "2 feet",
  weight: "23.1 lbs",
  description: "Be wary of the poisonous spores it releases. Mushrooms resembling Amoonguss’s caps will grow out of anywhere the spores touch.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png"
},
592: {
  name: "Frillish",
  type: ["Water", "Ghost"],
  height: "3 feet 11 inches",
  weight: "72.8 lbs",
  description: "It envelops its prey in its veillike arms and draws it down to the deeps, five miles below the ocean’s surface.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png"
},
593: {
  name: "Jellicent",
  type: ["Water", "Ghost"],
  height: "7 feet 3 inches",
  weight: "297.6 lbs",
  description: "Most of this Pokémon’s body composition is identical to sea water. It makes sunken ships its lair.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png"
},
594: {
  name: "Alomomola",
  type: ["Water"],
  height: "3 feet 11 inches",
  weight: "69.7 lbs",
  description: "It gently holds injured and weak Pokémon in its fins. Its special membrane heals their wounds.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png"
},
595: {
  name: "Joltik",
  type: ["Bug", "Electric"],
  height: "4 inches",
  weight: "1.3 lbs",
  description: "Joltik that live in cities have learned a technique for sucking electricity from the outlets in houses.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png"
},
596: {
  name: "Galvantula",
  type: ["Bug", "Electric"],
  height: "2 feet 7 inches",
  weight: "31.5 lbs",
  description: "They employ an electrically charged web to trap their prey. While it is immobilized by shock, they leisurely consume it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png"
},
597: {
  name: "Ferroseed",
  type: ["Grass", "Steel"],
  height: "2 feet",
  weight: "41.4 lbs",
  description: "It defends itself by launching spikes, but its aim isn’t very good at first. Only after a lot of practice will it improve.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png"
},
598: {
  name: "Ferrothorn",
  type: ["Grass", "Steel"],
  height: "3 feet 3 inches",
  weight: "242.5 lbs",
  description: "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png"
},
599: {
  name: "Klink",
  type: ["Steel"],
  height: "1 foot",
  weight: "46.3 lbs",
  description: "The two minigears that compose this Pokémon are closer than twins. They mesh well only with each other.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png"
},
600: {
  name: "Klang",
  type: ["Steel"],
  height: "2 feet",
  weight: "112.4 lbs",
  description: "When Klang goes all out, the minigear links up perfectly with the outer part of the big gear, and this Pokémon’s rotation speed increases sharply.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png"
},
601: {
  name: "Klinklang",
  type: ["Steel"],
  height: "2 feet",
  weight: "178.6 lbs",
  description: "From its spikes, it launches powerful blasts of electricity. Its red core contains an enormous amount of energy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png"
},
602: {
  name: "Tynamo",
  type: ["Electric"],
  height: "8 inches",
  weight: "0.7 lbs",
  description: "While one alone doesn’t have much power, a chain of many Tynamo can be as powerful as lightning.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png"
},
603: {
  name: "Eelektrik",
  type: ["Electric"],
  height: "3 feet 11 inches",
  weight: "48.5 lbs",
  description: "They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png"
},
604: {
  name: "Eelektross",
  type: ["Electric"],
  height: "6 feet 11 inches",
  weight: "177.5 lbs",
  description: "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png"
},
605: {
  name: "Elgyem",
  type: ["Psychic"],
  height: "1 foot 8 inches",
  weight: "19.8 lbs",
  description: "If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png"
},
606: {
  name: "Beheeyem",
  type: ["Psychic"],
  height: "3 feet 3 inches",
  weight: "76.1 lbs",
  description: "Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png"
},
607: {
  name: "Litwick",
  type: ["Fire", "Ghost"],
  height: "1 foot",
  weight: "6.8 lbs",
  description: "Its flame is usually out, but it starts shining when Litwick absorbs life-force from people or Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png"
},
608: {
  name: "Lampent",
  type: ["Ghost", "Fire"],
  height: "2 feet",
  weight: "28.7 lbs",
  description: "Lampent appears at the moment of death and promptly absorbs the spirit as it leaves the body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png"
},
609: {
  name: "Chandelure",
  type: ["Ghost", "Fire"],
  height: "3 feet 3 inches",
  weight: "75.6 lbs",
  description: "The spirits burned up in its ominous flame lose their way and wander this world forever.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png"
},
610: {
  name: "Axew",
  type: ["Dragon"],
  height: "2 feet",
  weight: "39.7 lbs",
  description: "This Pokémon lives in nests that are made in the ground. People in ancient times used its tusks as cooking knives.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png"
},
611: {
  name: "Fraxure",
  type: ["Dragon"],
  height: "3 feet 3 inches",
  weight: "79.4 lbs",
  description: "Because its tusks don’t grow back once they break, this Pokémon apparently won’t use them unless truly necessary.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png"
},
612: {
  name: "Haxorus",
  type: ["Dragon"],
  height: "5 feet 11 inches",
  weight: "232.6 lbs",
  description: "This Pokémon nests in caves and abandoned mines. It is docile, but it will become incredibly angry if its tusks are touched, so beware.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png"
},
613: {
  name: "Cubchoo",
  type: ["Ice"],
  height: "1 foot 8 inches",
  weight: "18.7 lbs",
  description: "Many of this species can be found along the shorelines of cold regions. If a Cubchoo lacks dangling snot, there’s a chance it is sick.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png"
},
614: {
  name: "Beartic",
  type: ["Ice"],
  height: "8 feet 6 inches",
  weight: "573.2 lbs",
  description: "It is a ferocious, carnivorous Pokémon. Once it captures its prey, it will breathe cold air onto the prey to freeze and preserve it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png"
},
615: {
  name: "Cryogonal",
  type: ["Ice"],
  height: "3 feet 7 inches",
  weight: "326.3 lbs",
  description: "Cryogonal appear during cold seasons. It is said that people and Pokémon who die on snowy mountains are reborn into these Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png"
},
616: {
  name: "Shelmet",
  type: ["Bug"],
  height: "1 foot 4 inches",
  weight: "17.0 lbs",
  description: "When attacked, it tightly shuts the lid of its shell. This reaction fails to protect it from Karrablast, however, because they can still get into the shell.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png"
},
617: {
  name: "Accelgor",
  type: ["Bug"],
  height: "2 feet 7 inches",
  weight: "55.8 lbs",
  description: "It moves with blinding speed and lobs poison at foes. Featuring Accelgor as a main character is a surefire way to make a movie or comic popular.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png"
},
618: {
  name: "Stunfisk",
  type: ["Ground", "Electric"],
  height: "2 feet 4 inches",
  weight: "24.3 lbs",
  description: "Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png"
},
619: {
  name: "Mienfoo",
  type: ["Fighting"],
  height: "2 feet 11 inches",
  weight: "44.1 lbs",
  description: "In fights, they dominate with onslaughts of flowing, continuous attacks. With their sharp claws, they cut enemies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png"
},
620: {
  name: "Mienshao",
  type: ["Fighting"],
  height: "4 feet 7 inches",
  weight: "78.3 lbs",
  description: "When Mienshao lets out a bizarre wail, you’re in danger. A flurry of kicks and chops too fast to see is about to be unleashed!",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png"
},
621: {
  name: "Druddigon",
  type: ["Dragon"],
  height: "5 feet 3 inches",
  weight: "306.4 lbs",
  description: "Druddigon lives in caves, but it never skips sunbathing—it won’t be able to move if its body gets too cold.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png"
},
622: {
  name: "Golett",
  type: ["Ground", "Ghost"],
  height: "3 feet 3 inches",
  weight: "202.8 lbs",
  description: "These Pokémon are thought to have been created by the science of an ancient and mysterious civilization.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png"
},
623: {
  name: "Golurk",
  type: ["Ground", "Ghost"],
  height: "9 feet 2 inches",
  weight: "727.5 lbs",
  description: "When the seal on its chest is removed, it rages indiscriminately. During such rampages, it can turn a whole town into a mountain of rubble.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png"
},
624: {
  name: "Pawniard",
  type: ["Dark", "Steel"],
  height: "1 foot 8 inches",
  weight: "22.5 lbs",
  description: "Pawniard will fearlessly challenge even powerful foes. In a pinch, it will cling to opponents and pierce them with the blades all over its body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png"
},
625: {
  name: "Bisharp",
  type: ["Dark", "Steel"],
  height: "5 feet 3 inches",
  weight: "154.3 lbs",
  description: "This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png"
},
626: {
  name: "Bouffalant",
  type: ["Normal"],
  height: "5 feet 3 inches",
  weight: "208.6 lbs",
  description: "These Pokémon can crush a car with no more than a headbutt. Bouffalant with more hair on their heads hold higher positions within the herd.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png"
},
627: {
  name: "Rufflet",
  type: ["Flying", "Normal"],
  height: "1 foot 8 inches",
  weight: "23.1 lbs",
  description: "They pick fights indiscriminately. They grow stronger and more powerful each time they faint or are injured.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png"
},
628: {
  name: "Braviary",
  type: ["Normal", "Flying"],
  height: "4 feet 11 inches",
  weight: "90.4 lbs",
  description: "The more scars they have, the more respect these brave soldiers of the sky get from their peers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png"
},
629: {
  name: "Vullaby",
  type: ["Dark", "Flying"],
  height: "1 foot 8 inches",
  weight: "19.8 lbs",
  description: "They tend to guard their posteriors with suitable bones they have found. They pursue weak Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png"
},
630: {
  name: "Mandibuzz",
  type: ["Dark", "Flying"],
  height: "3 feet 11 inches",
  weight: "87.1 lbs",
  description: "It’s always searching for food for Vullaby. When it finds a weak Pokémon, Mandibuzz swoops it right off to its nest.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png"
},
631: {
  name: "Heatmor",
  type: ["Fire"],
  height: "4 feet 7 inches",
  weight: "127.9 lbs",
  description: "There’s a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png"
},
632: {
  name: "Durant",
  type: ["Bug", "Steel"],
  height: "1 foot",
  weight: "72.8 lbs",
  description: "They lay their eggs deep inside their nests. When attacked by Heatmor, they retaliate using their massive mandibles.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png"
},
633: {
  name: "Deino",
  type: ["Dark", "Dragon"],
  height: "2 feet 7 inches",
  weight: "38.1 lbs",
  description: "It can’t see, so its first approach to examining things is to bite them. You will be covered in wounds until a Deino warms up to you.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png"
},
634: {
  name: "Zweilous",
  type: ["Dark", "Dragon"],
  height: "4 feet 7 inches",
  weight: "110.2 lbs",
  description: "The two heads do not get along at all. If you don’t give each head the same amount of attention, they’ll begin fighting out of jealousy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png"
},
635: {
  name: "Hydreigon",
  type: ["Dark", "Dragon"],
  height: "5 feet 11 inches",
  weight: "352.7 lbs",
  description: "Only the central head has a brain. It is very intelligent, but it thinks only of destruction.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png"
},
636: {
  name: "Larvesta",
  type: ["Bug", "Fire"],
  height: "3 feet 7 inches",
  weight: "63.5 lbs",
  description: "This Pokémon was called the Larva That Stole the Sun. The fire Larvesta spouts from its horns can cut right through a sheet of iron.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png"
},
637: {
  name: "Volcarona",
  type: ["Bug", "Fire"],
  height: "5 feet 3 inches",
  weight: "101.4 lbs",
  description: "Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png"
},
638: {
  name: "Cobalion",
  type: ["Steel", "Fighting"],
  height: "6 feet 11 inches",
  weight: "551.2 lbs",
  description: "This Pokémon appears in a legend alongside Terrakion and Virizion, fighting against humans in defense of the Unova region’s Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png"
},
639: {
  name: "Terrakion",
  type: ["Rock", "Fighting"],
  height: "6 feet 3 inches",
  weight: "573.2 lbs",
  description: "It has phenomenal power. It will mercilessly crush anyone or anything that bullies small Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png"
},
640: {
  name: "Virizion",
  type: ["Grass", "Fighting"],
  height: "6 feet 7 inches",
  weight: "440.9 lbs",
  description: "A legend tells of this Pokémon working together with Cobalion and Terrakion to protect the Pokémon of the Unova region.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png"
},
641: {
  name: "Tornadus",
  type: ["Flying"],
  height: "4 feet 11 inches",
  weight: "138.9 lbs",
  description: "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png"
},
642: {
  name: "Thundurus",
  type: ["Electric", "Flying"],
  height: "4 feet 11 inches",
  weight: "134.5 lbs",
  description: "The spikes on its tail discharge immense bolts of lightning. It flies around the Unova region firing off lightning bolts.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png"
},
643: {
  name: "Reshiram",
  type: ["Dragon", "Fire"],
  height: "10 feet 6 inches",
  weight: "727.5 lbs",
  description: "This legendary Pokémon can scorch the world with fire. It helps those who want to build a world of truth.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png"
},
644: {
  name: "Zekrom",
  type: ["Dragon", "Electric"],
  height: "9 feet 6 inches",
  weight: "760.6 lbs",
  description: "This legendary Pokémon can scorch the world with lightning. It assists those who want to build an ideal world.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png"
},
645: {
  name: "Landorus",
  type: ["Ground", "Flying"],
  height: "4 feet 11 inches",
  weight: "149.9 lbs",
  description: "Lands visited by Landorus grant such bountiful crops that it has been hailed as “The Guardian of the Fields.”",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png"
},
646: {
  name: "Kyurem",
  type: ["Ice", "Dragon"],
  height: "9 feet 10 inches",
  weight: "716.5 lbs",
  description: "This legendary ice Pokémon waits for a hero to fill in the missing parts of its body with truth or ideals.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png"
},
647: {
  name: "Keldeo",
  type: ["Water", "Fighting"],
  height: "4 feet 7 inches",
  weight: "106.9 lbs",
  description: "It crosses the world, running over the surfaces of oceans and rivers. It appears at scenic waterfronts.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png"
},
648: {
  name: "Meloetta",
  type: ["Normal", "Psychic"],
  height: "2 feet",
  weight: "14.3 lbs",
  description: "The melodies sung by Meloetta have the power to make Pokémon that hear them happy or sad.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png"
},
649: {
  name: "Genesect",
  type: ["Bug", "Steel"],
  height: "4 feet 11 inches",
  weight: "181.9 lbs",
  description: "This ancient bug Pokémon was altered by Team Plasma. They upgraded the cannon on its back.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png"
},
650: {
  name: "Chespin",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "19.8 lbs",
  description: "When Chespin tenses up just before landing a headbutt, the spikes on its head sharpen to points, piercing the enemy’s body on contact.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png"
},
651: {
  name: "Quilladin",
  type: ["Grass"],
  height: "2 feet 4 inches",
  weight: "63.9 lbs",
  description: "It’s protected by a sturdy shell. The shell is also very heavy, which naturally strengthens Quilladin’s lower body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png"
},
652: {
  name: "Chesnaught",
  type: ["Grass", "Fighting"],
  height: "5 feet 3 inches",
  weight: "198.4 lbs",
  description: "When its allies are in trouble, Chesnaught creates a shield with its arms and uses its own body to block attacks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png"
},
653: {
  name: "Fennekin",
  type: ["Fire"],
  height: "1 foot 4 inches",
  weight: "20.7 lbs",
  description: "This Pokémon gets worked up easily. Its body can also overheat, so it uses its ears to dissipate the heat and calm down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png"
},
654: {
  name: "Braixen",
  type: ["Fire"],
  height: "3 feet 3 inches",
  weight: "32.0 lbs",
  description: "It ignites the twig from its tail and waves the twig around to signal its allies. To indicate danger, it draws circles in the air with the twig’s flame.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png"
},
655: {
  name: "Delphox",
  type: ["Fire", "Psychic"],
  height: "4 feet 11 inches",
  weight: "86.0 lbs",
  description: "It leaves burn marks in the ground with the flame at the tip of its wand. Long ago, people used the shapes of these burn marks for divination.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png"
},
656: {
  name: "Froakie",
  type: ["Water"],
  height: "1 foot",
  weight: "15.4 lbs",
  description: "Its happy-go-lucky look is an act intended to fool its enemies. It will suddenly drop the facade and overwhelm its foes with its blinding speed.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png"
},
657: {
  name: "Frogadier",
  type: ["Water"],
  height: "2 feet",
  weight: "24.0 lbs",
  description: "It excels at devising battle strategies that make use of the terrain, and it never misses its mark when throwing bubble-covered pebbles.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png"
},
658: {
  name: "Greninja",
  type: ["Water", "Dark"],
  height: "4 feet 11 inches",
  weight: "88.2 lbs",
  description: "The movement of air against the long tongue Greninja keeps wrapped around its neck allows it to sense enemies it can’t see.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png"
},
659: {
  name: "Bunnelby",
  type: ["Normal"],
  height: "1 foot 4 inches",
  weight: "11 lbs",
  description: "It excels at digging holes. Using its ears, it can dig a nest 33 feet deep in one night.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png"
},
660: {
  name: "Diggersby",
  type: ["Normal"],
  height: "3 feet 3 inches",
  weight: "93.5 lbs",
  description: "With power equal to an excavator, it can dig through dense bedrock. It’s a huge help during tunnel construction.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png"
},
661: {
  name: "Fletchling",
  type: ["Normal", "Flying"],
  height: "1 foot",
  weight: "3.7 lbs",
  description: "This Pokémon is normally calm, but once it enters battle, its hormonal balance changes and it becomes aggressive.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png"
},
662: {
  name: "Fletchinder",
  type: ["Normal", "Flying"],
  height: "2 feet 4 inches",
  weight: "35.3 lbs",
  description: "Fletchinder scatters embers in tall grass where bug Pokémon might be hiding and then catches them as they come leaping out.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png"
},
663: {
  name: "Talonflame",
  type: ["Fire", "Flying"],
  height: "3 feet 11 inches",
  weight: "54.0 lbs",
  description: "It has top-notch flying capabilities. It flies around easily, even while carrying prey that weighs more than 220 lbs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png"
},
664: {
  name: "Scatterbug",
  type: ["Bug"],
  height: "1 foot",
  weight: "5.5 lbs",
  description: "Any poison this Pokémon takes in is converted into a black powder and secreted. That’s why Scatterbug can eat poisonous leaves and roots.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png"
},
665: {
  name: "Spewpa",
  type: ["Bug"],
  height: "1 foot",
  weight: "18.5 lbs",
  description: "If Rufflet attacks this Pokémon by pecking at it, it will retaliate with its sharp fur and poisonous black powder.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png"
},
666: {
  name: "Vivillon",
  type: ["Bug", "Flying"],
  height: "3 feet 11 inches",
  weight: "37.5 lbs",
  description: "The patterns on this Pokémon depend on the climate and topography of the land it was born in. This form is from lands where flowers bloom.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png"
},
667: {
  name: "Litleo",
  type: ["Fire", "Normal"],
  height: "2 feet",
  weight: "29.8 lbs",
  description: "When Litleo are young, female Pyroar will teach them how to hunt. Once the Litleo mature, they will leave the pride and set out on their own.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png"
},
668: {
  name: "Pyroar",
  type: ["Fire", "Normal"],
  height: "4 feet 11 inches",
  weight: "179.9 lbs",
  description: "The females of a pride work together to bring down prey. It’s thanks to them that their pride doesn’t starve.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png"
},
669: {
  name: "Flabébé",
  type: ["Fairy"],
  height: "4 inches",
  weight: "0.2 lbs",
  description: "This Pokémon can draw forth the power hidden within blooming wild flowers. It is particularly fond of red flowers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png"
},
670: {
  name: "Floette",
  type: ["Fairy"],
  height: "8 inches",
  weight: "2.0 lbs",
  description: "This Pokémon draws forth what power is left in withered flowers to make them healthy again. It holds a red flower.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png"
},
671: {
  name: "Florges",
  type: ["Fairy"],
  height: "3 feet 7 inches",
  weight: "22.0 lbs",
  description: "This Pokémon creates an impressive flower garden in its territory. It draws forth the power of the red flowers around its neck.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png"
},
672: {
  name: "Skiddo",
  type: ["Grass"],
  height: "2 feet 11 inches",
  weight: "68.3 lbs",
  description: "Until recently, people living in the mountains would ride on the backs of these Pokémon to traverse the mountain paths.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png"
},
673: {
  name: "Gogoat",
  type: ["Grass"],
  height: "5 feet 7 inches",
  weight: "200.6 lbs",
  description: "It can sense the feelings of others by touching them with its horns. This species has assisted people with their work since 5,000 years ago.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png"
},
674: {
  name: "Pancham",
  type: ["Fighting"],
  height: "2 feet",
  weight: "17.6 lbs",
  description: "It chooses a Pangoro as its master and then imitates its master’s actions. This is how it learns to battle and hunt for prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png"
},
675: {
  name: "Pangoro",
  type: ["Fighting", "Dark"],
  height: "6 feet 11 inches",
  weight: "299.8 lbs",
  description: "This Pokémon is quick to anger, and it has no problem using its prodigious strength to get its way. It lives for duels against Obstagoon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png"
},
676: {
  name: "Furfrou",
  type: ["Normal"],
  height: "3 feet 11 inches",
  weight: "61.7 lbs",
  description: "There was an era when aristocrats would compete to see who could trim their Furfrou’s fur into the most exquisite style.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png"
},
677: {
  name: "Espurr",
  type: ["Psychic"],
  height: "1 foot",
  weight: "7.7 lbs",
  description: "It keeps its ears covered to prevent the intense psychic power in its body from escaping, but it falls unconscious if this power builds too much.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png"
},
678: {
  name: "Meowstic",
  type: ["Psychic"],
  height: "2 feet",
  weight: "18.7 lbs",
  description: "Though it has enough psychic power to blast away any opponent, Meowstic prefers to support its allies rather than attack.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png"
},
679: {
  name: "Honedge",
  type: ["Steel", "Ghost"],
  height: "2 feet 7 inches",
  weight: "4.4 lbs",
  description: "Honedge’s soul once belonged to a person who was killed a long time ago by the sword that makes up Honedge’s body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png"
},
680: {
  name: "Doublade",
  type: ["Steel", "Ghost"],
  height: "2 feet 7 inches",
  weight: "9.9 lbs",
  description: "Honedge evolves into twins. The two blades rub together to emit a metallic sound that unnerves opponents.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png"
},
681: {
  name: "Aegislash",
  type: ["Steel", "Ghost"],
  height: "5 feet 11 inches",
  weight: "112.4 lbs",
  description: "In this defensive stance, Aegislash uses its steel body and a force field of spectral power to reduce the damage of any attack. In its offensive stance, it can cleave any opponent with the strength and weight of its steel blade.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png"
},
682: {
  name: "Spritzee",
  type: ["Fairy"],
  height: "8 inches",
  weight: "1.1 lbs",
  description: "A scent pouch within this Pokémon’s body allows it to create various scents. A change in its diet will alter the fragrance it produces.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png"
},
683: {
  name: "Aromatisse",
  type: ["Fairy"],
  height: "2 feet 7 inches",
  weight: "34.2 lbs",
  description: "The scent that constantly emits from its fur is so powerful that this Pokémon’s companions will eventually lose their sense of smell.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png"
},
684: {
  name: "Swirlix",
  type: ["Fairy"],
  height: "1 foot 4 inches",
  weight: "7.7 lbs",
  description: "It eats its own weight in sugar every day. If it doesn’t get enough sugar, it becomes incredibly grumpy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png"
},
685: {
  name: "Slurpuff",
  type: ["Fairy"],
  height: "2 feet 7 inches",
  weight: "11.0 lbs",
  description: "By taking in a person’s scent, it can sniff out their mental and physical condition. It’s hoped that this skill will have many medical applications.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png"
},
686: {
  name: "Inkay",
  type: ["Dark", "Psychic"],
  height: "1 foot 4 inches",
  weight: "7.7 lbs",
  description: "It protects itself from tough foes by flashing its luminescent spots to discourage them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png"
},
687: {
  name: "Malamar",
  type: ["Dark", "Psychic"],
  height: "4 feet 11 inches",
  weight: "103.6 lbs",
  description: "Its hypnotic powers are dangerously strong. Anyone who falls under Malamar’s control loses their memories surrounding the event.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png"
},
688: {
  name: "Binacle",
  type: ["Water", "Rock"],
  height: "1 foot 8 inches",
  weight: "68.3 lbs",
  description: "After two Binacle find a suitably sized rock, they adhere themselves to it and live together. They cooperate to gather food during high tide.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png"
},
689: {
  name: "Barbaracle",
  type: ["Water", "Rock"],
  height: "4 feet 3 inches",
  weight: "211.6 lbs",
  description: "Seven Binacle come together to form one Barbaracle. The Binacle that serves as the head gives orders to those serving as the limbs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png"
},
690: {
  name: "Skrelp",
  type: ["Poison", "Water"],
  height: "1 foot 8 inches",
  weight: "16.1 lbs",
  description: "Skrelp evades its enemies by hiding amid drifting seaweed. It eats rotten seaweed to create its poison.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png"
},
691: {
  name: "Dragalge",
  type: ["Poison", "Dragon"],
  height: "5 feet 11 inches",
  weight: "179.9 lbs",
  description: "Using a liquid poison, Dragalge indiscriminately attacks anything that wanders into its territory. This poison can corrode the undersides of boats.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png"
},
692: {
  name: "Clauncher",
  type: ["Water"],
  height: "1 foot 8 inches",
  weight: "18.3 lbs",
  description: "This Pokémon launches water by detonating gas inside its right claw. It snipes flying Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png"
},
693: {
  name: "Clawitzer",
  type: ["Water"],
  height: "4 feet 3 inches",
  weight: "77.8 lbs",
  description: "Clawitzer can move through the water at a speed of 60 knots by using gas inside its body to expel water from the back of its claw.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png"
},
694: {
  name: "Helioptile",
  type: ["Electric"],
  height: "1 foot 8 inches",
  weight: "13.2 lbs",
  description: "When spread, the frills on its head act like solar panels, generating the power behind this Pokémon’s electric moves.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png"
},
695: {
  name: "Heliolisk",
  type: ["Electric", "Normal"],
  height: "3 feet 3 inches",
  weight: "46.3 lbs",
  description: "A now-vanished desert culture treasured these Pokémon. Appropriately, when Heliolisk came to the Galar region, treasure came with them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png"
},
696: {
  name: "Tyrunt",
  type: ["Rock", "Dragon"],
  height: "2 feet 7 inches",
  weight: "57.3 lbs",
  description: "This is an ancient Pokémon, revived in modern times. It has a violent disposition, and it’ll tear apart anything it gets between its hefty jaws.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png"
},
697: {
  name: "Tyrantrum",
  type: ["Rock", "Dragon"],
  height: "8 feet 2 inches",
  weight: "595.2 lbs",
  description: "This Pokémon is from about 100,000,000 years ago. It has the presence of a king, vicious but magnificent.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png"
},
698: {
  name: "Amaura",
  type: ["Rock", "Ice"],
  height: "4 feet 3 inches",
  weight: "55.6 lbs",
  description: "This Pokémon was successfully restored from a fossil. In the past, it lived with others of its kind in cold lands where there were fewer predators.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png"
},
699: {
  name: "Aurorus",
  type: ["Rock", "Ice"],
  height: "8 feet 10 inches",
  weight: "496.0 lbs",
  description: "Aurorus was restored from a fossil. It’s said that when this Pokémon howls, auroras appear in the night sky.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png"
},
700: {
  name: "Sylveon",
  type: ["Fairy"],
  height: "3 feet 3 inches",
  weight: "51.8 lbs",
  description: "This Pokémon uses its ribbonlike feelers to send a soothing aura into its opponents, erasing their hostility.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png"
},
701: {
  name: "Hawlucha",
  type: ["Fighting", "Flying"],
  height: "2 feet 7 inches",
  weight: "47.4 lbs",
  description: "Its elegant finishing moves—performed by nimbly leaping around using its wings—are polished in the forest where it was born and raised.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png"
},
702: {
  name: "Dedenne",
  type: ["Fairy", "Electric"],
  height: "8 inches",
  weight: "4.9 lbs",
  description: "It’s small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people’s homes and charge itself.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png"
},
703: {
  name: "Carbink",
  type: ["Rock", "Fairy"],
  height: "1 foot",
  weight: "12.6 lbs",
  description: "It has slept underground for hundreds of millions of years since its birth. It’s occasionally found during the excavation of caves.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png"
},
704: {
  name: "Goomy",
  type: ["Dragon"],
  height: "1 foot",
  weight: "6.2 lbs",
  description: "Most of a Goomy’s body is water. A membrane covers the whole Pokémon to prevent it from shriveling up in dry weather.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png"
},
705: {
  name: "Sligoo",
  type: ["Dragon"],
  height: "2 feet 7 inches",
  weight: "38.6 lbs",
  description: "The swirly protrusion on its back is filled with all its vital organs, such as its brain and heart.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png"
},
706: {
  name: "Goodra",
  type: ["Dragon"],
  height: "6 feet 7 inches",
  weight: "331.8 lbs",
  description: "It loves the rain. This mellow Pokémon can be seen walking around on the plains and in the mountains on rainy days.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png"
},
707: {
  name: "Klefki",
  type: ["Fairy", "Steel"],
  height: "8 inches",
  weight: "6.6 lbs",
  description: "Once it absorbs a key’s metal ions, it discards the key without a second thought. However, it will hang on to keys it favors for decades.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png"
},
708: {
  name: "Phantump",
  type: ["Ghost", "Grass"],
  height: "1 foot 4 inches",
  weight: "15.4 lbs",
  description: "Legend tells that its green leaves can cure any illness. When plucked, however, the leaves will instantly wither away.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png"
},
709: {
  name: "Trevenant",
  type: ["Grass", "Ghost"],
  height: "4 feet 11 inches",
  weight: "156.5 lbs",
  description: "Using its roots, Trevenant connects itself to trees and monitors every corner of its forest. It uses curses to drive intruders away.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png"
},
710: {
  name: "Pumpkaboo",
  type: ["Ghost", "Grass"],
  height: "1 foot 4 inches",
  weight: "11 lbs",
  description: "Spirits that wander this world are placed into Pumpkaboo’s body. They’re then moved on to the afterlife.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png"
},
711: {
  name: "Gourgeist",
  type: ["Ghost", "Grass"],
  height: "2 feet 11 inches",
  weight: "27.6 lbs",
  description: "Eerie cries emanate from its body in the dead of night. The sounds are said to be the wails of spirits who are suffering in the afterlife.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png"
},
712: {
  name: "Bergmite",
  type: ["Ice"],
  height: "3 feet 3 inches",
  weight: "219.4 lbs",
  description: "They live in mountainous regions of frigid cold. On rare occasions, they ride on the back of an Avalugg to cross seas and move to new habitats.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png"
},
713: {
  name: "Avalugg",
  type: ["Ice"],
  height: "6 feet 7 inches",
  weight: "1113.3 lbs",
  description: "As Avalugg walks along with Bergmite on its back, it comes across pods of Cetitan. It lets them pass to avoid conflict.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png"
},
714: {
  name: "Noibat",
  type: ["Flying", "Dragon"],
  height: "1 foot 8 inches",
  weight: "17.6 lbs",
  description: "This Pokémon emits ultrasonic waves from its large ears to search for fruit to eat. It mistakes Applin for its food.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png"
},
715: {
  name: "Noivern",
  type: ["Flying", "Dragon"],
  height: "4 feet 11 inches",
  weight: "187.4 lbs",
  description: "Ultrasonic waves emitted by a Noivern can pulverize a large boulder. This Pokémon has a cruel disposition.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png"
},
716: {
  name: "Xerneas",
  type: ["Fairy"],
  height: "9 feet 10 inches",
  weight: "474 lbs",
  description: "Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png"
},
717: {
  name: "Yveltal",
  type: ["Dark", "Flying"],
  height: "19 feet",
  weight: "447.5 lbs",
  description: "When this legendary Pokémon’s wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png"
},
718: {
  name: "Zygarde",
  type: ["Dragon", "Ground"],
  height: "14 feet 9 inches",
  weight: "1344.8 lbs",
  description: "From the orifice on its chest, it radiates high-powered energy that eliminates everything.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png"
},
719: {
  name: "Diancie",
  type: ["Fairy", "Rock"],
  height: "2 feet 4 inches",
  weight: "19.4 lbs",
  description: "A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png"
},
720: {
  name: "Hoopa",
  type: ["Psychic", "Ghost"],
  height: "1 foot 8 inches",
  weight: "19.8 lbs",
  description: "In its true form, it possesses a huge amount of power. Legends of its avarice tell how it once carried off an entire castle to gain the treasure hidden within.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png"
},
721: {
  name: "Volcanion",
  type: ["Fire", "Water"],
  height: "5 feet 7 inches",
  weight: "429.9 lbs",
  description: "It lets out billows of steam and disappears into the dense fog. It’s said to live in mountains where humans do not tread.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png"
},
722: {
  name: "Rowlet",
  type: ["Grass", "Flying"],
  height: "1 foot",
  weight: "3.3 lbs",
  description: "Silently it glides, streaking toward its targets to get close to them. Before they even notice it, it begins to pelt them with vicious kicks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png"
},
723: {
  name: "Dartrix",
  type: ["Grass", "Flying"],
  height: "2 feet 4 inches",
  weight: "35.3 lbs",
  description: "This narcissistic Pokémon is a clean freak. If you don’t groom it diligently, it may stop listening to you.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png"
},
724: {
  name: "Decidueye",
  type: ["Grass", "Ghost"],
  height: "5 feet 3 inches",
  weight: "80.7 lbs",
  description: "It cunningly conceals arrow quills in its wings. It launches these quills with such precision that they can pierce a pebble at over a hundred yards.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png"
},
725: {
  name: "Litten",
  type: ["Fire"],
  height: "1 foot 4 inches",
  weight: "9.5 lbs",
  description: "If you try too hard to get close to it, it won’t open up to you. Even if you do grow close, giving it too much affection is still a no-no.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png"
},
726: {
  name: "Torracat",
  type: ["Fire"],
  height: "2 feet 4 inches",
  weight: "55.1 lbs",
  description: "At its throat, it bears a bell of fire. The bell rings brightly whenever fire spews out.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png"
},
727: {
  name: "Incineroar",
  type: ["Fire", "Dark"],
  height: "5 feet 11 inches",
  weight: "183 lbs",
  description: "When its fighting spirit is set alight, the flames around its waist become especially intense.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png"
},
728: {
  name: "Popplio",
  type: ["Water"],
  height: "1 foot 4 inches",
  weight: "16.5 lbs",
  description: "This Pokémon can control balloons made of water. It practices diligently so it can learn to make big balloons.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png"
},
729: {
  name: "Brionne",
  type: ["Water"],
  height: "2 feet",
  weight: "38.6 lbs",
  description: "A skillful dancer, it creates a sequence of water balloons as it dances, then briskly bombards its enemies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png"
},
730: {
  name: "Primarina",
  type: ["Water", "Fairy"],
  height: "5 feet 11 inches",
  weight: "97 lbs",
  description: "To Primarina, every battle is a stage. It takes down its prey with beautiful singing and dancing.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png"
},
731: {
  name: "Pikipek",
  type: ["Normal", "Flying"],
  height: "1 foot",
  weight: "2.6 lbs",
  description: "Using its beak to strike 16 times per second, it opens holes in even the hardest of trees.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png"
},
732: {
  name: "Trumbeak",
  type: ["Normal", "Flying"],
  height: "2 feet",
  weight: "32.6 lbs",
  description: "It flies around using a hundred different cries in various ways to declare its territory to others.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png"
},
733: {
  name: "Toucannon",
  type: ["Normal", "Flying"],
  height: "3 feet 7 inches",
  weight: "57.3 lbs",
  description: "The compressed gas in Toucannon’s beak launches seeds with such force that they can shatter large boulders.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png"
},
734: {
  name: "Yungoos",
  type: ["Normal"],
  height: "1 foot 4 inches",
  weight: "13.2 lbs",
  description: "Its stomach fills most of its torso. It wanders the same path every day, searching for fresh food.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png"
},
735: {
  name: "Gumshoos",
  type: ["Normal"],
  height: "2 feet 4 inches",
  weight: "31.3 lbs",
  description: "Once it finds signs of prey, it will patiently stake out the location, waiting until the sun goes down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png"
},
736: {
  name: "Grubbin",
  type: ["Bug"],
  height: "1 foot 4 inches",
  weight: "9.7 lbs",
  description: "Grubbin normally live underground, but if they get unearthed by Hoothoot, they may be found gathered around electric Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png"
},
737: {
  name: "Charjabug",
  type: ["Bug", "Electric"],
  height: "1 foot 8 inches",
  weight: "23.1 lbs",
  description: "Protected by a sturdy shell, Charjabug eats large quantities of fresh and decomposing leaf litter in order to evolve.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png"
},
738: {
  name: "Vikavolt",
  type: ["Bug", "Electric"],
  height: "4 feet 11 inches",
  weight: "99.2 lbs",
  description: "Displaying exceptional mobility, it weaves between trees and shoots down bird Pokémon with its electromagnetic beams.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png"
},
739: {
  name: "Crabrawler",
  type: ["Fighting"],
  height: "2 feet",
  weight: "15.4 lbs",
  description: "This Pokémon punches trees and eats the berries that drop down, training itself and getting food at the same time.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png"
},
740: {
  name: "Crabominable",
  type: ["Ice", "Fighting"],
  height: "5 feet 7 inches",
  weight: "396.8 lbs",
  description: "The detached pincers of these Pokémon are delicious. Some Trainers bring Lechonk into the mountains just to search for them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png"
},
741: {
  name: "Oricorio",
  type: ["Flying"],
  height: "2 feet",
  weight: "7.5 lbs",
  description: "This Pokémon is incredibly popular, possibly because its passionate dancing is a great match with the temperament of Paldean people.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png"
},
742: {
  name: "Cutiefly",
  type: ["Fairy", "Bug"],
  height: "4 inches",
  weight: "0.4 lbs",
  description: "When it senses the auras of people or Pokémon who are having fun, it will draw close and give them a painful poke with its long proboscis.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png"
},
743: {
  name: "Ribombee",
  type: ["Fairy", "Bug"],
  height: "8 inches",
  weight: "1.1 lbs",
  description: "Ribombee can sense when people or Pokémon are feeling down, and it will cheer them up with handmade pollen puffs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png"
},
744: {
  name: "Rockruff",
  type: ["Rock"],
  height: "1 foot 8 inches",
  weight: "20.3 lbs",
  description: "This Pokémon is very friendly when it’s young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png"
},
745: {
  name: "Lycanroc",
  type: ["Rock"],
  height: "2 feet 7 inches",
  weight: "55.1 lbs",
  description: "Lycanroc attacks its prey with its sharp claws and fangs. It loyally obeys the instructions of a Trainer it trusts.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png"
},
746: {
  name: "Wishiwashi",
  type: ["Water"],
  height: "8 inches",
  weight: "0.7 lbs",
  description: "Individually, they’re incredibly weak. It’s by gathering up into schools that they’re able to confront opponents.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png"
},
747: {
  name: "Mareanie",
  type: ["Water", "Poison"],
  height: "1 foot 4 inches",
  weight: "17.6 lbs",
  description: "This Pokémon wanders the seaside looking for food. It often gets electric shocks from broken Pincurchin spines that it tries to eat.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png"
},
748: {
  name: "Toxapex",
  type: ["Water", "Poison"],
  height: "2 feet 4 inches",
  weight: "32 lbs",
  description: "This Pokémon lives within a dome made by its own legs. Toxapex monitors its surroundings by sensing the flow of the tide through its spikes.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png"
},
749: {
  name: "Mudbray",
  type: ["Ground"],
  height: "3 feet 3 inches",
  weight: "242.5 lbs",
  description: "This Pokémon covers itself in mud that it has regurgitated. The mud won’t dry out even if it’s exposed to the sun for a long time.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png"
},
750: {
  name: "Mudstale",
  type: ["Ground"],
  height: "8 feet 2 inches",
  weight: "2028.3 lbs",
  description: "This Pokémon has been treasured not just for its physical labor but also because it produces high-quality mud used for making pottery.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png"
},
751: {
  name: "Dewpider",
  type: ["Water", "Bug"],
  height: "1 foot",
  weight: "8.8 lbs",
  description: "Dewpider uses sticky threads to create the water bubble that covers its head, so the bubble very rarely bursts.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png"
},
752: {
  name: "Araquanid",
  type: ["Water", "Bug"],
  height: "5 feet 11 inches",
  weight: "180.8 lbs",
  description: "A caring Pokémon, Araquanid carries Dewpider around inside its water bubble to protect them as it walks. It protects its food in its bubble too.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png"
},
753: {
  name: "Fomantis",
  type: ["Grass"],
  height: "1 foot",
  weight: "3.3 lbs",
  description: "Fomantis hates having its naps interrupted. It fires off beams using energy it gathers by bathing in the sun.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png"
},
754: {
  name: "Lurantis",
  type: ["Grass"],
  height: "2 feet 11 inches",
  weight: "40.8 lbs",
  description: "By masquerading as a bug Pokémon, it lowers the guard of actual bug Pokémon lured in by a scent of sweet flowers. Its sickles bring them down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png"
},
755: {
  name: "Morelull",
  type: ["Grass", "Fairy"],
  height: "8 inches",
  weight: "3.3 lbs",
  description: "Pokémon living in the forest eat the delicious caps on Morelull’s head. The caps regrow overnight.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png"
},
756: {
  name: "Shiinotic",
  type: ["Grass", "Fairy"],
  height: "3 feet 3 inches",
  weight: "25.4 lbs",
  description: "Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png"
},
757: {
  name: "Salandit",
  type: ["Poison", "Fire"],
  height: "2 feet",
  weight: "10.6 lbs",
  description: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png"
},
758: {
  name: "Salazzle",
  type: ["Poison", "Fire"],
  height: "3 feet 11 inches",
  weight: "48.9 lbs",
  description: "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png"
},
759: {
  name: "Stufful",
  type: ["Normal", "Fighting"],
  height: "1 foot 8 inches",
  weight: "15.0 lbs",
  description: "Its fluffy fur is a delight to pet, but carelessly reaching out to touch this Pokémon could result in painful retaliation.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png"
},
760: {
  name: "Bewear",
  type: ["Normal", "Fighting"],
  height: "6 feet 11 inches",
  weight: "297.6 lbs",
  description: "Once it accepts you as a friend, it tries to show its affection with a hug. Letting it do that is dangerous—it could easily shatter your bones.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png"
},
761: {
  name: "Bounsweet",
  type: ["Grass"],
  height: "1 foot",
  weight: "7.1 lbs",
  description: "Its sweat is sweet, like syrup made from boiled-down fruit. Because of this, Bounsweet was highly valued in the past, when sweeteners were scarce.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png"
},
762: {
  name: "Steenee",
  type: ["Grass"],
  height: "2 feet 4 inches",
  weight: "18.1 lbs",
  description: "Steenee spreads a sweet scent that makes others feel invigorated. This same scent is popular for antiperspirants.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png"
},
763: {
  name: "Tsareena",
  type: ["Grass"],
  height: "3 feet 11 inches",
  weight: "47.2 lbs",
  description: "This Pokémon is proud and aggressive. However, it is said that a Tsareena will instantly become calm if someone touches the crown on its calyx.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png"
},
764: {
  name: "Comfey",
  type: ["Fairy"],
  height: "4 inches",
  weight: "0.7 lbs",
  description: "It uses its vine to pick flowers. The flowers that Comfey attaches to itself develop healing properties.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png"
},
765: {
  name: "Oranguru",
  type: ["Normal", "Psychic"],
  height: "4 feet 11 inches",
  weight: "167.6 lbs",
  description: "People used to mistake Oranguru for a human when they saw it issue command after command to the other Pokémon of the forest.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png"
},
766: {
  name: "Passimian",
  type: ["Fighting"],
  height: "6 feet 7 inches",
  weight: "182.5 lbs",
  description: "This Pokémon battles by throwing hard berries. It won’t obey a Trainer who throws Poké Balls without skill.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png"
},
767: {
  name: "Wimpod",
  type: ["Bug", "Water"],
  height: "1 foot 8 inches",
  weight: "26.5 lbs",
  description: "It’s nature’s cleaner—it eats anything and everything, including garbage and rotten things. The ground near its nest is always clean.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png"
},
768: {
  name: "Golisopod",
  type: ["Bug", "Water"],
  height: "6 feet 7 inches",
  weight: "238.1 lbs",
  description: "It will do anything to win, taking advantage of every opening and finishing opponents off with the small claws on its front legs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png"
},
769: {
  name: "Sandygast",
  type: ["Ghost", "Ground"],
  height: "1 foot 3 inches",
  weight: "154.3 lbs",
  description: "If it loses its shovel, it will stick something else—like a branch—in its head to make do until it finds another shovel.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png"
},
770: {
  name: "Palossand",
  type: ["Ghost", "Ground"],
  height: "4 feet 3 inches",
  weight: "551.2 lbs",
  description: "The terrifying Palossand drags smaller Pokémon into its sandy body. Once its victims are trapped, it drains them of their vitality whenever it pleases.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png"
},
771: {
  name: "Pyukumuku",
  type: ["Water"],
  height: "1 foot",
  weight: "2.6 lbs",
  description: "It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png"
},
772: {
  name: "Type: Null",
  type: ["Normal"],
  height: "6 feet 3 inches",
  weight: "265.7 lbs",
  description: "Rumor has it that the theft of top-secret research notes led to a new instance of this Pokémon being created in the Galar region.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png"
},
773: {
  name: "Silvally",
  type: ["Normal"],
  height: "7 feet 7 inches",
  weight: "221.6 lbs",
  description: "A solid bond of trust between this Pokémon and its Trainer awakened the strength hidden within Silvally. It can change its type at will.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png"
},
774: {
  name: "Minior",
  type: ["Rock", "Flying"],
  height: "1 foot",
  weight: "88.2 lbs",
  description: "This Pokémon is born in the ozone layer. It falls to the ground once the outer shell enclosing its core grows heavy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png"
},
775: {
  name: "Komala",
  type: ["Normal"],
  height: "1 foot 4 inches",
  weight: "43.9 lbs",
  description: "Komala spends its entire life sleeping. It feeds on leaves that contain a potent poison only Komala can break down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png"
},
776: {
  name: "Turtonator",
  type: ["Fire", "Dragon"],
  height: "6 feet 7 inches",
  weight: "467.4 lbs",
  description: "Explosive substances coat the shell on its back. Enemies that dare attack it will be blown away by an immense detonation.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png"
},
777: {
  name: "Togedemaru",
  type: ["Electric", "Steel"],
  height: "1 foot",
  weight: "7.3 lbs",
  description: "With the long hairs on its back, this Pokémon takes in electricity from other electric Pokémon. It stores what it absorbs in an electric sac.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png"
},
778: {
  name: "Mimikyu",
  type: ["Ghost", "Fairy"],
  height: "8 inches",
  weight: "1.5 lbs",
  description: "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png"
},
779: {
  name: "Bruxish",
  type: ["Water", "Psychic"],
  height: "2 feet 11 inches",
  weight: "41.9 lbs",
  description: "It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png"
},
780: {
  name: "Drampa",
  type: ["Normal", "Dragon"],
  height: "9 feet 10 inches",
  weight: "407.9 lbs",
  description: "The mountains it calls home are nearly two miles in height. On rare occasions, it descends to play with the children living in the towns below.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png"
},
781: {
  name: "Dhelmise",
  type: ["Ghost", "Grass"],
  height: "12 feet 10 inches",
  weight: "463 lbs",
  description: "After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png"
},
782: {
  name: "Jangmo-o",
  type: ["Dragon"],
  height: "2 feet",
  weight: "65.5 lbs",
  description: "The scale atop its head is useful for both offense and defense. It bravely stands and faces its foes rather than turning tail, even if its foes are strong.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png"
},
783: {
  name: "Hakamo-o",
  type: ["Dragon", "Fighting"],
  height: "3 feet 11 inches",
  weight: "103.6 lbs",
  description: "It gets into fistfights so intense that the scales on its arms peel off. Bare arms are a sign of valiance.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png"
},
784: {
  name: "Kommo-o",
  type: ["Dragon", "Fighting"],
  height: "5 feet 3 inches",
  weight: "172.4 lbs",
  description: "It lets its arm hang, and then—quick as a flash—swings upward to land its specialty punch and send the opponent flying high into the sky.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png"
},
785: {
  name: "Tapu Koko",
  type: ["Electric", "Fairy"],
  height: "5 feet 11 inches",
  weight: "45.2 lbs",
  description: "Although it’s called a guardian deity, if a person or Pokémon puts it in a bad mood, it will become a malevolent deity and attack.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png"
},
786: {
  name: "Tapu Lele",
  type: ["Psychic", "Fairy"],
  height: "3 feet 11 inches",
  weight: "41.0 lbs",
  description: "It heals the wounds of people and Pokémon by sprinkling them with its sparkling scales. This guardian deity is worshiped on Akala.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png"
},
787: {
  name: "Tapu Bulu",
  type: ["Grass", "Fairy"],
  height: "6 feet 3 inches",
  weight: "100.3 lbs",
  description: "Although it’s called a guardian deity, it’s violent enough to crush anyone it sees as an enemy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png"
},
788: {
  name: "Tapu Fini",
  type: ["Water", "Fairy"],
  height: "4 feet 3 inches",
  weight: "46.7 lbs",
  description: "This guardian deity of Poni Island manipulates water. Because it lives deep within a thick fog, it came to be both feared and revered.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png"
},
789: {
  name: "Cosmog",
  type: ["Psychic"],
  height: "8 inches",
  weight: "0.2 lbs",
  description: "Even though its helpless, gaseous body can be blown away by the slightest breeze, it doesn’t seem to care.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png"
},
790: {
  name: "Cosmoem",
  type: ["Psychic"],
  height: "4 inches",
  weight: "2204.4 lbs",
  description: "The king who ruled Alola in times of antiquity called it the 'cocoon of the stars' and built an altar to worship it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png"
},
791: {
  name: "Solgaleo",
  type: ["Psychic", "Steel"],
  height: "11 feet 2 inches",
  weight: "507.1 lbs",
  description: "Sometimes the result of its opening an Ultra Wormhole is that energy and life-forms from other worlds are called here to this world.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png"
},
792: {
  name: "Lunala",
  type: ["Psychic", "Ghost"],
  height: "13 feet 1 inch",
  weight: "264.6 lbs",
  description: "Records of it exist in writings from long, long ago, where it was known by the name 'the beast that calls the moon.'",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png"
},
793: {
  name: "Nihilego",
  type: ["Poison", "Rock"],
  height: "3 feet 11 inches",
  weight: "122.4 lbs",
  description: "A life-form from another world, it was dubbed a UB and is thought to produce a strong neurotoxin.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png"
},
794: {
  name: "Buzzwole",
  type: ["Bug", "Fighting"],
  height: "7 feet 10 inches",
  weight: "735.5 lbs",
  description: "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png"
},
795: {
  name: "Pheromosa",
  type: ["Bug", "Fighting"],
  height: "5 feet 11 inches",
  weight: "55.1 lbs",
  description: "A life-form that lives in another world, its body is thin and supple, but it also possesses great power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png"
},
796: {
  name: "Xurkitree",
  type: ["Electric"],
  height: "12 feet 6 inches",
  weight: "220.5 lbs",
  description: "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png"
},
797: {
  name: "Celesteela",
  type: ["Steel", "Flying"],
  height: "30 feet 2 inches",
  weight: "2204.4 lbs",
  description: "One of the dangerous UBs, high energy readings can be detected coming from both of its huge arms.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png"
},
798: {
  name: "Kartana",
  type: ["Grass", "Steel"],
  height: "1 foot",
  weight: "0.2 lbs",
  description: "This Ultra Beast’s body, which is as thin as paper, is like a sharpened sword.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png"
},
799: {
  name: "Guzzlord",
  type: ["Dragon", "Dark"],
  height: "18 feet 1 inch",
  weight: "1957.7 lbs",
  description: "Although it’s alien to this world and a danger here, it’s apparently a common organism in the world where it normally lives.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png"
},
800: {
  name: "Necrozma",
  type: ["Psychic"],
  height: "7 feet 10 inches",
  weight: "507.1 lbs",
  description: "It looks somehow pained as it rages around in search of light, which serves as its energy. It’s apparently from another world.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png"
},
801: {
  name: "Magearna",
  type: ["Steel", "Fairy"],
  height: "3 feet 3 inches",
  weight: "177.5 lbs",
  description: "It synchronizes its consciousness with others to understand their feelings. This faculty makes it useful for taking care of people.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png"
},
802: {
  name: "Marshadow",
  type: ["Ghost", "Fighting"],
  height: "2 feet 4 inches",
  weight: "48.9 lbs",
  description: "It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it’s imitating.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png"
},
803: {
  name: "Poipole",
  type: ["Poison"],
  height: "2 feet",
  weight: "4 lbs",
  description: "This Ultra Beast is well enough liked to be chosen as a first partner in its own world.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png"
},
804: {
  name: "Naganadel",
  type: ["Poison", "Dragon"],
  height: "11 feet 10 inches",
  weight: "330.7 lbs",
  description: "It stores hundreds of liters of poisonous liquid inside its body. It is one of the organisms known as UBs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png"
},
805: {
  name: "Stakataka",
  type: ["Rock", "Steel"],
  height: "18 feet 1 inch",
  weight: "1807.8 lbs",
  description: "It appeared from an Ultra Wormhole. Each one appears to be made up of many life-forms stacked one on top of each other.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png"
},
806: {
  name: "Blacephalon",
  type: ["Fire", "Ghost"],
  height: "5 feet 11 inches",
  weight: "28.7 lbs",
  description: "It slithers toward people. Then, without warning, it triggers the explosion of its own head. It’s apparently one kind of Ultra Beast.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png"
},
807: {
  name: "Zeraora",
  type: ["Electric"],
  height: "4 feet 11 inches",
  weight: "98.1 lbs",
  description: "It electrifies its claws and tears its opponents apart with them. Even if they dodge its attack, they’ll be electrocuted by the flying sparks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png"
},
808: {
  name: "Meltan",
  type: ["Steel"],
  height: "8 inches",
  weight: "17.6 lbs",
  description: "It melts particles of iron and other metals found in the subsoil, so it can absorb them into its body of molten steel.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png"
},
809: {
  name: "Melmetal",
  type: ["Steel"],
  height: "8 feet 2 inches",
  weight: "1763.7 lbs",
  description: "At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png"
},
810: {
  name: "Grookey",
  type: ["Grass"],
  height: "1 foot",
  weight: "11 lbs",
  description: "The stick Grookey holds has grown harder and more flexible after soaking in the energy that emanates from inside Grookey’s body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png"
},
811: {
  name: "Thwackey",
  type: ["Grass"],
  height: "2 feet 4 inches",
  weight: "30.9 lbs",
  description: "It skillfully uses its two sticks not only for drumming out rapid beats but also for pummeling opponents during battle.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png"
},
812: {
  name: "Rillaboom",
  type: ["Grass"],
  height: "6 feet 11 inches",
  weight: "198.4 lbs",
  description: "Though it has a calm disposition, it won’t tolerate those who drum up discord. It strictly disciplines offenders until they learn their lesson.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png"
},
813: {
  name: "Scorbunny",
  type: ["Fire"],
  height: "1 foot",
  weight: "9.9 lbs",
  description: "Once its body has heated up, Scorbunny can use the full extent of its power. That’s why it does warm-up exercises.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png"
},
814: {
  name: "Raboot",
  type: ["Fire"],
  height: "2 feet",
  weight: "19.8 lbs",
  description: "Thanks to its soft and fluffy fur, Raboot can easily heat up its fire energy and produce flames with more power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png"
},
815: {
  name: "Cinderace",
  type: ["Fire"],
  height: "4 feet 7 inches",
  weight: "72.8 lbs",
  description: "Although Cinderace loses its cool easily, it will battle flawlessly for a Trainer it trusts.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png"
},
816: {
  name: "Sobble",
  type: ["Water"],
  height: "1 foot",
  weight: "8.8 lbs",
  description: "It gets berries to eat by shooting them down with bullets of water it spurts from its mouth. Its aim is perfect.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png"
},
817: {
  name: "Drizzile",
  type: ["Water"],
  height: "2 feet 4 inches",
  weight: "25.4 lbs",
  description: "It extends its long, slimy tongue at blinding speeds and finishes off its prey with great skill.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png"
},
818: {
  name: "Inteleon",
  type: ["Water"],
  height: "6 feet 3 inches",
  weight: "99.6 lbs",
  description: "It uses special lenses in its eyes to sense things about its opponents—like their body heat—then attacks once it identifies a weak spot.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png"
},
819: {
  name: "Skwovet",
  type: ["Normal"],
  height: "1 foot",
  weight: "5.5 lbs",
  description: "It stores berries in its cheeks. When there are no berries to be found, Skwovet will stuff pebbles into its cheeks to stave off its cravings.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png"
},
820: {
  name: "Greedent",
  type: ["Normal"],
  height: "2 feet",
  weight: "13.2 lbs",
  description: "If it spots a berry tree, it will immediately go to gather berries without a sideways glance—even if it’s in the middle of a battle.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png"
},
821: {
  name: "Rookidee",
  type: ["Flying"],
  height: "8 inches",
  weight: "4 lbs",
  description: "This Pokémon is brave and reckless. The white markings around a Rookidee’s eyes intimidate fainthearted Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png"
},
822: {
  name: "Corvisquire",
  type: ["Flying"],
  height: "2 feet 7 inches",
  weight: "35.3 lbs",
  description: "It’s said that the reason behind Corvisquire’s high level of intelligence is the large size of its brain relative to those of other bird Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png"
},
823: {
  name: "Corviknight",
  type: ["Flying","Steel"],
  height: "7 feet 3 inches",
  weight: "165.3 lbs",
  description: "Corviknight can’t serve as a taxi service in Paldea because the Pokémon’s natural predators will attack it while it flies, endangering the customer.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png"
},
824: {
  name: "Blipbug",
  type: ["Bug"],
  height: "1 foot 4 inches",
  weight: "17.6 lbs",
  description: "A constant collector of information, this Pokémon is very smart. Very strong is what it isn’t.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png"
},
825: {
  name: "Dottler",
  type: ["Bug","Psychic"],
  height: "1 foot 4 inches",
  weight: "43 lbs",
  description: "It barely moves, but it’s still alive. Hiding in its shell without food or water seems to have awakened its psychic powers.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png"
},
826: {
  name: "Orbettle",
  type: ["Bug","Psychic"],
  height: "1 foot 4 inches",
  weight: "89.9 lbs",
  description: "It’s famous for its high level of intelligence, and the large size of its brain is proof that it also possesses immense psychic power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png"
},
827: {
  name: "Nicket",
  type: ["Dark"],
  height: "2 feet",
  weight: "89.9 lbs",
  description: "Aided by the soft pads on its feet, it silently raids the food stores of other Pokémon. It survives off its ill-gotten gains.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png"
},
828: {
  name: "Thievul",
  type: ["Dark"],
  height: "3 feet 11 inches",
  weight: "43.9 lbs",
  description: "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png"
},
829: {
  name: "Gossifleur",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "4.9 lbs",
  description: "It anchors itself in the ground with its single leg, then basks in the sun. After absorbing enough sunlight, its petals spread as it blooms brilliantly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png"
},
830: {
  name: "Eldegoss",
  type: ["Grass"],
  height: "1 foot 8 inches",
  weight: "5.5 lbs",
  description: "The seeds attached to its cotton fluff are full of nutrients. It spreads them on the wind so that plants and other Pokémon can benefit from them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png"
},
831: {
  name: "Wooloo",
  type: ["Normal"],
  height: "2 feet",
  weight: "13.2 lbs",
  description: "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png"
},
832: {
  name: "Dubwool",
  type: ["Normal"],
  height: "4 feet 3 inches",
  weight: "94.8 lbs",
  description: "Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You’ll start to bounce the moment you set foot on it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png"
},
833: {
  name: "Chewtle",
  type: ["Water"],
  height: "1 foot",
  weight: "18.7 lbs",
  description: "Its large front tooth is still growing in. When the tooth itches, this Pokémon will bite another Chewtle’s horn, and the two Pokémon will tussle.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png"
},
834: {
  name: "Drednaw",
  type: ["Water","Rock"],
  height: "3 feet 3 inches",
  weight: "254.6 lbs",
  description: "Its massive, jagged teeth can crush a boulder in a single bite. This Pokémon has an extremely vicious disposition.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png"
},
835: {
  name: "Yamper",
  type: ["Electric"],
  height: "1 foot",
  weight: "29.8 lbs",
  description: "This Pokémon is very popular as a herding dog in the Galar region. As it runs, it generates electricity from the base of its tail.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png"
},
836: {
  name: "Boltund",
  type: ["Electric"],
  height: "3 feet 3 inches",
  weight: "75 lbs",
  description: "This Pokémon generates electricity and channels it into its legs to keep them going strong. Boltund can run nonstop for three full days.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png"
},
837: {
  name: "Rolycoly",
  type: ["Rock"],
  height: "1 foot",
  weight: "26.5 lbs",
  description: "On sunny days, Rolycoly will come out onto grassy plains and roll around. Then it will eat the grass that gets tangled in its wheel-like leg.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png"
},
838: {
  name: "Carkol",
  type: ["Fire","Rock"],
  height: "3 feet 7 inches",
  weight: "172 lbs",
  description: "The temperature inside its body increases when it experiences strong emotions. It rolls around frantically while spewing flames.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png"
},
839: {
  name: "Coalossal",
  type: ["Rock","Fire"],
  height: "9 feet 2 inches",
  weight: "684.5 lbs",
  description: "To intimidate its opponents, Coalossal will vigorously shake its body, scattering coal from its smoldering back.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png"
},
840: {
  name: "Applin",
  type: ["Grass","Dragon"],
  height: "8 inches",
  weight: "1.1 lbs",
  description: "It grows by eating the flesh of an apple. Applin uses its own body fluid to strengthen the apple’s skin and prevent it from rotting.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png"
},
841: {
  name: "Flapple",
  type: ["Grass","Dragon"],
  height: "1 foot",
  weight: "2.2 lbs",
  description: "It flutters around while seeking an opening in the opponent’s guard, then attacks by spitting acidic liquid strong enough to melt metal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png"
},
842: {
  name: "Appletun",
  type: ["Grass","Dragon"],
  height: "1 foot 4 inches",
  weight: "28.7 lbs",
  description: "It feeds mainly on sweet apples. It will also eat small bug Pokémon that are attracted by its sweet nectar.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png"
},
843: {
  name: "Silicobra",
  type: ["Ground"],
  height: "7 feet 3 inches",
  weight: "16.8 lbs",
  description: "Silicobra’s neck pouch, which can inflate and deflate like a balloon, gets more elastic each time Silicobra sheds its skin.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png"
},
844: {
  name: "Sandaconda",
  type: ["Ground"],
  height: "12 feet 6 inches",
  weight: "144.4 lbs",
  description: "It will expand its body as much as it can and then contract itself, blasting out sand with enough force to wash away a dump truck.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png"
},
845: {
  name: "Cramorant",
  type: ["Flying","Water"],
  height: "2 feet 7 inches",
  weight: "39.7 lbs",
  description: "Cramorant instinctively swallows everything whole. They’re at their most formidable when they’re struggling to swallow overly large prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png"
},
846: {
  name: "Arrokuda",
  type: ["Water"],
  height: "1 foot 8 inches",
  weight: "2.2 lbs",
  description: "Arrokuda can swim quickly only in a straight line. The ones that become sluggish from overeating are the first to be targeted by flocks of Wattrel.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png"
},
847: {
  name: "Barraskewda",
  type: ["Water"],
  height: "4 feet 3 inches",
  weight: "66.1 lbs",
  description: "It spins its tail fins to leap from the water, then viciously bites down on Wingull flying close to the water’s surface.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png"
},
848: {
  name: "Toxel",
  type: ["Electric","Poison"],
  height: "1 foot 4 inches",
  weight: "24.3 lbs",
  description: "It has no problem drinking dirty water. An organ inside Toxel’s body filters such water into a poisonous liquid that is harmless to Toxel.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png"
},
849: {
  name: "Toxtricity",
  type: ["Electric","Poison"],
  height: "5 feet 3 inches",
  weight: "88.2 lbs",
  description: "Many youths admire the way this Pokémon listlessly picks fights and keeps its cool no matter what opponent it faces.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png"
},
850: {
  name: "Sizzlipede",
  type: ["Fire","Bug"],
  height: "2 feet 4 inches",
  weight: "2.2 lbs",
  description: "It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png"
},
851: {
  name: "Centiskorch",
  type: ["Fire","Bug"],
  height: "9 feet 10 inches",
  weight: "264.6 lbs",
  description: "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png"
},
852: {
  name: "Clobbopus",
  type: ["Fighting"],
  height: "2 feet",
  weight: "8.8 lbs",
  description: "It’s very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png"
},
853: {
  name: "Grapploct",
  type: ["Fighting"],
  height: "5 feet 3 inches",
  weight: "86.0 lbs",
  description: "A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png"
},
854: {
  name: "Sinistea",
  type: ["Ghost"],
  height: "4 inches",
  weight: "0.4 lbs",
  description: "The soul of someone who died alone possessed some leftover tea. This Pokémon appears in hotels and houses.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png"
},
855: {
  name: "Polteageist",
  type: ["Ghost"],
  height: "8 inches",
  weight: "0.9 lbs",
  description: "The tea that composes Polteageist’s body has a distinct and enjoyable flavor. Drinking too much, however, can be fatal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png"
},
856: {
  name: "Hatenna",
  type: ["Psychic"],
  height: "1 foot 4 inches",
  weight: "7.5 lbs",
  description: "Because the emotions of others constantly flow into its head, this Pokémon prefers environments where no other creatures live.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png"
},
857: {
  name: "Hattrem",
  type: ["Psychic"],
  height: "2 feet",
  weight: "10.6 lbs",
  description: "To this Pokémon, strong emotions apparently feel like incredibly loud noises—even if the emotions are happy ones.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png"
},
858: {
  name: "Hatterene",
  type: ["Fairy","Psychic"],
  height: "6 feet 11 inches",
  weight: "11.2 lbs",
  description: "Hatterene knocks out those that intrude in its home forest by blasting them with a beam, then slashing with claws enhanced by psychic power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png"
},
859: {
  name: "Impidimp",
  type: ["Dark","Fairy"],
  height: "1 foot 4 inches",
  weight: "12.1 lbs",
  description: "The reason this Pokémon causes trouble for those it feels close to is because Impidimp itself gets irritable if it can’t absorb negative emotions.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png"
},
860: {
  name: "Morgrem",
  type: ["Dark","Fairy"],
  height: "2 feet 7 inches",
  weight: "27.6 lbs",
  description: "Morgrem prefers dirty tactics, like ambushing, because it doesn’t have confidence in its brawn.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png"
},
861: {
  name: "Grimmsnarl",
  type: ["Dark","Fairy"],
  height: "4 feet 11 inches",
  weight: "134.5 lbs",
  description: "This Pokémon has complete control over its hair. Grimmsnarl normally keeps its hair wrapped around its body to support its muscles.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png"
},
862: {
  name: "Obstagoon",
  type: ["Dark","Normal"],
  height: "5 feet 3 inches",
  weight: "101.4 lbs",
  description: "Its voice is staggering in volume. Obstagoon has a tendency to take on a threatening posture and shout—this move is known as Obstruct.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png"
},
863: {
  name: "Perrserker",
  type: ["Steel"],
  height: "2 feet 7 inches",
  weight: "61.7 lbs",
  description: "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png"
},
864: {
  name: "Cursola",
  type: ["Ghost"],
  height: "3 feet 3 inches",
  weight: "0.9 lbs",
  description: "Its shell is overflowing with its heightened otherworldly energy. The ectoplasm serves as protection for this Pokémon’s core spirit.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png"
},
865: {
  name: "Sirfetch'd",
  type: ["Fighting"],
  height: "2 feet 7 inches",
  weight: "257.9 lbs",
  description: "Only Farfetch’d that have survived many battles can attain this evolution. When this Pokémon’s leek withers, it will retire from combat.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png"
},
866: {
  name: "Mr. Rime",
  type: ["Ice","Psychic"],
  height: "4 feet 11 inches",
  weight: "128.3 lbs",
  description: "It’s highly skilled at tap-dancing. It waves its cane of ice in time with its graceful movements.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png"
},
867: {
  name: "Runerigus",
  type: ["Ground","Ghost"],
  height: "5 feet 3 inches",
  weight: "146.8 lbs",
  description: "A powerful curse was woven into an ancient painting. After absorbing the spirit of a Yamask, the painting began to move.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png"
},
868: {
  name: "Milcery",
  type: ["Fairy"],
  height: "8 inches",
  weight: "0.7 lbs",
  description: "The more sweet aromas it absorbs, the more its body swells. Milcery will deflate when its energy level drops.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png"
},
869: {
  name: "Alcremie",
  type: ["Fairy"],
  height: "1 foot",
  weight: "1.1 lbs",
  description: "Desserts that Alcremie have decorated with their cream have a rich, sweet flavor and bring happiness to all who eat them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png"
},
870: {
  name: "Falinks",
  type: ["Fighting"],
  height: "9 feet 10 inches",
  weight: "136.7 lbs",
  description: "The brass, which is the one that stands at the front and issues orders, is the strongest and smartest of the six.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png"
},
871: {
  name: "Pincurchin",
  type: ["Electric"],
  height: "1 foot",
  weight: "2.2 lbs",
  description: "This Pokémon generates electricity when it digests food. It uses its five hard teeth to scrape seaweed off surfaces and eat it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png"
},
872: {
  name: "Snom",
  type: ["Ice","Bug"],
  height: "1 foot",
  weight: "8.4 lbs",
  description: "It eats snow that has accumulated on the ground. It prefers soft, freshly fallen snow, so it will eat its way up a mountain, aiming for the peak.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png"
},
873: {
  name: "Frosmoth",
  type: ["Ice","Bug"],
  height: "4 feet 3 inches",
  weight: "92.6 lbs",
  description: "Frosmoth senses air currents with its antennae. It sends its scales drifting on frigid air, making them fall like snow.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png"
},
874: {
  name: "Stonjourner",
  type: ["Rock"],
  height: "8 feet 2 inches",
  weight: "1146.4 lbs",
  description: "The elemental composition of the rocks that form its body were found to match the bedrock of a land far away from this Pokémon’s habitat.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png"
},
875: {
  name: "Eiscue",
  type: ["Ice"],
  height: "4 feet 7 inches",
  weight: "196.2 lbs",
  description: "On hot days, these Pokémon press their ice cube heads together and pass the time cooling each other down.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png"
},
876: {
  name: "Indeedee",
  type: ["Psychic","Normal"],
  height: "2 feet 11 inches",
  weight: "61.7 lbs",
  description: "This Pokémon picks up on the positive emotions of other creatures via its horns and uses those emotions to fuel itself.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png"
},
877: {
  name: "Morpeko",
  type: ["Electric","Dark"],
  height: "1 foot",
  weight: "6.6 lbs",
  description: "Morpeko eats seeds constantly to keep its hunger at bay. If it’s hungry for too long, it grows wild and brutish.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png"
},
878: {
  name: "Cufant",
  type: ["Steel"],
  height: "3 feet 11 inches",
  weight: "220.5 lbs",
  description: "Using the pointy tip of its trunk, it carves off chunks of hard rocks to eat. It is very docile and helps people with physical labor.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png"
},
879: {
  name: "Copperajah",
  type: ["Steel"],
  height: "9 feet 10 inches",
  weight: "1433.0 lbs",
  description: "This Pokémon was brought to Paldea long ago by people from a faraway land. It’s so strong that it can easily pull an airplane.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png"
},
880: {
  name: "Dracozolt",
  type: ["Dragon","Electric"],
  height: "5 feet 11 inches",
  weight: "418.9 lbs",
  description: "In ancient times, it was unbeatable thanks to its powerful lower body, but it went extinct anyway after it depleted all its plant-based food sources.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png"
},
881: {
  name: "Arctozolt",
  type: ["Electric","Ice"],
  height: "7 feet 7 inches",
  weight: "330.7 lbs",
  description: "The shaking of its freezing upper half is what generates its electricity. It has a hard time walking around.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png"
},
882: {
  name: "Dracovish",
  type: ["Water","Dragon"],
  height: "7 feet 7 inches",
  weight: "474.0 lbs",
  description: "Powerful legs and jaws made it the apex predator of its time. Its own overhunting of its prey was what drove it to extinction.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png"
},
883: {
  name: "Arctois",
  type: ["Water","Ice"],
  height: "6 feet 7 inches",
  weight: "385.8 lbs",
  description: "Though it’s able to capture prey by freezing its surroundings, it has trouble eating the prey afterward because its mouth is on top of its head.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png"
},
884: {
  name: "Duraludon",
  type: ["Steel","Dragon"],
  height: "5 feet 11 inches",
  weight: "88.2 lbs",
  description: "Duraludon’s body is comprised of a special metal that’s lightweight and scratch resistant. It’s also smooth, as though it was given a mirror finish.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png"
},
885: {
  name: "Dreepy",
  type: ["Dragon","Ghost"],
  height: "1 foot 8 inches",
  weight: "4.4 lbs",
  description: "In the evening, groups of Dreepy will fly at high speeds over the ocean and poke at Pokémon in the water for fun.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png"
},
886: {
  name: "Drakloak",
  type: ["Dragon","Ghost"],
  height: "4 feet 7 inches",
  weight: "24.3 lbs",
  description: "This Pokémon flies around at over 120 miles per hour. If a Drakloak is defeated in a battle, its Dreepy will wander off without a second thought.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png"
},
887: {
  name: "Dragapult",
  type: ["Dragon","Ghost"],
  height: "9 feet 10 inches",
  weight: "110.2 lbs",
  description: "Dragapult can make its whole body transparent by clearing its mind and focusing. Even the Dreepy in Dragapult’s horns become invisible.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png"
},
888: {
  name: "Zacian",
  type: ["Fairy","Steel"],
  height: "9 feet 2 inches",
  weight: "782.6 lbs",
  description: "Now armed with a weapon it used in ancient times, this Pokémon needs only a single strike to fell even Gigantamax Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png"
},
889: {
  name: "Zamazenta",
  type: ["Steel","Fighting"],
  height: "9 feet 6 inches",
  weight: "1730.6 lbs",
  description: "Its ability to deflect any attack led to it being known as the Fighting Master’s Shield. It was feared and respected by all.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png"
},
890: {
  name: "Eternatus",
  type: ["Poison","Dragon"],
  height: "65 feet 7 inches",
  weight: "3094.4 lbs",
  description: "The core on its chest absorbs energy emanating from the lands of the Galar region. This energy is what allows Eternatus to stay active.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png"
},
891: {
  name: "Kubfu",
  type: ["Fighting"],
  height: "2 feet",
  weight: "26.5 lbs",
  description: "Kubfu trains hard to perfect its moves. The moves it masters will determine which form it takes when it evolves.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png"
},
892: {
  name: "Urshifu",
  type: ["Fighting","Water"],
  height: "6 feet 3 inches",
  weight: "231.5 lbs",
  description: "It’s believed that this Pokémon modeled its fighting style on the flow of a river—sometimes rapid, sometimes calm.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png"
},
893: {
  name: "Zarude",
  type: ["Grass","Dark"],
  height: "5 feet 11 inches",
  weight: "154.3 lbs",
  description: "Within dense forests, this Pokémon lives in a pack with others of its kind. It’s incredibly aggressive, and the other Pokémon of the forest fear it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png"
},
894: {
  name: "Regieleki",
  type: ["Electric"],
  height: "3 feet 11 inches",
  weight: "319.7 lbs",
  description: "This Pokémon is a cluster of electrical energy. It’s said that removing the rings on Regieleki’s body will unleash the Pokémon’s latent power.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png"
},
895: {
  name: "Regidrago",
  type: ["Dragon"],
  height: "6 feet 11 inches",
  weight: "440.9 lbs",
  description: "An academic theory proposes that Regidrago’s arms were once the head of an ancient dragon Pokémon. The theory remains unproven.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png"
},
896: {
  name: "Glastrier",
  type: ["Ice"],
  height: "7 feet 3 inches",
  weight: "1763.7 lbs",
  description: "Glastrier emits intense cold from its hooves. It’s also a belligerent Pokémon—anything it wants, it takes by force.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png"
},
897: {
  name: "Spectrier",
  type: ["Ghost"],
  height: "6 feet 7 inches",
  weight: "98.1 lbs",
  description: "It probes its surroundings with all its senses save one—it doesn’t use its sense of sight. Spectrier’s kicks are said to separate soul from body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png"
},
898: {
  name: "Calyrex",
  type: ["Psychic","Grass"],
  height: "3 feet 7 inches",
  weight: "17 lbs",
  description: "Calyrex is a merciful Pokémon, capable of providing healing and blessings. It reigned over the Galar region in times of yore.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png"
},
899: {
  name: "Wyrdeer",
  type: ["Normal","Psychic"],
  height: "5 feet 11 inches",
  weight: "209.7 lbs",
  description: "The black orbs shine with an uncanny light when the Pokémon is erecting invisible barriers. The fur shed from its beard retains heat well and is a highly useful material for winter clothing.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png"
},
900: {
  name: "Kleavor",
  type: ["Bug","Rock"],
  height: "5 feet 11 inches",
  weight: "196.2 lbs",
  description: "Parts of its body turned to stone when it evolved thanks to an extremely rare ore found in volcanic areas.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png"
},
901: {
  name: "Ursaluna",
  type: ["Ground","Normal"],
  height: "7 feet 10 inches",
  weight: "639.3 lbs",
  description: "I believe it was Hisui’s swampy terrain that gave Ursaluna its burly physique and newfound capacity to manipulate peat at will.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png"
},
902: {
  name: "Basculegion",
  type: ["Water","Ghost"],
  height: "9 feet 10 inches",
  weight: "242.5 lbs",
  description: "This Pokémon is cloaked in the souls of its comrades who perished during a punishing journey to the river of their birth.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png"
},
903: {
  name: "Sneasler",
  type: ["Fighting","Poison"],
  height: "4 feet 3 inches",
  weight: "94.8 lbs",
  description: "Because of Sneasler’s virulent poison and daunting physical prowess, no other species could hope to best it on the frozen highlands. Preferring solitude, this species does not form packs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png"
},
904: {
  name: "Overqwil",
  type: ["Dark","Poison"],
  height: "8 feet 2 inches",
  weight: "133.4 lbs",
  description: "Overqwil’s poisonous spikes will reflexively react even while Overqwil sleeps, stabbing any moving thing that approaches.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png"
},
905: {
  name: "Enamorus",
  type: ["Fairy","Flying"],
  height: "5 feet 3 inches",
  weight: "105.8 lbs",
  description: "When it flies to this land from across the sea, the bitter winter comes to an end. According to legend, this Pokémon’s love gives rise to the budding of fresh life across Hisui.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png"
},
906: {
  name: "Sprigatito",
  type: ["Grass"],
  height: "1 foot 4 inches",
  weight: "9 lbs",
  description: "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png"
},
907: {
  name: "Floragato",
  type: ["Grass"],
  height: "2 feet 11 inches",
  weight: "26.9 lbs",
  description: "Floragato deftly wields the vine hidden beneath its long fur, slamming the hard flower bud against its opponents.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png"
},
908: {
  name: "Meowscarada",
  type: ["Grass","Dark"],
  height: "4 feet 11 inches",
  weight: "68.9 lbs",
  description: "This Pokémon uses the reflective fur lining its cape to camouflage the stem of its flower, creating the illusion that the flower is floating.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png"
},
909: {
  name: "Fuecoco",
  type: ["Fire"],
  height: "1 foot 4 inches",
  weight: "21.6 lbs",
  description: "It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png"
},
910: {
  name: "Crocalor",
  type: ["Fire"],
  height: "3 feet 3 inches",
  weight: "67.7 lbs",
  description: "The combination of Crocalor’s fire energy and overflowing vitality has caused an egg-shaped fireball to appear on the Pokémon’s head.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png"
},
911: {
  name: "Skeledirge",
  type: ["Fire","Ghost"],
  height: "5 feet 3 inches",
  weight: "719.8 lbs",
  description: "The fiery bird changes shape when Skeledirge sings. Rumor has it that the bird was born when the fireball on Skeledirge’s head gained a soul.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png"
},
912: {
  name: "Quaxly",
  type: ["Water"],
  height: "1 foot 8 inches",
  weight: "13.4 lbs",
  description: "This Pokémon migrated to Paldea from distant lands long ago. The gel secreted by its feathers repels water and grime.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png"
},
913: {
  name: "Quaxwell",
  type: ["Water"],
  height: "3 feet 11 inches",
  weight: "47.4 lbs",
  description: "These Pokémon constantly run through shallow waters to train their legs, then compete with each other to see which of them kicks most gracefully.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png"
},
914: {
  name: "Quaquaval",
  type: ["Water","Fighting"],
  height: "5 feet 11 inches",
  weight: "136.5 lbs",
  description: "A single kick from a Quaquaval can send a truck rolling. This Pokémon uses its powerful legs to perform striking dances from far-off lands.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png"
},
915: {
  name: "Lechonk",
  type: ["Normal"],
  height: "1 foot 8 inches",
  weight: "22.5 lbs",
  description: "It searches for food all day. It possesses a keen sense of smell but doesn’t use it for anything other than foraging.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png"
},
916: {
  name: "Oinkologne",
  type: ["Normal"],
  height: "3 feet 3 inches",
  weight: "264.6 lbs",
  description: "Oinkologne is proud of its fine, glossy skin. It emits a concentrated scent from the tip of its tail.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png"
},
917: {
  name: "Tarountula",
  type: ["Bug"],
  height: "1 foot",
  weight: "8.8 lbs",
  description: "The ball of threads wrapped around its body is elastic enough to deflect the scythes of Scyther, this Pokémon’s natural enemy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png"
},
918: {
  name: "Spidops",
  type: ["Bug"],
  height: "3 feet 3 inches",
  weight: "36.4 lbs",
  description: "It clings to branches and ceilings using its threads and moves without a sound. It takes out its prey before the prey even notices it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png"
},
919: {
  name: "Nymble",
  type: ["Bug"],
  height: "8 inches",
  weight: "2.2 lbs",
  description: "It has its third set of legs folded up. When it’s in a tough spot, this Pokémon jumps over 30 feet using the strength of its legs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png"
},
920: {
  name: "Lokix",
  type: ["Bug","Fighting"],
  height: "3 feet 3 inches",
  weight: "38.6 lbs",
  description: "When it decides to fight all out, it stands on its previously folded legs to enter Showdown Mode. It neutralizes its enemies in short order.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png"
},
919: {
  name: "Nymble",
  type: ["Bug"],
  height: "8 inches",
  weight: "2.2 lbs",
  description: "It has its third set of legs folded up. When it’s in a tough spot, this Pokémon jumps over 30 feet using the strength of its legs.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png"
},
920: {
  name: "Lokix",
  type: ["Bug","Fighting"],
  height: "3 feet 3 inches",
  weight: "38.6 lbs",
  description: "When it decides to fight all out, it stands on its previously folded legs to enter Showdown Mode. It neutralizes its enemies in short order.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png"
},
921: {
  name: "Pawmi",
  type: ["Electric"],
  height: "1 foot",
  weight: "5.5 lbs",
  description: "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png"
},
922: {
  name: "Pawmo",
  type: ["Electric","Fighting"],
  height: "1 foot 4 inches",
  weight: "14.3 lbs",
  description: "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png"
},
923: {
  name: "Pawmot",
  type: ["Electric","Fighting"],
  height: "2 feet 11 inches",
  weight: "90.4 lbs",
  description: "This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png"
},
924: {
  name: "Tandemaus",
  type: ["Normal"],
  height: "1 foot",
  weight: "4 lbs",
  description: "Exhibiting great teamwork, they use their incisors to cut pieces out of any material that might be useful for a nest, then make off with them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png"
},
925: {
  name: "Maushold",
  type: ["Normal"],
  height: "1 foot",
  weight: "5.1 lbs",
  description: "They build huge nests with many rooms that are used for different purposes, such as eating and sleeping.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png"
},
926: {
  name: "Fidough",
  type: ["Fairy"],
  height: "1 foot",
  weight: "24 lbs",
  description: "This Pokémon is smooth and moist to the touch. Yeast in Fidough’s breath induces fermentation in the Pokémon’s vicinity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png"
},
927: {
  name: "Dachsbun",
  type: ["Fairy"],
  height: "1 foot 8 inches",
  weight: "32.8 lbs",
  description: "The pleasant aroma that emanates from this Pokémon’s body helps wheat grow, so Dachsbun has been treasured by farming villages.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png"
},
928: {
  name: "Smoliv",
  type: ["Grass","Normal"],
  height: "1 foot",
  weight: "14.3 lbs",
  description: "It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png"
},
929: {
  name: "Dolliv",
  type: ["Grass","Normal"],
  height: "2 feet",
  weight: "26.2 lbs",
  description: "Dolliv shares its tasty, fresh-scented oil with others. This species has coexisted with humans since times long gone.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png"
},
930: {
  name: "Arboliva",
  type: ["Grass","Normal"],
  height: "4 feet 7 inches",
  weight: "106.3 lbs",
  description: "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png"
},
931: {
  name: "Squawkabilly",
  type: ["Normal","Flying"],
  height: "2 feet",
  weight: "5.3 lbs",
  description: "These Pokémon prefer to live in cities. They form flocks based on the color of their feathers, and they fight over territory.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png"
},
932: {
  name: "Nacli",
  type: ["Rock"],
  height: "1 foot 4 inches",
  weight: "35.3 lbs",
  description: "It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png"
},
933: {
  name: "Naclstack",
  type: ["Rock"],
  height: "2 feet",
  weight: "231.5 lbs",
  description: "This Pokémon dry cures its prey by spraying salt over them. The curing process steals away the water in the prey’s body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png"
},
934: {
  name: "Garganacl",
  type: ["Rock"],
  height: "7 feet 7 inches",
  weight: "529.1 lbs",
  description: "Garganacl will rub its fingertips together and sprinkle injured Pokémon with salt. Even severe wounds will promptly heal afterward.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png"
},
935: {
  name: "Charcadet",
  type: ["Fire"],
  height: "2 feet",
  weight: "23.1 lbs",
  description: "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png"
},
936: {
  name: "Armarouge",
  type: ["Fire","Psychic"],
  height: "4 feet 11 inches",
  weight: "187.4 lbs",
  description: "Armarouge evolved through the use of a set of armor that belonged to a distinguished warrior. This Pokémon is incredibly loyal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png"
},
937: {
  name: "Ceruledge",
  type: ["Fire","Ghost"],
  height: "5 feet 3 inches",
  weight: "136.7 lbs",
  description: "The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png"
},
938: {
  name: "Tadbulb",
  type: ["Electric"],
  height: "1 foot",
  weight: "0.9 lbs",
  description: "Tadbulb shakes its tail to generate electricity. If it senses danger, it will make its head blink on and off to alert its allies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png"
},
939: {
  name: "Bellibolt",
  type: ["Electric"],
  height: "3 feet 11 inches",
  weight: "249.1 lbs",
  description: "When this Pokémon expands and contracts its wobbly body, the belly-button dynamo in its stomach produces a huge amount of electricity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png"
},
940: {
  name: "Wattrel",
  type: ["Electric","Flying"],
  height: "1 foot 4 inches",
  weight: "7.9 lbs",
  description: "When its wings catch the wind, the bones within produce electricity. This Pokémon dives into the ocean, catching prey by electrocuting them.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png"
},
941: {
  name: "Kilowattrel",
  type: ["Electric","Flying"],
  height: "4 feet 7 inches",
  weight: "85.1 lbs",
  description: "Kilowattrel inflates its throat sac to amplify its electricity. By riding the wind, this Pokémon can fly over 430 miles in a day.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png"
},
942: {
  name: "Maschiff",
  type: ["Dark"],
  height: "1 foot 8 inches",
  weight: "35.3 lbs",
  description: "It always scowls in an attempt to make opponents take it seriously, but even crying children will burst into laughter when they see Maschiff’s face.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png"
},
943: {
  name: "Mabosstiff",
  type: ["Dark"],
  height: "3 feet 7 inches",
  weight: "134.5 lbs",
  description: "This Pokémon can store energy in its large dewlap. Mabosstiff unleashes this energy all at once to blow away enemies.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png"
},
944: {
  name: "Shroodle",
  type: ["Poison","Normal"],
  height: "8 inches",
  weight: "1.5 lbs",
  description: "Though usually a mellow Pokémon, it will sink its sharp, poison-soaked front teeth into any that anger it, causing paralysis in the object of its ire.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png"
},
945: {
  name: "Grafaiai",
  type: ["Poison","Normal"],
  height: "2 feet 4 inches",
  weight: "60 lbs",
  description: "The color of the poisonous saliva depends on what the Pokémon eats. Grafaiai covers its fingers in its saliva and draws patterns on trees in forests.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png"
},
946: {
  name: "Bramblin",
  type: ["Grass","Ghost"],
  height: "2 feet",
  weight: "1.3 lbs",
  description: "A soul unable to move on to the afterlife was blown around by the wind until it got tangled up with dried grass and became a Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png"
},
947: {
  name: "Brambleghast",
  type: ["Grass","Ghost"],
  height: "3 feet 11 inches",
  weight: "13.2 lbs",
  description: "It will open the branches of its head to envelop its prey. Once it absorbs all the life energy it needs, it expels the prey and discards it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png"
},
948: {
  name: "Toedscool",
  type: ["Grass","Ground"],
  height: "2 feet 11 inches",
  weight: "72.8 lbs",
  description: "Toedscool lives in muggy forests. The flaps that fall from its body are chewy and very delicious.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png"
},
949: {
  name: "Toedscruel",
  type: ["Ground","Grass"],
  height: "6 feet 3 inches",
  weight: "127.9 lbs",
  description: "These Pokémon gather into groups and form colonies deep within forests. They absolutely hate it when strangers approach.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png"
},
950: {
  name: "Klawf",
  type: ["Rock"],
  height: "4 feet 3 inches",
  weight: "174.2 lbs",
  description: "Klawf hangs upside-down from cliffs, waiting for prey. But Klawf can’t remain in this position for long because its blood rushes to its head.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png"
},
951: {
  name: "Capsakid",
  type: ["Grass"],
  height: "1 foot",
  weight: "6.6 lbs",
  description: "The more sunlight this Pokémon bathes in, the more spicy chemicals are produced by its body, and thus the spicier its moves become.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png"
},
952: {
  name: "Scovillain",
  type: ["Grass","Fire"],
  height: "2 feet 11 inches",
  weight: "33.1 lbs",
  description: "The red head converts spicy chemicals into fire energy and blasts the surrounding area with a super spicy stream of flame.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png"
},
953: {
  name: "Rellor",
  type: ["Bug"],
  height: "8 inches",
  weight: "2.2 lbs",
  description: "This Pokémon creates a mud ball by mixing sand and dirt with psychic energy. It treasures its mud ball more than its own life.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png"
},
954: {
  name: "Rabsca",
  type: ["Bug"],
  height: "1 foot",
  weight: "7.7 lbs",
  description: "The body that supports the ball barely moves. Therefore, it is thought that the true body of this Pokémon is actually inside the ball.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png"
},
955: {
  name: "Flittle",
  type: ["Psychic"],
  height: "8 inches",
  weight: "3.3 lbs",
  description: "Flittle’s toes levitate about half an inch above the ground because of the psychic power emitted from the frills on the Pokémon’s belly.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png"
},
956: {
  name: "Espathra",
  type: ["Psychic"],
  height: "6 feet 3 inches",
  weight: "198.4 lbs",
  description: "It immobilizes opponents by bathing them in psychic power from its large eyes. Despite its appearance, it has a vicious temperament.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png"
},
957: {
  name: "Tinkatink",
  type: ["Steel","Fairy"],
  height: "1 foot 4 inches",
  weight: "19.6 lbs",
  description: "It swings its handmade hammer around to protect itself, but the hammer is often stolen by Pokémon that eat metal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png"
},
958: {
  name: "Tinkatuff",
  type: ["Steel","Fairy"],
  height: "2 feet 4 inches",
  weight: "130.3 lbs",
  description: "This Pokémon will attack groups of Pawniard and Bisharp, gathering metal from them in order to create a large and sturdy hammer.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png"
},
959: {
  name: "Tinkaton",
  type: ["Steel","Flying"],
  height: "2 feet 4 inches",
  weight: "248.7 lbs",
  description: "This intelligent Pokémon has a very daring disposition. It knocks rocks into the sky with its hammer, aiming for flying Corviknight.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png"
},
960: {
  name: "Wiglett",
  type: ["Water"],
  height: "3 feet 11 inches",
  weight: "4 lbs",
  description: "This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png"
},
961: {
  name: "Wugtrio",
  type: ["Water"],
  height: "3 feet 11 inches",
  weight: "11.9 lbs",
  description: "It has a vicious temperament, contrary to what its appearance may suggest. It wraps its long bodies around prey, then drags the prey into its den.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png"
},
962: {
  name: "Bombirdier",
  type: ["Flying","Dark"],
  height: "4 feet 11 inches",
  weight: "94.6 lbs",
  description: "It gathers things up in an apron made from shed feathers added to the Pokémon’s chest feathers, then drops those things from high places for fun.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png"
},
963: {
  name: "Finizen",
  type: ["Water"],
  height: "4 feet 3 inches",
  weight: "132.7 lbs",
  description: "It likes playing with others of its kind using the water ring on its tail. It uses ultrasonic waves to sense the emotions of other living creatures.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png"
},
964: {
  name: "Palafin",
  type: ["Water"],
  height: "5 feet 11 inches",
  weight: "214.7 lbs",
  description: "This Pokémon’s ancient genes have awakened. It is now so extraordinarily strong that it can easily lift a cruise ship with one fin.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png"
},
965: {
  name: "Varoom",
  type: ["Steel","Poison"],
  height: "3 feet 3 inches",
  weight: "77.2 lbs",
  description: "It is said that this Pokémon was born when an unknown poison Pokémon entered and inspirited an engine left at a scrap-processing factory.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png"
},
966: {
  name: "Revavroom",
  type: ["Steel","Poison"],
  height: "5 feet 11 inches",
  weight: "264.6 lbs",
  description: "It creates a gas out of poison and minerals from rocks. It then detonates the gas in its cylinders—now numbering eight—to generate energy.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png"
},
967: {
  name: "Cyclizar",
  type: ["Dragon","Normal"],
  height: "5 feet 3 inches",
  weight: "138.9 lbs",
  description: "Apparently Cyclizar has been allowing people to ride on its back since ancient times. Depictions of this have been found in 10,000-year-old murals.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png"
},
968: {
  name: "Orthworm",
  type: ["Steel"],
  height: "8 feet 2 inches",
  weight: "683.4 lbs",
  description: "When attacked, this Pokémon will wield the tendrils on its body like fists and pelt the opponent with a storm of punches.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png"
},
969: {
  name: "Glimmet",
  type: ["Poison","Rock"],
  height: "2 feet 4 inches",
  weight: "17.6 lbs",
  description: "It absorbs nutrients from cave walls. The petals it wears are made of crystallized poison.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png"
},
970: {
  name: "Glimmora",
  type: ["Rock","Poison"],
  height: "4 feet 11 inches",
  weight: "99.2 lbs",
  description: "When this Pokémon detects danger, it will open up its crystalline petals and fire beams from its conical body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png"
},
971: {
  name: "Greavard",
  type: ["Ghost"],
  height: "2 feet",
  weight: "77.2 lbs",
  description: "It is said that a dog Pokémon that died in the wild without ever interacting with a human was reborn as this Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png"
},
972: {
  name: "Houndstone",
  type: ["Ghost"],
  height: "6 feet 7 inches",
  weight: "33.1 lbs",
  description: "Houndstone spends most of its time sleeping in graveyards. Among all the dog Pokémon, this one is most loyal to its master.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png"
},
973: {
  name: "Flamigo",
  type: ["Flying","Fighting"],
  height: "5 feet 3 inches",
  weight: "81.6 lbs",
  description: "This Pokémon apparently ties the base of its neck into a knot so that energy stored in its belly does not escape from its beak.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png"
},
974: {
  name: "Cetoddle",
  type: ["Ice"],
  height: "3 feet 11 inches",
  weight: "99.2 lbs",
  description: "This species left the ocean and began living on land a very long time ago. It seems to be closely related to Wailmer.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png"
},
975: {
  name: "Cetitan",
  type: ["Ice"],
  height: "14 feet 9 inches",
  weight: "1543.2 lbs",
  description: "This Pokémon wanders around snowy, icy areas. It protects its body with powerful muscles and a thick layer of fat under its skin.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png"
},
976: {
  name: "Veluza",
  type: ["Water","Psychic"],
  height: "8 feet 2 inches",
  weight: "198.4 lbs",
  description: "When Veluza discards unnecessary flesh, its mind becomes honed and its psychic power increases. The spare flesh has a mild but delicious flavor.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png"
},
977: {
  name: "Dondozo",
  type: ["Water"],
  height: "39 feet 4 inches",
  weight: "485 lbs",
  description: "This Pokémon is a glutton, but it’s bad at getting food. It teams up with a Tatsugiri to catch prey.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png"
},
978: {
  name: "Tatsugiri",
  type: ["Dragon","Water"],
  height: "1 foot",
  weight: "17.6 lbs",
  description: "This is a small dragon Pokémon. It lives inside the mouth of Dondozo to protect itself from enemies on the outside.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png"
},
979: {
  name: "Annihilape",
  type: ["Fighting","Ghost"],
  height: "3 feet 11 inches",
  weight: "123.5 lbs",
  description: "When its anger rose beyond a critical point, this Pokémon gained power that is unfettered by the limits of its physical body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png"
},
980: {
  name: "Clodsire",
  type: ["Poison","Ground"],
  height: "5 feet 11 inches",
  weight: "491.6 lbs",
  description: "When attacked, this Pokémon will retaliate by sticking thick spines out from its body. It’s a risky move that puts everything on the line.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png"
},
981: {
  name: "Farigiraf",
  type: ["Normal","Psychic"],
  height: "10 feet 6 inches",
  weight: "352.7 lbs",
  description: "Now that the brain waves from the head and tail are synced up, the psychic power of this Pokémon is 10 times stronger than Girafarig’s.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png"
},
982: {
  name: "Dudunsparce",
  type: ["Normal"],
  height: "11 feet 10 inches",
  weight: "86.4 lbs",
  description: "This Pokémon uses its hard tail to make its nest by boring holes into bedrock deep underground. The nest can reach lengths of over six miles.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png"
},
983: {
  name: "Kingambit",
  type: ["Dark","Steel"],
  height: "6 feet 7 inches",
  weight: "264.6 lbs",
  description: "Only a Bisharp that stands above all others in its vast army can evolve into Kingambit.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png"
},
984: {
  name: "Great Tusk",
  type: ["Fighting","Ground"],
  height: "7 feet 3 inches",
  weight: "705.5 lbs",
  description: "Sightings of this Pokémon have occurred in recent years. The name Great Tusk was taken from a creature listed in a certain book.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png"
},
985: {
  name: "Scream Tail",
  type: ["Fairy","Psychic"],
  height: "3 feet 11 inches",
  weight: "17.6 lbs",
  description: "There has been only one reported sighting of this Pokémon. It resembles a mysterious creature depicted in an old expedition journal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png"
},
986: {
  name: "Brute Bonnet",
  type: ["Grass","Dark"],
  height: "3 feet 11 inches",
  weight: "46.3 lbs",
  description: "It is possible that the creature listed as Brute Bonnet in a certain book could actually be this Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png"
},
987: {
  name: "Flutter Mane",
  type: ["Ghost","Fairy"],
  height: "4 feet 7 inches",
  weight: "8.8 lbs",
  description: "This Pokémon has characteristics similar to those of Flutter Mane, a creature mentioned in a certain book.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png"
},
988: {
  name: "Slither Wing",
  type: ["Bug","Fighting"],
  height: "10 feet 6 inches",
  weight: "202.8 lbs",
  description: "This mysterious Pokémon has some similarities to a creature that an old book introduced as Slither Wing.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png"
},
989: {
  name: "Sandy Shocks",
  type: ["Electric","Ground"],
  height: "7 feet 7 inches",
  weight: "132.3 lbs",
  description: "No records exist of this Pokémon being caught. Data is lacking, but the Pokémon’s traits match up with a creature shown in an expedition journal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png"
},
990: {
  name: "Iron Thread",
  type: ["Ground","Steel"],
  height: "2 feet 11 inches",
  weight: "529.1 lbs",
  description: "This Pokémon closely resembles a scientific weapon that a paranormal magazine claimed was sent to this planet by aliens.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png"
},
991: {
  name: "Iron Bundle",
  type: ["Ice","Water"],
  height: "2 feet",
  weight: "24.3 lbs",
  description: "Its shape is similar to a robot featured in a paranormal magazine article. The robot was said to have been created by an ancient civilization.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png"
},
992: {
  name: "Iron Hands",
  type: ["Fighting","Electric"],
  height: "5 feet 11 inches",
  weight: "839.3 lbs",
  description: "It is very similar to a cyborg covered exclusively by a paranormal magazine. The cyborg was said to be the modified form of a certain athlete.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png"
},
993: {
  name: "Iron Jugulis",
  type: ["Dark","Flying"],
  height: "4 feet 3 inches",
  weight: "244.7 lbs",
  description: "It resembles a certain Pokémon introduced in a paranormal magazine, described as the offspring of a Hydreigon that fell in love with a robot.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png"
},
994: {
  name: "Iron Moth",
  type: ["Fire","Poison"],
  height: "3 feet 11 inches",
  weight: "79.4 lbs",
  description: "This Pokémon resembles an unknown object described in a paranormal magazine as a UFO sent to observe humanity.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png"
},
995: {
  name: "Iron Thorns",
  type: ["Rock","Electric"],
  height: "5 feet 3 inches",
  weight: "668.0 lbs",
  description: "It has some similarities to a Pokémon introduced in a dubious magazine as a Tyranitar from one billion years into the future.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png"
},
996: {
  name: "Frigibax",
  type: ["Dragon","Ice"],
  height: "1 foot 8 inches",
  weight: "37.5 lbs",
  description: "Frigibax absorbs heat through its dorsal fin and converts the heat into ice energy. The higher the temperature, the more energy Frigibax stores.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png"
},
997: {
  name: "Arctibax",
  type: ["Dragon","Ice"],
  height: "2 feet 7 inches",
  weight: "66.1 lbs",
  description: "Arctibax freezes the air around it, protecting its face with an ice mask and turning its dorsal fin into a blade of ice.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png"
},
998: {
  name: "Baxcalibur",
  type: ["Dragon","Ice"],
  height: "6 feet 11 inches",
  weight: "463.0 lbs",
  description: "This Pokémon blasts cryogenic air out from its mouth. This air can instantly freeze even liquid-hot lava.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png"
},
999: {
  name: "Gimmighoul",
  type: ["Ghost"],
  height: "1 foot",
  weight: "11 lbs",
  description: "This Pokémon was born inside a treasure chest about 1,500 years ago. It sucks the life-force out of scoundrels who try to steal the treasure.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png"
},
1000: {
  name: "Gholdengo",
  type: ["Ghost","Steel"],
  height: "3 feet 11 inches",
  weight: "66.1 lbs",
  description: "Its body seems to be made up of 1,000 coins. This Pokémon gets along well with others and is quick to make friends with anybody.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png"
},
1001: {
  name: "Wo-Chien",
  type: ["Dark","Grass"],
  height: "4 feet 11 inches",
  weight: "163.3 lbs",
  description: "The grudge of a person punished for writing the king’s evil deeds upon wooden tablets has clad itself in dead leaves to become a Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png"
},
1002: {
  name: "Chien-Pao",
  type: ["Dark","Ice"],
  height: "6 feet 3 inches",
  weight: "335.5 lbs",
  description: "This Pokémon can control 100 tons of fallen snow. It plays around innocently by leaping in and out of avalanches it has caused.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png"
},
1003: {
  name: "Ting-Lu",
  type: ["Dark","Ground"],
  height: "8 feet 10 inches",
  weight: "1542.6 lbs",
  description: "The fear poured into an ancient ritual vessel has clad itself in rocks and dirt to become a Pokémon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png"
},
1004: {
  name: "Chi-Yu",
  type: ["Dark","Fire"],
  height: "1 foot 4 inches",
  weight: "10.8 lbs",
  description: "It controls flames burning at over 5,400 degrees Fahrenheit. It casually swims through the sea of lava it creates by melting rock and sand.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png"
},
1005: {
  name: "Roaring Moon",
  type: ["Dragon","Dark"],
  height: "6 feet 7 inches",
  weight: "837.8 lbs",
  description: "It is possible that this is the creature listed as Roaring Moon in an expedition journal that still holds many mysteries.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png"
},
1006: {
  name: "Iron Valiant",
  type: ["Fairy","Fighting"],
  height: "4 feet 7 inches",
  weight: "77.2 lbs",
  description: "It has some similarities to a mad scientist’s invention covered in a paranormal magazine.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png"
},
1007: {
  name: "Koraidon",
  type: ["Fighting","Dragon"],
  height: "8 feet 2 inches",
  weight: "668 lbs",
  description: "This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png"
},
1008: {
  name: "Miraidon",
  type: ["Electric","Dragon"],
  height: "11 feet 6 inches",
  weight: "529.1 lbs",
  description: "Much remains unknown about this creature. It resembles Cyclizar, but it is far more ruthless and powerful.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png"
},
1009: {
  name: "Walking Wake",
  type: ["Water","Dragon"],
  height: "11 feet 6 inches",
  weight: "617.3 lbs",
  description: "This ferocious creature is shrouded in mystery. It’s named after an aquatic monster mentioned in an old expedition journal.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png"
},
1010: {
  name: "Iron Leaves",
  type: ["Grass","Psychic"],
  height: "4 feet 11 inches",
  weight: "275.6 lbs",
  description: "Many of its physical characteristics match those of a Virizion from the future that was covered in a paranormal magazine.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png"
},
1011: {
  name: "Dipplin",
  type: ["Grass","Dragon"],
  height: "1 foot 4 inches",
  weight: "9.7 lbs",
  description: "Dipplin is two creatures in one Pokémon. Its evolution was triggered by a special apple grown only in one place.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png"
},
1012: {
  name: "Poltchageist",
  type: ["Grass","Ghost"],
  height: "2 feet",
  weight: "2.4 lbs",
  description: "It sprinkles some of its powdery body onto food and drains the life-force from those who so much as lick it.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png"
},
1013: {
  name: "Sinistcha",
  type: ["Grass","Ghost"],
  height: "8 inches",
  weight: "4.9 lbs",
  description: "It pretends to be tea, trying to fool people into drinking it so it can drain their life-force. Its ruse is generally unsuccessful.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png"
},
1014: {
  name: "Okidogi",
  type: ["Poison","Fighting"],
  height: "5 feet 11 inches",
  weight: "203.3 lbs",
  description: "After all its muscles were stimulated by the toxic chain around its neck, Okidogi transformed and gained a powerful physique.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png"
},
1015: {
  name: "Munkidori",
  type: ["Poison","Psychic"],
  height: "3 feet 3 inches",
  weight: "26.9 lbs",
  description: "The chain is made from toxins that enhance capabilities. It stimulated Munkidori’s brain and caused the Pokémon’s psychic powers to bloom.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png"
},
1016: {
  name: "Fezandipiti",
  type: ["Poison","Fairy"],
  height: "4 feet 7 inches",
  weight: "66.4 lbs",
  description: "Fezandipiti owes its beautiful looks and lovely voice to the toxic stimulants emanating from the chain wrapped around its body.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png"
},
1017: {
  name: "Ogerpon",
  type: ["Grass"],
  height: "3 feet 11 inches",
  weight: "87.7 lbs",
  description: "This Pokémon’s type changes based on which mask it’s wearing. It confounds its enemies with nimble movements and kicks.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png"
},
1018: {
  name: "Archaludon",
  type: ["Steel","Dragon"],
  height: "6 feet 7 inches",
  weight: "132.3 lbs",
  description: "It gathers static electricity from its surroundings. The beams it launches when down on all fours are tremendously powerful.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png"
},
1019: {
  name: "Hydrapple",
  type: ["Grass","Dragon"],
  height: "5 feet 11 inches",
  weight: "205 lbs",
  description: "Seven syrpents live inside an apple made of syrup. The syrpent in the center is the commander.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png"
},
1020: {
  name: "Gouging Fire",
  type: ["Fire","Dragon"],
  height: "11 feet 6 inches",
  weight: "1300.7 lbs",
  description: "There are scant few reports of this creature being sighted. One short video shows it rampaging and spouting pillars of flame.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png"
},
1021: {
  name: "Raging Bolt",
  type: ["Electric","Dragon"],
  height: "17 feet 1 inch",
  weight: "1058.2 lbs",
  description: "It’s said to incinerate everything around it with lightning launched from its fur. Very little is known about this creature.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png"
},
1022: {
  name: "Iron Boulder",
  type: ["Rock","Psychic"],
  height: "4 feet 11 inches",
  weight: "358.3 lbs",
  description: "It resembles a Pokémon described in a dubious magazine as a Terrakion that had been modified by an evil organization.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png"
},
1023: {
  name: "Iron Crown",
  type: ["Steel","Psychic"],
  height: "5 feet 3 inches",
  weight: "343.9 lbs",
  description: "It resembles a mysterious object introduced in a paranormal magazine as a cutting-edge weapon shaped like a Cobalion.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png"
},
1024: {
  name: "Terapagos",
  type: ["Normal"],
  height: "8 inches",
  weight: "14.3 lbs",
  description: "Terapagos protects itself using its power to transform energy into hard crystals. This Pokémon is the source of the Terastal phenomenon.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png"
},
1025: {
  name: "Pecharunt",
  type: ["Poison","Ghost"],
  height: "1 foot",
  weight: "7 lbs",
  description: "It feeds others toxic mochi that draw out desires and capabilities. Those who eat the mochi fall under Pecharunt’s control, chained to its will.",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png"
}
};

// 2️⃣ Function that runs when user clicks "Search"
function searchPokemon() {
  const num = document.getElementById("dexNumber").value;
  const p = pokedex[num];
  if (!p) return alert("Pokémon not found!");

  document.getElementById("pokeImage").src = p.image;
  document.getElementById("name").textContent = "Name: " + p.name;
  document.getElementById("type").textContent = "Type: " + p.type.join(", ");
  document.getElementById("height").textContent = "Height: " + p.height;
  document.getElementById("weight").textContent = "Weight: " + p.weight;
  document.getElementById("description").textContent = p.description;
}
