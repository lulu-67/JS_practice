//1. sum all salaries

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

//2. Multiply numeric properties by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);

//3.Write a function checkEmailId(str) that returns true if str contains '@' and ‘.’, otherwise false. Make sure'@' must come before '.' and there must be some characters between '@' and '.' The function must be case-insensitive:

function checkEmailId(str) {
    let at = str.indexOf('@');
    let dot = str.indexOf('.');
    console.log(at, dot);
    if (at < 1 || dot < at + 2 || dot === str.length - 1) {
        return false;
    }
    return true;
}

console.log(checkEmailId('oaojoi@.com'));
console.log(checkEmailId('oaojoi@com'));

//4. Write a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    return str;
}

console.log(truncate('I am a string', 5));
console.log(truncate('I am a string', 10));

//5. array operations
let array = ['James', 'Brennie'];
console.log(array);
array.push('Robert');
console.log(array);
function replaceInTheMiddle(array, obj) {
    let middle = Math.floor(array.length / 2);
    array[middle] = obj;
}
replaceInTheMiddle(array, 'Calvin');
console.log(array);
array.shift();
console.log(array);
array.unshift('Rose', 'Regal');
console.log(array);