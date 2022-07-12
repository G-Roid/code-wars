// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum( a,b )
{
    let start
    let end
    
    if (a < b) {
        start = a
        end = b
    } else {
        start = b
        end = a
    }

   let result = 0

    for(let i = start; i <= end; i++) {
        result += i

    }
   return result
}

console.log(getSum(1, 0))