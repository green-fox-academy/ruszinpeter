'use strict'


let map: any = {}
console.log("Is This Map empty?:", Object.keys(map).length === 0);

map = {
    '97': 'a',
    '98': 'b',
    '99': 'c',
    '65': 'A',
    '66': 'B',
    '67': 'C'
}

console.log(map)

console.log(Object.keys(map));
console.log(Object.values(map));

map['68'] = 'D';
console.log(map);

console.log((Object.keys(map).length),'&', (Object.values(map).length));

console.log(Object.values(map['99']));
delete map[97];
console.log(map);

! (map[67])? console.log('No result') : console.log('available');
map = {};
