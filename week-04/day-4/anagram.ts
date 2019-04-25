'use strict'

export function Anagram(str1: string, str2: string) {
  let cont1: string[] = [];
  let cont2: string[] = [];
  for (let i: number = 0; i < str1.length; i++) {
    cont1.push(str1.slice(i, i + 1))
  }
  for (let j: number = 0; j < str2.length; j++) {
    cont2.push(str2.slice(j, j + 1))
  }
  cont1.sort();
  cont2.sort();
  for (let h: number = 0; h < cont1.length; h++) {
    if (cont1[h] !== cont2[h]) return console.log(false);
  }
  if (cont1.length === 0 || cont2.length === 0) {
    return console.log(false)
  }
  else return console.log(true);
}

Anagram('', 'sfabssd')