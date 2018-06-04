import {toFahrenheit} from '../temp.js';

// F = degrees * 9/5 + 32
describe("Celsius to Farenheit", () => {
test('Below absolute zero, not possible', () => {
  expect(toFahrenheit(-273.16)).toBeNaN();
});

test('Absolute zero', () => {
  expect(toFahrenheit(-273.15)).toBe(-459.67);
});

test('String to temperature', () => {
  expect(toFahrenheit("12")).toBe(53.6);
});

test('Large positive number', () => {
  expect(toFahrenheit(123456789)).toBeCloseTo(222222252.2);
});

test('Alot of decimals', () => {
  expect(toFahrenheit(2.20938490238490328409)).toBeCloseTo(35.9768928);
});

test('String', () => {
  expect (toFahrenheit("johan")).toBeNaN();
});

test('Infinity', () => {
  expect(toFahrenheit(Infinity)).toBeNaN();
});

test('undefined', () => {
  expect(toFahrenheit(undefined)).toBeNaN();
});

test('An object', () => {
  expect(toFahrenheit({})).toBeNaN();
});

test('An array', () => {
  expect(toFahrenheit([])).toBeNaN();
});

test('null', () => {
  expect(toFahrenheit(null)).toBeNaN();
});

test('NaN', () => {
  expect(toFahrenheit(NaN)).toBeNaN();
});
});
