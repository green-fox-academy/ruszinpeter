import { test } from 'tape';
import { Apples } from './apples';

test ('use the getApple method', t => {
  const apple2 = new Apples;
  apple2.getApple('apple2');
  let expected = console.log('apple2');
  t.equal(apple2.getApple('apple2'), expected);
  t.end();
}
)

