require('./_aoc')

let txt = read('aoc17.txt')
let [A, B, C, ...prog] = str(txt).match(/\d+/g).map(e => +e)

let ip = 0
let out = ''
while (ip in prog) {
  let opco = prog[ip++]
  let litr = prog[ip++]
  let comb = litr < 4 ? litr : [A, B, C][litr - 4]
  if (opco == 0) A >>= comb
  if (opco == 1) B ^= litr
  if (opco == 2) B = comb % 8
  if (opco == 3) A && (ip = litr)
  if (opco == 4) B ^= C
  if (opco == 5) out += comb % 8
  if (opco == 6) B = A >> comb
  if (opco == 7) C = A >> comb
}
let p1 = arr(out).join(',')


// my prog = [2,4, 1,1, 7,5, 1,5, 4,3, 0,3, 5,5, 3,0]
let p = a => {
  let b, c
  b = a % 8n    // 2,4
  b = b ^ 1n    // 1,1
  c = a >> b    // 7,5
  b = b ^ 5n    // 1,5
  b = b ^ c     // 4,5
  a >>= 3n      // 0,3
  return b % 8n // 5,5
}

let f = (i, o) => i--
  ? arr(8).fold((r, e, j) => p(e = (o << 3n) | big(j)) == prog[i]
  ? min(f(i, e), r) : r, inf)
  : +str(o)

let p2 = f(len(prog), 0n)

log({ p1 })
log({ p2 })
