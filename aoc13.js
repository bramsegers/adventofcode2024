require('./_aoc')

let mac = read('aoc13.txt')
.	join('_')
.	split('__')
.	map(e => e
.	match(/\d+/g)
.	map(e => +e))

let f = n => mac.fold((t, [p, q, r, s, x, y]) => {
	let u = p * (y + n) - q * (x + n)
	let v = p * s - q * r
	let b = u / v
	let a = (x + n - b * r) / p
	return a % 1 + b % 1 ? t : t + 3 * a + b
}, 0)

log({ p1: f(0) })
log({ p2: f(1e13) })