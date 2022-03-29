'use strict'

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];

employers.forEach((item) => {
	if (item.length > 0 && item.trim() != '') {
		command.push(item);
	}
})

command.forEach((item, i) => {
	item = item.toLowerCase().trim();
	item = item[0].toUpperCase() + item.slice(1);
	command[i] = item
})

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

 const CalcCash = (own) => {
	this.everyCash = [].slice.call(own);

	this.total = 0;
	this.everyCash.forEach((item) => {
		this.total += +item;
	})
	return this.total;
}

const lesson = CalcCash(data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	let sumTech = data.react.concat(data.add, 'и другие');
	console.log('Стартуем новый курс: "' + course + '". Владелец: ' + director + ', преподаватель: ' + teacher + '. Всего уроков: ' + allModule + '. \nКоманда Академии: ' +
		gang);
	console.log('Первое что изучим будет ' + data.react[0] + ". Он очень похож на HTML!");
	console.log('Технологии которые мы изучим: ');
	console.log.apply(null, sumTech);

}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
