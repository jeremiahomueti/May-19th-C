var ourArray = [1, 2, 3, 4, 5];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++)
{
    ourTotal += ourArray[i];
}

console.log("The sum of the numbers in our Array is " + ourTotal);