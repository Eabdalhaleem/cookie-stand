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

function footerRow() {
  let tableRow = document.createElement('tr');
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
