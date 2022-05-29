let pradeep = {
    run : true
};

function alex(where){
    this.where = where
}

alex.prototype = pradeep;

let pandi = new alex("He is ran");

console.log(pandi.run);  // true

function peeps(what){
    this.what = what
}

peeps.prototype = pandi;

let Thanraj = new peeps("are you doing ?");

console.log(Thanraj.run); //true from Pradeep