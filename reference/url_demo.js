const url = require('url');

const myUrl = new URL(
  'http://mywebsite.com:8080/hello.html?id=100&status=active'
);

// Serialized URL
console.log(myUrl.href);

// Host
console.log(myUrl.host);

// Host name
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add params
console.log(myUrl.searchParams.append('abc', '123'));
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((paramV, paramN) => {
  console.log(`${paramN}: ${paramV}`);
});
