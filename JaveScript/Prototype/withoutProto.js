// Set prototype methods without using __proto__

let store = {
    chocolate: true
};
let customer = Object.create(store, {
    candy: {
        value: false
    }
});
console.log(customer.chocolate);
console.log(customer.candy);


let pandi = {
    name: "PANDI"
};
let alex = Object.create(pandi, {
    peeps: {
        value: false
    }
});
let pradeep = Object.create(alex, {
    pra: {
        value: true
    }
});

console.log(pradeep.name);
console.log(pradeep.peeps);
console.log(pradeep.pra);