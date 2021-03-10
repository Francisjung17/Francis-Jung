// Welcome message
var user = 'Mike';
var salutation = "Hello, ";
var greeting = salutation + user + '! Here are the latest Sprite user reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Product price
var price = 1.99,
    studentDiscount = 0.49,
    studentPrice = price - studentDiscount,
    priceEl= document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);