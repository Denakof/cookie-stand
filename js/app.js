'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattle = {
    avg: 6.3,
    city: 'seattle',
    min: 23,
    max: 65,
    randomNumC: [],
    sum: 0,
    cookiesperHour: [],

    randomCustNumber: function () {
        for (let hour = 0; hour < workingHours.length; hour++) {
            this.randomNumC.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    cookiesTotal: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.avg)));

            // this.cookiesperHour;
            this.sum += this.cookiesperHour[i];

        }
    },
    render: function () {
        let container = document.getElementById('CITY');
        let h3Element = document.createElement('h3');
        container.appendChild(h3Element);
        h3Element.textContent = this.city;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let LiElement = document.createElement('li');
            ulElement.appendChild(LiElement);
            LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
        }
        let totalLi = document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.sum} cookies`
    }

}
seattle.randomCustNumber();
seattle.cookiesTotal();
seattle.render();


let tokyo = {
    avg: 1.2,
    city: 'tokyo',
    min: 3,
    max: 24,
    randomNumC: [],
    sum: 0,
    cookiesperHour: [],

    randomCustNumber: function () {
        for (let hour = 0; hour < workingHours.length; hour++) {
            this.randomNumC.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    cookiesTotal: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.avg)));

            // this.cookiesperHour;
            this.sum += this.cookiesperHour[i];

        }
    },
    render: function () {
        let container = document.getElementById('CITY');
        let h3Element = document.createElement('h3');
        container.appendChild(h3Element);
        h3Element.textContent = this.city;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let LiElement = document.createElement('li');
            ulElement.appendChild(LiElement);
            LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
        }
        let totalLi = document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.sum} cookies`
    }

}
tokyo.randomCustNumber();
tokyo.cookiesTotal();
tokyo.render();

let dubai = {
    avg: 3.7,
    city: 'dubai',
    min: 11,
    max: 38,
    randomNumC: [],
    sum: 0,
    cookiesperHour: [],

    randomCustNumber: function () {
        for (let hour = 0; hour < workingHours.length; hour++) {
            this.randomNumC.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    cookiesTotal: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.avg)));

            // this.cookiesperHour;
            this.sum += this.cookiesperHour[i];

        }
    },
    render: function () {
        let container = document.getElementById('CITY');
        let h3Element = document.createElement('h3');
        container.appendChild(h3Element);
        h3Element.textContent = this.city;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let LiElement = document.createElement('li');
            ulElement.appendChild(LiElement);
            LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
        }
        let totalLi = document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.sum} cookies`
    }

}
dubai.randomCustNumber();
dubai.cookiesTotal();
dubai.render();

let paris = {
    avg: 2.3,
    city: 'paris',
    min: 20,
    max: 38,
    randomNumC: [],
    sum: 0,
    cookiesperHour: [],

    randomCustNumber: function () {
        for (let hour = 0; hour < workingHours.length; hour++) {
            this.randomNumC.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    cookiesTotal: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.avg)));

            // this.cookiesperHour;
            this.sum += this.cookiesperHour[i];

        }
    },
    render: function () {
        let container = document.getElementById('CITY');
        let h3Element = document.createElement('h3');
        container.appendChild(h3Element);
        h3Element.textContent = this.city;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let LiElement = document.createElement('li');
            ulElement.appendChild(LiElement);
            LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
        }
        let totalLi = document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.sum} cookies`
    }

}
paris.randomCustNumber();
paris.cookiesTotal();
paris.render();

let lima = {
    avg: 4.6,
    city: 'dubai',
    min: 2,
    max: 16,
    randomNumC: [],
    sum: 0,
    cookiesperHour: [],

    randomCustNumber: function () {
        for (let hour = 0; hour < workingHours.length; hour++) {
            this.randomNumC.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    },

    cookiesTotal: function () {
        for (let i = 0; i < workingHours.length; i++) {
            this.cookiesperHour.push(Math.ceil((this.randomNumC[i] * this.avg)));

            // this.cookiesperHour;
            this.sum += this.cookiesperHour[i];

        }
    },
    render: function () {
        let container = document.getElementById('CITY');
        let h3Element = document.createElement('h3');
        container.appendChild(h3Element);
        h3Element.textContent = this.city;
        let ulElement = document.createElement('ul');
        container.appendChild(ulElement);
        for (let i = 0; i < workingHours.length; i++) {
            let LiElement = document.createElement('li');
            ulElement.appendChild(LiElement);
            LiElement.textContent = `${workingHours[i]}:${this.cookiesperHour[i]} cookies`
        }
        let totalLi = document.createElement('li');
        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.sum} cookies`
    }

}
lima.randomCustNumber();
lima.cookiesTotal();
lima.render();