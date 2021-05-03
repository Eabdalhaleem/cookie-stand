'use strict';

// location1

let Seattle = {
  miniCustom: 23,
  maxCustom: 65,
  avarCookies: 6.3,
  customerPerHourt: 0,
  workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm'],
  allCookies: [],

  customerPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.workHour.length; i++) {
      let result = this.avarCookies * this.customerPerHour(this.miniCustom, this.maxCustom);
      this.allCookies.push(result);
    }

  },



};
Seattle.cookiesPerHour();
console.log(Seattle.allCookies);



let 

let divEl = document.getElementById('location1');
let ulEl = document.createElement('ul');
divEl.appendChild(ulEl);

for(let i=0 ;i<Seattle.workHour.length; i++){
  let liEl = document.createElement('li');
  liEl.textContent = Seattle.workHour[i];
  ulEl.appendChild(liEl);


  for(let index = 0 ;index <Seattle.allCookies.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = Seattle.allCookies[index];
    ulEl.appendChild(liEl);

  }






}








// location2

let tokyo = {
  miniCustom: 3,
  maxCustom: 24,
  avarCookies: 1.2,
  customerPerHourt: 0,
  workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm'],
  allCookies: [],

  customerPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.workHour.length; i++) {
      let result = this.avarCookies * this.customerPerHour(this.miniCustom, this.maxCustom);
      this.allCookies.push(result);
    }

  }


};
tokyo.cookiesPerHour();
console.log(tokyo.allCookies);

let divEl = document.getElementById('location1');
let ulEl = document.createElement('ul');
divEl.appendChild(ulEl);

for(let i=0 ;i<Seattle.workHour.length; i++){
  let liEl = document.createElement('li');
  liEl.textContent = Seattle.workHour[i];
  ulEl.appendChild(liEl);


  for(let index = 0 ;index <Seattle.allCookies.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = Seattle.allCookies[index];
    ulEl.appendChild(liEl);

  }



// location3

let dubai = {
  miniCustom: 11,
  maxCustom: 38,
  avarCookies: 3.7,
  customerPerHourt: 0,
  workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm'],
  allCookies: [],

  customerPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.workHour.length; i++) {
      let result = this.avarCookies * this.customerPerHour(this.miniCustom, this.maxCustom);
      this.allCookies.push(result);
    }

  }


};
dubai.cookiesPerHour();
console.log(dubai.allCookies);

let divEl = document.getElementById('location1');
let ulEl = document.createElement('ul');
divEl.appendChild(ulEl);

for(let i=0 ;i<Seattle.workHour.length; i++){
  let liEl = document.createElement('li');
  liEl.textContent = Seattle.workHour[i];
  ulEl.appendChild(liEl);


  for(let index = 0 ;index <Seattle.allCookies.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = Seattle.allCookies[index];
    ulEl.appendChild(liEl);

  }



// location4

let paris = {
  miniCustom: 20,
  maxCustom: 38,
  avarCookies: 2.3,
  customerPerHourt: 0,
  workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm'],
  allCookies: [],

  customerPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.workHour.length; i++) {
      let result = this.avarCookies * this.customerPerHour(this.miniCustom, this.maxCustom);
      this.allCookies.push(result);
    }

  }


};
paris.cookiesPerHour();
console.log(paris.allCookies);

let divEl = document.getElementById('location1');
let ulEl = document.createElement('ul');
divEl.appendChild(ulEl);

for(let i=0 ;i<Seattle.workHour.length; i++){
  let liEl = document.createElement('li');
  liEl.textContent = Seattle.workHour[i];
  ulEl.appendChild(liEl);


  for(let index = 0 ;index <Seattle.allCookies.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = Seattle.allCookies[index];
    ulEl.appendChild(liEl);

  }




//location5

let lima = {
  miniCustom: 2,
  maxCustom: 16,
  avarCookies: 4.6,
  customerPerHourt: 0,
  workHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
    '6pm', '7pm', '8pm'],
  allCookies: [],

  customerPerHour: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);

  },

  cookiesPerHour: function () {
    for (let i = 0; i < this.workHour.length; i++) {
      let result = this.avarCookies * this.customerPerHour(this.miniCustom, this.maxCustom);
      this.allCookies.push(result);
    }

  }


};
lima.cookiesPerHour();
console.log(lima.allCookies);

let divEl = document.getElementById('location1');
let ulEl = document.createElement('ul');
divEl.appendChild(ulEl);

for(let i=0 ;i<Seattle.workHour.length; i++){
  let liEl = document.createElement('li');
  liEl.textContent = Seattle.workHour[i];
  ulEl.appendChild(liEl);


  for(let index = 0 ;index <Seattle.allCookies.length; i++){
    let liEl = document.createElement('li');
    liEl.textContent = Seattle.allCookies[index];
    ulEl.appendChild(liEl);

}
