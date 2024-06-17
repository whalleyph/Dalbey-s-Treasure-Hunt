function getLocationFromValue(matrixValue) {
  return { row: Math.floor(matrixValue / 10), column: matrixValue % 10 };
}

function generateMatrix(nums) {
  const matrix = [];
  for (let i = 0; i < 25; i = i + 5) {
    matrix.push(nums.slice(i, i + 5));
  }
  return matrix;
}

export { getLocationFromValue, generateMatrix };
