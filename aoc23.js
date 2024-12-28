require('./_aoc')

let txt = read('aoc23.txt')
let map = txt.map(e => e.split`-`)

let adj = {}
map.for(([a, b]) => {
  adj[a] ||= set()
  adj[b] ||= set()
  adj[a].add(b)
  adj[b].add(a)
})

let p1 = 0
let p2 = 0
let mlen = 0
let keys = Object.keys(adj).sort()

let f = (a, i, n) => {
  if (n == 3 && a.some(([e]) => e == 't')) p1++
  if (n > mlen) mlen = n, p2 = a.join`,`
  for (let e; e = keys[i++];) a.every(f =>
    adj[f].has(e)) && f([...a, e], i, n + 1)
}

f([], 0, 0)

log({ p1 })
log({ p2 })