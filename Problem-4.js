function getDivisibilityCountMap(numbers) {
    const divisibilityMap = {};
  

    for (let divisor = 1; divisor <= 9; divisor++) {
      divisibilityMap[divisor] = 0;
    }
  
   
    for (const number of numbers) {
      for (let divisor = 1; divisor <= 9; divisor++) {
        if (number % divisor === 0) {
          divisibilityMap[divisor]++;
        }
      }
    }
  
    return divisibilityMap;
  }
  
  // Example 
  const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
  console.log(getDivisibilityCountMap(input));
  