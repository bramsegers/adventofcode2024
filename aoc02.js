require('./_aoc')

let txt = read('aoc02.txt')
let rps = txt.map(e => e.match(/\d+/g).map(e => +e))

let safe = a => vald(a, [1, 2, 3]) || vald(a, [-1, -2, -3])
let vald = (a, d) => a.every((e, i) => !i || d.includes(e - a[i - 1]))

let p1 = rps.fold((r, a) => r += safe(a), 0)
let p2 = rps.fold((r, a) => r += safe(a) || a.some((_, i) => safe(a.filter((_, j) => i ^ j))), 0)

log({ p1 })
log({ p2 })
