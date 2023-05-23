// Code your solution here
// * `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.
function findMatching(names, searchName){
    let matchingNames = names.filter(name => name.toLowerCase() === searchName.toLowerCase())
    return matchingNames;
}

// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.
function fuzzyMatch(names, searchLetters){
    let matchingNames = names.filter(name => {
        let nameFrag = '';
        for (let i = 0; i < searchLetters.length; i++)
            nameFrag += name[i];
        //console.log(nameFrag);
        return (nameFrag.toLowerCase() === searchLetters.toLowerCase());
    });
    return matchingNames;
}

// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

function matchName(drivers, searchName){
    let matchingDrivers = drivers.filter(driver => driver.name === searchName);
    return matchingDrivers;
}