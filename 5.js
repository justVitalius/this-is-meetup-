// 'use strict';

const { title, br, log } = require('./common');
let f;
let o;

title(`Передавая функцию по ссылке мы не передаем ее контекст
strict mode не влияет`);
f = function() {
  this.x = 999;
  log('this === global =>', this === global);
  log('global.x =>', global.x);
  log('this.x =>', this.x);
}

// в объект передаем по ссылке функцию
o = {
  x: 1,
  f,
}
o.f();

br();

// в новый объект передаем по ссылке туже функцию
o = {
  x: 2,
  f,
}
o.f();

