const original = { name: "John", address: { city: "New York", zip: 10001 } };
const clone = JSON.parse(JSON.stringify(original));

clone.address.city = "Mumbai";
console.table([clone, original]);