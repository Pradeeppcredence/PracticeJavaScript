let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

  console.log(pockets.pen);
  console.log(bed.pen);
  console.log(table.pen);
// ============================================

let peeps = {
   two: "One",
    alex(){
        return this.alex = "Pradeep";
    }
}
let pandi = {
    __proto__ : peeps,
    alex(){
        return this.alex = "PRADEEP"
    }
}
console.log(pandi.alex());
console.log(pandi.two);
console.log(peeps.alex());