'use strict';

var pic1 = document.getElementById('img1');
var pic2 = document.getElementById('img2');
var pic3 = document.getElementById('img3');

var picArray = [];

function Picture(src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;

  picArray.push(this);
}

function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




new Picture('bag', 'R2D2 suitcase');
new Picture('banana', 'Banana Cutter');
new Picture('bathroom', 'Watch your iPad while in the loo without having to clean bathroom germs off it!');
new Picture('boots', 'Open toed rain boots. All your fashion dreams come true!');
new Picture('breakfast', 'Bacon, eggs, toast and coffee. The only way this could get better is if we made a remote for it.');
new Picture('bubblegum', 'Meatball gumballs. Need we say more?');
new Picture('chair', 'Finally! The chair you have always been looking for, for when your "favorite" brother-inlaw comes to visit.');
new Picture('cthulhu', 'A creature and her human pet.');
new Picture('dog-duck', 'Turn your pooch into the duck she thinks she is.')
new Picture('dragon', 'Mmmm... dragon meat.');
new Picture('pen', 'Help the student in your life get work done while hse eats with pen utensils!');
new Picture('pet-sweep', 'Are you dogs always leaving hair around tht you have to sweep up? Not anymore! PET SWEEP!');
new Picture('scissors', 'Those loathsome connected pizza slices will be no more!');
new Picture('shark', 'Because who does not want to wake to the image of being eaten by a shark? Shark Sleeping Bag!');
new Picture('tauntaun', 'For everyone who ever wanted to be Luke Skywalker, this Tauntaun sleeping bag is for you.');
new Picture('unicorn', 'Just be careful, because unicorns are so pure, whoever consumes this meat will only live but a half life.');
new Picture('usb', 'For the sea loving computer nut in your life: Octopus USB.');
new Picture('water-can', 'The perfect cacti garden watering can for those who live in the rain forest.');
new Picture('wine-glass', 'Ever had friends over for drinks and needed a "Can one drive home?" test? Your problems are now solved with this wine glass.');
new Picture('sweep', 'Its never too early to get your baby working for you. Introducing the baby sweeper onsie!');

function generateImages() {
  var index1 = randomIndex(picArray.length);
  pic1.src = picArray[index1].src;
  pic1.title = picArray[index1].title;
  pic1.alt = picArray[index1].title;
  var index2 = randomIndex(picArray.length);
  pic2.src = picArray[index2].src;
  pic2.title = picArray[index2].title;
  pic2.alt = picArray[index2].alt;
}

generateImages()