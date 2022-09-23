const man = {
  firstName: 'Kostya',
  lastName: 'Ejurov',
  profession: 'Student',
  age: '25'
};
Object.entries(man).forEach(([key, value]) => console.log(`${key}: ${value}`));