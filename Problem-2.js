function generateOddSeries(a) {
    const result = [];
  
    for (let i = 0; i < a; i++) {
      result.push(2 * i + 1); // Odd number formula
    }
  
    return result.join(", ");
  }
  
  // Example 
  const input = 4;
  console.log(generateOddSeries(input)); 
  