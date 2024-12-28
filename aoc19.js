require('./_aoc')

let txt = read('aoc19.txt')

let a = txt[0].split(', ')
let b = txt.slice(2)

let f = (i, s, m) =>
  i in m ? m[i] : m[i] = a.fold((r, e) =>
  s.slice(i).startsWith(e) ? r + f(i + len(e), s, m) : r, 0)

let p1 = 0
let p2 = 0

b.for(t => {
  t = f(0, t, {[len(t)]: 1})
  p1 += t > 0
  p2 += t
})

log({ p1 })
log({ p2 })
