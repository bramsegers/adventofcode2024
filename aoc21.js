require('./_aoc')

let txt = read('aoc21.txt')
let map = {}
let mem = {}

let init = (s, w) => (s = arr(s))
  . for((a, i) => s.for((b, j) => {
    let r = set()
    let [y, x] = [int(i / w), i % w]
    let [q, p] = [int(j / w), j % w]
    let u = '^v'[+(y < q)].repeat(abs(y - q))
    let v = '<>'[+(x < p)].repeat(abs(x - p))
    if (s[w * q + x] != '.') r.add(u + v)
    if (s[w * y + p] != '.') r.add(v + u)
    map[a + b] = arr(r)
  }))

init('789456123.0A', 3)
init('.^A<v>', 3)

let dfs = (s, n) => n < 0 ? len(s)
  : mem[s + ',' + n] ||= arr(s)
  . fold((r, c, i) => r + map[(s[i - 1] || 'A') + c]
  . fold((t, e) => min(t, dfs(e + 'A', n - 1)), inf), 0)

let p = n =>
  txt.fold((r, s) => {
    let code = +s.replace(/\D/g, '')
    let mlen = dfs(s, n)
    return r + code * mlen
  }, 0)

log({ p1: p(2) })
log({ p2: p(25) })