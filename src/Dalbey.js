import { getNextLocationFromValue, generateMatrix } from "./utilities";

function solveDalbey(nums) {
  const matrix = generateMatrix(nums);
  const locationsVisited = [11];
  let currentLocation;
  let nextLocation;
  while (locationsVisited.length < 26) {
    currentLocation = getNextLocationFromValue(
      locationsVisited[locationsVisited.length - 1]
    );
    nextLocation = getNextLocationFromValue(
      matrix[currentLocation.row - 1][currentLocation.column - 1]
    );

    // console.log(
    //   nextLocation.row,
    //   currentLocation.row,
    //   nextLocation.column,
    //   currentLocation.column
    // );
    if (
      nextLocation.row === currentLocation.row &&
      nextLocation.column === currentLocation.column
    ) {
      return locationsVisited;
    }
    locationsVisited.push(
      matrix[currentLocation.row - 1][currentLocation.column - 1]
    );
  }
  return "No treasure here!" + locationsVisited;
}

export { solveDalbey };
