import { Calculator } from "../calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test("adds -1 + -1 to equal -2", () => {
    expect(calculator.sum(-1, -1)).toBe(-2);
  });
});
