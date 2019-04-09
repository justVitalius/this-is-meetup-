//'use strict';

const { title, br, log } = require('./common');
let f;

title(`При вызове функции через new меняем ссылку this на новосозданный объект
Но самовызываемым функциям все равно...
strict mode запрещает самовызываемым функциям ссылаться на глобальный объект (см.п1)`);
// обычный вызов функции
f = function() {
  this.x = 1;
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
}
new f();

br();

// двойной комбо
f = function() {
  this.x = 3;
  (function(){
    this.x = 4;
  })()
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
}
new f();

br();

// тройной комбо
f = function() {
  this.x = 5;
  (function(){
    this.x = 6;
    (function() {
      this.x = 7;
    })();
  })();
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
}
new f();

