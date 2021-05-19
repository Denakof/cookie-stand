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
Branches.prototype.cookiesPerHourCalc = function () {

    for (let i = 0; i < 14; i++) {
        this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.avg)));

        // this.cookiesperHour;
        this.sum += this.cookiesperHour[i];
    }
    // console.log(this.cookiesperHour);

}
Branches.prototype.render = function () {
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




function header() {

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
header();
seattle.randomCustNumber();
seattle.cookiesPerHourCalc();
seattle.render();

tokyo.randomCustNumber();
tokyo.cookiesPerHourCalc();
tokyo.render();

dubai.randomCustNumber();
dubai.cookiesPerHourCalc();
dubai.render();

paris.randomCustNumber();
paris.cookiesPerHourCalc();
paris.render();

lima.randomCustNumber();
lima.cookiesPerHourCalc();
lima.render();

renderfooter();

// let ALLBranches = document.getElementById('ALLBranches')
// ALLBranches.addEventListener('submit', ADDALLBRANCH);

// function ADDALLBRANCH (event){
//     // event.preventDefault();
//     let avg = event.target.avg.value;
//     let city = event.target.city.value;
//     let min= event.target.min.value;
//     let max = event.target.max.value;

// let newBranch = new Branches(avg,city,min,max)
// newBranch.randomCustNumber();
// newBranch.cookiesTotal();

// };
// ADDALLBRANCH();
/////////////////////////////////////////////////////////////////////////////////
// let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let seattle = {
//     averageCookies: 6.3,
//     city: 'seattle',
//     minCustNum: 23,
//     maxCustNum: 65,
//     randomNumC: [],
//     sum: 0,
//     cookiesperHour: [],

//     randomCustNumber: function () {
//         for (let hour = 0; hour < workingHours.length; hour++) {
//             this.randomNumC.push(Math.floor(Math.random() * (this.maxCustNum - this.minCustNum + 1) + this.minCustNum));
//         }
//     },

//     cookiesTotal: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.averageCookies)));

//             // this.cookiesperHour;
//             this.sum += this.cookiesperHour[i];

//         }
//     },
//     header: function () {
//         let container = document.getElementById('CITY');
//         let h3Element = document.createElement('h3');
//         container.appendChild(h3Element);
//         h3Element.textContent = this.city;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let i = 0; i < workingHours.length; i++) {
//             let LiElement = document.createElement('li');
//             ulElement.appendChild(LiElement);
//             LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.sum} cookies`
//     }

// }
// seattle.randomCustNumber();
// seattle.cookiesTotal();
// seattle.header();


// let tokyo = {
//     averageCookies: 1.2,
//     city: 'tokyo',
//     minCustNum: 3,
//     maxCustNum: 24,
//     randomNumC: [],
//     sum: 0,
//     cookiesperHour: [],

//     randomCustNumber: function () {
//         for (let hour = 0; hour < workingHours.length; hour++) {
//             this.randomNumC.push(Math.floor(Math.random() * (this.maxCustNum - this.minCustNum + 1) + this.minCustNum));
//         }
//     },

//     cookiesTotal: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.averageCookies)));

//             // this.cookiesperHour;
//             this.sum += this.cookiesperHour[i];

//         }
//     },
//     header: function () {
//         let container = document.getElementById('CITY');
//         let h3Element = document.createElement('h3');
//         container.appendChild(h3Element);
//         h3Element.textContent = this.city;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let i = 0; i < workingHours.length; i++) {
//             let LiElement = document.createElement('li');
//             ulElement.appendChild(LiElement);
//             LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.sum} cookies`
//     }

// }
// tokyo.randomCustNumber();
// tokyo.cookiesTotal();
// tokyo.header();

// let dubai = {
//     averageCookies: 3.7,
//     city: 'dubai',
//     minCustNum: 11,
//     maxCustNum: 38,
//     randomNumC: [],
//     sum: 0,
//     cookiesperHour: [],

//     randomCustNumber: function () {
//         for (let hour = 0; hour < workingHours.length; hour++) {
//             this.randomNumC.push(Math.floor(Math.random() * (this.maxCustNum - this.minCustNum + 1) + this.minCustNum));
//         }
//     },

//     cookiesTotal: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.averageCookies)));

//             // this.cookiesperHour;
//             this.sum += this.cookiesperHour[i];

//         }
//     },
//     header: function () {
//         let container = document.getElementById('CITY');
//         let h3Element = document.createElement('h3');
//         container.appendChild(h3Element);
//         h3Element.textContent = this.city;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let i = 0; i < workingHours.length; i++) {
//             let LiElement = document.createElement('li');
//             ulElement.appendChild(LiElement);
//             LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.sum} cookies`
//     }

// }
// dubai.randomCustNumber();
// dubai.cookiesTotal();
// dubai.header();

// let paris = {
//     averageCookies: 2.3,
//     city: 'paris',
//     minCustNum: 20,
//     maxCustNum: 38,
//     randomNumC: [],
//     sum: 0,
//     cookiesperHour: [],

//     randomCustNumber: function () {
//         for (let hour = 0; hour < workingHours.length; hour++) {
//             this.randomNumC.push(Math.floor(Math.random() * (this.maxCustNum - this.minCustNum + 1) + this.minCustNum));
//         }
//     },

//     cookiesTotal: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.averageCookies)));

//             // this.cookiesperHour;
//             this.sum += this.cookiesperHour[i];

//         }
//     },
//     header: function () {
//         let container = document.getElementById('CITY');
//         let h3Element = document.createElement('h3');
//         container.appendChild(h3Element);
//         h3Element.textContent = this.city;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let i = 0; i < workingHours.length; i++) {
//             let LiElement = document.createElement('li');
//             ulElement.appendChild(LiElement);
//             LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.sum} cookies`
//     }

// }
// paris.randomCustNumber();
// paris.cookiesTotal();
// paris.header();

// let lima = {
//     averageCookies: 4.6,
//     city: 'dubai',
//     minCustNum: 2,
//     maxCustNum: 16,
//     randomNumC: [],
//     sum: 0,
//     cookiesperHour: [],

//     randomCustNumber: function () {
//         for (let hour = 0; hour < workingHours.length; hour++) {
//             this.randomNumC.push(Math.floor(Math.random() * (this.maxCustNum - this.minCustNum + 1) + this.minCustNum));
//         }
//     },

//     cookiesTotal: function () {
//         for (let i = 0; i < workingHours.length; i++) {
//             this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.averageCookies)));

//             // this.cookiesperHour;
//             this.sum += this.cookiesperHour[i];

//         }
//     },
//     header: function () {
//         let container = document.getElementById('CITY');
//         let h3Element = document.createElement('h3');
//         container.appendChild(h3Element);
//         h3Element.textContent = this.city;
//         let ulElement = document.createElement('ul');
//         container.appendChild(ulElement);
//         for (let i = 0; i < workingHours.length; i++) {
//             let LiElement = document.createElement('li');
//             ulElement.appendChild(LiElement);
//             LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulElement.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.sum} cookies`
//     }

// }
// lima.randomCustNumber();
// lima.cookiesTotal();
// lima.header();

