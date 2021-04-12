// virtual-jukebox.js
//
// Virtual jukebox
//
// Inspired by a 1939 Seeburg Symphonola Vogue jukebox that I 
// used to own. For demonstration purposes, all songs are 
// 15-second samples.
//

// initial declaration of variables

// selector lever size and position parameters
let leverWidth = 16;
let leverHeight = 32;
let leverToggle = 32;
let leverHorizSpace = 8;
let leverSpaceAbove = 450;
let leverSlotSpaceAbove = 450;

// coin size and position parameters
let coinSize = 73;
let nickelX = 638;
let nickelY = 620;
let dimeX = 559;
let dimeY = 620;
let quarterX = 480;
let quarterY = 620;

// selector lever interrelated position parameters
let lever01X = 487;
let leverSlot01X = 485;
let lever01Y = leverSpaceAbove;
// all selector levers are initialized to 0 (up; not selected)
let lever01 = 0;
let lever02X = lever01X + leverWidth + leverHorizSpace;
let lever02Y = leverSpaceAbove;
let lever02 = 0;
let lever03X = lever02X + leverWidth + leverHorizSpace;
let lever03Y = leverSpaceAbove;
let lever03 = 0;
let lever04X = lever03X + leverWidth + leverHorizSpace;
let lever04Y = leverSpaceAbove;
let lever04 = 0;
let lever05X = lever04X + leverWidth + leverHorizSpace;
let lever05Y = leverSpaceAbove;
let lever05 = 0;
let lever06X = lever05X + leverWidth + leverHorizSpace;
let lever06Y = leverSpaceAbove;
let lever06 = 0;
let lever07X = lever06X + leverWidth + leverHorizSpace;
let lever07Y = leverSpaceAbove;
let lever07 = 0;
let lever08X = lever07X + leverWidth + leverHorizSpace;
let lever08Y = leverSpaceAbove;
let lever08 = 0;
let lever09X = lever08X + leverWidth + leverHorizSpace;
let lever09Y = leverSpaceAbove;
let lever09 = 0;
let lever10X = lever09X + leverWidth + leverHorizSpace;
let lever10Y = leverSpaceAbove;
let lever10 = 0;
let lever11X = lever10X + leverWidth + leverHorizSpace;
let lever11Y = leverSpaceAbove;
let lever11 = 0;
let lever12X = lever11X + leverWidth + leverHorizSpace;
let lever12Y = leverSpaceAbove;
let lever12 = 0;
let lever13X = lever12X + leverWidth + leverHorizSpace;
let lever13Y = leverSpaceAbove;
let lever13 = 0;
let lever14X = lever13X + leverWidth + leverHorizSpace;
let lever14Y = leverSpaceAbove;
let lever14 = 0;
let lever15X = lever14X + leverWidth + leverHorizSpace;
let lever15Y = leverSpaceAbove;
let lever15 = 0;
let lever16X = lever15X + leverWidth + leverHorizSpace;
let lever16Y = leverSpaceAbove;
let lever16 = 0;
let lever17X = lever16X + leverWidth + leverHorizSpace;
let lever17Y = leverSpaceAbove;
let lever17 = 0;
let lever18X = lever17X + leverWidth + leverHorizSpace;
let lever18Y = leverSpaceAbove;
let lever18 = 0;
let lever19X = lever18X + leverWidth + leverHorizSpace;
let lever19Y = leverSpaceAbove;
let lever19 = 0;
let lever20X = lever19X + leverWidth + leverHorizSpace;
let lever20Y = leverSpaceAbove;
let lever20 = 0;

// position paramaters for title card display
let numCircleX = 495;
let numCircleXInc = 250;
let numCircleY = 51;
let numCircleYInc = 36;
let titleCardX = 515;
let titleCardXInc = 250;
let titleCardY = 36;
let titleCardYInc = 36;
let titleX = 615;
let titleXInc = 250;
let titleSongY = 50;
let titleSongYInc = 36;
let titleArtistY = 62;
let titleArtistYInc = 36;
let numTextX = 495;
let numTextXInc = 250;
let numTextY = 60;
let numTextYInc = 36;
let clickCount = 0;

// define color presets
function goldFill() {
    fill(212, 175, 55);
}

function maroonFill() {
    fill(124, 36, 15);
}

function leverFill() {
    fill('red');
}

function paperFill() {
    fill(255, 247, 230);
}

function blackFill() {
    fill(0);
}
// define record information array
// (label info not used at this time)
let recordsLoaded = [
    {
        song: "Juke Box Saturday Night",
        artist: "Glenn Miller",
        audio: 'sounds/JukeBoxSaturdayNight.mp3',
        label: "RCA Victor"
        },

    {
        song: "Me and You",
        artist: "Duke Ellington",
        audio: 'sounds/MeAndYou.mp3',
        label: "RCA Victor"
        },

    {
        song: "It Don't Mean a Thing",
        artist: "Duke Ellington/Ivie Anderson",
        audio: 'sounds/DontMeanAThing.mp3',
        label: "RCA Victor"
        },

    {
        song: "A String of Pearls",
        artist: "Glenn Miller",
        audio: 'sounds/StringOfPearls.mp3',
        label: "RCA Victor"
        },

    {
        song: "More Than You Know",
        artist: "Count Basie",
        audio: 'sounds/MoreThanYouKnow.mp3',
        label: "Okeh"
        },

    {
        song: "Moonlight Serenade",
        artist: "Glenn Miller",
        audio: 'sounds/MoonlightSerenade.mp3',
        label: "RCA Victor"
        },

    {
        song: "Solitude",
        artist: "Duke Ellington",
        audio: 'sounds/Solitude.mp3',
        label: "RCA Victor"
        },

    {
        song: "I Have Eyes",
        artist: "Artie Shaw",
        audio: 'sounds/IHaveEyes.mp3',
        label: "RCA Victor"
        },

    {
        song: "Cotton Tail",
        artist: "Duke Ellington",
        audio: 'sounds/CottonTail.mp3',
        label: "RCA Victor"
        },

    {
        song: "Why Don't You Do Right",
        artist: "Benny Goodman/Peggy Lee",
        audio: 'sounds/DoRight.mp3',
        label: "Columbia"
        },

    {
        song: "Let's Dance",
        artist: "Benny Goodman",
        audio: 'sounds/LetsDance.mp3',
        label: "RCA Victor"
        },

    {
        song: "In The Mood",
        artist: "Glenn Miller",
        audio: 'sounds/InTheMood.mp3',
        label: "RCA Victor"
        },

    {
        song: "Brazil",
        artist: "Enrique Madriguera",
        audio: 'sounds/Brazil.mp3',
        label: "RCA Victor"
        },

    {
        song: "I Got It Bad",
        artist: "Duke Ellington",
        audio: 'sounds/IGotItBad.mp3',
        label: "RCA Victor"
        },

    {
        song: "Mood Indigo",
        artist: "Duke Ellington",
        audio: 'sounds/MoodIndigo.mp3',
        label: "RCA Victor"
        },

    {
        song: "Take the \"A\" Train",
        artist: "Duke Ellington",
        audio: 'sounds/TakeTheATrain.mp3',
        label: "RCA Victor"
        },

    {
        song: "No Name Jive",
        artist: "Glen Gray",
        audio: 'sounds/NoNameJive.mp3',
        label: "Decca"
        },

    {
        song: "Never No Lament",
        artist: "Duke Ellington",
        audio: 'sounds/NeverNoLament.mp3',
        label: "RCA Victor"
        },

    {
        song: "Sophisticated Lady",
        artist: "Duke Ellington",
        audio: 'sounds/SophisticatedLady.mp3',
        label: "Columbia"
        },

    {
        song: "Trumpet Blues",
        artist: "Harry James",
        audio: 'sounds/TrumpetBlues.mp3',
        label: "Columbia"
        }
    ]

// define queue arrays and variables
// playQueue stores song numbers to play
let playQueue = [];
// counterQueue stores song numbers to show in display
let counterQueue = [];
// dime2Plays stores selections played when dime is inserted
let dime2Plays;
// quarter5Plays stores selections played with quarter is inserted
let quarter5Plays;

// preload
function preload() {
    // preload fonts
    boldFont = loadFont('fonts/Oswald-Regular.ttf');
    xBoldFont = loadFont('fonts/Oswald-Medium.ttf');
    // load into previously declared variables all songs in array
    song01 = loadSound(recordsLoaded[0].audio);
    song02 = loadSound(recordsLoaded[1].audio);
    song03 = loadSound(recordsLoaded[2].audio);
    song04 = loadSound(recordsLoaded[3].audio);
    song05 = loadSound(recordsLoaded[4].audio);
    song06 = loadSound(recordsLoaded[5].audio);
    song07 = loadSound(recordsLoaded[6].audio);
    song08 = loadSound(recordsLoaded[7].audio);
    song09 = loadSound(recordsLoaded[8].audio);
    song10 = loadSound(recordsLoaded[9].audio);
    song11 = loadSound(recordsLoaded[10].audio);
    song12 = loadSound(recordsLoaded[11].audio);
    song13 = loadSound(recordsLoaded[12].audio);
    song14 = loadSound(recordsLoaded[13].audio);
    song15 = loadSound(recordsLoaded[14].audio);
    song16 = loadSound(recordsLoaded[15].audio);
    song17 = loadSound(recordsLoaded[16].audio);
    song18 = loadSound(recordsLoaded[17].audio);
    song19 = loadSound(recordsLoaded[18].audio);
    song20 = loadSound(recordsLoaded[19].audio);
    // preload sounds-effects files
    nickelDrop = loadSound('sounds/NickelDrop.mp3');
    dimeDrop = loadSound('sounds/DimeDrop.mp3');
    quarterDrop = loadSound('sounds/QuarterDrop.mp3');
    // selection lever clicked down
    leverThunk = loadSound('sounds/LeverThunk.mp3');
    // selection lever clicked up
    leverThunkUp = loadSound('sounds/LeverThunkUp.mp3');
}

function setup() {
    createCanvas(1024, 768);
    angleMode(DEGREES);
    // values for moving sine wave rings on jukebox front
    xPos = 0.005;
    inc = 0.25;
    // define FFT for waveform display at bottom of screen
    fft = new p5.FFT();
    // set background color
    background(102, 53, 0);

    // start title display section
    // set fill to gold
    goldFill();
    // title display section escutcheon
    rect(numCircleX - 22, numCircleY - 20, 500, 365, 10);
    // generate first column of title cards
    for (i = 0; i < 10; i++) {
        // set fill to paper
        paperFill();
        strokeWeight(1);
        stroke(0);
        //draw white rectangle for a title card
        rect(titleCardX, titleCardY, 200, 30);
        // change fill to maroon
        maroonFill();
        // no stroke, change font to xBold, center text
        noStroke();
        textFont(xBoldFont);
        textAlign(CENTER);
        // text size 24 and draw selection numbers
        textSize(24);
        text((i+1), numTextX, numTextY);
        // text size 14, black fill for title card text
        blackFill();
        textSize(14);
        // draw songs on title cards
        text(recordsLoaded[i].song, titleX, titleSongY);
        // text size 12, draw artists on title cards
        textSize(12);
        text(recordsLoaded[i].artist, titleX, titleArtistY);
        // increment Y values for next title card
        numCircleY = numCircleY + numCircleYInc;
        titleCardY = titleCardY + titleCardYInc;
        numTextY = numTextY + numTextYInc;
        titleSongY = titleSongY + titleSongYInc;
        titleArtistY = titleArtistY + titleArtistYInc;
    };

    // reset values (X over, Y up) for second column of title cards
    numCircleX = numCircleX + numCircleXInc;
    titleCardX = titleCardX + titleCardXInc;
    numTextX = numTextX + numTextXInc;
    titleX = titleX + titleXInc;
    numCircleY = numCircleY - (numCircleYInc * 10);
    titleCardY = titleCardY - (titleCardYInc * 10);
    numTextY = numTextY - (numTextYInc * 10);
    titleSongY = titleSongY - (titleSongYInc * 10);
    titleArtistY = titleArtistY - (titleArtistYInc * 10);

    // draw second column of title cards just like first column
    for (i = 0; i < 10; i++) {
        paperFill();
        strokeWeight(1);
        stroke(0);
        rect(titleCardX, titleCardY, 200, 30);
        maroonFill();
        noStroke();
        textFont(xBoldFont);
        textAlign(CENTER);
        textSize(24);
        text((i+11), numTextX, numTextY);
        blackFill();
        textSize(14);
        text(recordsLoaded[i+10].song, titleX, titleSongY);
        textSize(12);
        text(recordsLoaded[i+10].artist, titleX, titleArtistY);
        numCircleY = numCircleY + numCircleYInc;
        titleCardY = titleCardY + titleCardYInc;
        numTextY = numTextY + numTextYInc;
        titleSongY = titleSongY + titleSongYInc;
        titleArtistY = titleArtistY + titleArtistYInc;
    };

    goldFill();
    strokeWeight(1);
    stroke(0);
    // draw background rectangle for coin handler section
    rect(numCircleX - (numCircleXInc + 22), numCircleY + 159, 245, 114, 10);
    // draw background rectangle for selection playing display
    rect(numCircleX - (numCircleXInc + 22) + 255, numCircleY + 159, 245, 114, 10);
    // bright red (but not pure red) fill for clickable areas
    fill(220, 0, 0);
    // draw three windows for quarter, dime, nickel
    rect(480, 604, 73, 73, 5);
    rect(559, 604, 73, 73, 5);
    rect(638, 604, 73, 73, 5);
    // draw outer (framing) window for selection playing display area
    maroonFill();
    rect(814, 589, 73, 73, 5);
    // draw inner window for selection playing display area
    paperFill();
    rect(819, 594, 63, 63, 5);

    // start putting text in coin handler section
    maroonFill();
    noStroke();
    textFont(xBoldFont);
    textSize(18);
    text('5 PLAYS', 516, 596);
    text('2 PLAYS', 595, 596);
    text('1 PLAY', 674, 596);
    // special brighter fill color for text in clickable areas
    fill(242, 205, 75);
    textFont(boldFont)
    textSize(36);
    text('25¢', 518, 640);
    text('10¢', 597, 640);
    text('5¢', 676, 640);
    textSize(12);
    text('CLICK TO', 518, 657);
    text('CLICK TO', 597, 657);
    text('CLICK TO', 676, 657);
    text('INSERT COIN', 518, 672);
    text('INSERT COIN', 597, 672);
    text('INSERT COIN', 676, 672);

    // start putting text in selection playing display area
    maroonFill();
    textFont(xBoldFont)
    textSize(17);
    text('SELECTION', 772, 630);
    text('PLAYING', 927, 630);
// end of setup function 
}

function draw() {
    // We start with moving rings on the front of the jukebox;
    // these are based on streaked/marbleized plastic panels
    // (non-moving) on the original jukebox that were quite 
    // a sensation at the time 

    // declare variables for sine wave motion of rings 
    // on jukebox front
    var mySinVal = sin(xPos);
    vEllipseMotion = mySinVal * 10;
    hEllipseMotion = mySinVal * 15;

    // draw top and bottom blue backgrounds behind moving rings
    noStroke();
    // special blue fill value
    fill(24, 84, 132);
    rect(100, 258, 288, 75);
    rect(100, 563, 288, 75);

    // now start drawing moving rings for top section
    noFill();
    // special light yellow color for half the rings
    stroke(200, 200, 148);
    strokeWeight(2);
    // yellow rings for top section
    ellipse(248, 288, 298, (sq(vEllipseMotion) / -5) + 128);
    ellipse(248, 268, 298, (sq(hEllipseMotion) / -5) + 128);
    ellipse(245, 278, 288, (sq(hEllipseMotion) / -5) + 128);
    ellipse(248, 258, 278, (sq(hEllipseMotion) / -5) + 128);
    ellipse(245, 248, 268, (sq(hEllipseMotion) / -5) + 128);
    ellipse(248, 238, 248, (sq(hEllipseMotion) / -5) + 128);
    ellipse(245, 228, 248, (sq(hEllipseMotion) / -5) + 128);
    ellipse(248, 218, 238, (sq(hEllipseMotion) / -5) + 128);
    ellipse(245, 258, 228, (sq(hEllipseMotion) / -5) + 128);

    // yellow rings for bottom section
    ellipse(248, 590, 298, (sq(vEllipseMotion) / -5) + 128);
    ellipse(248, 580, 298, (sq(hEllipseMotion) / -5) + 138);
    ellipse(245, 570, 288, (sq(hEllipseMotion) / -5) + 138);
    ellipse(248, 560, 278, (sq(hEllipseMotion) / -5) + 128);
    ellipse(245, 550, 268, (sq(hEllipseMotion) / -5) + 128);
    ellipse(248, 540, 248, (sq(hEllipseMotion) / -5) + 128);
    ellipse(245, 530, 248, (sq(hEllipseMotion) / -5) + 128);
    ellipse(248, 520, 238, (sq(hEllipseMotion) / -5) + 128);
    ellipse(245, 510, 228, (sq(hEllipseMotion) / -5) + 128);

    // change fill to white (not pure white) for other half
    //of rings and make stroke weight heavier
    stroke(225, 225, 225);
    strokeWeight(3);

    // white rings for top section
    ellipse(238, 278, 298, (sq(vEllipseMotion) / -5) + 128);
    ellipse(258, 278, 278, (sq(hEllipseMotion) / -5) + 128);
    ellipse(235, 268, 288, (sq(hEllipseMotion) / -5) + 128);
    ellipse(258, 248, 258, (sq(hEllipseMotion) / -5) + 128);
    ellipse(235, 238, 268, (sq(hEllipseMotion) / -5) + 128);
    ellipse(258, 228, 238, (sq(hEllipseMotion) / -5) + 148);
    ellipse(235, 218, 248, (sq(hEllipseMotion) / -5) + 128);
    ellipse(258, 208, 238, (sq(hEllipseMotion) / -5) + 128);
    ellipse(235, 228, 198, (sq(hEllipseMotion) / -5) + 128);

    // white rings for bottom section
    ellipse(248, 605, 298, (sq(hEllipseMotion) / -5) + 128);
    ellipse(235, 585, 288, (sq(hEllipseMotion) / -5) + 128);
    ellipse(258, 575, 258, (sq(hEllipseMotion) / -5) + 128);
    ellipse(235, 565, 268, (sq(hEllipseMotion) / -5) + 128);
    ellipse(258, 555, 238, (sq(hEllipseMotion) / -5) + 148);
    ellipse(235, 545, 248, (sq(hEllipseMotion) / -5) + 128);
    ellipse(258, 535, 238, (sq(hEllipseMotion) / -5) + 128);
    ellipse(235, 525, 198, (sq(hEllipseMotion) / -5) + 128);

    // increment the sine wave value to create motion
    xPos = xPos + inc;

    // now draw body of jukebox on top of rings to mask out most 
    // of them; only a small portions of the rings will be visible

    // dark wood-color fill for body of jukebox
    fill(51, 26, 0);
    strokeWeight(.5);
    // stroke is same color as goldFill preset
    stroke(212, 175, 55);

    // draw jukebox lid
    rect(105, 40, 278, 120, 55);
    // change fill to red and draw backlit plastic panel in lid
    fill('red');
    rect(152, 45, 184, 120,5);
    // back to wood color
    fill(51, 26, 0);
    // top of jukebox body
    rect(40, 95, 408, 160, 75);
    // jukebox body sides left and right
    // (tall, next to red plastic)
    rect(78, 189, 26, 460);
    rect(384, 189, 26, 460);
    // (short, nexto to speaker area)
    rect(104, 324, 26, 248);
    rect(358, 324, 26, 248);
    // special light fill color for control-panel area
    fill(255, 255, 204);
    // draw control-panel area
    rect(104, 160, 280, 102);

    // fill to gold for title-card and control escutcheons
    goldFill();
    stroke(212, 175, 55);
    // draw title-card escutcheon
    rect(104, 120, 280, 40);
    // draw coin-feed escutcheon
    rect(106, 195, 63, 30, 5);
    // change to maroon fill for coin-feed items
    maroonFill();
    textSize(5);
    text('5 PLAYS', 120, 204);
    text('2 PLAYS', 138, 204);
    text('1 PLAY', 156, 204);
    ellipse(120, 213, 14, 14);
    ellipse(138, 213, 14, 14);
    ellipse(156, 213, 14, 14);
    textSize(8);
    // gold fill and no stroke for numbers inside circles
    goldFill();
    noStroke();
    text('25¢', 120, 216);
    text('10¢', 138, 216);
    text('5¢', 156, 216);
    // special black (not pure black) fill for three coin slots
    fill(40);
    rect(112, 228, 16, 5);
    rect(130, 228, 16, 5);
    rect(148, 228, 16, 5);

    // change to gold fill and draw escutcheon for selection-
    // playing display area
    goldFill();
    rect(318, 195, 63, 30, 5);
    // change to maroon fill for selection-playing lettering
    maroonFill();
    textSize(5);
    text('SELECTION', 331, 212);
    text('PLAYING', 370, 212);
    // change to white fill maroon stroke, then
    // draw selection-playing display window    
    fill(255);
    stroke(124, 36, 15);
    strokeWeight(1)
    rect(343, 202, 16, 16, 3)

    // change to gold fill and no stroke for selector escutcheon
    goldFill();
    noStroke();
    // selector escutcheon is three overlapping rectangles
    rect(177, 165, 132, 50, 5);
    rect(192, 205, 102, 25, 5);
    rect(207, 225, 72, 20, 5);

    // change to maroon fill for small windows above selector
    // levers (these were numbered on the original jukebox,
    // but no room for numbers here)
    maroonFill();
    // draw 20 windows, nicely spaced
    for (i = 1; i < 20; i++) {
    rect(i + 182 + i*5, 175, 4, 4);
    }
    // change fill to special red (bright but not too bright)
    // and draw 20 selector levers (in up, i.e. not selected,
    // position)
    fill(190, 0, 0);
    for (i = 1; i < 20; i++) {
        rect(i + 182 + i*5, 182, 4, 12);
        }

    // change fill to black and draw 20 selector lever slots
    fill(0);
    for (i = 1; i < 20; i++) {
        rect(i + 182 + i*5, 194, 4, 12);
        }
    
    // change fill to maroon and draw badge rectangle
    maroonFill();
    rect(215, 210, 56, 30, 5,);
    //change fill to red and put lettering in badge
    fill('red');
    textSize(14);
    text('SEEBURG', 243, 225);
    textSize(9.5);
    text('SYMPHONOLA', 243, 236);

    // change fill to maroon for title-card number circles
    maroonFill();
    // draw 20 circles in four columns for title-card numbers
    ellipse(127,127,6);
    ellipse(127,133,6);
    ellipse(127,139,6);
    ellipse(127,145,6);
    ellipse(127,151,6);

    ellipse(187,127,6);
    ellipse(187,133,6);
    ellipse(187,139,6);
    ellipse(187,145,6);
    ellipse(187,151,6);

    ellipse(247,127,6);
    ellipse(247,133,6);
    ellipse(247,139,6);
    ellipse(247,145,6);
    ellipse(247,151,6);

    ellipse(307,127,6);
    ellipse(307,133,6);
    ellipse(307,139,6);
    ellipse(307,145,6);
    ellipse(307,151,6);

    // change fill to white and stroke to black for title cards
    fill(255);
    strokeWeight(.5);
    stroke(0);
    // draw 20 title cards in four columns
    rect(132, 124, 48, 6);
    rect(132, 130, 48, 6);
    rect(132, 136, 48, 6);
    rect(132, 142, 48, 6);
    rect(132, 148, 48, 6);

    rect(192, 124, 48, 6);
    rect(192, 130, 48, 6);
    rect(192, 136, 48, 6);
    rect(192, 142, 48, 6);
    rect(192, 148, 48, 6);

    rect(252, 124, 48, 6);
    rect(252, 130, 48, 6);
    rect(252, 136, 48, 6);
    rect(252, 142, 48, 6);
    rect(252, 148, 48, 6);

    rect(312, 124, 48, 6);
    rect(312, 130, 48, 6);
    rect(312, 136, 48, 6);
    rect(312, 142, 48, 6);
    rect(312, 148, 48, 6);

    // change stroke color to gold and fill to wood color
    // for base of jukebox body
    stroke(212, 175, 55);
    fill(51, 26, 0);
    // base pieces of jukebox body
    ellipse(244, 655, 332, 50);
    rect(40, 615, 40, 34)
    rect(408, 615, 40, 34)
    rect(40, 631, 408, 34)
    fill(153, 115, 0);

    // change stroke to black and stroke weight to 1 for 
    // gold horizontal elements on front of jukebox
    strokeWeight(1);
    stroke(0);
    // top five gold horizontal elements
    rect(100, 252, 288, 18, 9);
    rect(217, 270, 49, 16, 8);
    rect(100, 286, 288, 18, 9);
    rect(217, 304, 49, 16, 8);
    rect(100, 320, 288, 18, 9);
    // bottom five gold horizontal elements
    rect(100, 563, 288, 18, 9);
    rect(217, 581, 49, 16, 8);
    rect(100, 597, 288, 18, 9);
    rect(217, 615, 49, 16, 8);
    rect(100, 631, 288, 18, 9);
    // change fill to tan and draw loudspeaker cloth
    fill('tan');
    rect(130, 338, 228, 225);
    // change fill to two shades of green and draw center bars
    fill('green');
    rect(219, 338, 45, 225);
    fill('darkgreen');
    rect(229, 338, 25, 225);
    // change fill to yellow for flanking center bars
    fill('gold');
    rect(209, 338, 10, 225);
    rect(264, 338, 10, 225);
    // change fill to red
    fill('red');
    // draw red plastic panels and 4 red vertical bars
    rect(42, 189, 36, 425);
    rect(130, 338, 10, 225);
    rect(157, 338, 8, 225);
    rect(321, 338, 8, 225);
    rect(348, 338, 10, 225);
    rect(410, 189, 36, 425);
    stroke(212, 175, 55)
    //draw two vertical lines  at edges of control panel
    line(104, 97, 103, 190);
    line(384, 97, 384, 190);

    // change to gold fill and black stroke for right control panel
    goldFill();
    stroke(0);
    strokeWeight(.5)
    // draw right control panel escutcheon
    rect(numCircleX - (numCircleXInc + 22), numCircleY, 500, 142, 10);
    // change to maroon fill, no stroke, xBold font for 
    // control panel lettering
    maroonFill();
    noStroke();
    textFont(xBoldFont);
    textSize(16);
    text('CLICK TO SELECT OR DESELECT • MAKE SELECTIONS BEFORE INSERTING COINS', 722, 433);
    textSize(18);
    // leverSlot01X value has changed previously, so must 
    // redefine it here to original (starting) value
    let leverSlot01X = 485;
    // draw 20 black lever slots
    for (i = 0; i < 20; i++) {
        blackFill();
        rect((leverSlot01X), (leverSlotSpaceAbove - 6), (leverWidth + 4), ((leverHeight * 2) + 12));
        leverSlot01X = leverSlot01X + leverWidth + leverHorizSpace;
        // change fill to maroon and no stroke
        maroonFill();
        noStroke();
        // change text size for selector lever numbers
        textSize(16);
        text(i + 1, leverSlot01X - 13, 542);
    };
    // change fill to red and draw selector levers
    leverFill();
    rect(lever01X, lever01Y, leverWidth, leverHeight);
    rect(lever02X, lever02Y, leverWidth, leverHeight);
    rect(lever03X, lever03Y, leverWidth, leverHeight);
    rect(lever04X, lever04Y, leverWidth, leverHeight);
    rect(lever05X, lever05Y, leverWidth, leverHeight);
    rect(lever06X, lever06Y, leverWidth, leverHeight);
    rect(lever07X, lever07Y, leverWidth, leverHeight);
    rect(lever08X, lever08Y, leverWidth, leverHeight);
    rect(lever09X, lever09Y, leverWidth, leverHeight);
    rect(lever10X, lever10Y, leverWidth, leverHeight);
    rect(lever11X, lever11Y, leverWidth, leverHeight);
    rect(lever12X, lever12Y, leverWidth, leverHeight);
    rect(lever13X, lever13Y, leverWidth, leverHeight);
    rect(lever14X, lever14Y, leverWidth, leverHeight);
    rect(lever15X, lever15Y, leverWidth, leverHeight);
    rect(lever16X, lever16Y, leverWidth, leverHeight);
    rect(lever17X, lever17Y, leverWidth, leverHeight);
    rect(lever18X, lever18Y, leverWidth, leverHeight);
    rect(lever19X, lever19Y, leverWidth, leverHeight);
    rect(lever20X, lever20Y, leverWidth, leverHeight);

    // change fill to background color
    fill(102, 53, 0);
    // draw masking rectangle behind waveform visualizer
    // (so visualizer doesn't fill in)
    rect(0, 685, width, 83);

    // start waveform visualizer coding
    let waveform = fft.waveform();
    noFill();
    beginShape();
    // stroke color same as gold fill
    stroke(212, 175, 55);
    strokeWeight(1);
    for (let i = 0; i < waveform.length; i++){
        let x = map(i, 0, waveform.length, 0, width);
        // Y values chosen to confine waveform display to
        // bottom clear part of screen
        let y = map( waveform[i], -25, 25, 0, (height / 8) + 1350);
        vertex(x,y);
    }
    endShape();
// end of draw function
}

function mouseClicked() {
    // nickel plays 1 song, so basically same routine for
    // each of the 20 selector levers

    // start with nickel clicked, lever 1 set
    if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        // if lever is down, value is 1
        lever01 === 1) {
            // play nickeldrop sound
            nickelDrop.play();
            // move lever back to up (0) position
            lever01Y = lever01Y - leverToggle;
            lever01 = 0;
            // push the selector lever's song to the play queue
            playQueue.push(song01);
            // add the song number to the counter queue
            counterQueue.push('1');
            // start the play routine
            startPlay();
    // else nickel clicked, lever 2 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever02 ===1) {
            nickelDrop.play();
            lever02Y = lever02Y - leverToggle;
            lever02 = 0;
            playQueue.push(song02);
            counterQueue.push('2');
            startPlay();
    // else nickel clicked, lever 3 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever03 ===1) {
            nickelDrop.play();
            lever03Y = lever03Y - leverToggle;
            lever03 = 0;
            playQueue.push(song03);
            counterQueue.push('3');
            startPlay();
    // else nickel clicked, lever 4 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever04 ===1) {
            nickelDrop.play();
            lever04Y = lever04Y - leverToggle;
            lever04 = 0;
            playQueue.push(song04);
            counterQueue.push('4');
            startPlay();
    // else nickel clicked, lever 5 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever05 ===1) {
            nickelDrop.play();
            lever05Y = lever05Y - leverToggle;
            lever05 = 0;
            playQueue.push(song05);
            counterQueue.push('5');
            startPlay();
    // else nickel clicked, lever 6 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever06 ===1) {
            nickelDrop.play();
            lever06Y = lever06Y - leverToggle;
            lever06 = 0;
            playQueue.push(song06);
            counterQueue.push('6');
            startPlay();
    // else nickel clicked, lever 7 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever07 ===1) {
            nickelDrop.play();
            lever07Y = lever07Y - leverToggle;
            lever07 = 0;
            playQueue.push(song07);
            counterQueue.push('7');
            startPlay();
    // else nickel clicked, lever 8 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever08 ===1) {
            nickelDrop.play();
            lever08Y = lever08Y - leverToggle;
            lever08 = 0;
            playQueue.push(song08);
            counterQueue.push('8');
            startPlay();
    // else nickel clicked, lever 9 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever09 ===1) {
            nickelDrop.play();
            lever09Y = lever09Y - leverToggle;
            lever09 = 0;
            playQueue.push(song09);
            counterQueue.push('9');
            startPlay();
    // else nickel clicked, lever 10 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever10 ===1) {
            nickelDrop.play();
            lever10Y = lever10Y - leverToggle;
            lever10 = 0;
            playQueue.push(song10);
            counterQueue.push('10');
            startPlay();
    // else nickel clicked, lever 11 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever11 ===1) {
            nickelDrop.play();
            lever11Y = lever11Y - leverToggle;
            lever11 = 0;
            playQueue.push(song11);
            counterQueue.push('11');
            startPlay();
    // else nickel clicked, lever 12 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever12 ===1) {
            nickelDrop.play();
            lever12Y = lever12Y - leverToggle;
            lever12 = 0;
            playQueue.push(song12);
            counterQueue.push('12');
            startPlay();
    // else nickel clicked, lever 13 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever13 ===1) {
            nickelDrop.play();
            lever13Y = lever13Y - leverToggle;
            lever13 = 0;
            playQueue.push(song13);
            counterQueue.push('13');
            startPlay();
    // else nickel clicked, lever 14 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever14 ===1) {
            nickelDrop.play();
            lever14Y = lever14Y - leverToggle;
            lever14 = 0;
            playQueue.push(song14);
            counterQueue.push('14');
            startPlay();
    // else nickel clicked, lever 15 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever15 ===1) {
            nickelDrop.play();
            lever15Y = lever15Y - leverToggle;
            lever15 = 0;
            playQueue.push(song15);
            counterQueue.push('15');
            startPlay();
    // else nickel clicked, lever 16 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever16 ===1) {
            nickelDrop.play();
            lever16Y = lever16Y - leverToggle;
            lever16 = 0;
            playQueue.push(song16);
            counterQueue.push('16');
            startPlay();
    // else nickel clicked, lever 17 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever17 ===1) {
            nickelDrop.play();
            lever17Y = lever17Y - leverToggle;
            lever17 = 0;
            playQueue.push(song17);
            counterQueue.push('17');
            startPlay();
    // else nickel clicked, lever 18 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever18 ===1) {
            nickelDrop.play();
            lever18Y = lever18Y - leverToggle;
            lever18 = 0;
            playQueue.push(song18);
            counterQueue.push('18');
            startPlay();
    // else nickel clicked, lever 19 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever19 ===1) {
            nickelDrop.play();
            lever19Y = lever19Y - leverToggle;
            lever19 = 0;
            playQueue.push(song19);
            counterQueue.push('19');
            startPlay();
    // else nickel clicked, lever 20 set
    } else if ((mouseX >= nickelX && mouseX <= nickelX + coinSize) && 
        (mouseY >= nickelY && mouseY <= nickelY + coinSize) &&
        lever20 ===1) {
            nickelDrop.play();
            lever20Y = lever20Y - leverToggle;
            lever20 = 0;
            playQueue.push(song20);
            counterQueue.push('20');
            startPlay();
// else dime clicked
// logic for dime and quarter differs from logic for nickel
// because dime and quarter offer multiple plays
    } else if ((mouseX >= dimeX && mouseX <= dimeX + coinSize) && 
        (mouseY >= dimeY && mouseY <= dimeY + coinSize)) {
            // set dime2Plays to be 2 at start
            dime2Plays = 2;
            // if lever 1 set and there are still plays available 
            // from dropping this dime, add the song to the 
            // play queue and the song number to the counter queue;
            // if no plays are available and this lever is set,
            // don't add anything to either queue and leave
            // the lever down (leave the song selected);
            // after all the levers have been scanned, we will
            // start the play routine
            if ((lever01 === 1) && (dime2Plays > 0)) {
                // move lever back to up (0) position
                lever01Y = lever01Y - leverToggle;
                lever01 = 0;
                // push the selector lever's song to the play queue
                playQueue.push(song01);
                // add the song number to the counter queue
                counterQueue.push('1');
                // decrement dime2Plays by 1 play
                dime2Plays = dime2Plays - 1;
            }
            // lever 2 set
            if ((lever02 === 1) && (dime2Plays > 0)) {
                lever02Y = lever02Y - leverToggle;
                lever02 = 0;
                playQueue.push(song02);
                counterQueue.push('2');
                dime2Plays = dime2Plays - 1;
            }
            // lever 3 set
            if ((lever03=== 1) && (dime2Plays > 0)) {
                lever03Y = lever03Y - leverToggle;
                lever03 = 0;
                playQueue.push(song03);
                counterQueue.push('3');
                dime2Plays = dime2Plays - 1;
            }
            // lever 4 set
            if ((lever04=== 1) && (dime2Plays > 0)) {
                lever04Y = lever04Y - leverToggle;
                lever04 = 0;
                playQueue.push(song04);
                counterQueue.push('4');
                dime2Plays = dime2Plays - 1;
            }
            // lever 5 set
            if ((lever05=== 1) && (dime2Plays > 0)) {
                lever05Y = lever05Y - leverToggle;
                lever05 = 0;
                playQueue.push(song05);
                counterQueue.push('5');
                dime2Plays = dime2Plays - 1;
            }
            // lever 6 set
            if ((lever06=== 1) && (dime2Plays > 0)) {
                lever06Y = lever06Y - leverToggle;
                lever06 = 0;
                playQueue.push(song06);
                counterQueue.push('6');
                dime2Plays = dime2Plays - 1;
            }
            // lever 7 set
            if ((lever07=== 1) && (dime2Plays > 0)) {
                lever07Y = lever07Y - leverToggle;
                lever07 = 0;
                playQueue.push(song07);
                counterQueue.push('7');
                dime2Plays = dime2Plays - 1;
            }
            // lever 8 set
            if ((lever08=== 1) && (dime2Plays > 0)) {
                lever08Y = lever08Y - leverToggle;
                lever08 = 0;
                playQueue.push(song08);
                counterQueue.push('8');
                dime2Plays = dime2Plays - 1;
            }
            // lever 9 set
            if ((lever09=== 1) && (dime2Plays > 0)) {
                lever09Y = lever09Y - leverToggle;
                lever09 = 0;
                playQueue.push(song09);
                counterQueue.push('9');
                dime2Plays = dime2Plays - 1;
            }
            // lever 10 set
            if ((lever10=== 1) && (dime2Plays > 0)) {
                lever10Y = lever10Y - leverToggle;
                lever10 = 0;
                playQueue.push(song10);
                counterQueue.push('10');
                dime2Plays = dime2Plays - 1;
            }
            // lever 11 set
            if ((lever11=== 1) && (dime2Plays > 0)) {
                lever11Y = lever11Y - leverToggle;
                lever11 = 0;
                playQueue.push(song11);
                counterQueue.push('11');
                dime2Plays = dime2Plays - 1;
            }
            // lever 12 set
            if ((lever12=== 1) && (dime2Plays > 0)) {
                lever12Y = lever12Y - leverToggle;
                lever12 = 0;
                playQueue.push(song12);
                counterQueue.push('12');
                dime2Plays = dime2Plays - 1;
            }
            // lever 13 set
            if ((lever13=== 1) && (dime2Plays > 0)) {
                lever13Y = lever13Y - leverToggle;
                lever13 = 0;
                playQueue.push(song13);
                counterQueue.push('13');
                dime2Plays = dime2Plays - 1;
            }
            // lever 14 set
            if ((lever14=== 1) && (dime2Plays > 0)) {
                lever14Y = lever14Y - leverToggle;
                lever14 = 0;
                playQueue.push(song14);
                counterQueue.push('14');
                dime2Plays = dime2Plays - 1;
            }
            // lever 15 set
            if ((lever15=== 1) && (dime2Plays > 0)) {
                lever15Y = lever15Y - leverToggle;
                lever15 = 0;
                playQueue.push(song15);
                counterQueue.push('15');
                dime2Plays = dime2Plays - 1;
            }
            // lever 16 set
            if ((lever16=== 1) && (dime2Plays > 0)) {
                lever16Y = lever16Y - leverToggle;
                lever16 = 0;
                playQueue.push(song16);
                counterQueue.push('16');
                dime2Plays = dime2Plays - 1;
            }
            // lever 17 set
            if ((lever17=== 1) && (dime2Plays > 0)) {
                lever17Y = lever17Y - leverToggle;
                lever17 = 0;
                playQueue.push(song17);
                counterQueue.push('17');
                dime2Plays = dime2Plays - 1;
            }
            // lever 18 set
            if ((lever18=== 1) && (dime2Plays > 0)) {
                lever18Y = lever18Y - leverToggle;
                lever18 = 0;
                playQueue.push(song18);
                counterQueue.push('18');
                dime2Plays = dime2Plays - 1;
            }
            // lever 19 set
            if ((lever19=== 1) && (dime2Plays > 0)) {
                lever19Y = lever19Y - leverToggle;
                lever19 = 0;
                playQueue.push(song19);
                counterQueue.push('19');
                dime2Plays = dime2Plays - 1;
            }
            // lever 20 set
            if ((lever20=== 1) && (dime2Plays > 0)) {
                lever20Y = lever20Y - leverToggle;
                lever20 = 0;
                playQueue.push(song20);
                counterQueue.push('20');
                dime2Plays = dime2Plays - 1;
            }
            // all the selector levers have been scanned,
            // so play the dimedrop sound and start the play
            // routine
            dimeDrop.play();
            startPlay();
    // else quarter clicked
    // see logic explanation at start of dime section;
    // quarter logic is the same except for dealing with
    // 5 plays instead of 2 plays
    } else if ((mouseX >= quarterX && mouseX <= quarterX + coinSize) && 
        (mouseY >= quarterY && mouseY <= quarterY + coinSize)) {
            quarter5Plays = 5;
            // lever 1 set
            if ((lever01 === 1) && (quarter5Plays > 0)) {
                lever01Y = lever01Y - leverToggle;
                lever01 = 0;
                playQueue.push(song01);
                counterQueue.push('1');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 2 set
            if ((lever02 === 1) && (quarter5Plays > 0)) {
                lever02Y = lever02Y - leverToggle;
                lever02 = 0;
                playQueue.push(song02);
                counterQueue.push('2');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 3 set
            if ((lever03=== 1) && (quarter5Plays > 0)) {
                lever03Y = lever03Y - leverToggle;
                lever03 = 0;
                playQueue.push(song03);
                counterQueue.push('3');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 4 set
            if ((lever04=== 1) && (quarter5Plays > 0)) {
                lever04Y = lever04Y - leverToggle;
                lever04 = 0;
                playQueue.push(song04);
                counterQueue.push('4');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 5 set
            if ((lever05=== 1) && (quarter5Plays > 0)) {
                lever05Y = lever05Y - leverToggle;
                lever05 = 0;
                playQueue.push(song05);
                counterQueue.push('5');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 6 set
            if ((lever06=== 1) && (quarter5Plays > 0)) {
                lever06Y = lever06Y - leverToggle;
                lever06 = 0;
                playQueue.push(song06);
                counterQueue.push('6');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 7 set
            if ((lever07=== 1) && (quarter5Plays > 0)) {
            lever07Y = lever07Y - leverToggle;
            lever07 = 0;
            playQueue.push(song07);
            counterQueue.push('7');
            quarter5Plays = quarter5Plays - 1;
            }
            // lever 8 set
            if ((lever08=== 1) && (quarter5Plays > 0)) {
                lever08Y = lever08Y - leverToggle;
                lever08 = 0;
                playQueue.push(song08);
                counterQueue.push('8');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 9 set
            if ((lever09=== 1) && (quarter5Plays > 0)) {
                lever09Y = lever09Y - leverToggle;
                lever09 = 0;
                playQueue.push(song09);
                counterQueue.push('9');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 10 set
            if ((lever10=== 1) && (quarter5Plays > 0)) {
                lever10Y = lever10Y - leverToggle;
                lever10 = 0;
                playQueue.push(song10);
                counterQueue.push('10');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 11 set
            if ((lever11=== 1) && (quarter5Plays > 0)) {
            lever11Y = lever11Y - leverToggle;
                lever11 = 0;
                playQueue.push(song11);
                counterQueue.push('11');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 12 set
            if ((lever12=== 1) && (quarter5Plays > 0)) {
                lever12Y = lever12Y - leverToggle;
                lever12 = 0;
                playQueue.push(song12);
                counterQueue.push('12');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 13 set
            if ((lever13=== 1) && (quarter5Plays > 0)) {
                lever13Y = lever13Y - leverToggle;
                lever13 = 0;
                playQueue.push(song13);
                counterQueue.push('13');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 14 set
            if ((lever14=== 1) && (quarter5Plays > 0)) {
                lever14Y = lever14Y - leverToggle;
                lever14 = 0;
                playQueue.push(song14);
                counterQueue.push('14');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 15 set
            if ((lever15=== 1) && (quarter5Plays > 0)) {
                lever15Y = lever15Y - leverToggle;
                lever15 = 0;
                playQueue.push(song15);
                counterQueue.push('15');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 16 set
            if ((lever16=== 1) && (quarter5Plays > 0)) {
                lever16Y = lever16Y - leverToggle;
                lever16 = 0;
                playQueue.push(song16);
                counterQueue.push('16');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 17 set
            if ((lever17=== 1) && (quarter5Plays > 0)) {
                lever17Y = lever17Y - leverToggle;
                lever17 = 0;
                playQueue.push(song17);
                counterQueue.push('17');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 18 set
            if ((lever18=== 1) && (quarter5Plays > 0)) {
                lever18Y = lever18Y - leverToggle;
                lever18 = 0;
                playQueue.push(song18);
                counterQueue.push('18');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 19 set
            if ((lever19=== 1) && (quarter5Plays > 0)) {
                lever19Y = lever19Y - leverToggle;
                lever19 = 0;
                playQueue.push(song19);
                counterQueue.push('19');
                quarter5Plays = quarter5Plays - 1;
            }
            // lever 20 set
            if ((lever20=== 1) && (quarter5Plays > 0)) {
                lever20Y = lever20Y - leverToggle;
                lever20 = 0;
                playQueue.push(song20);
                counterQueue.push('20');
                quarter5Plays = quarter5Plays - 1;

            }
        quarterDrop.play();
        startPlay();
    // This section handles clicks on selector levers;
    // if the lever is, move it down; if it's down, move it up
    // 
    // else lever 1 clicked when not set
    } else if ((mouseX >= lever01X && mouseX <= lever01X + leverWidth) && 
        (mouseY >= lever01Y && mouseY <= lever01Y + leverHeight) && lever01 === 0) {
            lever01Y = lever01Y + leverToggle;
            lever01 = 1;
            leverThunk.play();
    // else lever 1 clicked when set
    } else if ((mouseX >= lever01X && mouseX <= lever01X + leverWidth) && 
        (mouseY >= lever01Y && mouseY <= lever01Y + leverHeight) && lever01 === 1) {
            lever01Y = lever01Y - leverToggle;
            lever01 = 0;
            leverThunkUp.play();
    // else lever 2 clicked when not set
    } else if ((mouseX >= lever02X && mouseX <= lever02X + leverWidth) && 
        (mouseY >= lever02Y && mouseY <= lever02Y + leverHeight) && lever02 === 0) {
            lever02Y = lever02Y + leverToggle;
            lever02 = 1;
            leverThunk.play();
    // else lever 2 clicked when set
    } else if ((mouseX >= lever02X && mouseX <= lever02X + leverWidth) && 
        (mouseY >= lever02Y && mouseY <= lever02Y + leverHeight) && lever02 === 1) {
            lever02Y = lever02Y - leverToggle;
            lever02 = 0;
            leverThunkUp.play();
    // else lever 3 clicked when not set
    } else if ((mouseX >= lever03X && mouseX <= lever03X + leverWidth) && 
        (mouseY >= lever03Y && mouseY <= lever03Y + leverHeight) && lever03 === 0) {
            lever03Y = lever03Y + leverToggle;
            lever03 = 1;
            leverThunk.play();
    // else lever 3 clicked when set
    } else if ((mouseX >= lever03X && mouseX <= lever03X + leverWidth) && 
        (mouseY >= lever03Y && mouseY <= lever03Y + leverHeight) && lever03 === 1) {
            lever03Y = lever03Y - leverToggle;
            lever03 = 0;
            leverThunkUp.play();
    // else lever 4 clicked when not set
    } else if ((mouseX >= lever04X && mouseX <= lever04X + leverWidth) && 
        (mouseY >= lever04Y && mouseY <= lever04Y + leverHeight) && lever04 === 0) {
            lever04Y = lever04Y + leverToggle;
            lever04 = 1;
            leverThunk.play();
    // else lever 4 clicked when set
    } else if ((mouseX >= lever04X && mouseX <= lever04X + leverWidth) && 
        (mouseY >= lever04Y && mouseY <= lever04Y + leverHeight) && lever04 === 1) {
            lever04Y = lever04Y - leverToggle;
            lever04 = 0;
            leverThunkUp.play();
    // else lever 5 clicked when not set
    } else if ((mouseX >= lever05X && mouseX <= lever05X + leverWidth) && 
        (mouseY >= lever05Y && mouseY <= lever05Y + leverHeight) && lever05 === 0) {
            lever05Y = lever05Y + leverToggle;
            lever05 = 1;
            leverThunk.play();
    // else lever 5 clicked when set
    } else if ((mouseX >= lever05X && mouseX <= lever05X + leverWidth) && 
        (mouseY >= lever05Y && mouseY <= lever05Y + leverHeight) && lever05 === 1) {
            lever05Y = lever05Y - leverToggle;
            lever05 = 0;
            leverThunkUp.play();
    // else lever 6 clicked when not set
    } else if ((mouseX >= lever06X && mouseX <= lever06X + leverWidth) && 
        (mouseY >= lever06Y && mouseY <= lever06Y + leverHeight) && lever06 === 0) {
            lever06Y = lever06Y + leverToggle;
            lever06 = 1;
            leverThunk.play();
    // else lever 6 clicked when set
    } else if ((mouseX >= lever06X && mouseX <= lever06X + leverWidth) && 
        (mouseY >= lever06Y && mouseY <= lever06Y + leverHeight) && lever06 === 1) {
            lever06Y = lever06Y - leverToggle;
            lever06 = 0;
            leverThunkUp.play();
    // else lever 7 clicked when not set
    } else if ((mouseX >= lever07X && mouseX <= lever07X + leverWidth) && 
        (mouseY >= lever07Y && mouseY <= lever07Y + leverHeight) && lever07 === 0) {
            lever07Y = lever07Y + leverToggle;
            lever07 = 1;
            leverThunk.play();
    // else lever 7 clicked when set
    } else if ((mouseX >= lever07X && mouseX <= lever07X + leverWidth) && 
        (mouseY >= lever07Y && mouseY <= lever07Y + leverHeight) && lever07 === 1) {
            lever07Y = lever07Y - leverToggle;
            lever07 = 0;
            leverThunkUp.play();
    // else lever 8 clicked when not set
    } else if ((mouseX >= lever08X && mouseX <= lever08X + leverWidth) && 
        (mouseY >= lever08Y && mouseY <= lever08Y + leverHeight) && lever08 === 0) {
            lever08Y = lever08Y + leverToggle;
            lever08 = 1;
            leverThunk.play();
    // else lever 8 clicked when set
    } else if ((mouseX >= lever08X && mouseX <= lever08X + leverWidth) && 
        (mouseY >= lever08Y && mouseY <= lever08Y + leverHeight) && lever08 === 1) {
            lever08Y = lever08Y - leverToggle;
            lever08 = 0;
            leverThunkUp.play();
    // else lever 9 clicked when not set
    } else if ((mouseX >= lever09X && mouseX <= lever09X + leverWidth) && 
        (mouseY >= lever09Y && mouseY <= lever09Y + leverHeight) && lever09 === 0) {
            lever09Y = lever09Y + leverToggle;
            lever09 = 1;
            leverThunk.play();
    // else lever 9 clicked when set
    } else if ((mouseX >= lever09X && mouseX <= lever09X + leverWidth) && 
        (mouseY >= lever09Y && mouseY <= lever09Y + leverHeight) && lever09 === 1) {
            lever09Y = lever09Y - leverToggle;
            lever09 = 0;
            leverThunkUp.play();
    // else lever 10 clicked when not set
    } else if ((mouseX >= lever10X && mouseX <= lever10X + leverWidth) && 
        (mouseY >= lever10Y && mouseY <= lever10Y + leverHeight) && lever10 === 0) {
            lever10Y = lever10Y + leverToggle;
            lever10 = 1;
            leverThunk.play();
    // else lever 10 clicked when set
    } else if ((mouseX >= lever10X && mouseX <= lever10X + leverWidth) && 
        (mouseY >= lever10Y && mouseY <= lever10Y + leverHeight) && lever10 === 1) {
            lever10Y = lever10Y - leverToggle;
            lever10 = 0;
            leverThunkUp.play();
    // else lever 11 clicked when not set
    } else if ((mouseX >= lever11X && mouseX <= lever11X + leverWidth) && 
        (mouseY >= lever11Y && mouseY <= lever11Y + leverHeight) && lever11 === 0) {
            lever11Y = lever11Y + leverToggle;
            lever11 = 1;
            leverThunk.play();
    // else lever 11 clicked when set
    } else if ((mouseX >= lever11X && mouseX <= lever11X + leverWidth) && 
        (mouseY >= lever11Y && mouseY <= lever11Y + leverHeight) && lever11 === 1) {
            lever11Y = lever11Y - leverToggle;
            lever11 = 0;
            leverThunkUp.play();
    // else lever 12 clicked when not set
    } else if ((mouseX >= lever12X && mouseX <= lever12X + leverWidth) && 
        (mouseY >= lever12Y && mouseY <= lever12Y + leverHeight) && lever12 === 0) {
            lever12Y = lever12Y + leverToggle;
            lever12 = 1;
            leverThunk.play();
    // else lever 12 clicked when set
    } else if ((mouseX >= lever12X && mouseX <= lever12X + leverWidth) && 
        (mouseY >= lever12Y && mouseY <= lever12Y + leverHeight) && lever12 === 1) {
            lever12Y = lever12Y - leverToggle;
            lever12 = 0;
            leverThunkUp.play();
    // else lever 13 clicked when not set
    } else if ((mouseX >= lever13X && mouseX <= lever13X + leverWidth) && 
        (mouseY >= lever13Y && mouseY <= lever13Y + leverHeight) && lever13 === 0) {
            lever13Y = lever13Y + leverToggle;
            lever13 = 1;
            leverThunk.play();
    // else lever 13 clicked when set
    } else if ((mouseX >= lever13X && mouseX <= lever13X + leverWidth) && 
        (mouseY >= lever13Y && mouseY <= lever13Y + leverHeight) && lever13 === 1) {
            lever13Y = lever13Y - leverToggle;
            lever13 = 0;
            leverThunkUp.play();
    // else lever 14 clicked when not set
    } else if ((mouseX >= lever14X && mouseX <= lever14X + leverWidth) && 
        (mouseY >= lever14Y && mouseY <= lever14Y + leverHeight) && lever14 === 0) {
            lever14Y = lever14Y + leverToggle;
            lever14 = 1;
            leverThunk.play();
    // else lever 14 clicked when set
    } else if ((mouseX >= lever14X && mouseX <= lever14X + leverWidth) && 
        (mouseY >= lever14Y && mouseY <= lever14Y + leverHeight) && lever14 === 1) {
            lever14Y = lever14Y - leverToggle;
            lever14 = 0;
            leverThunkUp.play();
    // else lever 15 clicked when not set
    } else if ((mouseX >= lever15X && mouseX <= lever15X + leverWidth) && 
        (mouseY >= lever15Y && mouseY <= lever15Y + leverHeight) && lever15 === 0) {
            lever15Y = lever15Y + leverToggle;
            lever15 = 1;
            leverThunk.play();
    // else lever 15 clicked when set
    } else if ((mouseX >= lever15X && mouseX <= lever15X + leverWidth) && 
        (mouseY >= lever15Y && mouseY <= lever15Y + leverHeight) && lever15 === 1) {
            lever15Y = lever15Y - leverToggle;
            lever15 = 0;
            leverThunkUp.play();
    // else lever 16 clicked when not set
    } else if ((mouseX >= lever16X && mouseX <= lever16X + leverWidth) && 
        (mouseY >= lever16Y && mouseY <= lever16Y + leverHeight) && lever16 === 0) {
            lever16Y = lever16Y + leverToggle;
            lever16 = 1;
            leverThunk.play();
    // else lever 16 clicked when set
    } else if ((mouseX >= lever16X && mouseX <= lever16X + leverWidth) && 
        (mouseY >= lever16Y && mouseY <= lever16Y + leverHeight) && lever16 === 1) {
            lever16Y = lever16Y - leverToggle;
            lever16 = 0;
            leverThunkUp.play();
    // else lever 17 clicked when not set
    } else if ((mouseX >= lever17X && mouseX <= lever17X + leverWidth) && 
        (mouseY >= lever17Y && mouseY <= lever17Y + leverHeight) && lever17 === 0) {
            lever17Y = lever17Y + leverToggle;
            lever17 = 1;
            leverThunk.play();
    // else lever 17 clicked when set
    } else if ((mouseX >= lever17X && mouseX <= lever17X + leverWidth) && 
        (mouseY >= lever17Y && mouseY <= lever17Y + leverHeight) && lever17 === 1) {
            lever17Y = lever17Y - leverToggle;
            lever17 = 0;
            leverThunkUp.play();
    // else lever 18 clicked when not set
    } else if ((mouseX >= lever18X && mouseX <= lever18X + leverWidth) && 
        (mouseY >= lever18Y && mouseY <= lever18Y + leverHeight) && lever18 === 0) {
            lever18Y = lever18Y + leverToggle;
            lever18 = 1;
            leverThunk.play();
    // else lever 18 clicked when set
    } else if ((mouseX >= lever18X && mouseX <= lever18X + leverWidth) && 
        (mouseY >= lever18Y && mouseY <= lever18Y + leverHeight) && lever18 === 1) {
            lever18Y = lever18Y - leverToggle;
            lever18 = 0;
            leverThunkUp.play();
    // else lever 19 clicked when not set
    } else if ((mouseX >= lever19X && mouseX <= lever19X + leverWidth) && 
        (mouseY >= lever19Y && mouseY <= lever19Y + leverHeight) && lever19 === 0) {
            lever19Y = lever19Y + leverToggle;
            lever19 = 1;
            leverThunk.play();
    // else lever 19 clicked when set
    } else if ((mouseX >= lever19X && mouseX <= lever19X + leverWidth) && 
        (mouseY >= lever19Y && mouseY <= lever19Y + leverHeight) && lever19 === 1) {
            lever19Y = lever19Y - leverToggle;
            lever19 = 0;
            leverThunkUp.play();
    // else lever 20 clicked when not set
    } else if ((mouseX >= lever20X && mouseX <= lever20X + leverWidth) && 
        (mouseY >= lever20Y && mouseY <= lever20Y + leverHeight) && lever20 === 0) {
            lever20Y = lever20Y + leverToggle;
            lever20 = 1;
            leverThunk.play();
    // else lever 20 clicked when set
    } else if ((mouseX >= lever20X && mouseX <= lever20X + leverWidth) && 
        (mouseY >= lever20Y && mouseY <= lever20Y + leverHeight) && lever20 === 1) {
            lever20Y = lever20Y - leverToggle;
            lever20 = 0;
            leverThunkUp.play();
    } 
// end of mouseClicked function
}



function startPlay() {
    // if nothing is currently playing . . .
    if (!playQueue[0].isPlaying()) {
        // change fill to paper fill and no stroke
        paperFill();
        noStroke();
        // put a white square over the current number in the selection playing window
        // to get rid of the number for the last song played
        rect(821, 596, 59, 59, 5);
        // change fill to black, font to xBold, size to 30
        fill(0);
        textFont(xBoldFont);
        textSize(30);
        // put the next song to be played in the selection playing window
        text(counterQueue[0], 850, 637);
        // start playing the next song in the play queue
        playQueue[0].play();
        // when that song is finished playing, continue the play routine below
        playQueue[0].onended(continuePlay);
    }
// end of startPlay function
}
// We need the continuePlay function because this is where the song just played 
// is deleted from the two queues. Then if there are still more songs to play,
// the play routine continues
function continuePlay() {
    // delete song just played from the play queue
    playQueue.shift();
    // delete number of song just played from counter queue
    counterQueue.shift();
    // if there are still songs in the queue to be played . . .
    // rest of this process is same as startPlay function above
    if (playQueue.length > 0) {
        paperFill();
        noStroke();
        rect(821, 596, 59, 59, 5);
        fill(0);
        textFont(xBoldFont);
        textSize(30);
        text(counterQueue[0], 850, 637);
        playQueue[0].play();
        playQueue[0].onended(continuePlay);
    }
// end of continuePlay function
}

