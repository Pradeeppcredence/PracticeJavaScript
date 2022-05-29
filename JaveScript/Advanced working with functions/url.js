let path = new URL('https://github.com/google/googletest');
console.log(path.protocol);
console.log(path.host);
console.log(path.pathname);
console.log(path.origi);
console.log(path.toJSON());


// ======================================================================================


let url = new URL('https://google.com/search');

url.searchParams.set('q', 'test me!'); // added parameter with a space and !

console.log(url); // https://google.com/search?q=test+me%21

url.searchParams.set('tbs', 'qdr:y'); // added parameter with a colon :

// parameters are automatically encoded
console.log(url); // https://google.com/search?q=test+me%21&tbs=qdr%3Ay

// iterate over search parameters (decoded)
for(let [name, value] of url.searchParams) {
  console.log(`${name}=${value}`); // q=test me!, then tbs=qdr:y
}