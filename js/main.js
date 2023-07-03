//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max","HAS","PuRple","dog"]

function findWords(str, names){
    for (let i = 0; i < names.length; i++){
        let search = names[i]
        if (str.indexOf(search) != 1){
            return "Matched " + search
        }
    }
    return "No Matches"
}

console.log(findWords(dogString, dogNames))

//Call method here with parameters


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arrNames = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}

console.log(replaceEvens(arrNames))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



//============CodeWars Problem #1 ============//
/* Codewars Link: https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
*/

function square_digits(num){
    strNum = num.toString()
    newNum = ''
    for (var i = 0; i < strNum.length; i++){
        newNum += String(parseInt(strNum[i]) ** 2)
    }
    return parseInt(newNum)
}

console.log(square_digits(9119))
// Returns 811181



//============CodeWars Problem #2 ============//
/* Codewars Link: https://www.codewars.com/kata/514b92a657cdc65150000006/train/python/647f6b25e713cf003ec352b6

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
    sum = 0
    used_nums = []

    if (number <= 0) {
        return 0
    }

    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            if (used_nums.indexOf(i) == -1) {
                used_nums.push(i)
                sum += i
            }
        }
    }
    return sum
}

console.log(solution(10))
//Returns 23.