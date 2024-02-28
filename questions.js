// standard question
function writeStandardQuestion(questionText, correctAnswer, tooltip, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);
    document.getElementById("options").innerHTML = generateOptionsStandard(correctAnswer, false, 0, operation);
}

// boolean for correctAnswer
function writeStandardQuestionYesNo(questionText, correctAnswer, tooltip, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);
    document.getElementById("options").innerHTML = generateYesNoOptions(correctAnswer, operation);
}

// lower and upper bounds
function writeStandardQuestionLowerUpper(questionText, correctAnswer, lowerBound, upperBound, tooltip, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);
    document.getElementById("options").innerHTML = generateOptionsLowerUpper(correctAnswer, lowerBound, upperBound, operation);
}

// deals with 12 hour and 24 hour time
function writeStandardQuestionTime(questionText, correctAnswer, military, tooltip, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);
    if(military) {
        document.getElementById("options").innerHTML = optionsToHtmlTime(generateOptionsSetStandard(correctAnswer, false, 24, operation), correctAnswer, operation);
    } else {
        document.getElementById("options").innerHTML = optionsToHtmlTime(generateOptionsSetStandard(correctAnswer, false, 12, operation), correctAnswer, operation);
    }
}
// Question with 0 and infinity
function writeLimitQuestion(questionText, correctAnswer, tooltip, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);

    options = new Set();
    options.add(correctAnswer);
    if(Math.random() <= 0.7) {
        options.add('\\infty');
    }
    while (options.size < 4) {
        options.add(Math.random() <= 0.4 ? getRandomInt(0,50) : -getRandomInt(0,30));
    }
    document.getElementById("options").innerHTML = optionsToHtml(options, correctAnswer, operation);
}

// Vector question
function writeVectorQuestion(questionText, correctAnswer, tooltip, negativeNumbers, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);

    options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        options.add(generateVector(negativeNumbers ? -getRandomInt(0,15) : getRandomInt(0,15), negativeNumbers ? -getRandomInt(0,15) : getRandomInt(0,15)));
    }
    document.getElementById("options").innerHTML = optionsToHtml(options, correctAnswer, operation);
}

// Vector question x,y
function writeVectorQuestionAbstract(questionText, correctAnswer, tooltip, negativeNumbers, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);

    options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        options.add(generateVector(`${-getRandomInt(2,6)}x + ${getRandomInt(2,6)}y`,`${-getRandomInt(2,6)}x + ${getRandomInt(2,6)}y`));
    }
    document.getElementById("options").innerHTML = optionsToHtml(options, correctAnswer, operation);
}

// Matrix question
function writeMatrixQuestion(questionText, correctAnswer, tooltip, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);

    options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        options.add(generateMatrix(getRandomInt(-10,10), getRandomInt(-10,10), getRandomInt(-10,10), getRandomInt(-10,10)));
    }
    document.getElementById("options").innerHTML = optionsToHtml(options, correctAnswer, operation);
}

// Matrix question
function writeSmallMatrixQuestion(questionText, correctAnswer, tooltip, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);

    options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        options.add(generateMatrix(getRandomInt(-2,2), getRandomInt(-2,2), getRandomInt(-2,2), getRandomInt(-2,2)));
    }
    document.getElementById("options").innerHTML = optionsToHtml(options, correctAnswer, operation);
}

// Decimal question
function writeDecimal01Question(questionText, correctAnswer, tooltip, operation) {
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);

    options = new Set();
    options.add(correctAnswer.toFixed(3));
    while (options.size < 4) {
        if(Math.random() < 0.1) {
            options.add((0).toFixed(3));
        } else if(Math.random() < 0.1) {
            options.add((1).toFixed(3));
        } else {
            options.add(Math.random().toFixed(3) * (Math.random() <= 0.5 ? -1 : 1));
        }
    }
    document.getElementById("options").innerHTML = optionsToHtml(options, correctAnswer.toFixed(3), operation);
}

// Mod question with no answer possibly
function modTimesH1Question(operation) {
    modulo = getRandomInt(4, 10); a = getRandomInt(2, modulo - 1); b = getRandomInt(1, modulo - 1);
    tooltip = `The second hidden modular inverse question. If \\(${a}\\) and \\(${modulo}\\) are relatively prime, multiply \\(${a}^{-1}\\pmod{${modulo}}\\) on both sides. Otherwise, start at 1 and increase \\(x\\) until you hit 0 (no integer solutions) or \\(${b}\\).`;
    let questionText = `Solve for \\(x\\) in \\(${a}x = ${b} \\pmod{${modulo}}\\).`;
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);

    correctAnswer = solveModEquation(a, b, modulo);
    options = new Set();
    options.add(correctAnswer);
    if(Math.random() <= 0.7) {
        options.add('\\text{No integer solution}');
    }
    while (options.size < 4) {
        options.add(getRandomInt(0,modulo));
    }
    document.getElementById("options").innerHTML = optionsToHtml(options, correctAnswer, operation);
}

// Exp options
function expH1Question(operation) {
    a = getRandomInt(3, 6); b = getRandomInt(2, 4);
    questionText = `I roll \\(${b}\\) dice with \\(${a}\\) sides. What is the probability they all land on the same number?`,
    correctAnswer = a ** (b - 1),
    tooltip = `Hidden question 13. First compute the probability they all land on a single number, say 1. Then multiply that by \\(${a}\\).`
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, questionText);
    document.getElementById("options").innerHTML = generateOptionsExp(`\\frac{1}{${correctAnswer}}`, a, true, operation); 
}

// -
function subtractionQuestionStandard(num1, num2, operation) {
    let tooltip = `The inverse of addition. What number plus \\(${num2}\\) would give \\(${num1}\\)?`;
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1} - ${num2}\\)`); 
    document.getElementById("options").innerHTML = generateOptionsStandard(num1 - num2, true, 0, operation);
}

// x
function multiplicationQuestionStandard(num1, num2, operation) {
    let tooltip = `Multiplication is like repeated adding: add \\(${num2}\\) copies of \\(${num1}\\) together.`;
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1} \\times ${num2}\\)?`); 
    document.getElementById("options").innerHTML = generateOptionsStandard(num1 * num2, false, 0, operation);
}

// ÷
function divisionQuestionStandard(num1, num2, operation) {
    let tooltip = `The inverse of multiplication. What number multiplied by \\(${num1}\\) would give \\(${num1 * num2}\\)?`;
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1 * num2} \\div ${num1}\\)?`); 
    // Correct answer is num2
    document.getElementById("options").innerHTML = generateOptionsStandard(num2, false, 0, operation);
}

// square
function squareQuestionStandard(num1, operation) {
    let tooltip = `If you can multiply, you can square: it's \\(${num1} \\times ${num1}\\)`;
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1}^2\\)?`); 
    document.getElementById("options").innerHTML = generateOptionsStandard(num1 ** 2, false, 0, operation);
}

// squareroot
function squareRootQuestionStandard(num1, operation) {
    let tooltip = `The inverse of squaring a number: what number, when squared, is \\(${num1 ** 2}\\)?`;
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(\\sqrt{${num1 ** 2}}\\)`); 
    document.getElementById("options").innerHTML = generateOptionsStandard(num1, false, 0, operation);
}

// exponent
function exponentQuestionStandard(operation) {
    let num1 = getRandomInt(2, 4);
    if(Math.random() <= 0.05) {
        num1 = 1;
    }
    let num2 = getRandomInt(0, 5);
    while (num2 === 2) {
        num2 = getRandomInt(0, 5);
    }
    let tooltip = `Like squaring, but more times. Multiply \\(${num1}\\) by itself \\(${num2}\\) times. (Anything raised to the 0 is 1.)`;
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1}^${num2}\\)?`); 
    document.getElementById("options").innerHTML = generateOptionsExp(num1 ** num2, num1, false, operation);
}

// log
function logQuestionStandard(operation) {
    let base = getRandomInt(2, 4);
    let exponent = getRandomInt(0, 8);
    if (base === 4) {
        exponent = getRandomInt(1, 4);
    } else if (base === 3) {
        exponent = getRandomInt(0, 5);
    }
    correctAnswer = exponent;
    let tooltip = `The inverse of exponents. What number \\(x\\) is the solution to \\(${base}^{x} = ${base ** exponent}\\)?`;
    document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(\\log_{${base}}(${base ** exponent})\\)?`); 
    document.getElementById("options").innerHTML = generateOptionsStandard(exponent, false, 0, operation);
}

// + and - mod
function pmModQuestionStandard(num1, num2, operation) {
    let modulo = getRandomInt(2, 7);
    if (Math.random() < 0.5) {
        correctAnswer = (num1 + num2) % modulo;
        let tooltip = `\\(a \\pmod{b}\\) is equal to the remainder after you divide \\(a\\) by \\(b\\). For example, \\(12 \\pmod{2} = 0\\) and \\(12 \\pmod{5} = 2\\).`;
        document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1} + ${num2} \\pmod{${modulo}}\\)?`); 
        document.getElementById("options").innerHTML = generateOptionsStandard(correctAnswer, false, modulo, operation);
    } else {
        correctAnswer = (num1 - num2) % modulo;
        while(correctAnswer < 0) {
            correctAnswer += modulo;
        }
        let tooltip = `\\(a \\pmod{b}\\) is equal to the remainder after you divide \\(a\\) by \\(b\\). For example, \\(5 \\pmod{2} = 1\\). If \\(a\\) is negative, add \\(b\\) until it is not, so that \\(-9 \\pmod{4} = 3\\).`;
        document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1} - ${num2} \\pmod{${modulo}}\\)?`); 
        document.getElementById("options").innerHTML = generateOptionsStandard(correctAnswer, false, modulo, operation);
    }
}

// x and inv mod
function multInvModQuestionStandard(num1, num2, operation) {
    let modulo = getRandomInt(2, 11);
    if (Math.random() < 0.5) {
        correctAnswer = (num1 * num2) % modulo;
        let tooltip = `\\(a \\pmod{b}\\) is equal to the remainder after you divide \\(a\\) by \\(b\\). For example, \\(12 \\pmod{2} = 0\\) and \\(12 \\pmod{5} = 2\\).`;
        document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1} \\times ${num2} \\pmod{${modulo}}\\)?`); 
        document.getElementById("options").innerHTML = generateOptionsStandard(correctAnswer, false, modulo, operation);
    } else {
        modulo = getRandomInt(3, 11);
        while (!isPrime(modulo)) {
            modulo = getRandomInt(3, 11);;
        }
        num1 = getRandomInt(2, modulo - 1);
        correctAnswer = modInverse(num1, modulo);
        let tooltip = `\\(a^{-1} \\pmod{b}\\) is the number \\(x\\) which, multiplied by \\(a\\), becomes \\(1 \\pmod{b}\\). For example, \\(2^{-1} \\pmod{3} = 2\\). Such a number exists if \\(a\\) and \\(b\\) are relatively prime, i.e. have a GCD of 1.`;
        document.getElementById("question").innerHTML = generateQuestionHTML(tooltip, `What is \\(${num1}^{-1} \\pmod{${modulo}}\\)?`); 
        document.getElementById("options").innerHTML = generateOptionsStandard(correctAnswer, false, modulo, operation);
    }
}

function generateOptionsSetStandard(correctAnswer, negative, mod) {
    let options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        let option = Math.floor(Math.random() * (Math.abs(correctAnswer) + 6));
        if(negative && Math.random() <= 0.5) {
            option = -option;
        }
        if(mod > 0) {
            if(mod <= 3) {
                option = option % (mod + 2);
            } else {
                option = option % mod;
            }
        }
        // A failsafe to make sure this can't run forever
        if (Math.random() <= 0.01) {
            option = Math.floor(Math.random() * 12);
        }
        options.add(option);
    }
    return options;
}

function generateOptionsStandard(correctAnswer, negative, mod, operation) {
    return optionsToHtml(generateOptionsSetStandard(correctAnswer, negative, mod), correctAnswer, operation);
}

function generateOptionsLowerUpper(correctAnswer, lowerBound, upperBound, operation) {
    if(upperBound - lowerBound < 4) {
        upperBound = lowerBound + 4;
    }
    let options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        let option = getRandomInt(lowerBound, upperBound);
        // A failsafe to make doubly sure this can't run forever
        if (Math.random() <= 0.01) {
            option = Math.floor(Math.random() * 12);
        }
        options.add(option);
    }
    return optionsToHtml(options, correctAnswer, operation);
}

// Boolean for correct answer
function generateYesNoOptions(correctAnswer, operation) {
    let optionsHtml = '';
    optionsHtml += `<button class="option" onclick="checkAnswerBool(event, ${correctAnswer}, ${operation})">Yes</button>`;
    optionsHtml += `<button class="option" onclick="checkAnswerBool(event, ${!correctAnswer}, ${operation})">No</button>`;
    return optionsHtml;
}

function generateOptionsExp(correctAnswer, base, isFraction, operation) {
    let options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        let option = base ** (Math.floor(Math.random() * 6));
        if(base === 1) {
            option = getRandomInt(0,6);
        }
        // A failsafe to make sure this can't run forever
        if (Math.random() <= 0.01) {
            option = Math.floor(Math.random() * 12);
        }
        if(isFraction) {
            options.add(`\\frac{1}{${option}}`);
        } else {
            options.add(option);
        }
    }
    return optionsToHtml(options, correctAnswer, operation);
}

function optionsToHtml(options, correctAnswer, operation) {
    let optionsArray = Array.from(options);
    shuffleArray(optionsArray);
    let optionsHtml = '';
    optionsArray.forEach(option => {
        optionsHtml += `<button class="option" onclick="checkAnswerBool(event, ${option === correctAnswer}, ${operation})">\\(${option}\\)</button>`;
    });
    return optionsHtml;
}

function optionsToHtmlTime(options, correctAnswer, operation) {
    let optionsArray = Array.from(options);
    shuffleArray(optionsArray);
    let optionsHtml = '';
    optionsArray.forEach(option => {
        optionsHtml += `<button class="option" onclick="checkAnswerBool(event, ${option === correctAnswer}, ${operation})">${option}:00</button>`;
    });
    return optionsHtml;
}

function generateQuestionHTML(tooltipText, questionText) {
    return `<span class="tooltiptext">${tooltipText}</span>${questionText}`
}