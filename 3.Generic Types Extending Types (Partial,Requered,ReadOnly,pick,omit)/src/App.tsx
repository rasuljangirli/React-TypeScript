import "./App.css";

function App() {
  //! Generic Types
  function writeClg<T>(arr: T) {
    console.log(arr);
  }
  writeClg([1, 2, 3, 4, 5]);
  writeClg(["Hello", "How", "are", "You"]);
  writeClg([true, false]);
 
  interface GenericType<T> {
    name: string;
    age: number;
    salary: T[];
  }

  let user_1: GenericType<number> = {
    name: "Alisa",
    age: 23,
    salary: [5000, 2000, 1000],
  };
  let user_2: GenericType<string> = {
    name: "Aloso",
    age: 32,
    salary: ["1432", "6572", "1111"],
  };
  let arr: GenericType<string | number>[] = [user_1, user_2];

  function writeArr<T>(arr: GenericType<T>[]) {
    arr.forEach((element: GenericType<T>) => console.log(element));
  }
  writeArr(arr);
  
  //? Extends
 

  interface Cars {
    id: number;
    name: string;
    year: number;
  }

  interface Ferrari extends Cars {
    marka: string;
  }

  interface RangRover extends Cars {
    marka: string;
  }

  let driveCar_1: Ferrari = {
    id: 1,
    name: "Ferrari",
    year: 2030,
    marka: "NoMark",
  };

  let driveCar_2: RangRover = {
    id: 1,
    name: "Ferrari",
    year: 2030,
    marka: "RangRover 2012 Sport",
  };

  console.log(driveCar_1);
  console.log(driveCar_2);

  //? Partial Required ReadOnly Pick Omit

  interface User {
    name: string;
    age: number;
    salary: number;
  }

  //! Partical
 
  let User_One: Partial<User> = {
    name: "Alisa",
    age: 23,
  };
  console.log(User_One);

  //! Required
  
  let User_Two: Required<User> = {
    name: "Alisa",
    age: 23,
    salary: 45000,
  };
  console.log(User_Two);

  //!ReadOnly
  
  let User_Tree: Readonly<User> = {
    name: "Alisa",
    age: 23,
    salary: 45000,
  };
  //User_Tree.name = "Aloso";
  console.log(User_Tree);

  
  let User_Five: Pick<User, "name"> = {
    name: "Alisa",
  };

  console.log(User_Five);

 
  let User_Last: Omit<User, "name"> = {
    age: 23,
    salary: 45000,
  };

  console.log(User_Last);

  return (
    <div>
      <p>You are one :)</p>
    </div>
  );
}

export default App;
