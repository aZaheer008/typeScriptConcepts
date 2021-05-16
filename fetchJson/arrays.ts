const strarray : string[] = ['sfsf','sgsgs','jhhhh']
const str2array : string[][] = [['hdhhd','hdsss','hhhhh'],['uuuu']]
const dates :Date[] = [new Date(),new Date()];

// Help with inference when extracting values
const car2 = strarray[0];
const mycar = strarray.pop();

// prevent incompatible values
// strarray.push(100)

// help with map
strarray.map((car : string) : string => {
    return car.toUpperCase();
});

//Flexible types
const importantDates : (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
