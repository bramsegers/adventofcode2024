require('./_aoc')

let txt = read('aoc03.txt').join``

let p1 = txt
. match(/mul\(\d+,\d+\)/g)
. map(e => e
. match(/\d+/g))
. map(([a, b]) => a * b)
. fold((r, e) => r + e)

let p2 = txt
. match(/mul\(\d+,\d+\)|do(n't)?\(\)/g)
. fold(([s, m], e) => /do/
. test(e) ? [s, 1 - /n't/
. test(e)] : (e = e
. match(/\d+/g), [s + m * e
. pop() * e[0], m]), [0, 1])[0]

log({ p1 })
log({ p2 })
