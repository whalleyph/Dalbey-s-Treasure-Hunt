import { getLocationFromValue, generateMatrix } from "./utilities";

function solveDalbey(nums) {
  const matrix = generateMatrix(nums);
  const locationsVisited = [11];
  let currentLocation;
  let nextLocation;
  while (locationsVisited.length < 26) {
    currentLocation = getLocationFromValue(
      locationsVisited[locationsVisited.length - 1]
    );
    nextLocation = getLocationFromValue(
      matrix[currentLocation.row - 1][currentLocation.column - 1]
    );

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
  console.log("No treasure here!");
}

export { solveDalbey };
