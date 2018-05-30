import {toFahrenheit} from '../temp.js';

// F = degrees * 9/5 + 32
// describe(Name for test suite, () => {
test('Valid result from C to F', () => {
  expect(toFahrenheit(-273.16)).toBe("faileru");
});

test('Valid result from C to F', () => {
  expect(toFahrenheit(-273.15)).toBe(-459.67);
});

test('Valid result from C to F', () => {
  expect(toFahrenheit("12")).toBe(53.6);
});

test('Valid result from C to F', () => {
  expect(toFahrenheit(123456789)).toBeCloseTo(222222252.2);
});

test('Valid result from C to F', () => {
  expect(toFahrenheit(2.20938490238490328409)).toBeCloseTo(35.9768928);
});

test('Valid result from C to F', () => {
  expect(toFahrenheit("johan")).toBe("faileru");
});

test('Valid result from C to F', () => {
  expect(toFahrenheit(Infinity)).toBe("faileru");
});

test('Valid result from C to F', () => {
  expect(toFahrenheit(undefined)).toBe("faileru");
});

test('Valid result from C to F', () => {
  expect(toFahrenheit({})).toBe("faileru");
});

test('Valid result from C to F', () => {
  expect(toFahrenheit([])).toBe("faileru")
});

test('Valid result from C to F', () => {
  expect(toFahrenheit(null)).toBe("faileru");
});

test('Valid result from C to F', () => {
  expect(toFahrenheit(NaN)).toBe("faileru");
});
