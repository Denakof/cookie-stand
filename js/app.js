'use strict';
let workingHours = ['6AM : ', '7AM : ', '8AM : ', '9AM : ', '10AM : ', '11AM : ', '12AM :', ' 1PM : ', '2PM : ', ` 3PM : `, `4PM : `, '5PM :', ' 6PM: ', '7PM : '];
let container = document.getElementById('container');
let table = document.createElement('table');
container.appendChild(table);
let cities = [];
function city(cityname, max, min, avg) {
    this.cityname = cityname;
    this.max = max;
    this.min = min;
    this.avg = avg;
    this.randomCustNum = [];
    this.CookiesperHour = [];
    this.sum = 0;
    cities.push(this);
}
city.prototype.randomCustomerNumberF = function () {
    for (let i = 0; i < 14; i++) {
        this.randomCustNum.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
}
city.prototype.TotalCookiesperHour = function () {
    for (let i = 0; i < 14; i++) {
        this.CookiesperHour.push(Math.ceil(this.randomCustNum[i] * this.avg))
        this.sum += this.CookiesperHour[i];
    }
}
let seattle = new city('seattle', 65, 23, 6.3);
let tokyo = new city('tokyo', 24, 3, 1.2);
let dubai = new city('dubai', 38, 11, 3.7);
let paris = new city('paris', 38, 20, 2.3);
let lima = new city('lima', 16, 2, 4.6);
function OpenHours() {
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = '';
    for (let i = 0; i < workingHours.length; i++) {
        let th2 = document.createElement('th');
        tr1.appendChild(th2);
        th2.textContent = workingHours[i];
    }
    let th3 = document.createElement('th')
    tr1.appendChild(th3);
    th3.textContent = 'Daily Location sum';
}
city.prototype.render = function () {
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = this.cityname;
    for (let i = 0; i < 14; i++) {
        let td3 = document.createElement('td');
        tr1.appendChild(td3);
        td3.textContent = this.CookiesperHour[i];
    }
    let th = document.createElement('th');
    tr1.appendChild(th);
    th.textContent = this.sum;
}
function footer() {
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = 'Totals';
    let totalOfTotal = 0;
    for (let i = 0; i < workingHours.length; i++) {
        let totalPerHour = 0;
        for (let j = 0; j < cities.length; j++) {
            totalPerHour += cities[j].CookiesperHour[i];
            totalOfTotal += cities[j].CookiesperHour[i];
        }
        let th2 = document.createElement('th')
        tr1.appendChild(th2);
        th2.textContent = totalPerHour;
    }
    let th3 = document.createElement('th');
    tr1.appendChild(th3);
    th3.textContent = totalOfTotal;
}
OpenHours();
seattle.randomCustomerNumberF();
seattle.TotalCookiesperHour();
seattle.render();

tokyo.randomCustomerNumberF();
tokyo.TotalCookiesperHour();
tokyo.render();

dubai.randomCustomerNumberF();
dubai.TotalCookiesperHour();
dubai.render();

paris.randomCustomerNumberF();
paris.TotalCookiesperHour();
paris.render();

lima.randomCustomerNumberF();
lima.TotalCookiesperHour();
lima.render();

footer();
let NEWCITY = document.getElementById("dena");
NEWCITY.addEventListener('submit', ADDCITY);
function ADDCITY(event) {
    event.preventDefault();
    let cityName = event.target.city.value;
    let max = event.target.max.value;
    max = Math.floor(max);
    let min = event.target.min.value;
    min = Math.floor(min);
    let avg = event.target.avg.value;
    avg = parseFloat(avg);
    let newcity = new city(cityName, max, min, avg);
    table.removeChild(table.lastElementChild);
    newcity.randomCustomerNumberF();
    newcity.TotalCookiesperHour();
    newcity.render();
    footer();
}
for (let index = 0; index < Cities.length; index++) {
    Cities[index].randomCustomerNumberF();
    Cities[index].TotalCookiesperHour();
    Cities[index].render();
    Cities[index].footer();
}