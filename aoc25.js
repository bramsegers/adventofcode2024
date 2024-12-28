require('./_aoc')

let txt = read('aoc25.txt')

let pcs = txt
. join()
. split(',,')
. map(e => e
. split(','))

let p1 = pcs
. fold((r, a, i) => r + pcs
. fold((r, b, j) => r += i < j && !a
. some((e, i) => arr(e)
. some((c, j) => c + b[i][j] == '##')), 0), 0)

log({ p1 })
