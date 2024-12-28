require('./_aoc')

let puz = read('aoc04.txt').map(e => arr(e))

let p1 = 0
let p2 = 0
let tgt = 'XMAS'
let reg = /AMMSS|AMSMS|ASMSM|ASSMM/
let xdir = [[-1,-1], [-1,1], [1,-1], [1,1]]

let val = (i, j) => puz[i] && puz[i][j]
let dfs = (i, j, y, x, n) => tgt[n] ? tgt[n] == val(i, j) && dfs(i + y, j + x, y, x, n + 1) : 1

puz.for((e, i) => e.for((_, j) => moore.for(([y, x]) => p1 += dfs(i, j, y, x, 0))))
puz.for((e, i) => e.for((s, j) => (xdir.for(([y, x]) => s += val(i - y, j - x)), p2 += reg.test(s))))

log({ p1 })
log({ p2 })
