# Пару простых правил в понимании контекста
- самовызываемая функция всегда ссылается через this на глобальный объект
- при вызове функции с new, this ссылается на новый объект созданный внутри конструктора
- объявленная функция ссылается через this на глобальный объект
- метод объекта <o.f()> ссылается через this на этот объект
- стрелочные функции ищут ближайший объект и если не находят его, то this ссылается на глобальный объект
- strict mode только лишь меняет глобальный объект на undefined, т.е.не скрывает глобальный объект от контекста


# Не забудь!!!
Показать разницу в подмене контекста, когда код запускаем в консоли и через require()
Не забыть показать, что метод require выглядит примерно так 
```
require = function(file) {
    exports = {}
    module.exports = run.apply(exports, [file]);
    return exports;
}

```