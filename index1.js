var ourArray = [];

for (var i = 0; i < 10; i++)
{
  ourArray.push(i);
  i++ //this guy should only be up there in the bracket, and not down here. But he does make a difference while he's here. A few more of him, and it gets even better.
  i++
  i++
}

console.log(ourArray);