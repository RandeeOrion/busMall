'use strict';

var pic1 = document.getElementById('img1');
var pic2 = document.getElementById('img2');
var pic3 = document.getElementById('img3');
//var photos = document.getElementById('photos');
var descriptor1 = document.getElementById('descriptor1');
var descriptor2 = document.getElementById('descriptor2');
var descriptor3 = document.getElementById('descriptor3');

var picArray = [];

function Picture(src, name) {
  this.src = `../img/${src}.jpg`;
  this.title = name;
  this.alt = name;
  this.clicked = 0;
  this.viewed = 0;

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

// function generateImagesDRY(pic, index, descriptor){
//   var index = randomIndex(picArray.length);
//   pic.src = picArray[index].src;
//   pic.title = picArray[index].title;
//   pic.alt = picArray[index].title;
//   descriptor1.textContent = picArray[index].title;
//   picArray[index].viewed++;
// }

function generateImages() {
  var index1 = randomIndex(picArray.length);
  pic1.src = picArray[index1].src;
  pic1.title = picArray[index1].title;
  pic1.alt = picArray[index1].title;
  descriptor1.textContent = picArray[index1].title;
  picArray[index1].viewed++;


  var index2 = randomIndex(picArray.length);
  while (index1===index2) {
    index2 = randomIndex(picArray.length);
  }
  pic2.src = picArray[index2].src;
  pic2.title = picArray[index2].title;
  pic2.alt = picArray[index2].alt;
  descriptor2.textContent = picArray[index2].title;
  picArray[index2].viewed++;


  var index3 = randomIndex(picArray.length);
  while(index3===index2||index3===index1){
    index3 = randomIndex(picArray.length);
  }
  pic3.src = picArray[index3].src;
  pic3.title = picArray[index3].title;
  descriptor3.textContent = picArray[index3].title;
  pic3.alt = picArray[index3].alt;
  picArray[index3].viewed++;
  console.table(picArray[index1]);
}

generateImages();
  
  function handleClick(event){
    generateImages();
    var vote = event.target.title;
    for (var i = 0; i < picArray.length; i++)
    if (vote === picArray[i].title){
      picArray[i].clicked++;
    }
    
    
  }

  console.table(this.viewed);


photos.addEventListener('click', handleClick);
handleClick();
