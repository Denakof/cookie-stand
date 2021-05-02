'use strict';

let seattle = {
    workinghours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    avg: 6.3,
    city: 'seattle',
    min: 23,
    max: 65,
    randomNumC: 0,
    avgcustomer: 0,
    sum:0,
    cookiesperHour:[],
    
    // customers: function () {

       
    //     },

    getRandomIntInclusive: function (min,max)
        {
            
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1) + min);
        },

        cookiesperhour: function () {
            for (let i = 0; i < 14; i++) {

                let purchased = this.avg * this.getRandomIntInclusive(this.min,this.max);
                this.cookiesperHour[i]=purchased;
                console.log( this.cookiesperHour);
                return this.cookiesperHour;
                

            }
        },

        

    render: function () {
        let divElement = document.getElementById('CITY');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let h3Element = document.createElement('h3');
        h3Element.textContent = this.city;
        articleElement.appendChild(h3Element);
        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);



        for(let i=0;i<14;i++)
        {
            let LiElement=document.createElement('li');
            LiElement.textContent=`${this.workinghours[i]} ${this.cookiesperhour(this.min,this.max)} cookies`;
            ulElement.appendChild(LiElement);
            
        } 



       


    }
}

seattle.render();
// console.log(seattle);
// seattle.customers();
// seattle.cookiesperhour();
