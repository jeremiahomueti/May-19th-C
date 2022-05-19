var evenArray = [];

for (var coolEven = 0; coolEven < 10; coolEven += 2) //to make this print out odd numbers instead of even numbers, simply change the first i = 0 in the for loop to i = 1, so that the loop starts incrementing from 1, so when you run (i++), it increments as 1, 3, 5, ... Good!!
{
    evenArray.push(coolEven);
}

console.log("Your daily special Cool-Even, served cooooool: " +evenArray);