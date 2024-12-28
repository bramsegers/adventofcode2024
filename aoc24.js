require('./_aoc')

let txt = read('aoc24.txt')
let inp = txt.filter(e => /:/.test(e))
let gts = txt.filter(e => /-/.test(e)).map(e => e.match(/\w+/g))


let key = (a, b, c) => [a, b].sort().concat(c)
let val = (a, op, b) => op == 'OR' ? a | b : op == 'XOR' ? a ^ b : a & b
let swp = (a, b, u = m2[a], v = m2[b], t = m2[u]) => (m2[a] = v, m2[b] = u, m2[u] = m2[v], m2[v] = t, p2.push(a, b))


let p1 = 0
let m1 = inp.fold((r, e) => (r[e.slice(0, 3)] = +e.slice(-1), r), {})

for (let u = arr(gts); len(u);)
  u = u.fold((u, [a, op, b, c]) => {
    if (a in m1) a = m1[a]
    if (b in m1) b = m1[b]
    if (c in m1) c = m1[c]
    if (a == +a && b == +b && c != +c) 
      m1[c] = val(a, op, b), 
      p1 += m1[c] && c > 'z' && 2 ** c.slice(1)
    if (a != +a || b != +b || c != +c)
      u.push([a, op, b, c])
    return u
  }, [])


let p2 = []
let m2 = gts.fold((m, [a, op, b, c]) => (b = key(a, b, op), m[b] = c, m[c] = b, m), {})

arr(len(inp) / 2).fold((c, _, i) => {
  if (i < 10) i = '0' + i
  let x = 'x' + i
  let y = 'y' + i
  let z = 'z' + i
  let u = m2[key(x, y, 'XOR')]
  let v = m2[key(x, y, 'AND')]
  let w = m2[key(c, u, 'XOR')]
  if (!c) return v
  if (w) w != z &&
    swp(z, w)
  else [v, w] = m2[z],
    v = v == c ? u : v == u ? c : v,
    w = w == c ? u : w == u ? c : w,
    swp(v, w)
  u = m2[key(x, y, 'XOR')]
  v = m2[key(x, y, 'AND')]
  u = m2[key(c, u, 'AND')]
  v = m2[key(u, v, 'OR')]
  return v
}, 0)


log({ p1 })
log({ p2: str(p2.sort()) })
