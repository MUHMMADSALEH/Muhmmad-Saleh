function generateOddSeriesUpToA(a) {
    const count = a % 2 === 0 ? a - 1 : a;
    const result = [];
  
    for (let i = 0; i < count; i++) {
      result.push(2 * i + 1);
    }
  
    return result.join(", ");
  }
  
  // Example 
  console.log(generateOddSeriesUpToA(6)); 
  