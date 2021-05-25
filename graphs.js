export const graph = {}
graph.dovhe = ['kushnitsa', 'priborzhavske', 'polyana']
graph.kushnitsa = ['svalyava', 'dovhe']
graph.priborzhavske = ['dovhe', 'irshava', 'bilky']
graph.polyana = ['iza', 'dovhe']
graph.svalyava = ['kushnitsa', 'mukachevo']
graph.mukachevo = ['svalyava', 'chop', 'uzhgorod', 'zarichya', 'zaluzhya', 'berehove']
graph.zaluzhya = ['mukachevo', 'zarichya', 'zavydovo']
graph.zavydovo = ['zaluzhya', 'irshava']
graph.uzhgorod = ['mukachevo', 'chop']
graph.zarichya = ['mukachevo', 'irshava', 'berehove', 'shyroke', 'olhivka']
graph.olhivka = ['zarichya', 'rakovets']
graph.rakovets = ['olhivka', 'bilky']
graph.irshava = ['zarichya', 'osiy', 'priborzhavske', 'zavydovo']
graph.osiy = ['irshava', 'bilky']
graph.bilky = ['priborzhavske', 'osiy', 'rakovets']
graph.chop = ['mukachevo', 'uzhgorod', 'berehove']
graph.berehove = ['chop', 'zarichya', 'vylok', 'mukachevo']
graph.vylok = ['berehove', 'vynohradovo']
graph.vynohradovo = ['vylok', 'khust']
graph.khust = ['vynohradovo', 'shyroke', 'iza']
graph.shyroke = ['khust', 'zarichya']
graph.iza = ['khust', 'polyana']


export let graph2 = {
    dovhe: { kushnitsa: 10, priborzhavske: 4},
    kushnitsa: { dovhe: 10, svalyava: 25},
    svalyava: { kushnitsa: 25, mukachevo: 30},
    mukachevo: { svalyava: 30, chop: 38, uzhgorod: 37, zaluzhya: 12, berehove: 28},
    zarichya: { irshava: 6, berehove: 28, shyroke: 14, olhivka: 8, zaluzhya: 17},
    zaluzhya: {zarichya: 17, zavydovo: 6, mukachevo: 12},
    zavydovo: {zaluzhya: 6, irshava: 27},
    priborzhavske: {dovhe: 10, irshava: 16, bilky: 8},
    bilky: {priborzhavske: 8, osiy: 5, rakovets: 6},
    rakovets: {bilky: 6, olhivka: 7},
    olhivka: {rakovets: 7, zarichya: 8},
    osiy: {bilky: 5, irshava: 8},
    irshava: {priborzhavske: 16, osiy: 8, zarichya: 6, zavydovo: 27},
    uzhgorod: {mukachevo: 37, chop: 20},
    chop: {uzhgorod: 20, mukachevo: 38, berehove: 51},
    berehove: {chop: 51, zarichya: 28, vylok: 20, mukachevo: 28},
    vylok: {berehove: 20, vynohradovo: 13},
    vynohradovo: {vylok: 13, khust: 23},
    khust: {vynohradovo: 23, shyroke: 15, iza: 6},
    shyroke: {khust: 15, zarichya: 14},
    iza: {khust: 6, polyana: 16},
    polyana: {iza: 16, dovhe: 6}
};

export let graph3 = {
    dovhe: { kushnitsa: 3, priborzhavske: 3, polyana: 2},
    kushnitsa: { dovhe: 3, svalyava: 1},
    svalyava: { kushnitsa: 1, mukachevo: 2},
    mukachevo: { svalyava: 2, zarichya: 1, chop: 2, uzhgorod: 1, zaluzhya: 2, berehove: 1},
    zaluzhya: {mukachevo: 2, zavydovo: 3, zarichya: 1},
    zavydovo: {zaluzhya: 3, irshava: 2},
    zarichya: {mukachevo: 1, irshava: 2, berehove: 3, shyroke: 1, zaluzhya: 1, olhivka: 1},
    olhivka: {zarichya: 1, rakovets: 2},
    rakovets: {olhivka: 2, bilky: 3},
    priborzhavske: {dovhe: 3, irshava: 2, bilky: 1},
    bilky: {priborzhavske: 1, osiy: 3, rakovets: 3},
    osiy: {bilky: 3, irshava: 1},
    irshava: {priborzhavske: 2, osiy: 1, zarichya: 2, zavydovo: 2},
    uzhgorod: {mukachevo: 1, chop: 3},
    chop: {uzhgorod: 3, mukachevo: 2, berehove: 1},
    berehove: {chop: 1, zarichya: 3, vylok: 2, mukachevo: 1},
    vylok: {berehove: 2, vynohradovo: 3},
    vynohradovo: {vylok: 3, khust: 1},
    khust: {vynohradovo: 1, shyroke: 2, iza: 3},
    shyroke: {khust: 2, zarichya: 1},
    iza: {khust: 3, polyana: 2},
    polyana: {iza: 2, dovhe: 2}
};

export const city = [
    {name: 'Dovhe', coordinats: 23.277, population: 6790},
    {name: 'Pryborzhavske', coordinats: 23.227, population: 3585},
    {name: 'Kushnitsa', coordinats: 23.253, population: 4706},
    {name: 'Polyana', coordinats: 23.357, population: 2965},
    {name: 'Iza', coordinats: 23.325, population: 5237},
    {name: 'Khust', coordinats: 23.290, population: 28321},
    {name: 'Vynohradovo', coordinats: 23.031, population: 25395},
    {name: 'Shyroke', coordinats: 23.112, population: 2411},
    {name: 'Vylok', coordinats: 22.837, population: 3227},
    {name: 'Berehove', coordinats: 22.644, population: 23732},
    {name: 'Chop', coordinats: 22.209, population: 8997},
    {name: 'Uzhhorod', coordinats: 22.299, population: 115512},
    {name: 'Mukachevo', coordinats: 22.721, population: 85796},
    {name: 'Zarichya', coordinats: 22.998, population: 3939},
    {name: 'Irshava', coordinats: 23.041, population: 9259},
    {name: 'Osiy', coordinats: 23.111, population: 3555},
    {name: 'Bilky', coordinats: 23.134, population: 8561},
    {name: 'Svalyava', coordinats: 22.993, population: 17183},
    {name: 'Zavydovo', coordinats: 22.905, population: 1647},
    {name: 'Zaluzhya', coordinats: 22.858, population: 1768},
    {name: 'Olhivka', coordinats: 23.061, population: 1857},
    {name: 'Rakovets', coordinats: 23.152, population: 4545},

]
