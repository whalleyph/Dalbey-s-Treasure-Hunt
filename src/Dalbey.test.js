import {generateMatrix} from "./Dalbey.js";
import { test, expect } from "@jest/globals";

// function generateMatrix(inputArray) {
//     inputArray = take an array of 25 numbers
//     objectArray = []
//     for number of inputArray {
//         objectArray.push(object{location: number, x: number%10 - 1, y: Math.floor(number/10)-1})
//     }
//     matrix = split that into an array of 5 arrays of 5 numbers
//     return matrix
// }

const nums = [
    34, 21, 32, 41, 25, 14, 42, 43, 14, 31, 54, 45, 52, 42, 23, 33, 15, 51, 31,
    35, 21, 52, 33, 13, 23
];

test("Test matrix 5 by 5", ()=>{ 
    const result = generateMatrix(nums);
    expect(result.length).toBe(5)
    for (let element of result) {
        expect(element.length).toBe(5)
    }
})