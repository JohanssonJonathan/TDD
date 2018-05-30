import {canGetLicense} from '../license.js';


describe("Driving and stuff", () => {
  test('can get license A', () => {
    expect(canGetLicense("A", 24)).toBe(true);
  });

  test('can get license B', () => {
    expect(canGetLicense("b", 19)).toBe(true);
  });

  test('can get license BE', () => {
    expect(canGetLicense("bE", 18)).toBe(true);
  });

  // test('can not get license', () => {
  //   expect(canGetLicense("Johan", 18)).toThrow();
  // });

  test('Throw if wrong', () => {
    expect( ()=>{canGetLicense("Johan",40)}).toThrowError(Error);


});



  //
  test('can get license A', () => {
    expect(canGetLicense("A", "25")).toBe(true);
  });

  test('can get license A', () => {
    expect(canGetLicense("A", "25.3589437587348957")).toBe(true);
  });
  //
  test('throw', () => {
    // expect(()=>{canGetLicense(898943,"tjugonio"})).toThrow();
    expect( ()=>{canGetLicense(888908,"tjugonio")}).toThrowError(Error);
  });


  test('can not get license because of object', () => {
    expect( ()=>{canGetLicense("A",{})}).toThrowError(Error);

  });
  // //
  test('can not get license because of array', () => {
    expect( ()=>{canGetLicense("A",[])}).toThrowError(Error);

  });
  // //
  test('can not get license because of NaN as name', () => {
    expect( ()=>{canGetLicense(NaN,897.92323)}).toThrowError(Error);

  });

});
