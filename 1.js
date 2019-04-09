//'use strict';

const { title, br, log } = require('./common');
let f;

title(`При простом вызове функции this ссылается на ближайшее объвяление контекста выше
Или на глобальный объект, если ничего выше не нашлось.
Код ниже ведет себя по разному при запуске как модуля или напрямую в терминале.
strict mode запрещает ссылаться на глобальный объект`);
// обычный вызов функции
f = function() {
  this.x = 1;
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
}
f();

br();

// самовызываемая функция
(function() {
  this.x = 2;
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
})()

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
f();

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
f();

