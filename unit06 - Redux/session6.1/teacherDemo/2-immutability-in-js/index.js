// examples for 'Programming with immutability in JS'
//  see: <unit06 - Redux/session6.1/teacherDemo/2-immutability-in-js.md>

const separator = () => console.log("=".repeat(60));

// ======================================================================
//
// 1. numbers and booleans are immutable
//

// // zet originele waarde
// let getal_origineel = 13;

// // maak 'kopie'
// let getal_kopie = getal_origineel;

// // wijzig 'kopie'
// getal_kopie = 42;

// console.log(getal_origineel);
// console.log(getal_kopie);

// console.log(getal_origineel === getal_kopie); // beide bevatten _verschillende_ waarden

// separator();

// ======================================================================
//
// 2. immutability in JS is about changing _PARTS_ of a datastructure
//

// // zet originele waarde
// let persoon_origineel = {
//   naam: { voornaam: "Karel", achternaam: "Peters" },
//   leeftijd: 34,
// };

// // maak 'kopie'
// let persoon_kopie = persoon_origineel;

// // wijzig (onderdeel van) 'kopie'
// persoon_kopie.naam.voornaam = "Anna";

// console.log(persoon_origineel); // OOPS, origineel is aangepast

// console.log(persoon_kopie);
// console.log(persoon_origineel === persoon_kopie); // beide wijzen nog naar _hetzelfde_ object

// // wijzig gehele datastructuur
// persoon_origineel = {
//   naam: { voornaam: "Merel", achternaam: "Bravo" },
//   leeftijd: 26,
// };

// console.log(persoon_origineel === persoon_kopie); // beide wijzen naar _verschillende_ objecten

// separator();

// ======================================================================
//
// 3. strings are funny
//

// // zet originele waarde
// let tekst_origineel = "Hello world";

// // maak 'kopie'
// let tekst_kopie = tekst_origineel;

// // wijzig 'kopie'
// tekst_kopie = "!!";
// // tekst_kopie = tekst_kopie.concat("!!");
// // tekst_kopie = tekst_kopie.replace(/o/gi, "0");

// console.log(tekst_origineel);
// console.log(tekst_kopie);

// console.log(tekst_origineel === tekst_kopie); // beide bevatten _verschillende_ waarden

// separator();

// ======================================================================
//
// 4. only mutable things in JS are arrays and objects
//

// function voegtoe_cijfer(cijfers, index, waarde) {
//   cijfers[index] = waarde;
// }

// // zet originele waarde
// let cijfers_origineel = [1, 2, 3, 4, 5];

// // maak 'kopie'
// let cijfers_kopie = cijfers_origineel;

// // wijzig (onderdeel van) 'kopie'
// voegtoe_cijfer(cijfers_kopie, 2, 42);

// console.log(cijfers_origineel); // OOPS, origineel is aangepast
// console.log(cijfers_kopie);

// console.log(cijfers_origineel === cijfers_kopie); // beide wijzen nog naar _hetzelfde_ object

// separator();

// ======================================================================
//
// 6. explain what a shallow copy is
//

// // zet originele waarde
// let persoon_origineel = {
//   naam: { voornaam: "Karel", achternaam: "Peters" },
//   leeftijd: 34,
// };

// // maak shallow 'kopie' (dit is alleen een kopie op het 'eerste niveau')
// persoon_kopie = Object.assign({}, persoon_origineel);
// // persoon_kopie = { ...persoon_origineel };

// // wijzig (onderdeel van) 'kopie'
// persoon_kopie.naam.voornaam = "Anna";
// persoon_kopie.leeftijd = 42;

// console.log(persoon_origineel); // OOPS, toch origineel is aangepast
// console.log(persoon_kopie);

// console.log(persoon_origineel === persoon_kopie); // beide wijzen naar _verschillende_ objecten
// console.log(persoon_origineel.naam === persoon_kopie.naam); // beide 'namen' wijzen naar _hetzelfde_ object

// separator();

// ======================================================================
//
// 11. deep copy using spread operator
//

// // zet originele waarde
// const state_origineel = {
//   name: "Henk",
//   courses: [
//     { courseName: "CWD", finalGrade: 0 },
//     { courseName: "SWD", finalGrade: 0 },
//   ],
// };

// // maak deep 'kopie' (van de onderdelen die we gaan aanpassen)
// const newSWD = { ...state_origineel.courses[1] };
// let newCourses = [...state_origineel.courses];
// newCourses[1] = newSWD;
// const state_kopie = { ...state_origineel, courses: newCourses };

// // wijzig (onderdeel van) 'kopie'
// state_kopie.courses[1].finalGrade = 9.5;

// console.log(state_origineel); // origineel is _niet_ aangepast
// console.log(state_kopie);

// console.log(state_origineel === state_kopie); // beide wijzen naar _verschillende_ objecten
// console.log(state_origineel.name === state_kopie.name); // beide 'name' wijzen naar _hetzelfde_ object (want niet aangepast)
// console.log(state_origineel.courses === state_kopie.courses); // beide 'courses' wijzen naar _verschillende_ object
// console.log(state_origineel.courses[0] === state_kopie.courses[0]); // beide 'CWD courses' wijzen naar _hetzelfde_ object (want niet aangepast)
// console.log(state_origineel.courses[1] === state_kopie.courses[1]); // beide 'SWD courses' wijzen naar _verschillende_ objecten

// separator();

// ======================================================================
//
// 12. using `immer.js` for immutable datastructures
//

immer = require("immer");

// zet originele waarde
const state_origineel = {
  name: "Henk",
  courses: [
    { courseName: "CWD", finalGrade: 0 },
    { courseName: "SWD", finalGrade: 0 },
  ],
};

// maak (deep) kopie tijdens het 'wijzigen' van onderdelen
const state_kopie = immer.produce(state_origineel, (draft) => {
  draft.courses[1].finalGrade = 9.5;
});

console.log(state_origineel); // origineel is _niet_ aangepast
console.log(state_kopie);

console.log(state_origineel === state_kopie); // beide wijzen naar _verschillende_ objecten
console.log(state_origineel.name === state_kopie.name); // beide 'name' wijzen naar _hetzelfde_ object (want niet aangepast)
console.log(state_origineel.courses === state_kopie.courses); // beide 'courses' wijzen naar _verschillende_ object
console.log(state_origineel.courses[0] === state_kopie.courses[0]); // beide 'CWD courses' wijzen naar _hetzelfde_ object (want niet aangepast)
console.log(state_origineel.courses[1] === state_kopie.courses[2]); // beide 'SWD courses' wijzen naar _verschillende_ objecten

separator();
