import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('test for 05-factory', () => {

    const getUUID = () => '1234';
    const getAge = () => 31;
    test('should return a function', () => {
        const result = buildMakePerson({getUUID, getAge});

        expect(typeof result).toBe('function');
    });

    test('should return a person', () => {
        const result = buildMakePerson({getUUID, getAge});
        const person = result({
          name: 'John', 
          birthdate: '1992-10-21'
        });

        expect(person.id).toBe('1234');
        expect(person.name).toBe('John');
        expect(person.birthdate).toBe('1992-10-21');
        expect(person.age).toBe(31);
    });
});