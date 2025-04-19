class Calculator {
    constructor(a, b, operation) {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.operation = operation.toLowerCase();
    }
  
    calculate() {
      switch (this.operation) {
        case "add":
          return this.a + this.b;
        case "subtract":
          return this.a - this.b;
        case "multiply":
          return this.a * this.b;
        case "divide":
          if (this.b !== 0) {
            return this.a / this.b;
          } else {
            return "Error: Division by zero";
          }
        default:
          return "Invalid operation";
      }
    }
  }
  
  // Example 
  const calc = new Calculator(10.4, 5, "divide");
  console.log("Result:", calc.calculate());
  