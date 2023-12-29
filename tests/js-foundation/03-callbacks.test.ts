
import { getUserById, User } from "../../src/js-foundation/03-callbacks";

const callbackFn = jest.fn();



describe('test for 03-callbacks', () => {

    test('should return error if user does not exist', (done) => {
      const id = 10;
      const user = getUserById(id, (err, user) => {
        expect(user).toBeUndefined();
        expect(err).toBe(`User not found with id ${id}`);
        done();
      });
    });

    test('should return John Doe when id is 1', (done) => {

      const id = 1;
      const expectedUser ={
        id: 1,
        name: 'John Doe',
      };
      const user = getUserById(id, (err, user) => {
        expect(err).toBeUndefined();
        expect(user).not.toBeUndefined();
        expect(user).toEqual(expectedUser);
        done();
      });
    });
});