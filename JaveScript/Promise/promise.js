	
// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
//         if (result < 30){
//     console.log(result);
//     return result * 2;
//         }
  
//   }).then(function(result) {
  
//     console.log(result); 
//     return result * 2;
  
//   }).then(function(result) {
//         if (result < 2){
//     console.log(result);
//     return result * 2;
//         }
  
//   });

//   ======================================


var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geekzsforgeeks"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log('Success, You are a GEEK');
      }).
      catch(function () {
          console.log('Some error has occurred');
      }).
      finally(()=>{console.log('Task Completed');});