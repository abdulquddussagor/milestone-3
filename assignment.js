//feetToMile solution
function feetToMile(feet){
    if (feet < 0){
        return feet + " wait Distance can not be negative ";
    } else {
        let mile = feet / 5280;
        return mile;
    }
}
const resultMile1 = feetToMile(21000).toFixed(2);
const resultMile2 = feetToMile(-5);
console.log(resultMile1);
console.log(resultMile2);

//woodCalculator solution
function woodCalculator(numChair, numTable, numBed){
    const woodChair = numChair * 1;
    const woodTable = numTable * 3;
    const woodBed = numBed * 5;
    const total = woodChair + woodTable + woodBed;
    return total;
};
const result = woodCalculator(10, 50, 70);
console.log(result);

//brickCalculator solution
function brickCalculator(floorNumber){
    if (floorNumber <=10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;
        return brickNumber;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;
        return brickNumber;
    }
    else if (floorNumber > 20){
        let brickNumber =((floorNumber - 20) * 10000) + 270000;
        return brickNumber;
    }
    else {
        return "wrong input!";
    }
}
let result1 = brickCalculator(10);
console.log(result1);
let result2 = brickCalculator(15);
console.log(result2);
let result3 = brickCalculator(35);
console.log(result3);
let result4 = brickCalculator(-4);
console.log(result4);

//tinyFriend solution
function tinyFriend(friend){
    let singleFriend =friend[0];
    for(let i = 0; i < friends.length; i++){
        let element = friends[i];
        if (element < singleFriend){
            singleFriend = element ;
        }
    }
    return singleFriend;
}
let friends =["Johir", "Shaki", "Abid", "Rashel", "Soriful" , "Manik"];
let results = tinyFriend(friends);
console.log(results);
