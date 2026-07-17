/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countCompleteComponents = (n, edges) => {
    let result = n - new Set(edges.flat()).size, connectedGraph;
    while (edges.length > 0) {
        [connectedGraph, edges] = extractConnectedSubgraph(edges);
        result += isComplete(connectedGraph);
    }
    return result;
};

const extractConnectedSubgraph = (edges) => {
    const subgraph = [edges.shift()];
    while (!totallyDistinct(subgraph, edges)) {
        const vertices = subgraph.flat();
        for (let i in edges) {
            if (vertices.includes(edges[i][0]) || vertices.includes(edges[i][1])) {
                subgraph.push(edges.splice(i, 1)[0]);
            }
        }
    }
    return [subgraph, edges]
};

const isComplete = (graph, count = new Set(graph.flat()).size) => 
   (count - 1) * count === 2 * graph.length;

const totallyDistinct = (g1, g2, s2 = new Set(g2.flat())) =>
    !g1.flat().some(r=> s2.has(r));