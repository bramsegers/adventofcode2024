require('./_aoc')

let p1 = set()
let p2 = set()

let map = read('aoc08.txt').map(e => arr(e))
let add = (s, i, j) => map[i] && map[i][j] && s.add((i << 10) | j) | 1

Object
. values(map
. fold((f, e, i) => (e
. map((v, j) => v == '.' || (f[v] ||= [])
. push([i, j])), f), {}))
. map(a => a
. for(u => a
. for(v => {
  if (u == v) return
  let i = v[0]
  let j = v[1]
  let y = i - u[0]
  let x = j - u[1]
  add(p1, i + y, j + x)
  while (add(p2, i, j)) i += y, j += x
})))

log({ p1: len(p1) })
log({ p2: len(p2) })
