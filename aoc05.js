require('./_aoc')

let txt = read('aoc05.txt')
let rules = set(txt.filter(e => /\|/.test(e)))
let updts = txt.filter(e => /,/.test(e)).map(e => e.split(','))

let f = (a, b) => rules.has(a + '|' + b)
let v = u => !u.some((a, i) => u.some((b, j) => j > i && f(b, a)))

let p1 = updts.fold((r, u) => r + v(u) * u[len(u) >> 1], 0)

let topo_sort = (n, a) => {
  let q = []
  let v = arr(n, 0)
  let f = i => (v[i] = 1, a[i].for(j => v[j] || f(j)), q.push(i))
  v.for((e, i) => e || f(i))
  return q.reverse()
}

let p2 = updts.fold((r, u) => {
  if (v(u)) return r
  let x = n => u.indexOf(n), c = []
  let m = u.for(a => u.for(b => f(a, b) && c.push([x(a), x(b)])))
  let a = c.fold((a, [e, f]) => (a[e].push(f), a), c.map(_ => []))
  let s = topo_sort(m = len(u), a)
  return +u[s[m >> 1]] + r
}, 0)

log({ p1 })
log({ p2 })
