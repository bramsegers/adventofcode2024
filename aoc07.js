require('./_aoc')

let txt = read('aoc07.txt')
let eqs = txt.map(e => e.match(/\w+/g).map(e => +e))

let p = n => eqs.
	fold((r, [a, b, ...c]) =>
	f(n, a, b, c) * a + r, 0)

let f = (n, a, b, [c, ...d]) => c ?
	f(n, a, b + c, d) ||
	f(n, a, b * c, d) || (n &&
	f(n, a, +(str(b) + c), d)) : a == b

log({ p1: p(0) })
log({ p2: p(1) })