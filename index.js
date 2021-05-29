import {dfs1} from "./tasks/task1.js"
import {dfs, str} from "./tasks/task2.js"
import {findShortestPath} from "./tasks/task3.js"
import {insertionSort} from "./tasks/task4.js"
import {graph, graph2, graph3, city} from "./graphs.js"

dfs1(graph, 'uzhgorod', 'dovhe')
dfs(graph, 'uzhgorod', 'dovhe')
console.log(str)
console.log(findShortestPath(graph2, 'uzhgorod', 'dovhe').path);
console.log(findShortestPath(graph3, 'uzhgorod', 'dovhe').path);
insertionSort(city, 1)
console.log('')
insertionSort(city, 2)