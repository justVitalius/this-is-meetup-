// 'use strict';

const { title, br, log } = require('./common');
let o, p;

title(`Если callback передается по ссылке, то this в колбеке ссылается на глобальный объект
strict mode оказывает влияние, т.к. он отключает видимость глобального контекста для функций`);
p = {
  x: 1,
  f: function (cb) {
    log('this === global =>', this === global);
    log('this === p =>', this === p);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
    br();
    cb();
  }
}

f = function() {
  log('this === global =>', this === global);
  log('this === o =>', this === o);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
};

p.f(f);

br()

title(`Если колбек принадлежит объекту, но передается по ссылке,
то this в колбеке ссылается на глобальный объект`);

// Тройное комбо колбек-хэлла
g = {
  x: 3,
  f: function (cb) {
    log('this === global =>', this === global);
    log('this === g =>', this === g);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
    br();
    cb();
  }
}

p = {
  x: 4,
  f: function () {
    log('this === global =>', this === global);
    log('this === p =>', this === p);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
  }
}
g.f(p.f)

br();

title(`Если колбек принадлежит объекту и вызывается в контексте объекта,
то this в колбеке ссылается на его собственный объект`);

// Тройное комбо колбек-хэлла
g = {
  x: 5,
  f: function (cb) {
    log('this === global =>', this === global);
    log('this === g =>', this === g);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
    br();
    cb();
  }
}

p = {
  x: 6,
  f: function () {
    log('this === global =>', this === global);
    log('this === p =>', this === p);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
  }
}
g.f(function () { return p.f() });

br();

title(`Любой объявленный прям в теле колбек представляет собой просто функцию,
его this ссылается на глобальный объект`);

o = {
  x: 7,
  f: function (cb) {
    log('this === global =>', this === global);
    log('this === p =>', this === p);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
    br();
    cb();
  }
}

o.f(function(){
  log('this === global =>', this === global);
  log('this === o =>', this === o);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
});