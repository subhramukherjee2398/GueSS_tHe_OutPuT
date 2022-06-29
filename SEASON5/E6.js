let fruits = "orange";
console.log("ff", fruits);
{
  console.log("fb", fruits); //TDZ
  let fruits;
  console.log("fb", fruits);
  fruits = "apple";
  console.log("fb", fruits);
}
console.log("ff", fruits);
