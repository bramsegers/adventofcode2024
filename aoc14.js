require('./_aoc')

let w = 101
let h = 103

let bots = read('aoc14.txt')
.	map(e => e
.	match(/-?\d+/g)
.	map(e => +e))

let step = ([x, y, u, v], n) => [
	(((x + n * u) % w) + w) % w,
	(((y + n * v) % h) + h) % h,
]

let q = arr(4, 0)
bots.for(e => {
	let [x, y] = step(e, 100)
	let [u, v] = [w >> 1, h >> 1]
	u = x < u ? 0 : x > u ? 1 : 2
	v = y < v ? 0 : y > v ? 1 : 2
	u < 2 && v < 2 && q[u + u + v]++
})
let p1 = eval(q.join('*'))


// aoc14.html: visual of moving bots 
// horizontal pattern appears at steps 30, 133, 236, 339, ... (= 30 + x * h)
// vertical   pattern appears at steps 89, 190, 291, 392, ... (= 89 + y * w)
// christmas tree appears at step 8270. it appears as a solid shape
// so another way to calculate p2 is by tracking max cluster area at each step

let p2
let map
let maxa = 0
let dir = neumann

let area = (i, j) => map[i] && map[i][j] ? (
	map[i][j] = 0) + dir.fold((a, [y, x]) =>
	a + area(i + y, j + x), 1) : 0

arr(h * w, 0).for((a, n) => (
	map = arr(h, _ => arr(w, 0)),
	bots.map(e => step(e, n)).for(([x, y]) => map[y][x] = 1),
	map.for((e, i) => e.for((_, j) => a = max(a, area(i, j)))),
	a > maxa && (maxa = a, p2 = n)
))

log({ p1 })
log({ p2 })