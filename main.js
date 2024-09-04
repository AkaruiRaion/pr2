// 1 задание

let admin, name;
name = 'Джон';
admin = name;
alert(admin);

// 2 задание

let cityName = prompt('Название города');
let cityBirth = prompt('Год образования');
let peoples = prompt('Население');

let cityOld = 2024 - cityBirth;

alert(`Городу ${cityName} исполнилось ${cityOld} лет с момента образования. Население - ${peoples} человек`);

// 3 задание

let r = prompt('Радиус круга');
let S = Math.PI * (r ** 2);
alert(`Площадь круга с радиусом ${r} равна ${S}`);

// 4 задание

let a = +prompt('Первое число');
let b = +prompt('Второе число');
alert(`Сумма = ${a+b}`);
alert(`Разность = ${a-b}`);
alert(`Частное = ${a/b}`);
alert(`Произведение = ${a*b}`);