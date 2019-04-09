//'use strict';

const { title, br, log } = require('./common');
let o;

title(`Контекст функции в объекте ссылается на сам объект 
Но ключевое слово new снова путает все меняет
strict mode не влияет`);
o = {
  x: 1,
  f: function() {
    log('this === global =>', this === global);
    log('this === o =>', this === o);
    log('global.x =>', global.x);
    log('this.x =>', this.x);
  }
}
new o.f();

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
new o.f();

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
new o.f();
