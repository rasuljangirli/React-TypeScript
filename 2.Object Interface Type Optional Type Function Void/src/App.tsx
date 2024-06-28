import "./App.css";

function App() {
  //todo Object , type, interface, Optional types , Function

  //! type

  type User = {
    lastName: string;
    age: number;
  };

  let newObject: User = {
    lastName: "Rasul",
    age: 23,
  };
  console.log(newObject);

  //! Optional Types
  type User2 = {
    lastName: "Rasul";
    age?: number | string;
  };

  let newObject2: User2 = {
    lastName: "Rasul",
  };
  console.log(newObject2);

  //!Interface and Type

  //! Function

  function plusNumbers(a: number, b: number): void {
    console.log(a + b);
  }
  plusNumbers(4, 6);

  function plusNumbers2(a: number, b: number): number {
    return a + b;
  }
  console.log(plusNumbers2(3, 2));

  function plusNumbers3(a: number, b: number): number | string {
    return "String or Number";
  }
  console.log(plusNumbers3(1, 7));

  type Person = {
    lastName: string;
    age: number;
  };

  let person1: Person = {
    lastName: "Mehdi",
    age: 23,
  };
  let person2: Person = {
    lastName: "Alisa",
    age: 24,
  };
  let person3: Person = {
    lastName: "Rasul",
    age: 42,
  };

  let personArr: Person[] = [person1, person2, person3];

  function writePerson(persons: Person[]): void {
    persons.forEach((person) => {
      console.log(person);
    });
  }
  writePerson(personArr);

  return (
    <div>
      <p>You are One :)</p>
    </div>
  );
}

export default App;
