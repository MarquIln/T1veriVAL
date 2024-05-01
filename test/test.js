const Calculator = require('../src/calculator');
let calc;

beforeEach(() => {
  calc = new Calculator();
});

describe('Calculator', () => {
  describe('add', () => {
    test('Deve retornar a soma de dois números positivos', () => {
      expect(calc.add(1, 2)).toBe(3);
    });

    test('Deve retornar a soma de um número positivo e um número negativo', () => {
      expect(calc.add(5, -3)).toBe(2);
    });

    test('Deve retornar zero ao adicionar zero a um número', () => {
      expect(calc.add(10, 0)).toBe(10);
    });
  });

  describe('subtract', () => {
    test('Deve retornar a diferença de dois números positivos', () => {
      expect(calc.subtract(5, 3)).toBe(2);
    });

    test('Deve retornar a diferença de um número negativo e um número positivo', () => {
      expect(calc.subtract(-10, 7)).toBe(-17);
    });

    test('Deve retornar zero ao subtrair um número dele mesmo', () => {
      expect(calc.subtract(3, 3)).toBe(0);
    });
  });

  describe('multiply', () => {
    test('Deve retornar o produto de dois números positivos', () => {
      expect(calc.multiply(2, 3)).toBe(6);
    });

    test('Deve retornar zero ao multiplicar por zero', () => {
      expect(calc.multiply(5, 0)).toBe(0);
    });

    test('Deve retornar um produto negativo ao multiplicar um número positivo por um número negativo', () => {
      expect(calc.multiply(4, -2)).toBe(-8);
    });
  });

  describe('divide', () => {
    test('Deve retornar o resultado da divisão de dois números positivos', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });

    test('Deve retornar um resultado decimal ao dividir dois números', () => {
      expect(calc.divide(8, 3)).toBeCloseTo(2.6666666666666665);
    });

    test('Deve lidar com a divisão por números negativos', () => {
      expect(calc.divide(15, -3)).toBe(-5);
    });

    test('Deve lançar um erro ao dividir por zero', () => {
      expect(() => calc.divide(10, 0)).toThrow("Divisão por zero não é permitida.");
    });
  });
});
