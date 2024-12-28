require('./_aoc')

let map = read('aoc11.txt')[0].split(' ').map(e => +e)
let stones = n => map.fold((r, e) => r + dfs(e, n, []), 0)

let dfs = (n, t, m) => {
  if (!t) return 1
  let u = len(n)
  let k = 100 * n + t--
  if (k in m) return m[k]
  if (n <  1) return m[k] = dfs(1, t, m)
  if (u &  1) return m[k] = dfs(2024 * n, t, m)
  let a = dfs(+str(n).slice(0, u / 2), t, m)
  let b = dfs(+str(n).slice(u / 2, u), t, m)
  return m[k] = a + b
}

let p1 = stones(25)
let p2 = stones(75)

log({ p1 })
log({ p2 })
