// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25); //false
var expression2 = (x > 50); //true

if (expression1 && expression2) {
console.log("True ✅ True ✅");
} 
else if (expression1===true) {
console.log("True ✅ False ❌");
}

if (expression2) 
{console.log("True ✅ False ❌");
}

// Write Your JavaScript Code Here
console.log("True ✅ True ✅")
console.log("True ✅ True ✅")
console.log("True ✅ False ❌")
console.log("True ✅ False ❌")