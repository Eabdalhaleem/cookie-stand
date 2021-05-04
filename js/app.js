'use strict';

let workHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
  '6pm', '7pm', '8pm'];

// location1

let seattle = {
  locationName: 'Seattle',
  miniCustom: 23,
  maxCustom: 65,
  avarCookies: 6.3,
  customerPerHour: [],

  totalCookiesPerHour: 0,
  salesCookiesPerHour: [],


  randonCustomerPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.customerPerHour.push(Math.floor(Math.random() * (this.maxCustom - this.miniCustom + 1) + this.miniCustom));

    }




  },

  cookiesPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.salesCookiesPerHour.push(Math.ceil(this.avarCookies * this.customerPerHour[i]));
      this.totalCookiesPerHour += this.salesCookiesPerHour[i];

    }

  },
  render: function () {
    let divEl = document.getElementById('location1');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.locationName;
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

    for (let i = 0; i < workHour.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = ` ${workHour[i]} : ${this.salesCookiesPerHour[i]}`;
      ulEl.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total : ${this.totalCookiesPerHour}`;
    ulEl.appendChild(liEl);
  },






};
seattle.randonCustomerPerHour();
seattle.cookiesPerHour();
console.log(seattle.totalCookiesPerHour);
seattle.render();














// location2


let tokyo = {
  locationName: 'Tokyo',
  miniCustom: 3,
  maxCustom: 24,
  avarCookies: 1.2,
  customerPerHour: [],

  totalCookiesPerHour: 0,
  salesCookiesPerHour: [],


  randonCustomerPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.customerPerHour.push(Math.floor(Math.random() * (this.maxCustom - this.miniCustom + 1) + this.miniCustom));

    }




  },

  cookiesPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.salesCookiesPerHour.push(Math.ceil(this.avarCookies * this.customerPerHour[i]));
      this.totalCookiesPerHour += this.salesCookiesPerHour[i];

    }

  },
  render: function () {
    let divEl = document.getElementById('location1');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.locationName;
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

    for (let i = 0; i < workHour.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = ` ${workHour[i]} : ${this.salesCookiesPerHour[i]}`;
      ulEl.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total : ${this.totalCookiesPerHour}`;
    ulEl.appendChild(liEl);
  },






};
tokyo.randonCustomerPerHour();
tokyo.cookiesPerHour();
console.log(tokyo.totalCookiesPerHour);
tokyo.render();

//location 3

let dubai = {
  locationName: 'Dubai',
  miniCustom: 11,
  maxCustom: 38,
  avarCookies: 3.7,
  customerPerHour: [],

  totalCookiesPerHour: 0,
  salesCookiesPerHour: [],


  randonCustomerPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.customerPerHour.push(Math.floor(Math.random() * (this.maxCustom - this.miniCustom + 1) + this.miniCustom));

    }




  },

  cookiesPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.salesCookiesPerHour.push(Math.ceil(this.avarCookies * this.customerPerHour[i]));
      this.totalCookiesPerHour += this.salesCookiesPerHour[i];

    }

  },
  render: function () {
    let divEl = document.getElementById('location1');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.locationName;
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

    for (let i = 0; i < workHour.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = ` ${workHour[i]} : ${this.salesCookiesPerHour[i]}`;
      ulEl.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total : ${this.totalCookiesPerHour}`;
    ulEl.appendChild(liEl);
  },






};
dubai.randonCustomerPerHour();
dubai.cookiesPerHour();
console.log(dubai.totalCookiesPerHour);
dubai.render();


//location 4

let paris = {
  locationName: 'Paris',
  miniCustom: 20,
  maxCustom: 38,
  avarCookies: 2.3,
  customerPerHour: [],

  totalCookiesPerHour: 0,
  salesCookiesPerHour: [],


  randonCustomerPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.customerPerHour.push(Math.floor(Math.random() * (this.maxCustom - this.miniCustom + 1) + this.miniCustom));

    }




  },

  cookiesPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.salesCookiesPerHour.push(Math.ceil(this.avarCookies * this.customerPerHour[i]));
      this.totalCookiesPerHour += this.salesCookiesPerHour[i];

    }

  },
  render: function () {
    let divEl = document.getElementById('location1');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.locationName;
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

    for (let i = 0; i < workHour.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = ` ${workHour[i]} : ${this.salesCookiesPerHour[i]}`;
      ulEl.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total : ${this.totalCookiesPerHour}`;
    ulEl.appendChild(liEl);
  },






};
paris.randonCustomerPerHour();
paris.cookiesPerHour();
console.log(paris.totalCookiesPerHour);
paris.render();

//location 5

let lima = {
  locationName: 'Lima',
  miniCustom: 2,
  maxCustom: 16,
  avarCookies: 4.6,
  customerPerHour: [],

  totalCookiesPerHour: 0,
  salesCookiesPerHour: [],


  randonCustomerPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.customerPerHour.push(Math.floor(Math.random() * (this.maxCustom - this.miniCustom + 1) + this.miniCustom));

    }




  },

  cookiesPerHour: function () {
    for (let i = 0; i < workHour.length; i++) {
      this.salesCookiesPerHour.push(Math.ceil(this.avarCookies * this.customerPerHour[i]));
      this.totalCookiesPerHour += this.salesCookiesPerHour[i];

    }

  },
  render: function () {
    let divEl = document.getElementById('location1');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.locationName;
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);

    for (let i = 0; i < workHour.length; i++) {
      let liEl = document.createElement('li');
      liEl.textContent = ` ${workHour[i]} : ${this.salesCookiesPerHour[i]}`;
      ulEl.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total : ${this.totalCookiesPerHour}`;
    ulEl.appendChild(liEl);
  },






};
lima.randonCustomerPerHour();
lima.cookiesPerHour();
console.log(lima.totalCookiesPerHour);
lima.render();
