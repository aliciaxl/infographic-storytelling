let changa;
let images = [];
let imageGroup = [
    { img: null, x: 20, y: 395, w: 410, h: 315 },
    { img: null, x: 385, y: 385, w: 350, h: 280 },
    { img: null, x: 0, y: 700, w: 300, h: 195 },
    { img: null, x: 280, y: 650, w: 320, h: 260 },
    { img: null, x: 518, y: 650, w: 280, h: 300 },
    { img: null, x: 410, y: 880, w: 340, h: 320 },
];

function preload(){
    changa = loadFont('ChangaOne-Regular.ttf');
    bg = loadImage('gradient-1336854_1280.jpg');
    images.push(loadImage('mh1.png'));
    images.push(loadImage('mh2.png'));
    images.push(loadImage('mh3.png'));
    images.push(loadImage('mh4.png'));
    images.push(loadImage('mh5.png'));
    images.push(loadImage('mh6.png'));

    for (let i=0; i< images.length; i++) {
        imageGroup[i].img = images[i];
    }


}


function setup() {
    createCanvas(800, 1200);

    
}

function draw() {
    background(bg);
    textFont(changa);
    textSize(120);
    fill('white');
    text('MENTAL', 300, 160);
    text('HEALTH', 270, 240);
    fill('yellow');
    text('matters', 330, 290);

    for (let elem of imageGroup){
        if (isMouseOver(elem)){
            image(elem.img, elem.x - 30, elem.y - 30, elem.w + 50, elem.h + 50) 
        } else {
            image(elem.img, elem.x, elem.y, elem.w, elem.h);
        }

        }
    }

function isMouseOver(elem) {
    return mouseX > elem.x && mouseX < (elem.x + elem.w) && 
    mouseY > elem.y && mouseY < (elem.y + elem.h);
}


fill('white');
    textSize(12);
    textAlign(CENTER);
    text(mouseX + ',' + mouseY, mouseX, mouseY);    



