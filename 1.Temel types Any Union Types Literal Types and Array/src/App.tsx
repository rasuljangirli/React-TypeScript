import "./App.css";

function App() {
  //? string number boolean  undifinde null object
  
  let lastName: string = "Galatasaray";
  let age: number = 1905;
  let isActive: boolean = true;

  //todo Any EX result axios
  let anyProperty: any = 24; //? true string number v.s

  //todo Union Types  |
  let win: string | number | boolean = "24";
  
  //todo Literal Types
  let statusResult: "padding" | "approve" | "rejected";
  statusResult = "padding";

  //todo Arrey
  let numberArrey: number[] = [1, 2, 3, 4, 5];
  let numberArr2: Array<number> = [1, 2, 3, 4, 5];
  let stringArrey: string[] = ["Galatasaray", "UltrAslan", "Football"];
  let stringArr2: Array<string> = ["Galatasaray", "UEFA", "Bussiness"];
  let mixedArr: (string | number | boolean)[] = [
    1,
    2,
    3,
    "4",
    "Galatasaray",
    true,
  ];

  console.log(lastName);
  console.log(age);
  console.log(isActive);
  console.log(win);
  console.log(anyProperty);
  console.log(statusResult);
  console.log(numberArrey);
  console.log(stringArrey);
  console.log(numberArr2);
  console.log(stringArr2);
  console.log(mixedArr);

  return (
    <>
      <h1>About Club Galatasaray</h1>
      <p>{lastName}</p>
      <p>{age}</p>
    </>
  );
}

export default App;
