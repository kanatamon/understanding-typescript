namespace Issue {
  interface NamedPerson {
    firstName: string;
  }
  
  function greet(person: NamedPerson) {
    console.log('Hello, ' + person.firstName);
  }
  
  const person = {
    firstName: 'Nunan',
    age: 25,
  };

  // This won't bed sticky checked.
  greet(person); 
  
  // This will be stickt checked.
  greet({
    firstName: 'Nunan',
    age: 25,
  });
}