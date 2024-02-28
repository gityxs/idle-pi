// PPS for 1 tool of type i -- Important constants, 4 and 5!
function PPS1Tool(i) {
    return (4.5 ** i) / 5 * info.toolUpgrades[i];
}
// How many units are produced by the tool of type i
function toolOutput(i) {
    return PPS1Tool(i) * info.toolCount[i];
}

function updateScore(change) {
    info.score += change;
    if (change >= 0) {
        info.scoreAllTime += change;
    }
    document.getElementById('score').innerHTML = `${formatNumberToPrecisionWithBreak(info.score,3,false)} pies`;
}

function updateThoughts(change) {
    info.thoughts += change;
    if (change >= 0) {
        info.thoughtsAllTime += change;
    }
    document.getElementById('thoughts').innerText = `Thoughts: ${formatNumberToPrecision(info.thoughts,3,false)}`;
}


// Creates the boring upgrades
function createStandardUpgrades() {
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].upgrades.length; j++) {
            upgrades.push({
                name: data[i].upgrades[j].name,
                flavor: data[i].upgrades[j].flavor,
                tool: i,
                upgradeNum: j,
                cost: { numPoints: (15 * (6.2 ** i)) * (5.3 ** (j + 1)), numThoughts: (6 * (5 ** i)) * (3.5 ** (j + 1)) },
                available: false,
                purchased: false,
                standard: true
            })
        }
    }
}

// Buy the Standard upgrade
function upgradeStandard(upgrade, button) {
    if(info.score >= upgrade.cost.numPoints && info.thoughts >= upgrade.cost.numThoughts) {
       info.toolUpgrades[upgrade.tool] = info.toolUpgrades[upgrade.tool] * 2;
       updateScore(-upgrade.cost.numPoints);
       updateThoughts(-upgrade.cost.numThoughts);
       upgrade.purchased = true;
       button.remove();
    }
}

function getUpgradeTooltipContent(upgrade) {
    return `
    <div class="custom-tooltip">
    <div class="topoftooltip">
        <img src="Sprites/${getToolName(upgrade.tool)}_sprite.png">
        <div class="topoftooltiptext">
            <div class="tooltip-title">${upgrade.name}</div>
            <div class="tooltip-data1">"${upgrade.flavor}"</div>
            <div class="tooltip-price">${formatNumberToPrecision(upgrade.cost.numPoints,2,false)} pies, ${formatNumberToPrecision(upgrade.cost.numThoughts,2,false)} thoughts</div>
        </div>
    </div>
    <ul class="tooltip-text" style="margin-left: 15px;">
        <li>Doubles the production of ${getToolNamePlural(upgrade.tool)}.</li>
        <li>Improves solving speed of ${getToolNamePlural(upgrade.tool)} by 40%.</li>
    </ul>
    </div>`
}


// Creates the achieves
function createStandardAchievements() {
    for (i = 0; i < 12; i++) {
        [5, 8, 13, 21, 34, 55, 89, 144].forEach((j) => {
            achievements.push({
                name: `Have ${j} ${getToolNamePlural(i)}.`,
                id: `tool${i}count${j}`,
                achieveTest: (function (x, y) { return function () { return info.toolCount[x] >= y; } })(i, j),
                achieved: info.toolCount[i] >= j,
                image: `Sprites/${getToolName(i)}_sprite.png`,
                tooltip: `You have ${j} ${getToolNamePlural(i)}`, //<b>Pebble King</b><br>
            })
        });
    }
    for (i = 0; i < 10; i++) {
        achievements.push({
            name: `You've produced ${formatNumberToPrecision(100 ** (i + 1),0,false)} pies`,
            id: `pieCount${i}`,
            achieveTest: (function (x) { return function () { return info.scoreAllTime >= (100 ** (x + 1)); } })(i),
            achieved: info.scoreAllTime >= (100 ** (i + 1)),
            image: `Sprites/pi_sprite.png`,
            tooltip: `You've produced ${formatNumberToPrecision(100 ** (i + 1),0,false)} pies`,
        });
    }
    for (i = 0; i < 10; i++) {
        achievements.push({
            name: `You've had ${formatNumberToPrecision(100 ** (i + 1),0,false)} thoughts`,
            id: `thoughtCount${i}`,
            achieveTest: (function (x) { return function () { return info.thoughtsAllTime >= (100 ** (x + 1)); } })(i),
            achieved: info.thoughtsAllTime >= (100 ** (i + 1)),
            image: `Sprites/brain_sprite.png`,
            tooltip: `You've had ${formatNumberToPrecision(100 ** (i + 1),0,false)} thoughts`,
        });
    }
    // Interesting ones
    achievements.push({
        name: "You have all the mathematicians!",
        id: `allTheMathematicians`,
        achieveTest: (function (x) { return function () { return info.toolCount[3] >= mathematicians.length; } })(i),
        achieved: info.toolCount[3] >= mathematicians.length,
        image: `Sprites/Mathematician_sprite.png`,
        tooltip: `You have all the mathematicians`,
    });
    achievements.push({
        name: "You annoyed the mathematicians a little bit.",
        id: `mathematicianClick1`,
        achieveTest: (function (x) { return function () { return info.mathematicianPokes >= 15; } })(i),
        achieved: info.mathematicianPokes >= 15,
        image: `Sprites/Mathematician_sprite.png`,
        tooltip: `You annoyed the mathematicians a little bit`,
    });
    achievements.push({
        name: "The mathematicians look testy.",
        id: `mathematicianClick2`,
        achieveTest: (function (x) { return function () { return info.mathematicianPokes >= 100; } })(i),
        achieved: info.mathematicianPokes >= 100,
        image: `Sprites/Mathematician_sprite.png`,
        tooltip: `You made the mathematicians testy`,
    });
    achievements.push({
        name: "You really annoyed the mathematicians. That should help.",
        id: `mathematicianClick3`,
        achieveTest: (function (x) { return function () { return info.mathematicianPokes >= 271; } })(i),
        achieved: info.mathematicianPokes >= 271,
        image: `Sprites/Mathematician_sprite.png`,
        tooltip: `You really annoyed the mathematicians. They work harder now.`,
    });
    for(i = 1; i <= 6; i++) {
       achievements.push({
           name: `Mathematician Multipler of ${1+0.5*i}`,
           id: `mathematicianMultiplier${i}`,
           achieveTest: (function (x) { return function () { return mathematicianMultiplier() >= (1+0.5*x); } })(i),
           achieved: mathematicianMultiplier() >= (1+0.5*i),
           image: `Sprites/Mathematician_sprite.png`,
           tooltip: `You got a mathematician multiplier of ${1+0.5*i}`,
       });
    }
    achievements.push({
        name: "Recruit Will Hunting",
        id: `mathematicianGetWill`,
        achieveTest: (function (x) { return function () { return info.gotWillHunting; } })(i),
        achieved: info.gotWillHunting,
        image: `Sprites/Mathematician_sprite.png`,
        tooltip: `Recruited Will Hunting`,
    });
    achievements.push({
        name: "Produce pi pies from the pie",
        id: `piClick`,
        achieveTest: (function (x) { return function () { return info.piClicks >= 10; } })(i),
        achieved: info.piClicks >= 10,
        image: `Sprites/pi_sprite.png`,
        tooltip: `You clicked pi pies worth of pie from the pie`,
    });
    achievements.push({
        name: "Produce 10pi pies from the pie",
        id: `piClick`,
        achieveTest: (function (x) { return function () { return info.piClicks >= Math.ceil(100*Math.PI); } })(i),
        achieved: info.piClicks >= Math.ceil(100*Math.PI),
        image: `Sprites/pi_sprite.png`,
        tooltip: `You clicked 10pi pies worth of pie from the pie`,
    });
    achievements.push({
        name: "You clicked the brain 100 times??",
        id: `brainClick`,
        achieveTest: (function (x) { return function () { return info.brainClicks >= 100; } })(i),
        achieved: info.brainClicks >= 32,
        image: `Sprites/brain_sprite.png`,
        tooltip: `You clicked the brain 100 times for some reason`,
    });
    achievements.push({
        name: "You excited the brain!",
        id: `brainExcited`,
        achieveTest: (function (x) { return function () { return info.excitedTheBrain; } })(i),
        achieved: info.excitedTheBrain,
        image: `Sprites/brain_sprite.png`,
        tooltip: `You excited the brain with your speed and accuracy`,
    });
}

// Check for achievements
function checkForAvailableAchievements() {
    achievements.forEach(achievement => {
        if (!achievement.achieved && achievement.achieveTest()) {
            achievement.achieved = true;
            showAchievement(achievement.name, achievement.image, true);
        }
    });
}

// Creates upgrades when available
function checkForAvailableUpgrades() {
    upgrades.forEach(upgrade => {
        if (!upgrade.available && info.scoreAllTime >= upgrade.cost.numPoints && info.thoughtsAllTime >= upgrade.cost.numThoughts && info.operationCount > upgrade.tool && info.toolCount[upgrade.tool] >= 7 * (1 + upgrade.upgradeNum)) {
            upgrade.available = true;
            const upgradeWrapper = document.createElement('div');
            upgradeWrapper.className = 'wrapperUpgrade';
            upgradeWrapper.id = `wrapper${upgrade.tool}and${upgrade.upgradeNum}`;
            const newUpgrade = document.createElement('button');
            newUpgrade.className = 'upgrade';
            newUpgrade.innerHTML = `<img src="Sprites/${getToolName(upgrade.tool)}_sprite.png">`;
            newUpgrade.id = `upgrade${upgrade.name}`;
            //newUpgrade.onclick = () => upgrade.purchase(newUpgrade);
            newUpgrade.onclick = () => upgradeStandard(upgrade, newUpgrade);
            newUpgrade.disabled = true;
            upgradeWrapper.appendChild(newUpgrade);
            document.getElementById('upgradeShop').appendChild(upgradeWrapper);
            tippy(`#wrapper${upgrade.tool}and${upgrade.upgradeNum}`, {
                content: getUpgradeTooltipContent(upgrade),
                placement: 'left',
                allowHTML: true,
                theme: 'left-align',
            });
        }
    });
}

function addSprite(m) {
    var container = document.getElementById('spriteContainer');
    var spriteCount = container.children.length;

    // Calculate the x and y positions for the new sprite
    var column = Math.floor(spriteCount / 3); // New column every 3 sprites
    var row = spriteCount % 3; // 3 sprites per column

    var newSprite = document.createElement('img');
    newSprite.src = `Sprites/mathematician_${getRandomInt(1, 10)}.png`; // Replace with your sprite's path
    newSprite.classList.add('sprite');
    newSprite.style.left = (column * 40 + ((row % 2) * 15)) + 'px'; // Adjust 70 to your sprite width
    newSprite.style.top = (row * 48) + 'px'; // 40px is 1/5 of the container height
    newSprite.onclick = () => {
        newSprite.classList.toggle('clicked');
        info.mathematicianPokes++;
        setTimeout(() => {
            newSprite.classList.toggle('clicked');
        }, 100); // Match the duration of the animation
    }

    container.appendChild(newSprite);
    tippy(newSprite, {
        content: mathematicians[m % mathematicians.length],
    })
}

function updateJiggleAnimation() {
    var image = document.getElementById('brain');
    image.style.setProperty('scale', Math.min(1.3, 0.88 + 0.03 * Math.sqrt(16 + correctInARow)));
}


// Shuffles the options 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Makes big numbers readable 
function formatNumberToPrecision(num, precision, decimalsForSmall) {
    if (num < 1e6) {  // Millions
        return num % 1 === 0 ? num : (decimalsForSmall ? num.toFixed(2) : num.toFixed(0));
    } else if (num < 1e9) {  // Billions
        return (num / 1e6).toFixed(precision) + ' million';
    } else if (num < 1e12) {  // Trillions
        return (num / 1e9).toFixed(precision) + ' billion';
    } else if (num < 1e15) {  // Quadrillions
        return (num / 1e12).toFixed(precision) + ' trillion';
    } else if (num < 1e18) {  // Quintillions
        return (num / 1e15).toFixed(precision) + ' quadrillion';
    } else if (num < 1e21) {  // Sextillions
        return (num / 1e18).toFixed(precision) + ' quintillion';
    } else if (num < 1e24) {  // Septillions
        return (num / 1e21).toFixed(precision) + ' sextillion';
    } else if (num < 1e27) {  // Octillions
        return (num / 1e24).toFixed(precision) + ' septillion';
    } else if (num < 1e30) {  // Nonillions
        return (num / 1e27).toFixed(precision) + ' octillion';
    } else {  // Decillions and beyond
        return (num / 1e30).toFixed(precision) + ' nonillion';
    }
}

// Makes big numbers readable 
function formatNumberToPrecisionWithBreak(num, precision, decimalsForSmall) {
    if (num < 1e6) {  // Millions
        return num % 1 === 0 ? num : (decimalsForSmall ? num.toFixed(2) : num.toFixed(0));
    } else if (num < 1e9) {  // Billions
        return (num / 1e6).toFixed(precision) + '<br>million';
    } else if (num < 1e12) {  // Trillions
        return (num / 1e9).toFixed(precision) + '<br>billion';
    } else if (num < 1e15) {  // Quadrillions
        return (num / 1e12).toFixed(precision) + '<br>trillion';
    } else if (num < 1e18) {  // Quintillions
        return (num / 1e15).toFixed(precision) + '<br>quadrillion';
    } else if (num < 1e21) {  // Sextillions
        return (num / 1e18).toFixed(precision) + '<br>quintillion';
    } else if (num < 1e24) {  // Septillions
        return (num / 1e21).toFixed(precision) + '<br>sextillion';
    } else if (num < 1e27) {  // Octillions
        return (num / 1e24).toFixed(precision) + '<br>septillion';
    } else if (num < 1e30) {  // Nonillions
        return (num / 1e27).toFixed(precision) + '<br>octillion';
    } else {  // Decillions and beyond
        return (num / 1e30).toFixed(precision) + '<br>nonillion';
    }
}

// Animation when you solve a problem correctly
function showSolveAnimation(x, y, pies, thoughts, gotIncorrect) {
    const container = document.getElementById('animationContainer');
    const animationText = document.createElement('div');
    animationText.style.color = 'green';
    if(gotIncorrect) {
        animationText.style.color = 'gray';
    }
    //animationText.style.backgroundColor = 'white';
    animationText.classList.add('animate-score');
    animationText.textContent = `+${formatNumberToPrecision(Math.floor(pies),2,false)}, +${formatNumberToPrecision(Math.floor(thoughts),2,false)}`;
    animationText.style.left = x + 'px';
    animationText.style.top = y + 'px';

    container.appendChild(animationText);

    // Remove the element after the animation ends
    setTimeout(() => {
        container.removeChild(animationText);
    }, 2500); // Match the duration of the animation
}

// Animation when you solve a problem incorrectly
function incorrectAnimation(x, y) {
    const container = document.getElementById('animationContainer');
    const animationText = document.createElement('div');
    animationText.style.color = 'red';
    animationText.classList.add('animate-score');
    animationText.textContent = `Incorrect`;
    animationText.style.left = x + 'px';
    animationText.style.top = y + 'px';

    container.appendChild(animationText);

    // Remove the element after the animation ends
    setTimeout(() => {
        container.removeChild(animationText);
    }, 2000); // Match the duration of the animation
}

function showSolveAnimationCustom(x, y, toDisplay, color) {
    const container = document.getElementById('animationContainer');
    const animationText = document.createElement('div');
    animationText.style.color = color;
    animationText.classList.add('animate-score');
    animationText.textContent = `${toDisplay}`;
    animationText.style.left = x + 'px';
    animationText.style.top = y + 'px';

    container.appendChild(animationText);

    // Remove the element after the animation ends
    setTimeout(() => {
        container.removeChild(animationText);
    }, 2500); // Match the duration of the animation
}

function makeImageRedder(elementId, intensity) {
    var image = document.getElementById(elementId);

    if (!image) return; // Exit if the image is not found

    // Ensure the intensity is between 0 and 1
    intensity = Math.max(0, Math.min(intensity, 1));

    // Calculate the filter values based on the intensity
    var sepiaIntensity = intensity * 100; // 100% sepia at maximum intensity
    var saturateIntensity = 1 + intensity * 9; // Up to 10 times saturation
    var hueRotateIntensity = intensity * 100; // Rotate the hue up to 100 degrees

    // Apply the filter to the image
    image.style.filter = `sepia(${sepiaIntensity}%) saturate(${saturateIntensity}) hue-rotate(${hueRotateIntensity}deg)`;
}

function generateNumbers() {
    const container = document.getElementById('numberContainer');
    document.getElementById('numberContainer').style.zIndex = 1000000;
    setTimeout(() => {
        document.getElementById('numberContainer').style.zIndex = -1;
    }, 12000); //kill in 12s
    for (let i = 0; i < 1000; i++) { // Adjust number count as needed
        const number = document.createElement('div');
        number.classList.add('number');
        number.textContent = Math.floor(Math.random() * 10); // Random number 0-9
        number.style.left = Math.random() * 100 + '%';
        number.style.top = Math.random() * 100 + '%';

        number.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        number.style.setProperty('--translateX', `${100 * (Math.random() > 0.5 ? -1 : 1)}vw`);
        number.style.setProperty('--translateY', `${100 * (Math.random() > 0.5 ? -1 : 1)}vh`);
        const animationDuration = 2 + Math.random() * 10; // 5 to 15 seconds
        number.style.animationDuration = `${animationDuration}s`;
        container.appendChild(number);
        setTimeout(() => {
            number.remove()
        }, 12000); //kill in 12s
    }
    setTimeout(() => {
        showAlertAndStartOver()
    }, 2000);
}

function generatePrimeStorm() {
    isPrimeStorm = true;
    const container = document.getElementById('numberContainer');
    document.getElementById('numberContainer').style.zIndex = 10000000;
    setTimeout(() => {
        document.getElementById('numberContainer').style.zIndex = -1;
    }, 18000); //kill in 10s
    const announcement = document.createElement('div');
    announcement.innerHTML = 'Prime storm! Click the primes!';
    //announcement.textContent = 'Prime storm! Click the primes!';
    announcement.style.fontFamily = 'Merit';
    announcement.style.fontSize = '50px';
    announcement.style.color = 'blue';
    document.getElementById('news').innerHTML = '';
    document.getElementById('news').appendChild(announcement);
    for (let i = 0; i < 55; i++) { // Adjust number count as needed
        const number = document.createElement('div');
        number.classList.add('number');
        let n = getRandomInt(1,50);
        number.textContent = n; // Random number 0-9
        number.style.left = 5+Math.random() * 90 + '%';
        number.style.top = 5+Math.random() * 90 + '%';
        if(isPrime(n)) {
            number.onclick = (event) => {
                updateSize = 2 + scoreIncrement * 20;
                updateScore(updateSize);
                updateThoughts(1+updateSize/20);
                const x = event.clientX;
                const y = event.clientY;
                showSolveAnimation(x - 10, y + 10, updateSize, 1+updateSize/20, false);
                number.remove();
            }
        } else {
            number.onclick = () => {
                number.remove();
            }
        }

        number.style.color = `hsl(${200+Math.random() * 100}, 100%, 50%)`;
        number.style.setProperty('--translateX', `${5 * (Math.random() > 0.5 ? -1 : 1)}vw`);
        number.style.setProperty('--translateY', `${5 * (Math.random() > 0.5 ? -1 : 1)}vh`);
        const animationDuration = 2 + Math.random() * 10; // 5 to 15 seconds
        number.style.animationDuration = `${animationDuration}s`;
        container.appendChild(number);
        setTimeout(() => {
            number.remove();
            isPrimeStorm = false;
            announcement.remove();
            updateNews();
        }, 18000); //kill in 10s
    }
}

function shakeyPieTime() {
    let pi = document.getElementById("pi");
    pi.style.animation = "shake 0.5s";
    pi.style.animationIterationCount = "infinite";
    pi.onclick = () => {
        if(Math.random() <= 0.4) {
            generatePrimeStorm();
        } else {
            generateQuestionStreak();
        }
        pi.style.animation = "";
        pi.style.animationIterationCount = "";
        pi.onclick = () => {};
    }
    setTimeout(() => {
        pi.style.animation = "";
        pi.style.animationIterationCount = "";
        pi.onclick = () => {};
    }, 10000);
}

function generateQuestionStreak() {
    // Should say: infinite questions
    infiniteQuestionTime = true;
    const announcement = document.createElement('div');
    announcement.textContent = 'Unlimited questions for 30 seconds';
    announcement.style.fontFamily = 'Merit';
    announcement.style.fontSize = '30px';
    announcement.style.color = 'blue';
    document.getElementById('news').innerHTML = '';
    document.getElementById('news').appendChild(announcement);
    let timeLeft = 30;
    const interval = setInterval(function() {
        timeLeft--;
        announcement.textContent = `Unlimited questions for ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(interval);
        }
    }, 1000);
    if(info.questionsLeft <= -1) {
        generateQuestion();
    }
    setTimeout(() => {
        announcement.remove();
        updateNews();
        infiniteQuestionTime = false;
        info.questionsLeft = 0;
    }, 30000); // Match the duration of the animation
}

// 
// 
// Math functions
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function choose(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime numbers

    // Check for divisibility by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for divisibility by other numbers up to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function modInverse(a, m) {
    // validate inputs
    [a, m] = [Number(a), Number(m)]
    if (Number.isNaN(a) || Number.isNaN(m)) {
        return NaN // invalid input
    }
    a = (a % m + m) % m
    if (!a || m < 2) {
        return NaN // invalid input
    }
    // find the gcd
    const s = []
    let b = m
    while (b) {
        [a, b] = [b, a % b]
        s.push({ a, b })
    }
    if (a !== 1) {
        return NaN // inverse does not exists
    }
    // find the inverse
    let x = 1
    let y = 0
    for (let i = s.length - 2; i >= 0; --i) {
        [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)]
    }
    return (y % m + m) % m
}

function gcdExtended(a, b) {
    if (a === 0) return { gcd: b, x: 0, y: 1 };

    let { gcd, x, y } = gcdExtended(b % a, a);

    return { gcd, x: y - Math.floor(b / a) * x, y: x };
}

function modularInverse(a, n) {
    let { gcd, x, y } = gcdExtended(a, n);

    if (gcd !== 1) {
        return null; // Modular inverse does not exist if gcd(a, n) is not 1
    } else {
        return (x % n + n) % n;
    }
}

function solveModEquation(a, b, m) {
    for (i = 0; i < m; i++) {
        if ((a * i) % m === b) {
            return i;
        }
    }
    return "No integer solution";
}

