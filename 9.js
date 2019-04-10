const { title, br, log } = require('./common');

let Person;

title(`Как мучались раньше, когда были только function()`)

Person = function(name) {
  this.name = name;
  return this;
}

Person.prototype.workedIn = function(companies) {
  return companies.map(function(company) {
    return `${this.name} worked in ${company}`;
  })
}

person = new Person('Vitaly');
console.log(person.workedIn(['railscasts', 'zengile', 'ziklon labs', 'sbertech']))

br();

title(`Решение с контекстом через стрелочные функции`)

Person = function(name) {
  this.name = name;
  return this;
}

Person.prototype.workedIn = function(companies) {
  return companies.map( company => {
    return `${this.name} worked at ${company}`;
  })
}

person = new Person('Vitaly');
console.log(person.workedIn(['railscasts', 'zengile', 'ziklon labs', 'sbertech']))

br();

helpers = {
  workedIn: function(company) {
    return `${this.name} worked at ${company}`;
  },
  workedInArrow: company => {
    return `${this.name} worked at ${company}`;
  }
}

title(`Но не забываем, что нельзя использовать this в методах из класса хэлперов`)

Person.prototype.workedInBase = function(companies) {
  return companies.map(helpers.workedIn)
}

Person.prototype.workedInArrow = function(companies) {
  return companies.map(helpers.workedInArrow)
}

person = new Person('Vitaly');
console.log(person.workedInBase(['railscasts', 'zengile', 'ziklon labs', 'sbertech']))
console.log(person.workedInArrow(['railscasts', 'zengile', 'ziklon labs', 'sbertech']))
