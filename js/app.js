'use strict';

var picOne = document.getElementById('img1');
var picTwo = document.getElementById('img2');
var picThree = document.getElementById('img3');
var photos = document.getElementById('photos');
// var descriptorOne = document.getElementById('descriptorOne');
// var descriptorTwo = document.getElementById('descriptorTwo');
// var descriptorThree = document.getElementById('descriptorThree');
var listLocation = document.getElementById('list');
var instructions = document.getElementById('instructions');

var picArray = [];
var numberOfVotes = 0;
var clickedArray = [];
var viewedArray = [];
var nameArray = [];


function Picture(src, title, name) {
  this.src = `../img/${src}.jpg`;
  this.title = title;
  this.alt = title;
  this.name = name;
  this.clicked = 0;
  this.viewed = 0;

  picArray.push(this);
}

function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createPhotoArray() {
  var tomato = localStorage.getItem('potato');
  if (tomato) {
    picArray = JSON.parse(tomato);
  } else {
    new Picture('bag', 'R2D2 suitcase', 'R2D2 Suitcase');
    new Picture('banana', 'Banana Cutter', 'Banana Cutter');
    new Picture('bathroom', 'Watch your iPad while in the loo without having to clean bathroom germs off it!', 'Bathroom iPad');
    new Picture('boots', 'Open toed rain boots. All your fashion dreams come true!', 'Rain Boots');
    new Picture('breakfast', 'Bacon, eggs, toast and coffee. The only way this could get better is if we made a remote for it.', 'Breakfast');
    new Picture('bubblegum', 'Meatball gumballs. Need we say more?', 'Bubblegum');
    new Picture('chair', 'Finally! The chair you have always been looking for, for when your "favorite" brother-inlaw comes to visit.', 'Chair');
    new Picture('cthulhu', 'A creature and her human pet.', 'Cthulhu');
    new Picture('dog-duck', 'Turn your pooch into the duck she thinks she is.', 'Dog-Duck');
    new Picture('dragon', 'Mmmm... dragon meat.', 'Dragon Meat');
    new Picture('pen', 'Help the student in your life get work done while hse eats with pen utensils!', 'Utensil Pens');
    new Picture('pet-sweep', 'Are you dogs always leaving hair around tht you have to sweep up? Not anymore! PET SWEEP!', 'Pet-sweep');
    new Picture('scissors', 'Those loathsome connected pizza slices will be no more!', 'Pizza-Scissors');
    new Picture('shark', 'Because who does not want to wake to the image of being eaten by a shark? Shark Sleeping Bag!', 'Shark Sleepingbag');
    new Picture('tauntaun', 'For everyone who ever wanted to be Luke Skywalker, this Tauntaun sleeping bag is for you.', 'Tauntaun Sleeping Bag');
    new Picture('unicorn', 'Just be careful, because unicorns are so pure, whoever consumes this meat will only live but a half life.', 'Unicorn Meat');
    new Picture('usb', 'For the sea loving computer nut in your life: Octopus USB.', 'USB Storage');
    new Picture('water-can', 'The perfect cacti garden watering can for those who live in the rain forest.', 'Self Watering Can');
    new Picture('wine-glass', 'Ever had friends over for drinks and needed a "Can one drive home?" test? Your problems are now solved with this wine glass.', 'Wine Glass');
    new Picture('sweep', 'Its never too early to get your baby working for you. Introducing the baby sweeper onsie!', 'Baby Sweep');
  }
}


function generateImages() {
  var indexOne = randomIndex(picArray.length);
  picOne.src = picArray[indexOne].src;
  picOne.title = picArray[indexOne].title;
  picOne.alt = picArray[indexOne].title;
  //descriptorOne.textContent = picArray[indexOne].title;
  picArray[indexOne].viewed++;
  // console.log('picOne: ', viewed);

  var indexTwo = randomIndex(picArray.length);
  while (indexOne === indexTwo) {
    indexTwo = randomIndex(picArray.length);
  }
  picTwo.src = picArray[indexTwo].src;
  picTwo.title = picArray[indexTwo].title;
  picTwo.alt = picArray[indexTwo].alt;
  // descriptorTwo.textContent = picArray[indexTwo].title;
  picArray[indexTwo].viewed++;

  var indexThree = randomIndex(picArray.length);
  while (indexThree === indexTwo || indexThree === indexOne) {
    indexThree = randomIndex(picArray.length);
  }
  picThree.src = picArray[indexThree].src;
  picThree.title = picArray[indexThree].title;
  // descriptorThree.textContent = picArray[indexThree].title;
  picThree.alt = picArray[indexThree].alt;
  picArray[indexThree].viewed++;
  //console.table(picArray);
}


createPhotoArray();
generateImages();
photos.addEventListener('click', handleClick);

//this is pushing 400 times rather than 20. How do i get it to just push the number at each i?
function makeClickedAndViewedArray(array) {
  for (var i = 0; i < array.length; i++) {
    clickedArray.push(array[i].clicked);
    viewedArray.push(array[i].viewed);
    nameArray.push(array[i].name);
  }
}

function hide(elem) {
  elem.style.display = 'none';
}

function generateListResults() {
  //create ulEL and liEL element variables append to ul and listLocation
  var ulEl = document.createElement('ul');
  for (var i = 0; i < picArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${picArray[i].name} ${picArray[i].clicked} clicked and ${picArray[i].viewed} viewed`;
    ulEl.appendChild(liEl);
    console.log('inside', picArray.length);
  }
  listLocation.appendChild(ulEl);
  console.log('outside', picArray.length);
}



function handleClick(event) {
  //generateImages();
  var vote = event.target.title;
  console.log(vote);
  for (var i = 0; i < picArray.length; i++) {
    if (vote === picArray[i].title) {
      picArray[i].clicked++;
      numberOfVotes++;
      //console.log('this was clicked: ', picArray[i].title);
      //console.log(numberOfVotes, ' Number of Votes');
    }
  }
  if (numberOfVotes === 5) {
    hide(photos);
    hide(instructions);
    makeClickedAndViewedArray(picArray);
    localStorage.setItem('potato', JSON.stringify(picArray));


    chartStuff();
    //generateListResults();
    //photos.removeEventListener('click', handleClick);
  }
  generateImages();
}


function chartStuff() {
  var ctx = document.getElementById('chartLocation').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: '# of Votes',
        data: clickedArray,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1.5
      }, {
        label: '# of Views',
        data: viewedArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1.5
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
