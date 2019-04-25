import { test } from 'tape';
import { Anagram } from './anagram';

test ('test empty Anagram function', t => {
  let x = Anagram('','')
  let expected = console.log(false);
  t.equal(x, expected);
  t.end();
}
)

test ('test normal Anagram function', t => {
  let x = Anagram('abcde','bcdea')
  let expected = console.log(true);
  t.equal(x, expected);
  t.end();
}
)