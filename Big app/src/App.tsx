import { useState } from "react";
import Papa from "papaparse";
import csvText from "./data.csv?raw";

type CsvPerson = {
  name?: string;
  age?: string;
  isTeacher?: string;
};

type PersonRecord = {
  name: string;
  age: number;
  isTeacher: boolean;
};

function App() {
  // Read the CSV file
  const csvData = Papa.parse<CsvPerson>(csvText, {
    header: true,
    skipEmptyLines: true,
  }).data;

  // Convert CSV rows into people
  const people: Person[] = csvData
    .map((row) => ({
      name: row.name?.trim() ?? "",
      age: Number(row.age) || 0,
      isTeacher:
        row.isTeacher?.trim().toLowerCase() === "true" ||
        row.isTeacher?.trim() === "1",
    }))
    .filter((person) => person.name !== "");

  // Selected person's name
  const [selectedName, setSelectedName] = useState(
    people[0]?.name ?? ""
  );

  // Find Rob
  const findRob = people.find((p) => p.name === "Rob");

  // Find all teachers
  const teacher = people.filter((p) => p.isTeacher);

  // Find names containing the letter "o"
  const oNames = people.filter((p) =>
    p.name.toLowerCase().includes("o")
  );

  // Find the selected person
  const selectedPerson = people.find(
    (p) => p.name === selectedName
  );
const [nameInput, setNameInput] =
useState("");


  // Handle dropdown changes
  function handleNameChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    setSelectedName(event.target.value);
  } 
  function handleSubmit(): void {
    const name = nameInput.trim();
    if (name === "") {
      return;
    }
    alert(`You entered: ${name}`);
    setNameInput("");
  }
  

  return (
    <div>
      <div>
        <label htmlFor="name-input">Name: </label>
        <input
        id="name-input"
        type="text"
        value={nameInput}
         onChange={(event) => setNameInput(event.target.value)}
        />
      </div>

      <div>
        <button type="button"
        onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Is Teacher</th>
            </tr>
          </thead>

          <tbody>
            {people.map((p, i) => (
              <tr key={`${p.name}-${i}`}>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.isTeacher ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <label>Search by name results: </label>
        {findRob?.name ?? "Rob not found"}
      </div>

      <div>
        <label>Number of teachers: </label>
        {teacher.length}
      </div>

      <div>
        <label>Number of names with letter "o": </label>
        {oNames.length}
      </div>

      <div>
        <label htmlFor="person-select">People: </label>

        <select
          id="person-select"
          value={selectedName}
          onChange={handleNameChange}
        >
          {people.map((p, i) => (
            <option key={`${p.name}-${i}`} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Selected Age: </label>
        {selectedPerson?.age ?? "No person selected"}
      </div>

      <div>
        <label>Selected Is Teacher: </label>
        {selectedPerson
          ? selectedPerson.isTeacher
            ? "Yes"
            : "No"
          : "No person selected"}
      </div>
    </div>
  );
}


function meno() {
let isTeacher : boolean = false;
 const name : string = "Ali";
 let age : number = 14;

let colors:string[] = ["pink" , "orange" , "purple"];

let teacher = new Person();

teacher.name = name;
teacher.age = age;
teacher.isTeacher = isTeacher;

let people: Person[] = [
  { name: "Rob", age: 39, isTeacher: true },
  { name: "Jane", age: 25, isTeacher: false },
  { name: "Sam", age: 42, isTeacher: false },
];

let message: string = "Start";

let score: number = 70;
if (score >= 60) {
  message = "Pass";
} else {
  message = "Try Again";
}

let isActive: boolean = true;

while (isActive) {
  message = "Loop";
  isActive = false;
}

let loops: number = 0;
for (; loops < 3;) {
  loops = loops + 1;
}

let sum: number = Add(2,5);

//return printScore("Dad");

}


function submitButtonOnClick() {
  let name = document.querySelector<HTMLInputElement>("#name")!;
  let age = document.querySelector<HTMLInputElement>("#age")!;
  if (name && age) {
    
   } {
     alert("Name: " + name.value + " - Age: " + age.value);
   }
}

class Person {
  name!: string;
  age!: number;
  isTeacher!: boolean;
}


function Add(number1 :number, number2: number) : number {
  return number1 + number2;

}

function printScore(parameter: string): string {
  try{
    let score: number = Number(parameter);

    if (isNaN(score)) {
      throw new Error("Error: NaN (Not a Number)"); 
    }
  
    return String(score);
  } catch (error) {
    return String(error);
  }
}




export default App;
