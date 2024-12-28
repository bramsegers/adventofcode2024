require('./_aoc')

let txt = read('aoc22.txt')

let prn = (n, m = 16777216) => (
  n ^= n <<  6, n %= m,
  n ^= n >>  5, n %= m,
  n ^= n << 11, n %= m,
  n += m      , n %= m
)

let num = txt
. map(e => arr(2000)
. fold(a => (a
. push(e = prn(e)), a), [e]))

let p1 = num
. map(e => e[2000])
. fold((a, b) => a + b)

let p2 = num
. map(e => e
. map((n, i) => n % 10 - e[i - 1] % 10 + 10))
. fold((s, e, j, m) => (m = [], e
. for((k, i) => i < 4 || (
  k += e[i - 1] << 5,
  k += e[i - 2] << 10,
  k += e[i - 3] << 15,
  m[k] || (m[k] = 1, s[k] +=
  num[j][i] % 10))), s),
  arr(1 << 20, 0))
. fold((a, b) => a > b ? a : b)

log({ p1 })
log({ p2 })
