const superheroes = require("superheroes");
const supervillains = require("supervillains");

let hero = superheroes.random();
let villain = supervillains.random();

let random = Math.random();

if (random >= 0.5) {
  console.log(
    `${hero} successfully defeated ${villain}! ${hero} saved the world!`
  );
} else {
  console.log(`Oh no! ${villain} defeated ${hero}`);
}
