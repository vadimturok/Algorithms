import {dfs1} from "./tasks/task1.js"
import {dfs} from "./tasks/task2.js"
import {graph} from "./graphs.js"
import {graph2} from "./graphs.js"
import {findShortestPath} from "./tasks/task3.js"
import {str} from "./tasks/task2.js"
import {insertionSort} from "./tasks/task4.js"
import {city} from "./graphs.js"
import {graph3} from "./graphs.js"

let path = ''
let path2 = ''
let shortestPath = findShortestPath(graph2, 'uzhgorod', 'dovhe')
shortestPath.path.map(city => path += city + ' --> ')
let shortestPath2 = findShortestPath(graph3, 'uzhgorod', 'dovhe')
shortestPath2.path.map(city => path2 += city + ' --> ')
dfs1(graph, 'uzhgorod', 'dovhe')
dfs(graph, 'uzhgorod', 'dovhe')
console.log(str, '\n', shortestPath.distance, 'km\n', path, '\n', path2)
let res = insertionSort(city, 1)
for(let i of res) console.log(i.name)
console.log('')
res = insertionSort(city, 2)
for(let i of res) console.log(i.name, ' -- ', i.population)
