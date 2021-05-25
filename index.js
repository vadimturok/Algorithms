import {dfs1} from "./tasks/task1.js";
import {dfs} from "./tasks/task2.js";
import {graph} from "./graphs.js";
import {graph2} from "./graphs.js";
import {findShortestPath} from "./tasks/task3.js";
import {str} from "./tasks/task2.js";
import {insertionSort} from "./tasks/task4.js";
import {city} from "./graphs.js";
import {graph3} from "./graphs.js";

let path = ''
let path2 = ''
let shortestPath = findShortestPath(graph2, 'uzhgorod', 'dovhe')
shortestPath.path.map(city => {path += city; path+= ' --> '})
let shortestPath2 = findShortestPath(graph3, 'uzhgorod', 'dovhe')
shortestPath2.path.map(city => {path2 += city; path2+= ' --> '})
dfs1(graph, 'uzhgorod', 'dovhe')
dfs(graph, 'uzhgorod', 'dovhe')
console.log('Path: ', str, '\nDistance: ', shortestPath.distance, 'km', '\nShortest path by km: ', path, '\nShortest path by priority: ', path2)
let res = insertionSort(city, 1)
for(let i of res) console.log(res.indexOf(i)+1, ': ', i.name)
console.log('')
res = insertionSort(city, 2)
for(let i of res) console.log(res.indexOf(i)+1, ': ', i.name, ' -- ', i.population)
