import { solveDalbey } from "./Dalbey.js";
import { getNextLocationFromValue, generateMatrix } from "./utilities.js";
import { test, expect } from "@jest/globals";

const nums = [
  34, 21, 32, 41, 25, 14, 42, 43, 14, 31, 54, 45, 52, 42, 23, 33, 15, 51, 31,
  35, 21, 52, 33, 13, 23,
];

test("Test matrix 5 by 5", () => {
  const result = generateMatrix(nums);
  expect(result.length).toBe(5);
  for (let element of result) {
    expect(element.length).toBe(5);
  }
});

test("Test returns object with expected values", () => {
  const result1 = getNextLocationFromValue(55);
  expect(result1).toEqual({ row: 5, column: 5 });
  const result2 = getNextLocationFromValue(24);
  expect(result2).toEqual({ row: 2, column: 4 });
  const result3 = getNextLocationFromValue(41);
  expect(result3).toEqual({ row: 4, column: 1 });
});

test("Test solveDalbey solves Dalbey", () => {
  const result = solveDalbey(nums);
  expect(result).toEqual([
    11, 34, 42, 15, 25, 31, 54, 13, 32, 45, 35, 23, 43, 51, 21, 14, 41, 33, 52,
  ]);
});
