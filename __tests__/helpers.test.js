const { format_date, format_plural, format_url } = require('../utils/helpers');

test('format_date() returns a date string', () => {
	const date = new Date('2020-03-20 16:12:03');

	expect(format_date(date)).toBe('3/20/2020');
});

test('pluralizes words', () => {
	let animalPlural = format_plural('Tiger', 2);
	let animalSingular = format_plural('Lion', 1);

	expect(animalPlural).toBe('Tigers');
	expect(animalSingular).toBe('Lion');
});

test('format_url() returns a simplified url string', () => {
	const url1 = format_url('http://test.com/page/1');
	const url2 = format_url('http://www.coolstuff.com/abcdefg/');
	const url3 = format_url('https://www.google.com?q=hello');

	expect(url1).toBe('test.com');
	expect(url2).toBe('coolstuff.com');
	expect(url3).toBe('google.com');
});
