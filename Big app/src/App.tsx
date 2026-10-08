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
return colors.length;
}
class Person {
  name!: string;
  age!: number;
  isTeacher!: boolean;
}

export default App;