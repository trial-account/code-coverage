it('should pass', () => {
  expect(sum(1, 2)).toBe(3);
});

it('should fail', () => {
  expect(sum(1, 2)).toBe(4);
});

function sum(a, b) {
  return a + b;
}
