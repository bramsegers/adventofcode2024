require('./_aoc')

let txt = read('aoc20.txt')
let map = txt.map(e => arr(e).map(e => e == '#' ? -1 : inf))
let trk = map.fold((t, e, i) => (e.for((e, j) => e >= 0 && t.push([i, j])), t), [])

let dir = neumann
let [ay, ax] = pos(txt, 'S')

let bfs = [[ay, ax, 0]]
for (let [i, j, v] of bfs) {
  map[i][j] = v
  dir.for(([y, x]) => map[y += i]
    && map[y][x += j] > v + 1
    && bfs.push([y, x, v + 1])
)}

let f = cheats => trk
. fold((r, [i, j]) => (trk
. for(([u, v]) => {
  let dist = abs(i - u) + abs(j - v)
  let save = map[u][v] - map[i][j] - dist
  r += dist <= cheats && save >= 100
}), r), 0)

log({ p1: f( 2) })
log({ p2: f(20) })
