require('./_aoc')

let p1 = 0
let p2 = 0

let dir = neumann
let map = read('aoc12.txt').map(e => arr(e))


let f = (i, j, v, a) =>
  map[i] && map[i][j] == v && (
  map[i][j] = 0, a.push([i, j]),
  dir.for(([y, x]) => f(i - y, j - x, v, a)))

let g = a => {
  let s = set()
  let t = set()
  let n = len(a)
  let r = [-1, 0, 1]
  let d = (i, j) => t.add(k(i, j))
  let k = (i, j) => (++i << 10) | ++j
  a.for(e => s.add(k(...e))).for(([a, b]) =>
    dir.for(([y, x]) => s.has(k(a + y, b + x)) ||
    r.for(e => d(a + a + (y || e), b + b + (x || e)),
    p1 += n
  )))
  t.for(e => {
    let a = (e >> 10) - 1
    let b = (e & 1023) - 1
    let c = dir.map(([y, x]) => k(a - y, b - x))
    let r = c.fold((r, e, i) => r + t.has(e) * t.has(c[(i + 1) & 3]), 0)
    p2 += n * min(2, r)
  })
}

map.for((e, i) => e.for((v, j, a) => v && g(a = [], f(i, j, v, a))))

log({ p1 })
log({ p2 })
