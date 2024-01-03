import { getUUID } from "../../src/plugins/get-id.plugin";

describe('test for get-id.plugin', () => {
  test('should return a string and have 36 characters', () => {
    const uuid = getUUID();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  })
});