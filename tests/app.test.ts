
describe('App', () => { 
  test('Test in the app file', () => {

    // 1 arrange

    const number1 = 10;
    const number2 = 20;

    // 2 act
    const sum = number1 + number2;

    // 3 assert
    expect(sum).toBe(30);
  });
 });