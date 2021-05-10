'use strict';


let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('city');
let table = document.createElement('table');
container.appendChild(table);
let branch1= [];
function Branches(avg, city, min, max) {
    this.avg = avg;
    this.city = city;
    this.min = min;
    this.max = max;
    this.randomNumC = [];
    this.cookiesperHour = [];
    this.sum = 0;
    branch1.push(this);
}



Branches.prototype.randomCustNumber = function () {
    for (let hour = 0; hour < 14; hour++) {
        this.randomNumC.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));

    }
}
Branches.prototype.Calc = function () {

    for (let i = 0; i < 14; i++) {
        this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.avg)));

        // this.cookiesperHour;
        this.sum += this.cookiesperHour[i];
    }
    // console.log(this.cookiesperHour);

}
Branches.prototype.namefun = function () {
    let tr3 = document.createElement('tr');
    table.appendChild(tr3);
    let td1 = document.createElement('td');
    tr3.appendChild(td1);
    td1.textContent = this.city;
    for (let i = 0; i < 14; i++) {
        let td3 = document.createElement('td');
        // tr3.appendChild(td2);
        tr3.appendChild(td3);
        td3.textContent = this.cookiesperHour[i];
        
    }
    let td3=document.createElement('td')
    tr3.appendChild(td3)
    td3.textContent = this.sum

}




function render() {

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
    let th1 = document.createElement('th');
    tr1.appendChild(th1);


    for (let index = 0; index < 14; index++) {
        let th2 = document.createElement('th');
        tr1.appendChild(th2);
        th2.textContent = workingHours[index];
    
    }
let td1 = document.createElement('td')
tr1.appendChild(td1)
td1.textContent= 'Daily location total'




}
let seattle = new Branches(6.3, 'seattle', 23, 65)
let tokyo = new Branches(1.2, 'tokyo', 3, 24)
let dubai = new Branches(3.7, 'dubai', 11, 38)
let paris = new Branches(2.3, 'paris', 20, 38)
let lima = new Branches(4.6, 'lima', 2, 16)

function renderfooter() {
    let tr1 = document.createElement('tr')
    table.appendChild(tr1)

    let th1 = document.createElement('th')
    tr1.appendChild(th1)      
    th1.textContent = "Total"  

    let totalOfTotal = 0;
    for (let i = 0; i < workingHours.length; i++) {
        let totalPerHour = 0;
    for (let j = 0; j < branch1.length; j++) {
        totalPerHour +=  branch1[j].cookiesperHour[i];
    totalOfTotal += branch1[j].cookiesperHour[i];
    }
    let th2 = document.createElement('th')
    tr1.appendChild(th2);
        th2.textContent = totalPerHour;
     }
    let th3 = document.createElement('th');
    tr1.appendChild(th3);
    th3.textContent = totalOfTotal;

    
}

// console.log(total[0])
render();
seattle.randomCustNumber();
seattle.Calc();
seattle.namefun();

tokyo.randomCustNumber();
tokyo.Calc();
tokyo.namefun();

dubai.randomCustNumber();
dubai.Calc();
dubai.namefun();

paris.randomCustNumber();
paris.Calc();
paris.namefun();

lima.randomCustNumber();
lima.Calc();
lima.namefun();

renderfooter();

let ALLBranches = document.getElementById('ALLBranches')
ALLBranches.addEventListener('submit', ADDALLBRANCH);

function ADDALLBRANCH (event){
    // event.preventDefault();
    let avg = event.target.avg.value;
    let city = event.target.city.value;
    let min= event.target.min.value;
    let max = event.target.max.value;

let newBranch = new Branches(avg,city,min,max)
newBranch.randomCustNumber();
newBranch.cookiesTotal();

};
ADDALLBRANCH();