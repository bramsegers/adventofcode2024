require('./_aoc')

let txt = read('aoc01.txt')
let nums = n => txt.map(e => e.match(/\w+/g)[n]).sort()

let arra = nums(0)
let arrb = nums(1)
let frqb = arrb.fold((f, e) => (f[e] = -~f[e], f), {})

let p1 = arra.fold((r, e, i) => r + abs(e - arrb[i]), 0)
let p2 = arra.fold((r, e) => r + e * ~~frqb[e], 0)

log({ p1 })
log({ p2 })