let passport = {
  name: "Petr",
  surname: "Petrov",
};

let myPassport = Object.assign({}, passport);
myPassport.name = "Ivan";

console.log(passport.name);
console.log(myPassport.name);
