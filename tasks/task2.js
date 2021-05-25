const visited = {}
export let str = ''
export function dfs(adj, v, t) {
    str += v; str += ' --> '
    if(v === t) return true
    if(visited[v]) return false
    visited[v] = true
    for(let neighbor of adj[v]) {
        if(!visited[neighbor]) {
            let reached = dfs(adj, neighbor, t)
            if(reached) return true
        }
    }
    return false
}

