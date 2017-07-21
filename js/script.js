'use strict';

// Click Event for the QUOTE BUTTON 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
timeGenerator();

var displayQ = [];

function getRandomQuote() {
    if (quotes.length == 0) {
        quotes = displayQ.splice(0, displayQ.length);
    }
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var spliceQ = quotes.splice(randomNumber, 1)[0];
    displayQ.push(spliceQ);
    return spliceQ;
}

// Build the HTML Structure to be printed to the page
function printQuote() {
    var randomQ, quote, source, citation, year, tags, printArray, bkColor;

    randomQ = getRandomQuote();

    // Variables that contain the content of array quotes
    quote = '<p class="quote">' + randomQ.quote + '</p>';
    source = '<p class="source">' + randomQ.source;
    tags = '<span class="tag">' + randomQ.tags + '</span></p>';
    // *** THE HTML ABOVE ASSIGNED TO THE VARIABLES SOURCE, TAGS AND QUOTE WORK WELL BUT FOR SOME REASON IT DID NOT WORK FOR CITATION AND YEAR *** COULD YOU PLEASE COMMMENT ON THIS.
    citation = randomQ.citation;
    year = randomQ.year;

    // HTML Structure
    printArray = [
        // print QUOTE + SOURCE + TAGS
        quote + source + tags,
        // print QUOTE + SOURCE + CITATION + TAGS
        quote + source + '<span class="citation">' + citation + '</span>' + tags,
        // print QUOTE + SOURCE + YEAR + TAGS
        quote + source + '<span class="year">' + year + '</span>' + tags,
        // full print
        quote + source + '<span class="citation">' + citation + '</span>' + '<span class="year">' + year + '</span>' + tags
    ];

    // Call Color Generator function
    colorGenerator();

    // Conditions to print
    if (quote && source && citation && year && tags) {
        print(printArray[3]);
    } else if (quote && source && year && tags) {
        print(printArray[2]);
    } else if (quote && source && citation && tags) {
        print(printArray[1]);
    } else {
        print(printArray[0]);
    }
}

// Generates a differente color for every quote
function colorGenerator() {
    var redColor = Math.floor(Math.random() * 256) + 1;
    var greenColor = Math.floor(Math.random() * 256) + 1;
    var blueColor = Math.floor(Math.random() * 256) + 1;
    var rgb = redColor + ', ' + greenColor + ', ' + blueColor;
    document.body.style.backgroundColor = 'rgb(' + [redColor, greenColor, blueColor].join(',') + ')';
}

function timeGenerator() {
    var timeInterval = setInterval(printQuote, 5000);
    return timeInterval;
}

function print(message) {
    var quoteBox = document.getElementById('quote-box');
    quoteBox.innerHTML = message;
}
