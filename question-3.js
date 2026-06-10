// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    result = "";
    let sum = 0
    for (let i of userPassword) {
    if (i !== undefined) {
        sum += 1;
    };
    };
    if (sum>10) {
        result = "Strong";
    } else if (sum>5) {
        result = "Medium";
    } else {
        result = "Weak";
    }
    return result
}

userPassword = "ssswnalWadqQ"
console.log(checkPasswordStrength(userPassword))

userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword));

userPassword = "abcde"
console.log(checkPasswordStrength(userPassword))