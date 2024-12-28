require('./_aoc')

let p1 = 0
let p2 = 0

let dir = neumann
let map = read('aoc10.txt')

let dfs = (i, j, a, n) => {
  if (!map[i] || map[i][j] != n) return
  if (++n > 9) return a.push((i << 8) | j)
  dir.for(([y, x]) => dfs(i - y, j - x, a, n))
}

map.for((e, i) => arr(e).for((a, j) => (
  dfs(i, j, a = [], 0),
  p1 += len(set(a)),
  p2 += len(a)
)))

log({ p1 })
log({ p2 })
