//'use strict';

const { title, br, log } = require('./common');
let f, o;

title(`При создании стрелочных функций все иначе.
this ищет первый попавшийся объект выше всех стрелочных функций.
И если не находит, то ссылается на глобальный`);
// обычный вызов функции
console.log(this);
f1 = () => {
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
}
f1();

br();

// обычный вызов функции внутри объекта
o = {
  x: 2,
  f: () => {
    log('this === global =>', this === global);
    log('this === o =>', this === o);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
    log(this)
  }
}
o.f();

br();

// двойной комбо
f = () => {
  this.x = 3;
  (() =>{
    this.x = 4;
  })()
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
}
f();

br();

// тройной комбо
f = () => {
  this.x = 5;
  (() => {
    this.x = 6;
    (() => {
      this.x = 7;
    })();
  })();
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
}
f();

br();

// тройное комбо из стрелочных функций, которые всегда ссылаются на this из конструктора
f = function() {
  this.x = 8;
  return {
    f: () => {
      log('this === global =>', this === global);
      log('global.x =>', global.x);
      log('this.x =>', this.x);
      return {
        f: () => {
          log('this === global =>', this === global);
          log('global.x =>', global.x);
          log('this.x =>', this.x);
        }
      }
    }
  }
}

new f().f().f()

