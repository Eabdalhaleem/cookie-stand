'use strict';

let workHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
  '6pm', '7pm', '8pm'];
let allstore = [];
let divEl = document.getElementById('location1');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);

function Store(locationName, miniCustom, maxCustom, avarCookies) {

  this.locationName = locationName,
  this.miniCustom = miniCustom,
  this.maxCustom = maxCustom,
  this.avarCookies = avarCookies,
  this.customerPerHour = [],
  this.totalCookiesPerHour = 0,
  this.salesCookiesPerHour = [],
  allstore.push(this);
}

Store.prototype.randonCustomerPerHour = function () {
  for (let i = 0; i < workHour.length; i++) {
    this.customerPerHour.push(Math.floor(Math.random() * (this.maxCustom - this.miniCustom + 1) + this.miniCustom));

  }
};

Store.prototype.cookiesPerHour = function () {
  for (let i = 0; i < workHour.length; i++) {
    this.salesCookiesPerHour.push(Math.ceil(this.avarCookies * this.customerPerHour[i]));
    this.totalCookiesPerHour += this.salesCookiesPerHour[i];

  }

};
Store.prototype.render = function () {
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  let tableData = document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent = this.locationName;

  for (let i = 0; i < workHour.length; i++) {
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = this.salesCookiesPerHour[i];

  }

  let tableD = document.createElement('td');
  tableRow.appendChild(tableD);
  tableD.textContent = this.totalCookiesPerHour;

};



let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

function headerRow() {
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  let tableHeader = document.createElement('th');
  tableRow.appendChild(tableHeader);
  tableHeader.textContent = null;
  for (let index = 0; index < workHour.length; index++) {
    let tableHeader = document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent = workHour[index];

  }
  let tableHead = document.createElement('th');
  tableRow.appendChild(tableHead);
  tableHead.textContent = 'Daily Location Total';
}
let tableRow = document.createElement('tr');
function footerRow() {

  tableEl.appendChild(tableRow);
  let tableData = document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent = 'Totals';

  let allTotal = 0;
  for (let i = 0; i < workHour.length; i++) {
    let oneTotal = 0;
    for (let j = 0; j < allstore.length; j++) {
      oneTotal = oneTotal + allstore[j].salesCookiesPerHour[i];
      allTotal += allstore[j].salesCookiesPerHour[i];

    }
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = oneTotal;

  }

  let tableD = document.createElement('td');
  tableRow.appendChild(tableD);
  tableD.textContent = allTotal;


}
headerRow();
Seattle.randonCustomerPerHour();
Seattle.cookiesPerHour();
Seattle.render();

Tokyo.randonCustomerPerHour();
Tokyo.cookiesPerHour();
Tokyo.render();

Dubai.randonCustomerPerHour();
Dubai.cookiesPerHour();
Dubai.render();

Paris.randonCustomerPerHour();
Paris.cookiesPerHour();
Paris.render();

Lima.randonCustomerPerHour();
Lima.cookiesPerHour();
Lima.render();
footerRow();


// lab09

// eslint-disable-next-line no-unused-vars
let cookieForm=document.getElementById('cookieForm');

// eslint-disable-next-line no-undef
cookieForm.addEventListener('submit',addStore);
// eslint-disable-next-line no-unused-vars
function addStore(event){
  event.preventDefault ();
  let locationName =event.target.locationName.value;
  let miniCustom =event.target.miniCustom.value;
  let maxCustom =event.target.maxCustom.value;
  let avarCookies =event.target.avarCookies.value;

  // eslint-disable-next-line no-undef
  let newLocation =new Store (locationName,miniCustom,maxCustom,avarCookies);
  newLocation.randonCustomerPerHour();
  newLocation.cookiesPerHour();
  newLocation.render();
  tableRow.innerHTML='';
  footerRow();
  // console.log(locationName);
}











































// location1

/*let seattle = {
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
lima.render();*/
