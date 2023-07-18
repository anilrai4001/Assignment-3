const food = require('./food.json')
console.log('');

//1
console.log(food);
console.log('');

//2-7
let categoryArray = ['Vegetable','Fruit','Protein','Nuts','Grain','Dairy'];
for(let i=0;i<categoryArray.length;i++){
    let categoryObjects = food.filter((element)=>{
        if(element.category == categoryArray[i])
            return true;
        return false;
    });
    console.log(categoryObjects);
    console.log('');
}

//8
let calorieAbove100 = food.filter((element)=>{
    if(element.calorie>100)
        return true;
    return false;
})
console.log(calorieAbove100);
console.log('');

//9
let calorieBelow100 = food.filter((element)=>{
    if(element.calorie<100)
        return true;
    return false;
})
console.log(calorieBelow100);
console.log('');

//10
let decreasingArray = food.sort((a,b)=>{return b.protiens-a.protiens});
console.log(decreasingArray)
console.log('');
//11
let increasingArray = food.sort((a,b)=>{return a.cab-b.cab});
console.log(increasingArray)
console.log('');