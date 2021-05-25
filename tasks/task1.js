const visited = {}
export function dfs1(adj, v, t) {
    console.log(v)
    if(visited[v]){
        return false
    }
    visited[v] = true
    for(let neighbor of adj[v]) {
        if(!visited[neighbor]) {
            let reached = dfs1(adj, neighbor, t)
            if(reached) return true
        }
    }
    return false
}







