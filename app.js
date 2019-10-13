// URLify a string.
function urlifyString(string) {
    string = string.trim();
    let output = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            output += '%20';
        } else {
            output += string[i];
        }
    }
    return output;
}
console.log(urlifyString('  tauhida parveen'));


// Filtering an array.
function myFilter(arr, filter = 5) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= filter) {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8]));



// Max sum in the array.
function maxSum(arr) {
    let maxSum = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}
const answer = maxSum([4, 6, -3, 5, -2, 1]);


// Merge arrays.
function mergeArrays(arr1, arr2) {
    let output = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
    while (current < (arr1.length + arr2.length)) {
        let depleted1 = (index1 >= arr1.length);
        let depleted2 = (index2 >= arr2.length);
        if (!depleted1 && (depleted2 || (arr1[index1] < arr2[index2]))) {
            output.push(arr1[index1]);
            index1++;
        } else {
            output.push(arr2[index2]);
            index2++;
        }
        current++;
    }
    return output;
}


// Remove characters.
function removeCharacters(string, chars) {
    let output = '';
    for (let i = 0; i < string.length; i++) {
        let contained = true;
        for (let j = 0; j < chars.length; j++) {
            if (string[i] === chars[j]) {
                contained = false;
            }
        }
        if (contained) {
            output += string[i];
        }
    }
    return output;
}


// Products.
function products(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        output.push(product);
    }
    return output;
}


// 2D array.
function twoDarray(arr) {
    let output = [];
    let rowCheck = [];
    let columnCheck = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                rowCheck[i] = true;
                columnCheck[j] = true;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (!output[i]) {
            output[i] = [];
        }
        for (let j = 0; j < arr[0].length; j++) {
            if (rowCheck[i] || columnCheck[j]) {
                output[i][j] = 0;
            } else {
                output[i][j] = 1;
            }
        }
    }
    return output;
}

const arr1 = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
];

const arr2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0]
];


// String rotation.
function stringRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let doublestr1 = str1 + str1;
    if (doublestr1.indexOf(str2) === -1) {
        return false;
    } else {
        return true;
    }
}
const answer5 = stringRotation('amazon', 'azonam');
console.log(answer5);