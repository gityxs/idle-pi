const mathematicians = [
    "Euclid",
    "Archimedes",
    "Pythagoras",
    "Isaac Newton",
    "Carl Friedrich Gauss",
    "Leonhard Euler",
    "Sophie Germain",
    "Évariste Galois",
    "Georg Cantor",
    "David Hilbert",
    "Srinivasa Ramanujan",
    "Alan Turing",
    "Emmy Noether",
    "Pierre-Simon Laplace",
    "Joseph Fourier",
    "Henri Poincaré",
    "Blaise Pascal",
    "Bernhard Riemann",
    "John von Neumann",
    "Kurt Gödel",
    "Paul Erdős",
    "Mary Cartwright",
    "G.H. Hardy",
    "Andrew Wiles",
    "Ada Lovelace",
    "Niels Abel",
    "Richard Feynman",
    "John Nash",
    "Leonardo da Vinci",
    "Hypatia",
    "Fibonacci",
    "Carl Jacobi",
    "Joseph-Louis Lagrange",
    "Augustin-Louis Cauchy",
    "Pierre de Fermat",
    "William Rowan Hamilton",
    "Andrey Kolmogorov",
    "Gottfried Wilhelm Leibniz",
    "Felix Klein",
    "Sunzi",
    "Brahmagupta",
    "al-Khwārizmī",
    "Shakuntala Devi",
    "Omar Khayyam",
    "Thales of Miletus",
    "Aryabhata",
    "Diophantus",
    "Maria Agnesi",
    "Johann Bernoulli",
    "Johannes Kepler",
    "Christiaan Huygens",
    "Siméon Poisson",
    "Eudoxus of Cnidus",
    "Heron of Alexandria",
    "Apollonius of Perga",
    "Pappus of Alexandria",
    "Nikolai Lobachevsky", // showed that Euclid's fifth postulate was independent by developing a new geometry
    "Sophus Lie",
    "Stefan Banach",
    "André Weil",
    "Alexander Grothendieck",
    "Terence Tao",
    "Grigori Perelman",
    "Edward Witten",
    "John Conway",
    "Sofia Kovalevskaya",
    "Émilie du Châtelet",
    "Mary Somerville",
    "Dorothy Vaughan",
    "Katherine Johnson",
    "Mary Jackson",
    "Maryam Mirzakhani",
    "Ingrid Daubechies",
    "Michael Atiyah",
    "Paul Erdös",
    "Roger Penrose",
    "James Maxwell",
    "Albert Einstein",
    "Henrietta Leavitt",
    "Karl Weierstrass",
    "Maurice Fréchet",
    "Shiing-Shen Chern",
    "Charles Babbage",
    "George Boole",
    "René Descartes",
    "Gerolamo Cardano",
    "Galileo Galilei",
    "Will Hunting", 
    "Eratosthenes",
];


const mathematicians_with_summaries = [
    { name: "Euclid", summary: "A Greek mathematician that lived around 300 BC. He is often referred to as the father of geometry, and wrote probably the most famous mathematical text of all time: Elements."}, // He appears in a painting by Raphael.  The proof that there are infinitely many primes is attributed to him, as is the fundamental theorem of algebra. Euclidean Algorithm for GCD 
    { name: "Archimedes", summary: "A Greek mathematician and inventor that lived from 287 to 212 BC. He found formulas for the area of a circle and the surface area and volume of a sphere, as well as approximated pi. Also known for shouting eureka in a bathtub, or so the story goes." }, // Archimedean screw, Archimedean claw, his face is on the Field's medal 
    {name: "Pythagoras", summary: "A Greek mathematician that lived from 570 to 495 BC. He is associated with the Pythagorean Theorem and the proof that there are five Platonic solids, but very little is known about him for sure. The Pythagoreans (his followers) were weird: they swore oaths to the tetractys (a triangle composed of nine smaller ones) and hated irrational numbers, in one story murdering Hippasus for discovering their existence."},
    {name: "Isaac Newton", summary: "An English mathematician and physicist that lived from 1642 to 1726. He, along with Leibniz, developed calculus."}, //Newton's method (approximate as a line and go for a while), Newton's identities 
    "Carl Friedrich Gauss",
    "Leonhard Euler",
    "Sophie Germain",
    "Évariste Galois",
    "Georg Cantor",
    "David Hilbert",
    "Srinivasa Ramanujan",
    "Alan Turing",
    "Emmy Noether",
    "Pierre-Simon Laplace",
    "Joseph Fourier",
    "Henri Poincaré",
    "Blaise Pascal",
    "Bernhard Riemann",
    "John von Neumann",
    "Kurt Gödel",
    "Paul Erdős",
    "Mary Cartwright",
    "G.H. Hardy",
    "Andrew Wiles",
    "Ada Lovelace",
    "Niels Abel",
    "Richard Feynman",
    "John Nash",
    "Leonardo da Vinci",
    "Hypatia",
    "Fibonacci",
    "Carl Jacobi",
    "Joseph-Louis Lagrange",
    "Augustin-Louis Cauchy",
    "Pierre de Fermat",
    "William Rowan Hamilton",
    "Andrey Kolmogorov",
    "Gottfried Wilhelm Leibniz",
    "Felix Klein",
    "Sunzi",
    "Brahmagupta",
    "al-Khwārizmī",
    "Shakuntala Devi",
    "Omar Khayyam",
    "Thales of Miletus",
    "Aryabhata",
    "Diophantus",
    "Maria Agnesi",
    "Johann Bernoulli",
    "Johannes Kepler",
    "Christiaan Huygens",
    "Siméon Poisson",
    "Eudoxus of Cnidus",
    "Heron of Alexandria",
    "Apollonius of Perga",
    "Pappus of Alexandria",
    "Nikolai Lobachevsky", // showed that Euclid's fifth postulate was independent by developing a new geometry
    "Sophus Lie",
    "Stefan Banach",
    "André Weil",
    "Alexander Grothendieck",
    "Terence Tao",
    "Grigori Perelman",
    "Edward Witten",
    "John Conway",
    "Sofia Kovalevskaya",
    "Émilie du Châtelet",
    "Mary Somerville",
    "Dorothy Vaughan",
    "Katherine Johnson",
    "Mary Jackson",
    "Maryam Mirzakhani",
    "Ingrid Daubechies",
    "Michael Atiyah",
    "Paul Erdös",
    "Roger Penrose",
    "James Maxwell",
    "Albert Einstein",
    "Henrietta Leavitt",
    "Karl Weierstrass",
    "Maurice Fréchet",
    "Shiing-Shen Chern",
    "Charles Babbage",
    "George Boole",
    "René Descartes",
    "Gerolamo Cardano",
    "Galileo Galilei",
    "Will Hunting", 
    "Eratosthenes",
];

const scoreName = "Pies";
const toolPriceModifier = 1.25;

// This is all user data EXCEPT we also save the upgrade map 
var info = {
    score: 0,
    thoughts: 0,
    scoreAllTime: 0,
    thoughtsAllTime: 0,
    questionsLeft: 12,
    currentQuestionCost: 0,
    toolCount: new Array(30).fill(0),
    toolUpgrades: new Array(30).fill(1),
    toolPrice: Array.from({ length: 30 }, (_, i) => 10 * (6.5 ** i)),
    operationCount: 1,
    mathematicianSeed: getRandomInt(6,mathematicians.length - 1),
    researchTokens: 0,
    researchPurchased: [],
    startedResearch: false,
    // About what they have seen
    seenDotProduct: false,
    solvedBinomialQuestion: false,
    // Achievement related counters
    piClicks: 0,
    brainClicks: 0,
    mathematicianPokes: 0,
    maxStreak: 0,
    excitedTheBrain: false,
    gotWillHunting: false,
}

// Upgrade map (also saved)
var upgrades = [];

// Achievements (not saved!)
let achievements = [];

// Reset
function reset() {
    scoreIncrement = 0;
    info.score = 0;
    info.thoughts = 0;
    info.scoreAllTime = 0;
    info.thoughtsAllTime = 0;
    info.questionsLeft = 12;
    info.currentQuestionCost = 0;
    info.toolCount = new Array(30).fill(0);
    info.toolUpgrades = new Array(30).fill(1);
    info.toolPrice = Array.from({ length: 30 }, (_, i) => 10 * (6.5 ** i));
    info.operationCount = 1;
    info.mathematicianSeed = getRandomInt(1,mathematicians.length - 1); 
    info.researchTokens = 0;
    info.researchPurchased = [];
    info.startedResearch = false;
    // About what they have seen
    info.seenDotProduct = false;
    info.solvedBinomialQuestion = false;
    // Achievement related counters
    info.piClicks = 0;
    info.brainClicks = 0;
    info.mathematicianPokes = 0;
    info.maxStreak = 0;
    info.excitedTheBrain = false;
    info.gotWillHunting = false;
    // Also save upgrades b/c lazy
    upgrades = [];
    localStorage.clear();
}

function traverseTree(node) {
    if(info.researchPurchased.includes(node.code) || node.name === "Start") {
        node.available = 2;
       if(node.children) {
           node.children.forEach(element => {
               traverseTree(element);
           });
       }
    } else {
        node.available = 1;
    }
}
 
function researchCodeToName(code) {
    switch(code) {
        case "modplus":
            return "modular arithmetic";
        case "limits":
            return "limit";
        case "modinv":
            return "modular inverse and multiplication";
        case "vectors":
            return "vector";
        case "matrices":
            return "matrix";
        case "matrices2":
            return "matrix multiplication and determinant"
    }
}

// 0 is locked, 1 is visible, 2 is can be purchased
let upgradeTreeData = {
    name: "Start", image: "Sprites/pi_sprite.png", available: 1,
    children: [
        {
            name: "Modular Arithmetic",
            code: "modplus",
            image: "Sprites/modular_arithmetic_sprite.png",
            available: 0,
            children: [
                { name: "Modular Inverse and Multiplication", 
                  code: "modinv",
                  image: "Sprites/modular_arithmetic_sprite.png", 
                  available: 0, }
            ]
        },
        { 
            name: "Limits",
            code: "limits", 
            image: "Sprites/asymptote_sprite.png", 
            available: 0,
            //children: [
            //     { name: "Derivatives", id: "derivatives", image: "Sprites/Abacus_sprite.png", available: 0, 
            //     children: 
            //         [ {name: "Integrals", id: "integrals", image: "Sprites/Abacus_sprite.png", available: 0,} ]
            //     },
            // ]
        },
        { 
            name: "Vectors",
            code: "vectors",
            image: "Sprites/vector_sprite_3.png", available: 0,
             children: [
                 { name: "Matrices", code: "matrices", image: "Sprites/matrix_sprite.png", available: 0, 
                 },
             ]
        },
        // { 
        //     name: "Complex Numbers",
        //     image: "Sprites/Abacus_sprite.png", available: 0,
        // },
        // { 
        //     name: "Estimations and Inequalities",
        //     image: "Sprites/Abacus_sprite.png", available: 0,
        // }
    ]
};

function makeMeRich() {
    info.score = 1000000000;
    info.thoughts = 1000000000;
    info.scoreAllTime = 100000000;
    info.thoughtsAllTime = 10000000;
    info.toolCount = new Array(20).fill(100);
}

// Fixed and/or recalculated
let newOperationPrice = Array.from({ length: 20 }, (_, i) => Math.floor(30 + 30 * (8 ** (i - 1))));
let scoreIncrement = 0;
let correctInARow = 0;
let correctInInterval = 0;

// Tooltips
let shopTippies = [];
let brainTippy;

// Calculate modifiers 
function calculateModifier() {
    return calculateCorrectModifier() * speedModifier() * mathematicianMultiplier();
}

function calculateCorrectModifier() {
    return Math.min(1.3,1+0.03*Math.sqrt(correctInARow));
}

function speedModifier() {
    return Math.min(1.3,1+0.03*Math.sqrt(correctInInterval));
}

function mathematicianMultiplier() {
    return 1+0.02*Math.sqrt(info.toolCount[3] * info.toolUpgrades[3]) * (1+(info.mathematicianPokes >= 271 ? 1 : 0)); 
}

function brainRedFunction() {
    return 0.05*Math.sqrt(correctInInterval);
}

// Function that slowly goes to 0
function calculateProbability(i) {
    const count = info.toolCount[i] * Math.sqrt(info.toolUpgrades[i]);
    const k = 0.12;
    return Math.min(Math.exp(-k * (count)) + 0.013 * Math.exp(-0.01 * (count)),1);
}

// Calculates the operation to use
function problemOperation() {
    let returnOp = 0;
    while (returnOp < info.operationCount) {
        if (Math.random() <= calculateProbability(returnOp)) {
            return returnOp;
        }
        returnOp++;
    }
    return -specialProblemOperation();
}
function specialProblemOperation() {
    let returnOp = 0;
    let toolOp = 0;
    while (toolOp < info.operationCount) {
        returnOp++;
        if (Math.random() <= calculateProbability(toolOp)) {
            return returnOp;
        }
        returnOp++;
        if (Math.random() <= calculateProbability(toolOp)) {
            return returnOp;
        }
        toolOp++;
    }
    return returnOp;
}

function getToolName(i) {
    return data[i].toolName;
}

function getToolNoSpaceName(i) {
    return data[i].toolName.replace(/\s/g, "");
}

function getToolNamePlural(i) {
    return data[i].toolNamePlural;
}

function getOperationName(i) {
    if(i <= 7) {
        return data[i].operationName;
    } else {
        return researchCodeToName(info.researchPurchased[i-8]);
    }
}

function getToolFlavor(i) {
    return data[i].flavor;
}

var data = [
    {
        operationName: 'addition',
        toolName: 'Pebble',
        toolNamePlural: 'Pebbles',
        flavor: '1 pebble, 2 pebble, 3 pebble.',
        standardUpgradeNames: ["Shinier Pebbles", "Rock Tumbler", "Even Shinier Pebbles"],
        upgrades: [
            { name: "Shinier Pebbles", flavor: "Ooooo aaaah!" },
            { name: "Pebble Expansion Pack", flavor: "Double the pebbles, double the fun!" },
            { name: "Rock Tumbler", flavor: "Look at those rocks go!" },
            { name: "More Pebbles! More Pebbles!", flavor: "More pebbles please." },
            { name: "French Riviera", flavor: "Calculate with the pebbled beaches of your dreams!" },
            { name: "Gemstones", flavor: "*Fancy* pebbles." },
        ]
    },
    {
        operationName: 'subtraction',
        toolName: 'Abacus',
        toolNamePlural: 'Abacuses',
        flavor: 'Click clack.',
        standardUpgradeNames: ["Extra Beads", "Color Coding", "4D Abacus"],
        upgrades: [
            { name: "Extra Beads", flavor: "Clickity-click." },
            { name: "Color Coding", flavor: "Swatch this." },
            { name: "Bigger and Better", flavor: "Do we need to explain?" },
            { name: "Upper Deck", flavor: "The view from up here is bi-quinary!" },
            { name: "Speed Demon", flavor: "Addition at the speed of light!" },
            { name: "4D Abacus", flavor: "Harness the curvature of spacetime." },
        ]
    },
    {
        operationName: 'multiplication',
        toolName: 'Slide Rule',
        toolNamePlural: 'Slide Rules',
        flavor: 'Ooh, slidey.',
        standardUpgradeNames: ["Slidier Slide", "Machining", "Wheee!"],
        upgrades: [
            { name: "Slidier Slide", flavor: "Mmm that\'s nice." },
            { name: "Extra Length", flavor: "More room for sliding." },
            { name: "Wheeee!", flavor: "Wheeeeeeee!" },
            { name: "Greasy Palms", flavor: "Let\'s see how fast this thing can go." },
            { name: "The Astral Slide", flavor: "Experience the friction-less sliding of space!" },
            { name: "Telepathic Sliding", flavor: "There is no slide rule..." },
        ]
    },
    {
        operationName: 'division',
        toolName: 'Mathematician',
        toolNamePlural: 'Mathematicians',
        flavor: 'Thinks when given coffee.',
        standardUpgradeNames: ["Coffee", "Espresso", "A Blackboard"],
        upgrades: [
            { name: "Coffee", flavor: "Brain juice!" },
            { name: "Blackboard", flavor: "Look at all the pretty numbers!" },
            { name: "PhD", flavor: "6 years of hard work for this?" },
            { name: "Espresso", flavor: "Fire up the engines!" },
            { name: "Math Conference", flavor: "If we put them all into a room together..." },
            { name: "Post-Doc", flavor: "It\'s like a PhD, but better?" },
            { name: "Cold Brew", flavor: "I\'m tired." },
            { name: "Tenure-track", flavor: "Think of how many blackboards you can fit in your office!" },
            { name: "Grad students", flavor: "Finally, minions." },
            { name: "Liquid Caffeine", flavor: "Am I dead yet?" },
            { name: "Fields Medal", flavor: "Congrats on all of your good math!" },
        ]
    },
    {
        operationName: 'square',
        toolName: 'Astrolabe',
        toolNamePlural: 'Astrolabes',
        flavor: 'What does this dial do?',
        standardUpgradeNames: ["Precision Calibration", "Solar and Lunar Tracker", "Celestial Harmony"],
        upgrades: [
            { name: "Astrological Accuracy", flavor: "This is the dawning of the age of math." },
            { name: "Spherical Astrolabe", flavor: "Round out your calculations in style!" },
            { name: "Brass Taxes", flavor: "The brass astrolabe: heightened accuracy for only triple the weight!" },
            { name: "Nautical Navigation", flavor: "Sail away, sail away, sail away..." },
            { name: "Solar and Lunar Tracker", flavor: "Reach for the stars! They can\'t be that far away!" },
            { name: "Celestial Harmony", flavor: "Om." },
        ]
    },
    {
        operationName: 'square root',
        toolName: 'Jacquard Loom',
        toolNamePlural: 'Jacquard Looms',
        flavor: 'Clothes not pies.',
        standardUpgradeNames: ["Enhanced Thread", "More Sheep", "Grandma"],
        upgrades: [
            { name: "Fruits of the Loom", flavor: "It made an... apple?" },
            { name: "Golden Yarn", flavor: "Watch out for Rumpelstiltskin." },
            { name: "Punch Drunk Computing", flavor: "Don\'t drink and weave." },
            { name: "Grandma\'s Love", flavor: "Grandma can WEAVE." },
            { name: "Pattern Complexity", flavor: "Shed, pick, pick, shed, batten..." },
            { name: "Aperiodic Blankets", flavor: "Penrose wants 10%." },
        ]
    },
    {
        operationName: 'exponentiation',
        toolName: 'Difference Engine',
        toolNamePlural: 'Difference Engines',
        flavor: 'This has too many gears.',
        standardUpgradeNames: ["Bigger Crank", "Oil the Gears", "Mechanical Minion"],
        upgrades: [
            { name: "Metal Marvel", flavor: "4 tons of math mania!" },
            { name: "Bigger Crank", flavor: "Yep." },
            { name: "More Gears", flavor: "Never enough gears." },
            { name: "Mechanical Minion", flavor: "A friend to keep you company." },
            { name: "The Completed Difference Engine", flavor: "Only 200 years late." },
        ]
    },
    {
        operationName: 'logarithm',
        toolName: 'Analytical Engine',
        toolNamePlural: 'Analytical Engines',
        flavor: 'We need Ada for this.',
        standardUpgradeNames: ["Extra Analysis", "For Loops", "Turing Completeness"],
        upgrades: [
            { name: "Arithmetic Logic Unit", flavor: "It\'s time to do your bit!" },
            { name: "For Loops", flavor: "Now you can solve this problem, and this problem, and this problem, and this problem..." },
            { name: "Conditional Branching", flavor: "If you figure out this problem, then you get some pie!" },
            { name: "Integrated Memory", flavor: "For all that math you\'re dying to forget!" },
            { name: "Turing Completeness", flavor: "You complete me." },
            { name: "The Ada Lovelace Upgrade", flavor: "So that\'s what we do with this thing!" },
        ]
    },
    {
        operationName: 'mod + and -',
        toolName: 'Keypunch Machine',
        toolNamePlural: 'Keypunch Machines',
        flavor: 'Increases the genus of a punchcard.',
        standardUpgradeNames: ["Unstick the Keys", "Bigger Cards", "Punch it Up"],
        upgrades: [
            { name: "Automated Punching", flavor: "What will I do with all this grip strength now..." },
            { name: "Unstick the Keys", flavor: "Why are they sticky?" },
            { name: "Bit Bucket", flavor: "For all your hanging chads." },
            { name: "Bigger Cards", flavor: "You know what they say: the bigger the card, the more data to be processed." },
            { name: "Keypunch Operators", flavor: "The real heroes." },
        ]
    },
    {
        operationName: 'mod x and inverse',
        toolName: 'Mechanical Calculator',
        toolNamePlural: 'Mechanical Calculators',
        flavor: 'Not a toy.',
        standardUpgradeNames: ["Extra Memory", "Graphical Interface", "Calcubots"],
        upgrades: [
            { name: "Extra Memory", flavor: "What was 1+1 again?" },
            { name: "Graphical Interface", flavor: "I can see!" },
            { name: "Mechanic", flavor: "No, I can\'t fix your car." },
            { name: "Calcubots", flavor: "Oh no." },
            { name: "More Buttons", flavor: "What does this pie button do?" },
            //{ name: "", flavor: "" },
        ]
    },
    {
        toolName: 'Vacuum Tube',
        toolNamePlural: 'Vacuum Tubes',
        flavor: 'Totally tubular.',
        upgrades: [
            { name: "Enhanced Suction", flavor: "In this case it doesn't suck to suck."}, 
            {name: "Less Air", flavor: "Gasp."}, 
            {name: "Minification", flavor: "Now it can fit in just ONE room."},
        ],
    },
    {
        toolName: 'ENIAC',
        toolNamePlural: 'ENIACs',
        flavor: 'Beware the moths.',
        upgrades: [
            {name: "De-Bugging", flavor: "Working out the kinks."}, 
            {name: "De-Mothing", flavor: "Phew it wasn't my code."}, 
            {name: "I'm a Giant Brain", flavor: "Bleep blorp."}, //de-mothing is inside joke :)
        ]
    },
    {
        toolName: "WINNING",
        toolNamePlural: "WINNINGS",
        flavor: "WIN WIN WIN",
        upgrades: [
            {name: "More WIN", flavor: "WIN WIN WIN"}
        ]
    }
]

var newsBits = ['Queen Victoria wrote to Lewis Carroll (AKA Charles Dodgson) and asked for a copy of his next book. He sent her "An Elementary Treatise on Determinants."',
    'Dalí created a series of works inspired by the mathematical "catastrophe theory" of his friend René Thom.',
    'Maryam Mirzakhani won the Fields Medal in 2014, becoming the first woman to do so.',
    'The birthday "paradox": in a room with 23 people, there is a 50\% chance two of them share a birthday. With 70 people, it becomes 99\%.',
    '\\({n \\choose k} = {n \\choose n-k}\\).',
    'Von Neumann invented the merge sort algorithm in 1945.',
    '"If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is." - John von Neumann',
    '"There are certain things whose number is unknown. If we count them by threes, we have two left over; by fives, we have three left over; and by sevens, two are left over. How many things are there?" -Sunzi, around 300 AD',
    'The Chinese remainder theorem states that if \\(a,b\\) are coprime and \\(a\',b\'\\) are integers, there is exactly one integer \\(c\\) less than \\(ab\\) such that \\(c = a\' \\pmod{a}, c = b\' \\pmod{b}\\).',
    'A consequence of the Chinese remainder theorem: if \\(a,b\\) are coprime and we want to find \\(x\\) such that \\(x = a\' \\pmod{a}, x = b\' \\pmod{b}\\), we only need to solve \\(a\' = bd+b\' \\pmod{a}\\) to find \\(d\\) and then \\(x = bd+b\'\\).',
    'The Babylonian tablet Plimpton 322 lists many Pythagorean triples such as \\(12709, 13500, 18541\\). It was written around 1800 BC, long before the Pythagoreans. Some believe the tablet was intended as exercises for a class!',
    'The set of integers in \\(\\{0,1,\\dots,n-1\\}\\) coprime to \\(n\\) forms the multiplicative group of integers modulo \\(n\\). It has size equal to the number of elements less than \\(n\\) that are coprime to \\(n\\), \\(\\varphi(n)\\) (Euler\'s totient function).',
    'You can generate all Pythagorean triples like this: \\(abc, \\frac{(a^2-b^2)c}{2}, \\frac{(a^2+b^2)c}{2}\\) for any integers \\(a,b,c\\) that are all odd or all even. Euclid proved this around 300 BC.',
    'Stigler\'s law: no discovery is named after the discoverer',
    'Modular arithmetic as we know it was first formalized by Gauss in 1801.',
    'Benford\'s law states that in most distributions spanning many orders of magnitude, the first digit is most frequently 1. It has been used to detect fraud since people do not always account for this when cooking the books.',
    'There are infinitely many prime numbers. This was first proved by Euclid around 300 BC.',
    'If you wrote a paper with Paul Erdős, you have an Erdős number of 1. If you wrote a paper with someone who wrote a paper with Erdős? 2. And so on.',
    'A chaotic system is anything where a small change in the initial condiitons can propagate. Since all measurements have errors, chaotic systems cannot be simulated for long without going and re-measuring.',
    'Gravity pushes us along geodesics of spacetime.',
    'If \\(\\alpha c\\) represents my speed in space and \\(0 < \\beta \\le 1\\) my speed in time compared to an object at rest, then it is always true that \\(\\alpha^2+\\beta^2=1\\). So by some measure, everything travels at the same speed in spacetime.',
    'Fermat\'s little theorem: \\(a^{p-1} = 1 \\pmod{p}\\) for any prime \\(p\\) and any integer \\(a\\).',
    'The inequality of arithmetic and geometric means (also known as AM-GM) states that the average of a collection of positive numbers is always at least as large as their geometric mean.',
    'Hover over a problem for advice on how to solve it.',
    'You get more points and thoughts per solve if you have solved a lot correctly in a row. Speed can also help.',
    'The next research goal seem too far away? Take a break and come back when you have more pies, then improve your solve rates.',
    '8675309 is a prime number. Jenny\'s prime.',
    'Can you square the circle? Meaning, can you construct a square with area equal to a given circle using a compass and straightedge? The answer is no, because \\(\\pi\\) is transcendental.',
    'A derangement is a way of reordering a list of things so that none are in the position they started in. The number of ways to derange \\(n\\) items is the closest number to \\(\\frac{n!}{e}\\).',
    'The barber shaves everyone who does not shave themselves. Who shaves the barber?',
    'Russell\'s paradox: let \\(S\\) be the set of all sets that do not contain themselves. Does \\(S\\) contain itself?',
    'Bézout\'s Identity states that \\(ax = b \\pmod{c}\\) has a solution if and only if \\(b\\) is a multiple of the GCD of \\(a\\) and \\(c\\).',
    'A number is called algebraic if it is the root of a polynomial with rational coefficients, and transcendental otherwise. In 1882 it was shown that \\(\\pi\\) is transcendental.',
    '\\(\\sum_{i=0}^{\\infty} q^n = \\frac{1}{1-q}\\) whenever \\(|q| < 1\\). So, \\(1+\\frac{1}{2}+\\frac{1}{4}+\\frac{1}{8}+\\dots = 2\\).',
    'The Goldbach conjecture is true for all numbers up to \\(10^{18}\\).',
    '"The things of this world cannot be made known without a knowledge of mathematics." - Roger Bacon',
    '"Do not worry about your difficulties in mathematics. I can assure you mine are still greater." - Einstein.',
    '"Equations are just the boring part of mathematics. I attempt to see things in terms of geometry." - Stephen Hawking',
    'A perfect number is equal to the sum of its proper divisors. We don\'t know if any odd ones exist.',
    'The Fibonacci sequence: \\(0, 1, 1, 2, 3, 5, 8, 13, \\dots\\). Fibonacci used it in the 1200s to talk about populations of rabbits.',
    'You will still earn pies when you move to a different tab. A good idea when things are moving slow.',
    'The Catalan numbers: \\({2n \\choose n} - {2n \\choose n+1}\\). They count the number of ways to get from the lower left hand corner of an \\(n \\times n\\) grid to the upper right one without going above the diagonal between them.',
    'There are 12 people on an island and a seesaw. Everyone weighs the same except one person who is either heavier or lighter. How do you figure out who is different in three weighings? (Seen on Brooklyn 99!)',
    'The fundamental theorem of algebra: every univariate polynomial has at least one (possibly complex) root.',
    'The law of cosines: \\(c^2 = a^2 + b^2 - 2ab \\cos(\\theta)\\). Proved by Euclid circa 300 BC.',
    'The derivative of \\(e^x\\) is \\(e^x\\). So, amazingly, this function is the same as its rate of change.',
    'Euler`s identity, \\(e^{i\\pi} = -1\\), relates the imaginary number \\(i\\) to \\(\\pi\\) and \\(e\\). This is one of the most famous mathematical equations.',
    '\\(\\ln(n!)\\) is about \\(n\\ln(n)\\). So, sorting a list of \\(n\\) numbers with comparisons takes at least \\(n\\log(n)\\) steps.',
    'There are about \\(\\frac{n}{\\log n}\\) primes less than \\(n\\) for all \\(n\\). This is known as the prime number theorem.',
    'Goldbach\'s conjecture: every even number except 2 can be written as the sum of 2 primes. Solving it carries a million dollar prize.',
    'Want more thoughts? Solve the hidden questions, which are likely to appear when all your problem types have a high solve rate.',
    'An easy hash function is to send \\(x\\) to \\(ax+b \\pmod{p}\\) for a prime \\(p\\) and integers \\(a,b\\).',
    '"A mathematician is a device for turning coffee into theorems" -Erdős.',
    '"I\'ll tell you once, and I\'ll tell you again. There\'s always a prime between \\(n\\) and \\(2n\\)." -Erdős.',
    'The sum of the first \\(n\\) numbers is \\(\\frac{n(n+1)}{2}\\).',
    'The sum of the first \\(n\\) even numbers is \\(n(n+1)\\).',
    'The factorial of a positive integer, denoted \\(n!\\), is \\(n \\times (n-1) \\times \\dots \\times 1\\).',
    'The sum of the first \\(n\\) odd numbers is \\(n^2\\).',
    'The alternating sum of the first \\(n\\) numbers is \\(-n/2\\)&nbsp for even \\(n\\) and \\((n+1)/2\\) for odd.',
    'The more tools solving a problem type, the fewer problems of that kind you\'ll see.',
    'A tetrahedron has 4 vertices, 4 faces, and 6 edges.',
    'The moon is about 100 moons away from the earth. The sun is about 100 suns away. That\'s why we have lunar eclipses.',
    'The five platonic solids: tetrahedron, cube, octahedron, dodecahedron, icosahedron.',
    'The shortest path between two points on the surface of a sphere is called a geodesic.',
    'If you throw \\(n\\) balls randomly into \\(n\\) bins, we expect the bin with the most balls to have around \\(\\frac{\\log n}{\\log \\log n}\\) balls.',
    'The binomial theorem: \\((x+y)^n = \\sum_{k=0}^n {n \\choose k} x^{k} y^{n-k}\\).',
    'Bernoulli\'s inequality states: \\((1+x)^r \\ge 1+rx\\) for all \\(x \\ge -1\\) and \\(r \\ge 1\\).',
    'The characteristic of a field is the smallest number of times you need to use the multiplicative identity in a sum to get the additive identity.',
    'The characteristic polynomial \\(p(\\lambda)\\) of a square matrix \\(A\\) is \\(\\det(\\lambda I - A)\\). Its roots are the eigenvalues of \\(A\\).',
    'The quadratic equation is \\(x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}\\) which gives the solutions to \\(ax^2+bx+c=0\\).',
    'The discriminant of a quadratic polynomial is \\(b^2-4ac\\).',
    '\\(\\cos(t)=\\cos(-t)\\) and \\(\\sin(t)=-\\sin(-t)\\). One more: \\(\\sin^2(t)+\\cos^2(t)=1\\).',
    'The speed a wave travels through a medium depends on its frequency. See: rainbows.',
    'The sum of the eigenvalues of a matrix is its trace. Their product? The determinant.',
    'The entropy in bits of a random variable with \\(k\\) outcomes each occuring with probability \\(p_1,\\dots,p_k\\) is \\(\\sum_{i=1}^k -p_i\\log_2(p_i)\\).',
    'Euler\'s polyhedral formula: \\(|V|-|E|+|F|=2\\). Try it for a tetrahedron.'];
//'The Cauchy-Schwarz inequality states that&nbsp;\\(|\langle u, v\rangle|^2 \le \langle u,u \rangle \cdot \langle v, v \rangle\\)&nbsp;for all vectors&nbsp;\\(u,v\\)&nbsp;in an inner product space.',
//Chebyshev
//Cheeger
//Jensen? 

const pythagoreanTriples = [[3, 4, 5], [6, 8, 10], [9, 12, 15], [5, 12, 13], [10, 24, 26], [8, 15, 17], [7, 24, 25], [20, 21, 29]];
const pythagoreanQuadruples = [[1, 2, 2, 3], [2, 10, 11, 15], [2, 3, 6, 7], [1, 12, 12, 17], [1, 4, 8, 9], [8, 9, 12, 17], [4, 4, 7, 9], [2, 6, 9, 11], [6, 6, 7, 11], [6, 10, 15, 19], [3, 4, 12, 13], [2, 5, 14, 15]];
const quadraticsWithIntegerSolutions = [
    [1, 1, -20, [4, -5]],
    [4, 8, -32, [2, -4]],
    [1, -1, -20, [-4, 5]],
    [8, 0, -200, [5, -5]], [5, 30, -35, [1, -7]],
    [4, 20, 0, [-5, 0]],
    [3, -24, 0, [0, 8]]
];




const mathematicians_summary_quippy = [
    { name: "Euclid", summary: "Geometry's founding father." },
    { name: "Alan Turing", summary: "Father of modern computing." },
    { name: "Bernhard Riemann", summary: "His hypothesis still has us guessing." },
    { name: "Georg Cantor", summary: "Made infinity a legitimate subject of study." },
    { name: "Andrew Wiles", summary: "Solved Fermat's Last Theorem." },
    { name: "Paul Erdős", summary: "Wrote more papers than you." },
    { name: "Ada Lovelace", summary: "Wrote the first computer program." },
    { name: "Fibonacci", summary: "Introduced the West to Arabic numerals and rabbits." },
    { name: "Pierre de Fermat", summary: "Did math in the margins." },
    { name: "Leibniz", summary: "Calculus co-creator and notation innovator." },
    { name: "Felix Klein", summary: "Bottled up geometry." },
    { name: "Brahmagupta", summary: "Introduced zero and negative numbers." },
    { name: "Dorothy Vaughan", summary: "Human computer, NASA pioneer." },
    { name: "Katherine Johnson", summary: "Calculated Apollo's giant leap." },
    { name: "Mary Jackson", summary: "NASA engineer, broke racial barriers." },
    { name: "Descartes", summary: "I think, therefore I graph." },
    { name: "Archimedes", summary: "Eureka! Did calculus before calculus." },
    { name: "Pythagoras", summary: "A 6th century BC figure who may or may not have been a mathematician. But his followers were really into math (and very weird). Also, triangles!" },
    { name: "Isaac Newton", summary: "Gravity wasn't his only discovery, but it was a big one." },
    { name: "Gauss", summary: "Prince of Mathematicians and king of bell curves." },
    { name: "Euler", summary: "He had an eye for mathematics (literally, one eye)." },
    { name: "Sophie Germain", summary: "A prime example of a self-taught genius." },
    { name: "Évariste Galois", summary: "Revolutionary in math and politics." },
    { name: "David Hilbert", summary: "23 problems but geometry ain't one." },
    { name: "Ramanujan", summary: "Mathematical magician from Madras." },
    { name: "Emmy Noether", summary: "E=mc²'s less famous but equally brilliant cousin." },
    { name: "Laplace", summary: "Transformed math, astronomically." },
    { name: "Joseph Fourier", summary: "Turned heat into mathematical waves." },
    { name: "Henri Poincaré", summary: "Chaos theory's chaotic theorist." },
    { name: "Blaise Pascal", summary: "Wagered on probability, won in mathematics." },
    { name: "John von Neumann", summary: "Math, physics, computer science - he did it all." },
    { name: "Kurt Gödel", summary: "Incomplete, but his theorems aren't." },
    { name: "Mary Cartwright", summary: "Chaos in the system? She studied it." },
    { name: "G.H. Hardy", summary: "A mathematician's apology, but no regrets." },
    { name: "Niels Abel", summary: "Proof that not all equations can be solved." },
    { name: "Richard Feynman", summary: "Quantum mechanics' charismatic cowboy." },
    { name: "John Nash", summary: "Beautiful mind, game theory master." },
    { name: "Leonardo da Vinci", summary: "Renaissance man with a side of math." },
    { name: "Hypatia", summary: "Ancient mathematician, philosopher, and astronomer." },
    { name: "Jacobi", summary: "Transformed math with his elliptic functions." },
    { name: "Joseph-Louis Lagrange", summary: "Mechanics and calculus? He made it Lagrangian." },
    { name: "Cauchy", summary: "Defined continuity, literally." },
    { name: "William Rowan Hamilton", summary: "Turned algebra into a 4D adventure." },
    { name: "Andrey Kolmogorov", summary: "Father of modern probability theory." },
    { name: "Liu Hui", summary: "Ancient Chinese math whiz." },
    { name: "al-Khwārizmī", summary: "His name literally means 'the algorithm guy'." },
    { name: "Shakuntala Devi", summary: "Human computer with a flair for numbers." },
    { name: "Omar Khayyam", summary: "Poet of the stars and quadratic equations." },
    { name: "Thales of Miletus", summary: "First to go geometric in Greece." },
    { name: "Aryabhata", summary: "Indian astronomer and early calculator." },
    { name: "Diophantus", summary: "Ancient algebra's founding father." },
    { name: "Maria Agnesi", summary: "Witch of Agnesi wasn't a real witch." },
    { name: "Johann Bernoulli", summary: "It's all relative in the Bernoulli family." },
    { name: "Johannes Kepler", summary: "Planetary motion's grand poobah." },
    { name: "Christiaan Huygens", summary: "Waved hello to wave theory." },
    { name: "Poisson", summary: "Had a knack for statistics and fishy distributions." },
    { name: "Eudoxus of Cnidus", summary: "Ancient Greek ratio master." },
    { name: "Heron of Alexandria", summary: "Ancient inventor, part-time mathematician." },
    { name: "Apollonius of Perga", summary: "Conic sections' connoisseur." },
    { name: "Pappus of Alexandria", summary: "Geometry's great late bloomer." },
    { name: "Nikolai Lobachevsky", summary: "Non-Euclidean geometry's bold pioneer." },
    { name: "Sophus Lie", summary: "Lie groups' founding father." },
    { name: "Banach", summary: "Space man of mathematics." },
    { name: "André Weil", summary: "Found beauty in abstract algebra." },
    { name: "Alexander Grothendieck", summary: "Reimagined geometry, topologically." },
    { name: "Terence Tao", summary: "Math prodigy turned Fields Medalist." },
    { name: "Grigori Perelman", summary: "Solved Poincaré, shunned the spotlight." },
    { name: "Edward Witten", summary: "String theory's mathematical maestro." },
    { name: "John Conway", summary: "Played the Game of Life with math." },
    { name: "Sofia Kovalevskaya", summary: "Broke barriers in 19th-century mathematics." },
    { name: "Émilie du Châtelet", summary: "Enlightened mathematician, Voltaire's muse." },
    { name: "Mary Somerville", summary: "Pioneering polymath and science writer." },
    { name: "Maryam Mirzakhani", summary: "Revolutionized the geometry of surfaces." },
    { name: "Ingrid Daubechies", summary: "Transformed signals with wavelets." },
    { name: "Lorraine Foster", summary: "Mathematical insights in quantum theory." },
    { name: "Yitang Zhang", summary: "Tamed prime numbers' twin secrets." },
    { name: "Michael Atiyah", summary: "Bridged math and physics." },
    { name: "Paul Erdös", summary: "Mathematical nomad, prolific collaborator." },
    { name: "Roger Penrose", summary: "Twisted physics into new math." },
    { name: "Maxwell", summary: "Electromagnetic fields' master." },
    { name: "Albert Einstein", summary: "Turned E=mc² into celebrity equation." },
    { name: "Henrietta Leavitt", summary: "Unlocked the scale of the cosmos." },
    { name: "Karl Weierstrass", summary: "Father of modern analysis." },
    { name: "Maurice Fréchet", summary: "Pioneered abstract spaces and metrics." },
    { name: "Shiing-Shen Chern", summary: "Revolutionized differential geometry." },
    { name: "Charles Babbage", summary: "Conceived the first mechanical computer." },
    { name: "George Boole", summary: "Boole's logic laid groundwork for computers." },
    { name: "Gerolamo Cardano", summary: "Gambler, physician, polynomial solver." },
    { name: "Galileo Galilei", summary: "Math met the telescope, changed everything." },
    { name: "Legendre", summary: "Squared the triangle with his theorem." },
    { name: "Eratosthenes", summary: "Ancient calculator of Earth's circumference." },
];


const mathematicianSummaries = {
    "Euclid": "Ancient Greek mathematician, known as the 'Father of Geometry'.",
    "Archimedes": "Greek mathematician who found fundamental principles of physics and mechanics.",
    "Pythagoras": "Ancient Ionian Greek philosopher, known for the Pythagorean theorem.",
    "Isaac Newton": "English mathematician who formulated the laws of motion and universal gravitation.",
    "Gauss": "German mathematician, contributed significantly to many fields including number theory, statistics, analysis, differential geometry, geophysics, electrostatics, astronomy, and optics.",
    "Euler": "Swiss mathematician who made important discoveries in fields as diverse as infinitesimal calculus and graph theory.",
    "Sophie Germain": "French mathematician who made significant contributions to number theory and elasticity theory.",
    "Évariste Galois": "French mathematician who laid the foundations of group theory and Galois theory.",
    "Georg Cantor": "German mathematician known for inventing set theory and Cantor's theorem.",
    "David Hilbert": "German mathematician recognized as one of the most influential of the 19th and early 20th centuries, contributed to a variety of mathematical fields.",
    "Ramanujan": "Indian mathematician who made extraordinary contributions to mathematical analysis, number theory, infinite series, and continued fractions.",
    "Alan Turing": "English mathematician and computer scientist, widely considered to be the father of theoretical computer science and artificial intelligence.",
    "Emmy Noether": "German mathematician known for her landmark contributions to abstract algebra and theoretical physics.",
    "Laplace": "French scholar whose work was important to the development of engineering, mathematics, statistics, physics, and astronomy.",
    "Joseph Fourier": "French mathematician and physicist best known for initiating the investigation of Fourier series.",
    "Henri Poincaré": "French mathematician and physicist, known for his work in three-body problem and topology.",
    "Blaise Pascal": "French mathematician, physicist, inventor, philosopher, and writer; known for Pascal's theorem in geometry.",
    "Bernhard Riemann": "German mathematician who made contributions to analysis, number theory, and differential geometry.",
    "John von Neumann": "Hungarian-American mathematician who made major contributions to a number of fields, including mathematics, physics, economics, and statistics.",
    "Kurt Gödel": "Austro-Hungarian-born mathematician, logician, and philosopher; known for his incompleteness theorems.",
    "Paul Erdős": "Hungarian mathematician known for his prolific contributions to number theory and graph theory.",
    "Mary Cartwright": "British mathematician who made significant contributions to the theory of nonlinear differential equations.",
    "G.H. Hardy": "English mathematician known for his achievements in number theory and mathematical analysis.",
    "Andrew Wiles": "English mathematician known for proving Fermat's Last Theorem.",
    "Ada Lovelace": "English mathematician and writer, known for her work on Charles Babbage's early mechanical general-purpose computer.",
    "Niels Abel": "Norwegian mathematician who made pioneering contributions in a variety of fields.",
    "Richard Feynman": "American theoretical physicist, known for his work in the path integral formulation of quantum mechanics.",
    "John Nash": "American mathematician who made fundamental contributions to game theory, differential geometry, and the study of partial differential equations.",
    "Leonardo da Vinci": "Italian polymath whose areas of interest included invention, painting, sculpting, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography.",
    "Hypatia": "Hellenistic Neoplatonist philosopher, astronomer, and mathematician, who lived in Alexandria, Egypt.",
    "Fibonacci": "Italian mathematician, known for spreading the Hindu-Arabic numeral system in Europe and for the Fibonacci sequence.",
    "Jacobi": "German mathematician known for fundamental contributions in the field of elliptic functions and differential equations.",
    "Joseph-Louis Lagrange": "Italian-French mathematician and astronomer who made significant contributions to the fields of analysis, number theory, and both classical and celestial mechanics.",
    "Cauchy": "French mathematician known for his pioneering contributions to analysis and the theory of permutation groups.",
    "Pierre de Fermat": "French lawyer and mathematician who is given credit for early developments that led to infinitesimal calculus, including his technique of adequality.",
    "William Rowan Hamilton": "Irish mathematician who made important contributions to optics, mechanics, and algebra.",
    "Andrey Kolmogorov": "Russian mathematician who contributed to the fields of probability theory, topology, intuitionistic logic, turbulence, classical mechanics, algorithmic information theory, and computational complexity.",
    "Leibniz": "German polymath and philosopher who co-developed the infinitesimal calculus.",
    "Felix Klein": "German mathematician known for his work in group theory, complex analysis, and non-Euclidean geometry.",
    "Liu Hui": "Chinese mathematician who lived in the state of Wei during the Three Kingdoms period of China.",
    "Brahmagupta": "Indian mathematician and astronomer who wrote important works on mathematics and astronomy.",
    "al-Khwārizmī": "Persian polymath who produced works in mathematics, astronomy, and geography; known as the father of algebra.",
    "Shakuntala Devi": "Indian writer and mental calculator, popularly known as the 'human computer'.",
    "Omar Khayyam": "Persian polymath, philosopher, mathematician, astronomer and poet.",
    "Thales of Miletus": "Greek philosopher, mathematician, and astronomer who is credited with various discoveries in mathematics, astronomy, and engineering.",
    "Aryabhata": "Indian mathematician and astronomer who wrote on algebra, arithmetic, trigonometry, and spherical trigonometry.",
    "Diophantus": "Alexandrian Greek mathematician, known as the father of algebra.",
    "Maria Agnesi": "Italian mathematician who wrote one of the first comprehensive textbooks on calculus.",
    "Johann Bernoulli": "Swiss mathematician known for his contributions to calculus.",
    "Johannes Kepler": "German mathematician and astronomer who is famous for his laws of planetary motion.",
    "Christiaan Huygens": "Dutch mathematician, physicist, astronomer, and inventor, known for his work in optics and mechanics.",
    "Poisson": "French mathematician, geometer, and physicist, known for Poisson's ratio and Poisson distribution.",
    "Eudoxus of Cnidus": "Ancient Greek astronomer, mathematician, scholar and student of Plato.",
    "Heron of Alexandria": "Greek mathematician and engineer who was active in his native city of Alexandria, Roman Egypt.",
    "Apollonius of Perga": "Ancient Greek geometer and astronomer noted for his writings on conic sections.",
    "Pappus of Alexandria": "Greek mathematician, known for his work in geometry.",
    "Nikolai Lobachevsky": "Russian mathematician and geometer, known primarily for his work on hyperbolic geometry.",
    "Sophus Lie": "Norwegian mathematician who made significant contributions to the theory of continuous symmetry and applied it to the study of geometry and differential equations.",
    "Banach": "Polish mathematician who is generally considered to have been one of the world's greatest mathematicians of the 20th century.",
    "André Weil": "French mathematician who was one of the founding members of the Bourbaki group.",
    "Alexander Grothendieck": "German-born French mathematician who made significant contributions to algebraic geometry.",
    "Terence Tao": "Australian-American mathematician working in harmonicanalysis, partial differential equations, combinatorics, analytic number theory, and representation theory.",
    "Grigori Perelman": "Russian mathematician known for his work on the Poincaré conjecture and geometrization conjecture.",
    "Edward Witten": "American theoretical physicist and mathematician known for his research in string theory, quantum gravity, and supersymmetric quantum field theories.",
    "John Conway": "British mathematician active in the theory of finite groups, knot theory, number theory, combinatorial game theory and coding theory.",
    "Sofia Kovalevskaya": "Russian mathematician who made noteworthy contributions to analysis, partial differential equations, and mechanics.",
    "Émilie du Châtelet": "French mathematician, physicist, and author during the Enlightenment, known for her translation and commentary on Isaac Newton's work.",
    "Mary Somerville": "Scottish science writer and polymath, who studied mathematics and astronomy, and was nominated to be jointly the first female member of the Royal Astronomical Society.",
    "Dorothy Vaughan": "African American mathematician and human computer who worked for NASA, known for her work on the SCOUT launch vehicle program.",
    "Katherine Johnson": "African American mathematician whose calculations of orbital mechanics were critical to the success of the first and subsequent U.S. manned spaceflights.",
    "Mary Jackson": "African American mathematician and aerospace engineer at the National Advisory Committee for Aeronautics (NACA), which later became NASA.",
    "Maryam Mirzakhani": "Iranian mathematician and a professor of mathematics at Stanford University, known for her work on Riemann surfaces and their moduli spaces.",
    "Ingrid Daubechies": "Belgian physicist and mathematician, known for her work on wavelets in image compression.",
    "Lorraine Foster": "Mathematician known for her contributions to number theory and algebra.",
    "Yitang Zhang": "Chinese mathematician who made significant contributions to number theory, particularly in regard to the distribution of prime numbers.",
    "Michael Atiyah": "British-Lebanese mathematician known for his work in geometry and topology.",
    "Paul Erdös": "Hungarian mathematician known for his work in number theory, combinatorics, and probability theory.",
    "Roger Penrose": "English mathematical physicist, mathematician, and philosopher of science, known for his work in mathematical physics, in particular his contributions to general relativity and cosmology.",
    "Maxwell": "Scottish scientist in the field of mathematical physics, known for his formulation of classical electromagnetic theory.",
    "Albert Einstein": "German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.",
    "Henrietta Leavitt": "American astronomer who discovered the relation between the luminosity and the period of Cepheid variable stars.",
    "Karl Weierstrass": "German mathematician often cited as the 'father of modern analysis'.",
    "Maurice Fréchet": "French mathematician who made major contributions to the foundations of topology and abstract spaces.",
    "Shiing-Shen Chern": "Chinese-American mathematician who made significant contributions to differential geometry and topology.",
};
