let arr = [1,2,3,4,5,6,7,8,9];

function filterRange(arr, a, b){
    return arr.filter(item => (a<= item && b>= item));
}
let filter = filterRange(arr, 3, 6);

console.log(filter);
console.log(arr);

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  filterRangeInPlace(arr, 1, 4);
  
  console.log( arr );

  function copy(arr1){
      return arr1.splice().sort();
  }
  let arr1 = ['Pradeep', 'Alex', 'Pandian'];
  let out = copy(arr1);
  console.log(out);
  console.log(arr1);

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));


console.log( usersMapped[1].id );
console.log( usersMapped[2].fullName );
