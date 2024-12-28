require('./_aoc')

let txt = read('aoc15.txt')
let ops = txt.filter(e => !/#/.test(e)).join('')
let dir = {'^':[-1,0], 'v':[1,0], '<':[0,-1], '>':[0,1]}

let map1 = txt.filter(e => /#/.test(e))
let map2 = map1.map(e => e.replace(/./g, c => c == 'O' ? '[]' : c == '@' ? '@.' : c + c))

let key = (i, j) => 100 * i + j
let unk = k => [int(k / 100), k % 100]

let p = (map, tgt) => {

  let [y, x] = pos(map, '@')
  let m = map.map(e =>arr(e))
  
  let move = (i, j, s = set()) => {      
    let X = (u, v, c) => (c = m[u][v]) != '.' && c != '#' && s.add(key(u, v)) && A(u, v, c)   
    let M = t => t.every(([u, v]) => s.has(key(u + i, v + j)) || m[u + i][v + j] == '.') && S(t)
    let A = (u, v, c) => (X(u + i, v + j), i && c == ']' && X(u, v - 1), i && c == '[' && X(u, v + 1))
    let S = t => t.map(([u, v]) => [u, v, m[u][v], m[u][v] = '.']).for(([u, v, c]) => m[u + i][v + j] = c)
    if ((X(y + i, x + j), M(arr(s).map(unk)), m[y + i][x + j] == '.')) y += i, x += j
  }

  m[y][x] = '.'
  arr(ops).map(e => dir[e]).for(([i, j]) => move(i, j))
  return m.fold((r, e, i) => e.fold((r, e, j) => r + (e == tgt) * key(i, j), r), 0)
}

log({ p1 : p(map1, 'O') })
log({ p2 : p(map2, '[') })
