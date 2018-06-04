import {canGetLicense} from '../license.js';

describe("Driving and stuff", () => {
  test('allowed to get license', () => {
    expect(canGetLicense("A", 24)).toBe(true);
    expect(canGetLicense("b", 18)).toBe(true);
    expect(canGetLicense("bE", 18)).toBe(true);
    expect(canGetLicense("c", 21)).toBe(true);
    expect(canGetLicense("d", 24)).toBe(true);
  });

  test('can get license with string', () => {
  expect(canGetLicense("A", "25")).toBe(true);
  });

  test('can not get license, wrong license type', () => {
    expect(()=>(canGetLicense("Johan", 18))).toThrowError(Error);
  });

  test('can get license A, with decimal age', () => {
    expect(canGetLicense("A", "25.3589437587348957")).toBe(true);
  });

  test('can not get license because of string', () => {
    expect(()=>(canGetLicense(898943,"tjugoooniiiioooo"))).toThrowError(Error);
  });
  test('can not get license because of object', () => {
    expect(()=>(canGetLicense("A",{}))).toThrowError(Error);
  });
  //
  test('can not get license because of array', () => {
    expect(()=>(canGetLicense("A",[]))).toThrowError(Error);
  });
  //
  test('can not get license because of NaN as name', () => {
    expect(()=>(canGetLicense(NaN,898.3284234))).toThrowError(Error);
  });

});
