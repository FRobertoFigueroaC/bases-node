import { getAge } from "../../src/plugins/get-age.plugin";


describe('tests for get-age.plugin', () => {
    test('should calculate the age', () => {
      const now = new Date();
      now.setFullYear(now.getFullYear() - 20);

      const age = getAge(now.toISOString());

      expect(typeof age).toBe('number');
      expect(age).toBe(20)

    });

    test('getAge should return 0 years', () => {
      const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1994);
      const birthdate = '1994-05-12';
      const age = getAge(birthdate);

      expect(age).toBe(0);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
      
    });
});