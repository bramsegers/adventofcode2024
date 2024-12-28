require('./_aoc')

let map = read('aoc06.txt').map(e => arr(e))

let p1 = 0
let p2 = 0
let dir = neumann
let [y, x] = pos(map, '^')

let key = (y, x, d) => (y << 10) | (x << 2) | d

let exit = (y, x, d, s) => {
  let u = y + dir[d][0]
  let v = x + dir[d][1]
  if (!map[y] || !map[y][x]) return arr(s)
  if (!s.add(key(y, x, d))) return
  return map[u] && map[u][v] == '#'
    ? exit(y, x, ++d & 3, s)
    : exit(u, v, d, s)	 
}

arr(set(exit(y, x, 0, set())
. map(e => e >> 2)))
. map(e => [e >> 8, e & 255])
. for(([i, j]) => {
    p1++,
    map[i][j] = '#',
    p2 += !exit(y, x, 0, set()),
    map[i][j] = '.'
})

log({ p1 })
log({ p2} )
