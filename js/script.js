// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

var message = "";
var finalQuotePrint;
var randomBackgroundColor;
var intervalID = setInterval(printQuote, 10000); // Change quote every 30 seconds.
var usedQuote = []; // Empty array to hold used quotes.

// Function for getting the random quote.
function getRandomQuote() {
  // Check to see if the quotes array is empty.
  if (quotes.length === 0) {
    // If the quotes array is empty, remove all quotes from usedQuote array to quotes array.
    quotes = usedQuote.splice(0, usedQuote.length);
  }
  // Generate a random quote, assign it to randomQuote, we only want one quote.
  var randomQuote = quotes.splice(
    Math.floor(Math.random() * quotes.length),
    1
  )[0];
  // Put the randomQuote into the usedQuote array.
  usedQuote.push(randomQuote);
  // Return my random quote object.
  return randomQuote;
}

// Function to make a random hex color.
function changeBackgroundColor() {
  randomBackgroundColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomBackgroundColor;
}

// Function to print the quotes.
function printQuote() {
  // This calls the random background color.
  changeBackgroundColor();
  // Calling the getRandomQuote function and storing it in a variable.
  finalQuotePrint = getRandomQuote();
  // Displaying the message in the HTML template.
  message = '<p class="quote">' + finalQuotePrint.quote + "</p>";
  message += '<p class="source">' + finalQuotePrint.source;

  // Check if citation is defined before adding it to the message
  if (finalQuotePrint.citation) {
    message += '<span class="citation">' + finalQuotePrint.citation + "</span>";
  }

  // Check if year is defined before adding it to the message
  if (finalQuotePrint.year) {
    message += '<span class="year">' + finalQuotePrint.year + "</span>";
  }

  message += '<span class="tags">' + finalQuotePrint.tags + "</span></p>";
  // Selecting the quot-box and assigning it to message variable.
  document.getElementById("quote-box").innerHTML = message;
  // Logging the used quote to the console.
  console.log(finalQuotePrint.quote);
}
