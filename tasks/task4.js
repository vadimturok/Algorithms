export const insertionSort = (array, type) => {
    for(let i = 1, l = array.length; i < l; i++){
        const current = array[i]
        let j = i
        while(j > 0 && (type === 1 ? array[j-1].coordinats > current.coordinats:array[j-1].population < current.population)){
            array[j] = array[j-1]
            j--
        }
        array[j] = current
    }
    for(let i of array)
        type === 1 ? console.log(i.name, ' -- ', i.coordinats) : console.log(i.name, ' -- ', i.population)
}