import { characters } from "../../src/js-foundation/02-destructuring";

describe('tests for js-foundation/02-destructuring.ts', () => {
  test('should has at least 4 characters', () => {
    expect(characters.length).toBeGreaterThanOrEqual(4);
  });

  test('characters should contain Superman and Flash', () => {
    expect(characters).toContain('Flash'); 
    expect(characters).toContain('Superman'); 
  });

  test('first character should be Flash and second Superman', () => {
    const [flash, superman] = characters
    expect(flash).toBe('Flash'); 
    expect(superman).toBe('Superman'); 
  });
});