let printNumbersTill = (number) => {
  for (let i = 0; i < number; i++) {
    console.log(i + 1);
  }
};
printNumbersTill(12);

let getGreetingTo = (name) => {
  return `Hello ` + name + `!`;
};
console.log(getGreetingTo(`Venca`));

let printValues = (pole) => {
  pole.forEach((element) => {
    console.log(element);
  });
};

let Seznam = [`Venca`, `Marek`, `Dušan`, `Mirek`];
printValues(Seznam);
