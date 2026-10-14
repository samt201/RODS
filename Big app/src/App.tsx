function App() {
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


return (
   <div>
   <div>
    <label>Name: </label>
    <input></input>
  </div>
  <div>
     <button>Submit</button>
    </div>
    </div>
  )
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
