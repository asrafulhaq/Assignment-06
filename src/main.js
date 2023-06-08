const search = prompt("Search now");

// filter data
const result = devs.filter(
  (data) =>
    data.skill === search ||
    data.location === search ||
    data.age >= search ||
    data.income >= search
);

// final Data
const finalResult = [];

// get data
result.forEach((item, index) => {
  finalResult.push(item);
});

// show cosole
console.table(finalResult);
