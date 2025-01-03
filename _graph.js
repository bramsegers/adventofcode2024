require('./_priorityqueue')

class Graph {

  constructor() {
    this.adjacencyList = {}
  }

  vertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  edge(vertex1, vertex2, weight, undirected) {
    this.vertex(vertex1)
    this.vertex(vertex2)
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    if (undirected) this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }

  dijkstra(start, finish) {
    const nodes = prioqueue()
    const distances = {}
    const previous = {}
    let path = []
    let smallest
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor]
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate
            previous[nextNeighbor] = smallest
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return {
			dists: distances,
    	dist: distances[finish],
      path: path.concat(smallest).reverse()
		}
  }
}

graph = () => new Graph()