let pradeep = new Map();

pradeep.set(1, 'alex');
pradeep.set('1', 'pandian');
pradeep.set(true, 'peeps');
console.log(pradeep.get(1));
console.log(pradeep.get(true));
console.log(pradeep.get('1'));

// chain Methods

let pradeep1 = new Map();

pradeep1.set(1, 'alex')
.set('1', 'pandian')
.set(true, 'peeps');
console.log(pradeep1.get(1));
console.log(pradeep1.get(true));
console.log(pradeep1.get('1'));