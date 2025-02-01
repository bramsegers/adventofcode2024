require('./_aoc')

let siz = 70
let txt = read('aoc18.txt')
let byt = txt.map(e => e.split(','))
let dir = neumann

let f = n => {

  let dfs = [[0, 0, 0]]
  let map = arr(siz + 1, _ => arr(siz + 1, '.'))
  byt.slice(0, n).for(([x, y]) => map[y][x] = '#')

  for (let [i, j, k] of dfs) {
    if (i == siz && j == siz) return k
    dir.for(([y, x]) => map[y += i]
      && (map[y][x += j] == '.')
      && (map[y][x] = 'O')
      && dfs.push([y, x, k + 1])
    )
  }
}

let bs = (a, b, m = (a + b) >> 1) => a > b ? byt[a] : f(m + 1) ? bs(m + 1, b) : bs(a, m - 1)

let p1 = f(1024)
// let p2 = str(byt.find((_, i) => !f(i + 1)))
// p2 can be binary searched. thanks to roomens for this great suggestion! <3
let p2 = str(bs(0, len(byt) - 1))

log({ p1 })
log({ p2 })
