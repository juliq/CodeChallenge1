console.log('clientjs has been loaded');

let generateCount = 0;

$(document).ready(onReady);
console.log('JQ');
// append a <div> element when you click the button
    $('generateButton').on('click', countClicksOfGenerate);

// Inside the <div> element, create a <p> element that shows how 
// many times you have clicked the "Generate" button from the first step
// I spent most of the past hour trying to get the count generator to work.
function countClicksOfGenerate() {
    $('body').append('<div id="generateButton"></div>')
    generateCount++
    $('generateButton').text('Generate Clicks Count: ' + generateCount);
}

// Inside the <div> element created in step two, append two <button> elements
// with text of "Swap" & "Delete".

// In a css file, any <div. created using the "Generate" button should start 
// with red as its background-color
 
        
// Clicking a "Swap" <button> should change its parent background-color from red to yellow
// (research toggleClass)

// Clicking the "Swap" <button> on a yellow div should turn the background-color red

// Clicking a "Delete" <button> should remove its parent <div>