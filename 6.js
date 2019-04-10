// 'use strict';

const { title, br, log } = require('./common');
let o;

title(`Если объекты вложены друг в друга, то функция в this ссылается на ближайщий объект
strict mode не влияет`);
o = {
  x: 1,
  f: function() {
    log('this === global =>', this === global);
    log('this === o =>', this === o);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
  },
  o: {
    x: 2,
    f: function() {
      log('this === global =>', this === global);
      log('this === o.o =>', this === o.o);
      log('global.x =>', global.x);
      log('this.x =>', this.x);
    },
    o: {
      x: 3,
      f: function() {
        log('this === global =>', this === global);
        log('this === o.o.o =>', this === o.o.o);
        log('global.x =>', global.x);
        log('this.x =>', this.x);
      },
    }
  }
}
o.f();
br();

o.o.f();
br();

o.o.o.f();
