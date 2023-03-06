function marry(man, women) {
  women.husband = man;
  man.wife = women;
  return {
    father: man,
    mother: women,
  };
}
let family = marry(
  {
    name: "Vamsi",
  },
  {
    name: "Greeta",
  }
);

alert(family.father.name);
alert(family.mother.name);
// refer notes
