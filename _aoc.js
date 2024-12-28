read = f => require('fs')
. readFileSync('./input/' + f, 'utf-8')
. split('\r\n')

inf = 1 / 0
big = BigInt
abs = Math.abs
min = Math.min
max = Math.max
int = Math.floor
log = console.log

neumann = [[-1, 0], [0, 1], [1, 0], [0, -1]],
moore = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]],

str = e => '' + e
set = e => new Set(e)
len = e => (e.size + 1 ? e.size : e.length + 1 ? e.length : len(str(e)))
pos = (m, c, _) => [_ = m.findIndex(e => e.includes(c)), m[_].indexOf(c)]
arr = (n, v) => (n = [...(n === int(n) ? Array(n) : n)], v === undefined ? n : n.map(v.call ? v : _ => v))

Array.prototype.fold = Array.prototype.reduce
Array.prototype.for = function (f) { return this.fold((r, e, i) => (f(e, i), r), this) }

Set.prototype._add = Set.prototype.add
Set.prototype.add = function (e) { return this.size < this._add(e).size }
Set.prototype.for = function (f) { for (let e of this) f(e); return this }