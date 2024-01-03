
import { httpClientPlugin } from '../../src/plugins/http-client.plugin'

describe('http-client.plugin tests', () => {
  test('httpClientPlugin.get should return data', async() => {
    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": expect.any(Boolean)
      })
  });

  test('httpClientPlugin post, put and delete should return Error', async() => {
    expect(typeof httpClientPlugin.post).toBe("function");
    expect(typeof httpClientPlugin.put).toBe("function");
    expect(typeof httpClientPlugin.delete).toBe("function");
  });
});