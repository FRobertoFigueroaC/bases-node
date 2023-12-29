
import { emailTemplate } from "../../src/js-foundation/01-template";

describe('tests for js-foundation/01-template', () => {
  test('emailTemplate should contain a greeting', () => {
      // 1 arrange
      // 2 act
      // 3 assert
      expect(emailTemplate).toContain("Hi,");
  });
  test('emailTemplate should contain {{name}} and {{orderId}}', () => {
      // 1 arrange
      // 2 act
      // 3 assert
      expect(emailTemplate).toMatch(/{{name}}/);
      expect(emailTemplate).toMatch(/{{orderId}}/);
      expect(emailTemplate).toContain('{{name}}');
      expect(emailTemplate).toContain('{{orderId}}');
  });
});