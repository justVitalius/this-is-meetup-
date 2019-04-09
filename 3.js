// 'use strict';

const { title, br, log } = require('./common');
let f;
let o;

title(`Функция в объекте ссылается на сам объект 
Почти как в конструкторе
strict mode влияет только на видимость глобального контекста изнутри функции (см.п1)`);
o = {
  x: 1,
  f: function() {
    log('this === global =>', this === global);
    log('this === o =>', this === o);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
  }
}
o.f();

br();

// двойной комбо с самовызываемой функцией
o = {
  x: 2,
  f: function() {
    (function(){
      this.x = 3;
    })()
    log('this === global =>', this === global);
    log('this === o =>', this === o);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
  }
}
o.f();

br();

// функция не только ссылается на this, но и меняет его
o = {
  x: 4,
  f: function() {
    (function(){
      this.x = 5;
    })()
    this.x = 6
    log('this === global =>', this === global);
    log('this === o =>', this === o);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
  }
}
o.f();