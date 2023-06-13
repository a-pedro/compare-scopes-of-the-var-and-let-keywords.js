function checkScope() {
  let i = 'function scope';
  for (let i = 'function scope'; i < 0;)
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}