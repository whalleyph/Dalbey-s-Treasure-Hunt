function generateMatrix(nums) {
  const matrix = [];
  for (let i = 0; i < 25; i = i + 5) {
    matrix.push(nums.slice(i, i + 5))
  } 
  console.log(matrix)
  return matrix;
}

export { generateMatrix };
