const { title, br, log } = require('./common');

let Person;

title(`Как мучались раньше, когда были только function()`)

Person = function(name) {
  this.name = name;
  return this;
}

Person.prototype.workedAt = function(companies) {
  return companies.map(function(company) {
    return `${this.name} worked at ${company}`;
  })
}

person = new Person('Vitaly');
console.log(person.workedAt(['railscasts', 'zengile', 'ziklon labs', 'sbertech']))

br();

title(`Решение с контекстом через стрелочные функции`)

Person = function(name) {
  this.name = name;
  return this;
}

Person.prototype.workedAt = function(companies) {
  return companies.map( company => {
    return `${this.name} worked at ${company}`;
  })
}

person = new Person('Vitaly');
console.log(person.workedAt(['railscasts', 'zengile', 'ziklon labs', 'sbertech']))

br();

helpers = {
  workedAt: function(company) {
    return `${this.name} worked at ${company}`;
  },
  workedAtArrow: company => {
    return `${this.name} worked at ${company}`;
  }
}

title(`Но не забываем, что нельзя использовать this в методах из класса хэлперов`)

Person.prototype.workedAtBase = function(companies) {
  return companies.map(helpers.workedAt)
}

Person.prototype.workedAtArrow = function(companies) {
  return companies.map(helpers.workedAtArrow)
}

person = new Person('Vitaly');
console.log(person.workedAtBase(['railscasts', 'zengile', 'ziklon labs', 'sbertech']))
console.log(person.workedAtArrow(['railscasts', 'zengile', 'ziklon labs', 'sbertech']))
