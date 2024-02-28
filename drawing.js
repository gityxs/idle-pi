//// Drawing the linear transformation!!
let img;
let matrix = [[1, -1.5], [-1, 0]];
const scaleFactor = 20; // was 10

function preload() {
    img = loadImage('Sprites/pi_sprite.png'); // Make sure the image is in your project directory
}

function setup() {
    let canvas = createCanvas(400, 200);  // Create a canvas
    canvas.parent('canvasContainer');     // Place the canvas in the div with id "canvasContainer"
    background(255);
    img.resize(width * 0.9, 0);
    img.loadPixels();
}

function drawVectors(a, b, c, d) {
    background(255);
    //canvas = createCanvas(200, 200);

    // Draw the grid and its transformation
    push();
    translate(width / 2, height / 2);  // Position the grid in the left half of the canvas
    scale(1, -1); // Flip the y-axis for the grid
    drawAxes();
    pop();

    push();
    translate(width / 2, height / 2);  // Position the grid in the left half of the canvas
    matrix = [[1,0],[0,1]]; // OK this is lazy but don't want to rewrite the drawarrow function
    scale(1, -1); // Flip the y-axis for the grid
    drawArrow(0, 0, a,b, matrix, scaleFactor, [0, 0, 128]); 
    drawArrow(0, 0, c,d, matrix, scaleFactor, [0, 128, 0]); 
    pop();
}

function drawTime(a, b, c, d) {
    //canvas = createCanvas(400, 200);
    background(255);
    matrix = [[a, b], [c, d]];

    // Draw the grid and its transformation
    push();
    translate(width / 4, height / 2);  // Position the grid in the left half of the canvas
    scale(1, -1); // Flip the y-axis for the grid
    drawGrid(scaleFactor);
    applyMatrixTransformation(scaleFactor);
    pop();

    // Draw the transformed image
    push();
    translate(3 * width / 4, height / 2); // Position the image in the right half of the canvas
    scale(1, -1); // Flip the y-axis for the image
    drawTransformedImage(img, matrix, scaleFactor, width / 2);
    pop();

    noLoop();
}

function applyMatrixTransformation(scale) {
    stroke(255, 0, 0);
    strokeWeight(1);
    noFill();

    // Apply transformation to unit squares
    for (let x = -2; x < 2; x++) {
        for (let y = -2; y < 2; y++) {
            let points = [
                transformPoint(x, y, matrix, scale),
                transformPoint(x + 1, y, matrix, scale),
                transformPoint(x + 1, y + 1, matrix, scale),
                transformPoint(x, y + 1, matrix, scale),
                transformPoint(x, y, matrix, scale) // Close the square
            ];

            beginShape();
            for (let pt of points) {
                vertex(pt[0], pt[1]);
            }
            endShape();
        }
    }

   // Draw the transformed basis vectors with arrows
    drawArrow(0, 0, 1, 0, matrix, scale, [0, 0, 128]); // Darker blue for x basis vector
    drawArrow(0, 0, 0, 1, matrix, scale, [0, 128, 0]); // Darker green for y basis vector
}

function drawArrow(x1, y1, x2, y2, matrix, scale, color) {
    // Apply the transformation to the start and end points
    let start = transformPoint(x1, y1, matrix, scale);
    let end = transformPoint(x2, y2, matrix, scale);

    // Set the stroke and fill color
    stroke(color[0], color[1], color[2]);
    fill(color[0], color[1], color[2]);
    strokeWeight(2);

    // Draw the line
    line(start[0], start[1], end[0], end[1]);

    // Calculate the direction of the line
    let angle = atan2(end[1] - start[1], end[0] - start[0]);
    let arrowSize = 7; // Size of the arrowhead

    // Draw the arrowhead
    push(); // Save the current drawing state
    translate(end[0], end[1]);
    rotate(angle);
    beginShape();
    vertex(0, 0);
    vertex(-arrowSize, arrowSize / 2);
    vertex(-arrowSize, -arrowSize / 2);
    endShape(CLOSE); // Using CLOSE to fill in the shape
    pop(); // Restore the original drawing state
}

function drawTransformedImage(img, matrix, scale, maxImageSize) {
    let imgScale = min(maxImageSize / img.width, maxImageSize / img.height) * 0.45;

    // Adjust starting points for the transformation based on image size
    let startX = -img.width / 2;
    let startY = img.height / 2;  // Inverted y-axis

    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            let idx = (x + y * img.width) * 4;
            let col = color(img.pixels[idx], img.pixels[idx + 1], img.pixels[idx + 2], img.pixels[idx + 3]);
            stroke(col);

            // Apply transformation, flipping the y-coordinate
            let [transX, transY] = transformPoint(startX + x, startY - y, matrix, imgScale);

            // Draw a point for each transformed pixel
            point(transX, transY);
        }
    }
}

function drawGrid(scale) {
    push();
    stroke(200);
    strokeWeight(1);

    // Draw horizontal and vertical lines
    for (let x = -width / 4; x <= width / 4; x += scale) {
        line(x, -height / 2, x, height / 2);
    }
    for (let y = -height / 2; y <= height / 2; y += scale) {
        line(-width / 4, y, width / 4, y);
    }

    // Draw axes
    stroke(0);
    line(0, -height / 2, 0, height / 2);
    line(-width / 4, 0, width / 4, 0);

    pop();
}

function drawAxes() {
    push();
    strokeWeight(1);
    stroke(0);
    line(0, -height / 2, 0, height / 2);
    line(-width / 4, 0, width / 4, 0);
    pop();
}

function transformPoint(x, y, matrix, scale) {
    // Apply the matrix transformation and scale the result for drawing
    let transformedX = matrix[0][0] * x + matrix[0][1] * y;
    let transformedY = matrix[1][0] * x + matrix[1][1] * y;

    return [transformedX * scale, transformedY * scale];
}

function makeCanvasVisible(visible) {
    let canvasContainer = select('#canvasContainer');
    if (visible) {
        canvasContainer.style('display', 'block');
    } else {
        canvasContainer.style('display', 'none');
    }
}
/// Drawing!!!