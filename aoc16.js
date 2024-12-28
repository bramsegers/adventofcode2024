require('./_aoc')
require('./_graph')

let map = read('aoc16.txt')
let dir = neumann

let g = graph()
let [ay, ax] = pos(map, 'S')
let [by, bx] = pos(map, 'E')
let k = (i, j, d) => [i, j, d].join(' ')

map.for((e, i) => arr(e).for((c, j) => {
  if (c == '#') return
  c = (c != 'E') * 1e3
  dir.for(([y, x], d) => {
    map[i + y][j + x] == '#' ||
    g.edge(k(i, j, d), k(i + y, j + x, d), 1)
    g.edge(k(i, j, d), k(i, j, (d + 1) & 3), c)
    g.edge(k(i, j, d), k(i, j, (d + 3) & 3), c)
  })
}))

let d1 = g.dijkstra(k(ay, ax, 1), k(by, bx, 0))
let d2 = g.dijkstra(k(by, bx, 0), k(ay, ax, 3))

let p1 = d1.dist
let p2 = set()

for (let k1 in d1.dists) {
  let [i, j, d] = k1.split(' ')
  let k2 = k(i, j, (+d + 2) & 3)
  if (d1.dists[k1] + d2.dists[k2] == p1) p2.add(k(i, j))
}

log({ p1 })
log({ p2: p2.size })
