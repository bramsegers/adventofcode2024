require('./_aoc')

let map = arr(read('aoc09.txt')[0])
let csum = p => p.fold((r, e, i) => r + max(0, e) * i, 0)

let p1 = (() => {
	let i = 0, a, b
	let j = map.fold((a, b) => a + int(b), -1)
	let p = map.fold((c, e, i) => (arr(+e).for(_ => c.push(i & 1 ? -1 : i / 2)), c), [])
	while (i < j) a = p[i], b = p[j], a + 1 ? i++ : b < 0 ? j-- : (p[i] = b, p[j] = a)
	return csum(p)
})()

let p2 = (() => {
	let i = 0, a, b, u, v
	let j = len(map) - 1
	let p = map.map((e, i) => [i & 1 ? -1 : i / 2, +e])
	let f = (k, b) => k < j ? p[k][0] < 0 && p[k][1] >= b ? k : f(k + 1, b) : -1
	while (i < j) [a, b] = p[i], [u, v] = p[j], a + 1 || b < 1 ? i++ : u < 0 || v < 1
		|| (a = f(i, v)) < 0 ? j-- : (p[a][1] -= v, p[j][0] = -1, p.splice(a, 0, [u, v]))
	return csum(p.fold((c, [a, b]) => (c.push(...arr(b, a)), c), []))
})()

log({ p1 })
log({ p2 })