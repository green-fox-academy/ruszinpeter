import { test } from 'tape';
import { WorkWithNumbers } from './sum';


test ('new empty case', t => {
  const newArr = new WorkWithNumbers;
  let actual = newArr.addNum([]);
  let expected = console.log(0);
  t.equal(actual, expected);
  t.end();
}
)

test ('new test case', t => {
  const newArr = new WorkWithNumbers;
  let actual = newArr.addNum([4,5,6]);
  let expected = console.log(15);
  t.equal(actual, expected);
  t.end();
}
)