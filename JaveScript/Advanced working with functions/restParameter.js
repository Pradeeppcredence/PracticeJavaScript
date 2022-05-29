function all( ...arrs ){
    let sum = 0;
    for (let arr of arrs)
    sum +=arr;

    return sum;
}
console.log(all(3,4,5,6,7));

// ==================================================

function displayName(fName, lName, ...lists){
    console.log(fName + '' + lName);
    console.log("2nd name of array: " + lists[1]);
    console.log("1st name of array: " + lists[0]);
}
displayName("Pradeep", "Alex", "Pandian", "Peeps")