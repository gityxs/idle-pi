let gotIncorrect = false;
let infiniteQuestionTime = false;
let isPrimeStorm = false;

// modinv coded questions
function generateModInvQuestion(hidden, first, op) {
    if (hidden) {
        if (first) {
            modTimesH1Question(op);
        } else {
            a = getRandomInt(15, 50); while (!isPrime(a)) { a = getRandomInt(15, 50); }
            if (Math.random() < 0.2) {
                b = a - 1;
            } else if (Math.random() < 0.2) {
                b = (a - 1) / 2;
            } else {
                b = getRandomInt(3, 12);
            }
            writeStandardQuestion(`What is \\(${b}^{-1} \\pmod{${a}}\\)? `, modInverse(b, a), `The second hidden modular inverse question. You may need to use Fermat\'s little theorem: \\(a^{p-1} = 1 \\pmod{p}\\) for any integer \\(a\\) and any prime \\(p\\). Then break \\(a^{p-1}\\) into smaller chunks, e.g. \\(a^{9} = a((a^2)^2)^2\\).`, op);
            //    a = getRandomInt(2, 11); while (gcd(a, 12) != 1) { a = getRandomInt(2, 11); }
            //    b = getRandomInt(1, 11);
            //    correctAnswer = solveModEquation(a, b, 12);
            //    writeStandardQuestion(`An alarm goes off at midnight and will ring every \\(${a}\\) hours after that. How many times will it ring again before it goes off at ${b}:00am or ${b}:00pm?`, solveModEquation(a, b, 12), `The second hidden modular inverse question. In math: solve for \\(x\\) in \\(${a}x = ${b} \\pmod{12}\\).`, op);
        }
    } else {
        multInvModQuestionStandard(getRandomInt(0, 15), getRandomInt(0, 15), op)
    }
}

// modplus coded questions
function generateModPlusQuestion(hidden, first, op) {
    if (hidden) {
        if (first) {
            a = getRandomInt(0, 23); b = getRandomInt(20, 40);
            writeStandardQuestionTime(`It is ${a}:00 in military time. What time will it be in ${b} hours?`, (a + b) % 24, true, `The first hidden mod question. This is \\(${a} + ${b} \\pmod{24}\\).`, op);
        } else {
            a = getRandomInt(0, 23); b = getRandomInt(20, 40);
            correctAnswer = (a - b) % 24; if (correctAnswer < 0) { correctAnswer += 24; }
            writeStandardQuestionTime(`It is ${a}:00 in military time. What time was it ${b} hours ago?`, correctAnswer, true, `The second hidden mod question. This is \\(${a} - ${b} \\pmod{24}\\). Remember, if \\(${a} - ${b}\\) is negative, add 24 until you reach a positive number.`, op);
        }
    } else {
        pmModQuestionStandard(getRandomInt(0, 15), getRandomInt(0, 15), op)
    }
}

function generateLimitsQuestion(hidden, first, op) {
    if (hidden) {
        if (first || !info.solvedBinomialQuestion) {
            a = getRandomInt(2, 4); b = getRandomInt(5, 8); c = 3;
            writeStandardQuestion(`What is the coefficient of \\(x^${a}y^${b - a}\\) in \\((x+y)^${b}\\)?`, choose(b, a), `The first hidden limits question is not really about limits, but will help with the second hidden limits question. Apply the binomial theorem: \\((x+y)^n = \\sum_{k=0}^n {n \\choose k} x^{k} y^{n-k}\\).`, op);
            info.solvedBinomialQuestion = true; // OK maybe not solved but at least seen
        } else {
            a = getRandomInt(2, 3); b = getRandomInt(3, 6);
            writeStandardQuestion(`What is \\(\\lim_{x \\to 0} \\frac{(${a}+x)^${b}-${a}^${b}}{x}\\)?`, b * (a ** (b - 1)), `The second hidden limits question. Simplify the expression and then set \\(x\\) to 0! And maybe think a step ahead: which terms will matter in the end? Do you need to fully expand \\((${a}+x)^${b}\\)?`, op)
        }
    } else {
        if (Math.random() <= 0.5) {
            a = getRandomInt(0, 15); b = getRandomInt(1, 20); lim = getRandomInt(-5, 5);
            writeStandardQuestion(`What is \\(\\lim_{x \\to ${lim}} ${a != 1 ? a : ""}x+${b}\\)?`, a * lim + b, `In this situation, it works to replace the value of \\(x\\) with the limit point \\(${lim}\\) and evaluate.`, op)
        } else {
            a = getRandomInt(0, 2); lim = getRandomInt(-1, 1);
            correctAnswer = 0;
            if (a >= 1) {
                if (lim === 0) {
                    correctAnswer = "\\infty";
                } else {
                    correctAnswer = a / lim;
                }
            }
            writeLimitQuestion(`What is \\(\\lim_{x \\to ${lim}} \\frac{${a}}{x}\\)?`, correctAnswer, `Unless we are evaluating the expression as \\(x \\to 0\\), we can replace the value of \\(x\\) with \\(${lim}\\) and evaluate. Otherwise, consider what occurs as you make \\(x\\) smaller and smaller. Does the expression tend towards 0 or infinity?`, op)
        }
    }
}

// just a 2x2...
function generateMatrix(a, b, c, d) {
    return `\\begin{bmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{bmatrix}`;
}

function generateMatrixQuestion(hidden, first, op) {
    a = getRandomInt(-4, 4); b = getRandomInt(-4, 4); c = getRandomInt(-4, 4); d = getRandomInt(-4, 4);
    e = getRandomInt(-4, 4); f = getRandomInt(-4, 4); g = getRandomInt(-4, 4); h = getRandomInt(-4, 4);
    if (hidden) {
        if (first) {
            if(Math.random() <= 0.5) {
                writeVectorQuestion(`What is \\(${generateMatrix(a,b,c,d)} \\cdot ${generateVector(e,f)}\\)?`, generateVector(a*e+b*f,c*e+d*f), 'Write the rows of the matrix as vectors, \\(u_1\\) and \\(u_2\\). Then to multiply the matrix by \\(v\\), the first entry of the product is \\(u_1 \\cdot v\\) and the second entry \\(u_2 \\cdot v\\).', true, op);
            } else {
                a = getRandomInt(2,6); b = getRandomInt(2,6); c = getRandomInt(2,6); d = getRandomInt(2,7);
                writeVectorQuestionAbstract(`What is \\(${generateMatrix(a,b,c,d)} \\cdot ${generateVector("x","y")}\\)?`, generateVector(`${a}x + ${b}y`,`${c}x + ${d}y`), 'Write the rows of the matrix as vectors, \\(u_1\\) and \\(u_2\\). Then to multiply the matrix by \\(v\\), the first entry of the product is \\(u_1 \\cdot v\\) and the second entry \\(u_2 \\cdot v\\).', true, op);
            }
            // writeMatrixQuestion(`What is \\(${generateMatrix(a, b, c, d)} \\times ${generateMatrix(e, f, g, h)}\\)?`, generateMatrix(a * e + b * g, a * f + b * h, c * e + d * g, c * f + d * h), `To multiply two \\(n \\times n\\) matrices, write the rows of the first matrix as vectors \\(v_1,\\dots,v_n\\) and the columns of the second matrix as vector vectors \\(u_1,\\dots,u_n\\). Then their product is an \\(n \\times n\\) matrix where the \\((i,j)\\) entry (i.e. \\(i\\)th row, \\(j\\)th column) is \\(v_i \\cdot u_j\\).`, op);
        } else {
            a = getRandomInt(-2, 2); b = getRandomInt(-2, 2); c = getRandomInt(-2, 2); d = getRandomInt(-2, 2);
            writeSmallMatrixQuestion(`Which matrix generates this linear transformation?`, generateMatrix(a, b, c, d), `The blue vector represents where the vector \\((1,0)\\) is sent by the matrix, and the green vector where \\((0,1)\\) is sent. Use this to figure out the matrix! Hint: the first column is the blue vector, the second the green vector.`, op);
            drawTime(a, b, c, d);
            makeCanvasVisible(true);
            document.getElementById("question").style.marginTop = 0;
        }
    } else {
        if (Math.random() <= 0.65) {
            writeMatrixQuestion(`What is \\(${generateMatrix(a, b, c, d)} + ${generateMatrix(e, f, g, h)}\\)?`, generateMatrix(a + e, b + f, c + g, d + h), `To add two matrices of the same dimensions, add each entry together just like for vectors.`, op);
        } else {
            writeMatrixQuestion(`What is \\(${generateMatrix(a, b, c, d)} - ${generateMatrix(e, f, g, h)}\\)?`, generateMatrix(a - e, b - f, c - g, d - h), `To subtract one matrix from another, subtract them entry by entry just like for vectors.`, op);
        }
    }
}

function generateVector(a, b) {
    return `\\begin{bmatrix} ${a} \\\\ ${b} \\end{bmatrix}`;
}

function getTriple(canBeNeg) {
    let triple = pythagoreanTriples[getRandomInt(0, pythagoreanTriples.length - 1)];
    if (canBeNeg && Math.random() <= 0.5) {
        triple[0] = -triple[0];
    }
    if (canBeNeg && Math.random() <= 0.5) {
        triple[1] = -triple[1];
    }
    return triple;
}

function generateVectorsQuestion(hidden, first, op) {
    if (hidden) {
        if (first) {
            triple = getTriple(true);
            writeStandardQuestion(`What is \\(\\|v\\|\\) for \\(v=${generateVector(triple[0], triple[1])}\\)?`, triple[2], `The length of a vector \\(v=[a_1,a_2,\\dots,a_n]\\), is \\(\\|v\\| = \\sqrt{a_1^2 + a_2^2 + \\dots + a_n^2}\\). In two dimensions this represents the length of the hypotenuse of the triangle with vertices \\((0,0)\\), \\((a_1,a_2)\\), and \\((a_1,0)\\).`, op);
        } else {
            if (Math.random() <= 0.4 || !info.seenDotProduct) {
                info.seenDotProduct = true;
                a = getRandomInt(0, 10); b = getRandomInt(0, 10); c = getRandomInt(0, 10); d = getRandomInt(0, 10);
                writeStandardQuestion(`What is \\(${generateVector(a, b)} \\cdot ${generateVector(c, d)}\\)?`, a * c + b * d, `The dot product of two vectors of the same dimension, \\([u_1,u_2,\\dots,u_n] \\cdot [v_1,v_2,\\dots,v_n] \\), is \\(u_1v_1 + u_2v_2 + \\dots + u_nv_n\\).`, op);
            } else {
                // Need to generate triples to get integers... maybe overkill though
                triple1 = getTriple(true); triple2 = getTriple(true);
                drawVectors(triple1[0]/5,triple1[1]/5,triple2[0]/5,triple2[1]/5);
                makeCanvasVisible(true);
                document.getElementById("question").style.marginTop = 0;
                writeDecimal01Question(`What is the cosine similarity of the two pictured vectors, \\(${generateVector(triple1[0], triple1[1])}\\) and \\(${generateVector(triple2[0], triple2[1])}\\)?`, (triple1[0] * triple2[0] + triple1[1] * triple2[1]) / (triple1[2] * triple2[2]), `The cosine similarity of two vectors \\(u,v\\) of the same dimension is \\(\\frac{u \\cdot v}{\\|u\\|\\|v\\|}\\), where recall that the dot product of two vectors \\([u_1,u_2,\\dots,u_n] \\cdot [v_1,v_2,\\dots,v_n] \\), is \\(u_1v_1 + u_2v_2 + \\dots + u_nv_n\\), and \\(\\|u\\| = \\sqrt{u \\cdot u}\\).`, op);
            }
        }
    } else {
        if (Math.random() <= 0.5) {
            a = getRandomInt(0, 10); b = getRandomInt(0, 10); c = getRandomInt(0, 10); d = getRandomInt(0, 10);
            writeVectorQuestion(`What is \\(${generateVector(a, b)} + ${generateVector(c, d)}\\)?`, `${generateVector(a + c, b + d)}`, `To find the sum of two vectors, add them component-wise so that the first entry is \\(${a}+${c}\\) and the second \\(${b}+${d}\\).`, false, op);
        } else {
            a = getRandomInt(0, 10); b = getRandomInt(0, 10); c = getRandomInt(0, 10); d = getRandomInt(0, 10);
            writeVectorQuestion(`What is \\(${generateVector(a, b)} - ${generateVector(c, d)}\\)?`, `${generateVector(a - c, b - d)}`, `To find the difference of two vectors, subtract them component-wise so that the first entry is \\(${a}-${c}\\) and the second \\(${b}-${d}\\).`, true, op);
        }
    }
}

function codeToQuestion(code, hidden, first, op) {
    switch (code) {
        case "modplus":
            generateModPlusQuestion(hidden, first, op);
            break;
        case "modinv":
            generateModInvQuestion(hidden, first, op);
            break;
        case "limits":
            generateLimitsQuestion(hidden, first, op);
            break;
        case "vectors":
            generateVectorsQuestion(hidden, first, op);
            break;
        case "matrices":
            generateMatrixQuestion(hidden, first, op);
            break;
    }
}

function opToResearch(op) {
    return Math.floor((Math.abs(op) - 1) / 2) - 8;
}

function moreQuestions() {
    if (info.score >= info.currentQuestionCost) {
        updateScore(-info.currentQuestionCost);
        info.questionsLeft = 7;
        generateQuestion();
    }
}

//['0addition', '1subtraction', '2multiplication', '3division', '4square','5square root', '6exponentiation', '7logarithm', '8mod+','9modx','10binary','11matrices']
function generateQuestion() {
    info.questionsLeft--;
    if (info.questionsLeft <= -1 && !infiniteQuestionTime) {
        info.currentQuestionCost = questionCost();
        document.getElementById("question").innerHTML = `<button class="option" style="margin: auto;" id="genMoreQuestions" onclick=moreQuestions()>Generate 7 questions (${formatNumberToPrecision(info.currentQuestionCost, 2, false)} pies)</tooltiptext></button>`;
        document.getElementById("options").innerHTML = "";
        document.getElementById("genMoreQuestions").disabled = info.score < info.currentQuestionCost;
        return;
    }
    gotIncorrect = false;
    const op = problemOperation();
    if (op <= -17) {
        codeToQuestion(info.researchPurchased[opToResearch(op)], true, ((-op % 2) == 1), op);
    }
    if (op >= 8) {
        codeToQuestion(info.researchPurchased[op - 8], false, false, op);
    }
    switch (op) {
        case -16: // Log h2
            correctAnswer = getRandomInt(2, 9);
            writeStandardQuestion(`How many bits of information are needed to encode \\(${2 ** correctAnswer}\\) different messages?`, correctAnswer, `Hidden question 16 has arrived. A "bit" of information is a number that\'s 0 or 1. How many bits do we need so that there are \\(${2 ** correctAnswer}\\) different ways to set them? Hint: it\'s \\(\\log_2(${2 ** correctAnswer})\\).`, op);
            break;
        case -15: // Log h1
            correctAnswer = getRandomInt(1, 4);
            writeStandardQuestion(`Solve for \\(x\\) in \\(2^{2x} = ${2 ** (2 * correctAnswer)}\\).`, correctAnswer, `Question 15! First take the logarithm of both sides to get \\(2x = \\log(${2 ** (2 * correctAnswer)})\\). Then solve the log and divide by 2.`, op);
            break;
        case -14: // Exp h2
            a = getRandomInt(2, 10); b = getRandomInt(2, 4); c = getRandomInt(2, 3);
            writeStandardQuestion(`Solve for \\(x\\): \\(${b}^{x} = ${b ** c}^{${a}}\\). `, a * c, `Hidden question 14. To solve this, notice that \\(${b ** c}^{${a}} = (${b}^{${c}})^{${a}}\\).`, op);
            break;
        case -13: // Exp h1
            expH1Question(op);
            break;
        case -12: // Division h2
            let quad = pythagoreanQuadruples[Math.floor(Math.random() * pythagoreanQuadruples.length)];
            writeStandardQuestion(`What is the Euclidean distance between \\((0,0,0)\\) and \\((${quad[0]},${quad[1]},${quad[2]})\\)?`, quad[3], `Hidden question 12. The Euclidean distance in 3-dimensional space between \\((0,0,0)\\) and \\((x,y,z)\\) is \\(\\sqrt{x^2+y^2+z^2}\\). Notice any similarities with the Pythagorean Theorem?`, op);
            break;
        case -11: // Division h1
            let triple = pythagoreanTriples[Math.floor(Math.random() * pythagoreanTriples.length)];
            writeStandardQuestion(`What is the hypotenuse of a triangle with legs \\(${triple[0]}\\) and \\(${triple[1]}\\)?`, triple[2], `For question 11, I give you: the Pythagorean Theorem. \\(a^2 + b^2 = c^2\\), where \\(c\\) is the hypotenuse and \\(a,b\\) the legs.`, op);
            break;
        case -10: // Squares h2
            a = getRandomInt(2, 14);
            writeStandardQuestion(`What is the sum of the first \\(${a}\\) odd numbers?`, a ** 2, `Hidden question 10. Curiously, the sum of the first \\(n\\) odd numbers is always \\(n^2\\). Try to find a proof of this!`, op);
            break;
        case -9: // Squares but doing one extra division instead b/c squares are boring
            a = getRandomInt(2, 13); b = getRandomInt(2, 17); while (a == b) { b = getRandomInt(2, 17); };
            writeStandardQuestionLowerUpper(`A group of cicadas appears every \\(${a}\\) years, and a second group appears every \\(${b}\\) years. If they appear together in the year 2000, what is the next year they appear together?`, 2000 + (a * b) / gcd(a, b), 2000, 2000 + 2 * (a * b) / gcd(a, b), `Hidden question 9. The least common multiple (LCM) of two numbers can be calculated by multiplying them and dividing by their GCD.`, op);
            break;
        case -8: // Division h2
            a = 2 * getRandomInt(1, 27) - 1;
            writeStandardQuestionYesNo(`Is \\(${a}\\) a prime number?`, isPrime(a), `Hidden question the eighth. A number is prime when it is divisible only by 1 and itself.`, op);
            break;
        case -7: // Division h1
            a = getRandomInt(2, 20); b = getRandomInt(1, 10); while (a == b) { b = getRandomInt(1, 10); };
            writeStandardQuestion(`What is the greatest common divisor of \\(${a}\\) and \\(${b}\\)?`, gcd(a, b), `Lucky hidden number 7. The GCD of two numbers is the largest number that divides both of them (where by "\\(a\\) divides \\(b\\)" we mean \\(\\frac{a}{b}\\) is an integer).`, op);
            break;
        case -6: // Multiplication h2
            a = getRandomInt(3, 8); b = getRandomInt(2, a - 1);
            tooltip = `Hidden question 6. \\({${a} \\choose ${b}}\\) is equal to \\(\\frac{${a}!}{(${a}-${b})!${b}!}\\). The factorial of \\(n\\), or \\(n!\\), is equal to \\(n \\times (n-1) \\times \\dots \\times 1\\).`;
            writeStandardQuestion(`How many different collections of \\(${b}\\) object can we make from \\(${a}\\) objects? In other words, what is \\({${a} \\choose ${b}}\\)?`, choose(a, b), tooltip, op);
            break;
        case -5: // Multiplication h1
            a = getRandomInt(1, 5);
            writeStandardQuestion(`What is \\(${a}!\\), or \\(${a}\\) factorial?`, factorial(a), `The fifth hidden question. The factorial of \\(n\\), or \\(n!\\), is equal to \\(n \\times (n-1) \\times \\dots \\times 1\\).`, op);
            break;
        case -4: // Subtraction h2
            a = getRandomInt(5, 15);
            writeStandardQuestion(`What is the sum of the first \\(${a}\\) numbers minus the sum of the first \\(${a - 2}\\)?`, 2 * a - 1, `The fourth hidden question type. A hint: the second sequence mostly cancels out the first sequence. What remains?`, op);
            break;
        case -3: // Subtraction h1
            a = getRandomInt(5, 12);
            writeStandardQuestion(`What is the alternating sum of the first \\(${a}\\) numbers, \\(1-2+3-4\\dots\\)?`, (a % 2 == 0) ? -a / 2 : (a + 1) / 2, `The third hidden question type. The alternating sum of the first \\(n\\) numbers is \\(-\\frac{n}{2}\\) for even \\(n\\) and \\(\\frac{n+1}{2}\\) for odd \\(n\\).`, op);
            break;
        case -2: // Addition h2
            a = getRandomInt(2, 7);
            writeStandardQuestion(`What is the sum of the first \\(${a}\\) even numbers, starting with \\(2\\)?`, a * (a + 1), `The second hidden question type. The sum of the first \\(n\\) even numbers is always \\(n(n+1)\\), or twice the sum of the first \\(n\\) numbers.`, op);
            break;
        case -1: // Addition h1
            a = getRandomInt(2, 7);
            writeStandardQuestion(`What is the sum of the first \\(${a}\\) numbers?`, a * (a + 1) / 2, `The first hidden question type. The sum of the first \\(n\\) numbers is always \\(\\frac{n(n+1)}{2}\\).`, op);
            break;
        case 0:
            a = getRandomInt(0, 15); b = getRandomInt(0, 15);
            writeStandardQuestion(`What is \\(${a} + ${b}\\)?`, a + b, "Apples and Oranges", op);
            break;
        case 1:
            subtractionQuestionStandard(getRandomInt(0, 15), getRandomInt(0, 15), op)
            break;
        case 2:
            multiplicationQuestionStandard(getRandomInt(0, 15), getRandomInt(0, 15), op)
            break;
        case 3:
            divisionQuestionStandard(getRandomInt(1, 13), getRandomInt(0, 13), op)
            break;
        case 4:
            squareQuestionStandard(getRandomInt(1, 15), op)
            break;
        case 5:
            squareRootQuestionStandard(getRandomInt(1, 15), op)
            break;
        case 6:
            exponentQuestionStandard(op)
            break;
        case 7:
            logQuestionStandard(op)
            break;
    }
    renderMathInElement(document.getElementById("question"));
    renderMathInElement(document.getElementById("options"));
}

function checkAnswerBool(event, correct, operation) {
    if (correct) {
        correctInARow++;
        if (correctInARow >= 100 && correctInInterval >= 20) {
            info.excitedTheBrain = true;
        }
        info.maxStreak = Math.max(info.maxStreak, correctInARow);
        correctInInterval++;
        let updateSize = 4 ** operation;
        if (operation < 0) {
            updateSize = 5 ** ((-(operation - 1) * 0.55));
        }
        updateSize = updateSize * calculateModifier();
        if (gotIncorrect) {
            updateSize = 2.13 ** Math.abs(operation / 2);
        }
        updateScore(updateSize);
        updateThoughts(updateSize);
        const x = event.clientX;
        const y = event.clientY;
        showSolveAnimation(x - 10, y + 80, updateSize, updateSize, gotIncorrect);
        makeCanvasVisible(false);
        document.getElementById("question").style.marginTop = '15vh';
        generateQuestion();
    } else {
        gotIncorrect = true;
        correctInARow = 0;
        correctInInterval = Math.max(0, correctInInterval - 1);
        const x = event.clientX;
        const y = event.clientY;
        incorrectAnimation(x - 10, y + 80);
    }
    updateJiggleAnimation();
    makeImageRedder('brain', brainRedFunction());
}

function buyTool(i, amount) {
    if (info.score >= info.toolPrice[i]) {
        info.toolCount[i] += amount;
        updateScore(-info.toolPrice[i] * amount);
        info.toolPrice[i] = Math.round(info.toolPrice[i] * (toolPriceModifier ** amount));
        updateButtons();
        if (i == 3 && amount == 1) {
            const m = info.toolCount[3] * info.mathematicianSeed;
            if (mathematicians[m % mathematicians.length] === "Will Hunting") {
                info.gotWillHunting = true;
            }
            if (info.toolCount[3] <= mathematicians.length) {
                showAchievement(`${mathematicians[m % mathematicians.length]}`, "Sprites/Mathematician_sprite.png", false);
            }
            addSprite(m);
        }
    }
}

function questionCost() {
    scoreIncrement = 0;
    for (i = 0; i < info.operationCount; i++) {
        scoreIncrement += toolOutput(i);
    }
    return 30 * scoreIncrement;
}

function updateButtons() {
    for (i = 0; i < info.operationCount; i++) {
        document.getElementById(`buy${getToolNoSpaceName(i)}`).innerHTML = toolText(i);
        let t = shopTippies[i];
        t[0].setContent(getTooltipContent(i));
        document.getElementById(`buy${getToolNoSpaceName(i)}`).disabled = info.score < info.toolPrice[i];
    }
    brainTippy[0].setContent(getBrainTippyContent());
    document.getElementById('researchTokens').textContent = `Research tokens: ${info.researchTokens}`;
    document.getElementById("nextOperation").disabled = info.thoughts < newOperationPrice[info.operationCount + info.researchTokens];
    upgrades.forEach(upgrade => {
        if (upgrade.available && !upgrade.purchased) {
            document.getElementById(`upgrade${upgrade.name}`).disabled = !(info.score >= upgrade.cost.numPoints && info.thoughts >= upgrade.cost.numThoughts);
        }
    });
    if (info.questionsLeft <= -1 && !infiniteQuestionTime) {
        document.getElementById("genMoreQuestions").disabled = info.score < info.currentQuestionCost;
    }
}

function getTooltipContent(i) {
    let PPS = toolOutput(i);
    let PPSRatio = scoreIncrement > 0 ? (100 * toolOutput(i) / scoreIncrement).toFixed(1) : 0;
    return `
    <div class="custom-tooltip">
    <div class="topoftooltip">
        <img src="Sprites/${getToolName(i)}_sprite.png" alt="Tool Image">
        <div class="topoftooltiptext">
            <div class="tooltip-title">${getToolName(i)}</div>
            <div class="tooltip-data1">"${getToolFlavor(i)}"</div>
            <div class="tooltip-price">${formatNumberToPrecision(info.toolPrice[i], 2, false)} pies</div>
        </div>
    </div>
    <ul class="tooltip-text" style="margin-left: 15px;">
        <li>${formatNumberToPrecision(PPS1Tool(i), 2, true)} PPS each</li>
        <li>Solving ${(100 * (1 - calculateProbability(i))).toFixed(2)}% of ${getOperationName(i)} problems.</li>
        <li>${info.toolCount[i]} ${getToolNamePlural(i)} producing ${formatNumberToPrecision(PPS, 2, true)} PPS for ${PPSRatio}% of total PPS</li>
    </ul>
    </div>`
}

function toolText(i) {
    return `<div class="container">
                <img src="Sprites/${getToolName(i)}_sprite.png" class="container-image">
                <div class="text-content">
                    <b><div class="toolname">${getToolName(i)}</b></div>
    
                    ${formatNumberToPrecision(info.toolPrice[i], 2, false)} ${scoreName}
                </div>
                <div class="text-content" style="margin-left: auto">
                (${info.toolCount[i]} for ${(100 * (1 - calculateProbability(i))).toFixed(2)}%)
                </div>
            </div>`
}

function createTool(i) {
    // To buy the tools
    const newTool = document.createElement('button');
    newTool.className = 'tooltip2';
    newTool.innerHTML = toolText(i);
    newTool.id = `buy${getToolNoSpaceName(i)}`;
    newTool.onclick = () => buyTool(i, 1);
    newTool.disabled = true;

    const toolWrapper = document.createElement('div');
    toolWrapper.id = `wrapper${getToolNoSpaceName(i)}`;
    toolWrapper.appendChild(newTool);
    document.getElementById('shop').appendChild(toolWrapper);
    // Initialize Tippy.js on the newTool button
    let t1 = tippy(`#wrapper${getToolNoSpaceName(i)}`, {
        content: `${getTooltipContent(i)}`,
        placement: 'left',
        interactive: false,
        allowHTML: true,
        theme: 'left-align',
    });
    shopTippies.push(t1);
}

// the SUM info.operationCount+info.researchTokens keeps track of the number of ops plus purchased tokens
function createNextOperation() {
    if (info.operationCount < 8) {
        createNextOperationPreTree();
    } else {
        const newOp = document.createElement('button');
        newOp.className = 'researchButton';
        newOp.id = "nextOperation";
        newOp.disabled = true
        newOp.onclick = () => { info.researchTokens++; buyOperationTokenOnly(info.operationCount + info.researchTokens - 1) };
        //newOp.textContent = `Buy a research token`;
        newOp.innerHTML = '<img src="Sprites/lightbulb_sprite.png" style="height:45px;"></img>';
        if ((info.operationCount + info.researchTokens) == data.length - 1) {
            newOp.textContent = `You Win!`;
            newOp.onclick = () => {
                generateNumbers();
            }
        }
        const wrapper = document.createElement('div');
        wrapper.className = "wrapperUpgrade";
        wrapper.appendChild(newOp);
        wrapper.id = "operationWrapper";
        document.getElementById('researchShop').appendChild(wrapper);
        let c = `<div style="font-size: 1.1rem"><b>Research Token</b></div>${formatNumberToPrecision(newOperationPrice[info.operationCount + info.researchTokens], 2, false)} thoughts`;
        tippy("#operationWrapper", {
            content: (info.operationCount + info.researchTokens) == (data.length - 1) ? `<div style="font-size: 1.1rem"><b>Win the game!</b></div>Get a party for ${formatNumberToPrecision(newOperationPrice[info.operationCount], 2, false)} thoughts. More to come soon.` : c,
            content: c,
            placement: 'left',
            allowHTML: true,
        })
    }
}

function createNextOperationPreTree() {
    const newOp = document.createElement('button');
    newOp.className = 'researchButton';
    newOp.id = "nextOperation";
    newOp.disabled = true
    newOp.onclick = () => buyOperation(info.operationCount);
    //newOp.textContent = `Research ${getOperationName(info.operationCount)}`;
    newOp.innerHTML = '<img src="Sprites/lightbulb_sprite.png" style="height:45px;"></img>';
    const wrapper = document.createElement('div');
    wrapper.className = "wrapperUpgrade";
    wrapper.appendChild(newOp);
    wrapper.id = "operationWrapper";
    document.getElementById('researchShop').appendChild(wrapper);
    let c = `<div style="font-size: 1.1rem"><b>Research ${getOperationName(info.operationCount)}</b></div>${formatNumberToPrecision(newOperationPrice[info.operationCount], 2, false)} thoughts. Unlock ${getOperationName(info.operationCount)} problems and a new tool!`;
    tippy("#operationWrapper", {
        //content: info.operationCount == (data.length - 1) ? `<div style="font-size: 1.1rem"><b>Win the game!</b></div>Get a party for ${formatNumberToPrecision(newOperationPrice[info.operationCount], 2, false)} thoughts. More to come soon.` : c,
        content: c,
        placement: 'left',
        allowHTML: true,
    })
}

function showAlertAndStartOver() {
    var userResponse = confirm("Do you want to start over?");
    if (userResponse) {
        // User pressed "Start Over"
        // Just to be safe, reset all relevant stats
        reset();
        localStorage.clear(); // Clears the local storage
        setTimeout(() => {
            location.reload(); // Refreshes the page
        }, 300);
    }
}

function buyOperationTokenOnly(i) {
    if (info.thoughts >= newOperationPrice[i]) {
        // Remove old operation and pay for it
        document.getElementById("operationWrapper").remove();
        updateThoughts(-newOperationPrice[i]);

        // Add next operation to buy
        createNextOperation();
    }
    updateButtons();
}

function buyOperation(i) {
    if (info.thoughts >= newOperationPrice[i]) {
        // Remove old operation and pay for it
        document.getElementById("operationWrapper").remove();
        updateThoughts(-newOperationPrice[i]);

        info.operationCount += 1;

        // Make new tool for operation i
        createTool(i);

        // Add next operation to buy
        createNextOperation();
    }
    updateButtons();
}

let interval;
function startFastInterval() {
    clearInterval(interval); // Clear any existing interval
    interval = setInterval(function () {
        updateScore(scoreIncrement / 20);
    }, 50);
}
function startSlowInterval() {
    clearInterval(interval); // Clear any existing interval
    interval = setInterval(function () {
        updateScore(scoreIncrement * 2);
    }, 2000);
}
startFastInterval();
// Listen for visibility changes
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'visible') {
        startFastInterval();
    } else {
        startSlowInterval();
    }
});

// Update scoreincrement every 750ms 
setInterval(() => {
    scoreIncrement = 0;
    for (i = 0; i < info.operationCount; i++) {
        scoreIncrement += toolOutput(i);
    }
    document.getElementById('scorePerSec').innerText = `per second: ${formatNumberToPrecision(scoreIncrement, 3, true)}`;
    updateButtons();
}, 750);

setInterval(() => {
    correctInInterval = Math.max(correctInInterval - 0.5, 0);
    makeImageRedder('brain', brainRedFunction());
}, 1000);

// Check for upgrades to add every 1.2 seconds
setInterval(() => {
    checkForAvailableUpgrades();
    checkForAvailableAchievements();
}, 1200);

setInterval(() => {
    if (Math.random() <= 0.12) {
        shakeyPieTime();
    }
}, 31000);

function updateNews() {
    document.getElementById('news').innerHTML = newsBits[Math.floor(Math.random() * newsBits.length)];
    renderMathInElement(document.getElementById('news'));
}

// Update news every 13 seconds and save
setInterval(() => {
    localStorage.setItem('saveData', JSON.stringify(info));
    localStorage.setItem('upgradeData', JSON.stringify(upgrades));
    if (!infiniteQuestionTime && !isPrimeStorm) {
        updateNews();
    }
}, 13000);

function getBrainTippyContent() {
    if (mathematicianMultiplier() > 1) {
        return `To get lots of thoughts, get all your tools to a high solve rate. Then you will see hidden questions with high rewards.<br><br>Streak multiplier: ${calculateCorrectModifier().toFixed(2)}<br>Speed multiplier: ${speedModifier().toFixed(2)}<br>Mathematician multiplier: ${mathematicianMultiplier().toFixed(2)}`;
    }
    return `To get lots of thoughts, get all your tools to a high solve rate. Then you will see hidden questions with high rewards.<br><br>Streak multiplier: ${calculateCorrectModifier().toFixed(2)}<br>Speed multiplier: ${speedModifier().toFixed(2)}`;
}

function startItUp() {
    brainTippy = tippy('#thoughts', {
        content: getBrainTippyContent(),
        allowHTML: true,
    });
    // Careful of the order of all of this
    createStandardUpgrades();
    var theSave = localStorage.getItem('saveData');
    if (theSave !== null) {
        info = JSON.parse(theSave);
    }
    createStandardAchievements();
    var theUpgrades = localStorage.getItem('upgradeData');
    if (theUpgrades !== null) {
        upgrades = JSON.parse(theUpgrades);
        for (i = 0; i < upgrades.length; i++) {
            if (!upgrades[i].purchased) {
                upgrades[i].available = false;
            }
        }
    }
    for (i = 0; i < info.operationCount; i++) {
        createTool(i);
    }
    for (i = 1; i <= info.toolCount[3]; i++) {
        addSprite(i * info.mathematicianSeed);
    }
    createNextOperation();
    if (info.startedResearch) {
        traverseTree(upgradeTreeData);
    }
    setTimeout(() => {
        updateThoughts(0);
        generateQuestion();
        document.getElementById('news').innerHTML = newsBits[Math.floor(Math.random() * newsBits.length)];
        renderMathInElement(document.getElementById('news'));
    }, 200);
}

document.getElementById('pi').addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    info.piClicks++;
    updateScore(0.314);
    showSolveAnimationCustom(x - 10, y + 80, '+0.314159...', 'green');
    this.classList.toggle('clicked');
    setTimeout(() => {
        this.classList.toggle('clicked');
    }, 100); // Match the duration of the animation
});
document.getElementById('brain').addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    info.brainClicks++;
    document.getElementById('brain').setAttribute('height', '35vh');
    if (correctInARow >= 100 && correctInInterval >= 20) {
        showSolveAnimationCustom(x - 10, y - 70, `!!!`, 'black');
    } else {
        showSolveAnimationCustom(x - 10, y - 70, `Hmmmm...`, 'black');
    }
    this.classList.toggle('clicked');
    setTimeout(() => {
        this.classList.toggle('clicked');
    }, 100); // Match the duration of the animation
});

window.onload = startItUp();

function showAchievement(achievementText, iconUrl, isAchievement) {
    const notification = document.getElementById('achievement-notification');
    const textElement = document.getElementById('achievement-text');
    const iconElement = document.getElementById('achievement-icon');

    if (!isAchievement) {
        document.getElementById("achieve-title").textContent = "Recruited";
    } else {
        document.getElementById("achieve-title").textContent = "Achievement";
    }

    textElement.textContent = achievementText;
    iconElement.src = iconUrl;

    notification.classList.remove('hidden');
    notification.style.display = 'flex'; // Set display to flex when showing

}

function closeAchievementNotification() {
    const notification = document.getElementById('achievement-notification');
    notification.classList.add('hidden');
    notification.style.display = 'none'; // Set display to none when hiding
}

function toggleAchievementPopup() {
    const popup = document.getElementById('achievement-popup');
    const list = document.getElementById('achievements-list');

    // Update the achievements list
    list.innerHTML = '';
    achievements.forEach(achievement => {
        if (achievement.achieved) {
            const listItem = document.createElement('img');
            listItem.id = achievement.id;
            listItem.src = achievement.image;
            listItem.style = "width: 50px; height: 50px; padding: 5px;";
            list.appendChild(listItem);
            tippy(`#${achievement.id}`, {
                content: achievement.tooltip,
                interactive: false,
                allowHTML: true,
                theme: 'left-align',
            });
        } else {
            const listItem = document.createElement('img');
            listItem.src = "Sprites/question_box.png";
            listItem.style = "width: 50px; height: 50px; padding: 5px;";
            list.appendChild(listItem);
            tippy(listItem, {
                content: "???",
            })
        }
    });

    popup.classList.toggle('hidden');
}

function toggleResearchPopup() {
    drawTree();
    const popup = document.getElementById('researchModal');
    popup.classList.toggle('hidden');
}

function toggleAboutPopup() {
    const popup = document.getElementById('about-popup');
    popup.classList.toggle('hidden');
}

// 0 is locked, 1 is visible, 2 is purchased
function drawTree() {
    document.getElementById("upgradeTree").innerHTML = "";
    const treeLayout = d3.tree().size([400, 200]); // Set the size of the tree
    const root = d3.hierarchy(upgradeTreeData); // Create a D3 hierarchy from the data
    treeLayout(root);

    const svg = d3.select("#upgradeTree").append("svg")
        .attr("width", 500)
        .attr("height", 400)
        .attr("id", "treePic");
    // const svg = d3.select("#upgradeTree").append("svg")
    //     .attr("width", "500px")
    //     .attr("height", "500px")
    //     .attr("id", "treePic"); //style="overflow: scroll; max-height: 50vh; max-width: 50vh;"

    const defs = svg.append("defs");
    const filter = defs.append("filter")
        .attr("id", "grayscale");

    filter.append("feColorMatrix")
        .attr("type", "matrix")
        .attr("values", "0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 1 0");

    const g = svg.append("g")
        .attr("transform", "translate(100,10)");

    // Draw links (lines)
    g.selectAll(".link")
        .data(root.links())
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x));

    // Draw nodes
    const node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.y},${d.x})`)
        .on("click", function (event, d) {
            // This function is called when a node is clicked
            if (d.data.available === 1 && info.researchTokens >= 1) {
                d.data.available = 2;
                if (d.data.name !== "Start") {
                    info.researchTokens--;
                    info.researchPurchased.push(d.data.code);
                    createTool(info.operationCount);
                    info.operationCount++;
                } else {
                    info.startedResearch = true;
                }
                d3.select(this).select("circle").style("stroke", "green"); // Change color to red
                if (d.children) {
                    d.children.forEach(child => {
                        child.data.available = 1;
                    });
                    document.getElementById("upgradeTree").innerHTML = "";
                    drawTree();
                }
            }
        });

    // Append a circle around each image
    node.append("circle")
        .attr("r", 36)
        .attr("fill", "none")
        .attr("stroke", d => d.data.available == 0 ? "gray" : (d.data.available == 1 ? "#2a51cf" : "green"))
        .attr("stroke-width", 5);

    // Append an image to each node
    node.append("image")
        .attr("xlink:href", d => d.data.available >= 1 ? `${d.data.image}` : "Sprites/lock_sprite.png")
        .attr("x", -31)  // Adjust as needed for positioning
        .attr("y", -31)  // Adjust as needed for positioning
        .attr("width", 62)  // Width of the image
        .attr("height", 62)  // Height of the image
        .attr("id", d => `${d.data.name}`)
        .attr("filter", d => d.data.available ? "" : "url(#grayscale)"); // Apply grayscale filter if not available

    node.each(function (d) {
        tippy(this, {
            content: defineContent(d.data.available, d.data.name),
            allowHTML: true,
            trigger: 'mouseenter focus',
            placement: 'top', // You can change the placement as needed
        });
    });
}

function defineContent(availability, name) {
    if (name === "Start" && availability === 1) {
        if (info.researchTokens === 0) {
            return "Start<br>Unlock when you get a research token.";
        } else {
            return "Start<br>Click to unlock for free!";
        }
    }
    if (availability === 0) {
        return "???";
    } else if (availability === 2) {
        return `${name}`;
    } else {
        return `${name}<br>Click to purchase for 1 research token`;
    }
}