//Library Imports
import csvText from "./data.csv?raw"; //Raw CSV data file
import Papa from "papaparse"; //External library used for reading CSVs
import { useState } from "react"; //State allows us to update UI when data changes
import "./App.css"; //Use our style file

//Web App's Default Page
function App() {
  //Store the contents of the CSV
  let csvArray : any[] = Papa.parse(
    csvText,
    {header: true, skipEmptyLines: true}
  ).data;

  //Fill the contents of the CSV into a table variable
  let people: Person[] = [];

  //Loop once for each data row in the CSV file
  for (let loop: number = 0; loop < csvArray.length; loop++) {
    //Store the contents of the current row
    let row = csvArray[loop];

    //Convert the row's contents into a Person object
    let person = new Person();
    person.name = row.name;
    person.age = row.age;
    person.isTeacher = Boolean(Number(row.isTeacher));
   
    //Add the Person object into the People array
    people.push(person);
  }

  //Search by name
  let findRob = people.find(p => p.name === "Rob")!;

  // Find Teachers (Is Teacher = Yes)
  let teachers = people.filter(p => Boolean(Number(p.isTeacher)));

  //Filter by Names with the letter O
  let oNames = people.filter(p => p.name?.toLowerCase().includes("o"));

  //Create a new State Variable that stores the selected person's name
  //setSelectedName is the built-in function that updates the variable
  //"Rob" is the default value
  let [selectedName, setSelectedName] = useState("Rob");

  //Event Handler when the People drop down gets a different selected name
  function handleNameChange(event: React.ChangeEvent<HTMLSelectElement>) {
    //Update the selectedName State Variable
    setSelectedName(event.target.value);
  }

  //Display the Name and Age input in a pop up
  function Display() {
    let name = document.querySelector<HTMLInputElement>("#name");
    let age = document.querySelector<HTMLInputElement>("#age");

    if (name && age) {
        alert("Name: " + name.value + " - Age: " + age.value);
    }
  }

  //UI
  return (
    <form onSubmit={Display}>
      {
      // Return a form as the main component of the web app
      // Run the Display function when two things happen:
      // 1. The Submit button is pushed
      // 2. All the form's validation rules are met
}
      <div>
        <label>Name: </label>
        <input id="name"></input>
      </div>
      <div>
        <label>Age:</label>
        <input id="age" type="number" min="0" max="100" 
        required></input>
      </div>
      <br />
      <div>
        <button type="submit">Submit</button>
      </div>
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Is Teacher</th>
            </tr>
          </thead>

          <tbody>
           
            {//Display the contents of the People array in a new table
            people.map((person, loop) => (
              <tr key={loop}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.isTeacher ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div>
            <label>Search by name results: </label>{findRob.age}
      </div>
      <div>
            <label>Number of teachers: </label>{teachers.length}
      </div>
      <div>
            <label>Number of names with the letter O: </label>{oNames.length}
      </div>
      <br />
       <div>
          <label>People: </label>
          {
          // Create a new drop down connected to our State Variable and event handler
          }
          <select id="name"
          value={selectedName}
          onChange={handleNameChange}
          >
            {//Map the Names in the People array to the select dropdown
            people.map(p => (
              <option key={p.name}
                  value={p.name}>
                  {p.name}
              </option>
            ))}
          </select>
      </div>
       <div>
            <label>Selected Age: </label>{people.find(p => p.name === selectedName)?.age}
      </div>
      <div>
            <label>Selected Is Teacher: </label>{people.find(p => p.name === selectedName)?.isTeacher ? "Yes" : "No"}
      </div>
    </form>
  )
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



// import { useEffect, useMemo, useState } from "react";
// import "./App.css";

// type Competition =
//   | "La Liga"
//   | "Champions League"
//   | "Copa del Rey"
//   | "Spanish Super Cup";

// type Stats = {
//   appearances: number;
//   starts: number;
//   minutes: number;
//   goals: number;
//   assists: number;
//   yellowCards: number;
//   redCards: number;
//   cleanSheets: number;
//   saves: number;
//   goalsConceded: number;
//   savePercentage?: number;
// };

// type Player = {
//   id: string;
//   name: string;
//   number: number;
//   age: number;
//   position: string;
//   role: string;
//   nationality: string;
//   status?: string;
//   stats: Record<Competition, Stats>;
// };

// type League = {
//   name: Competition;
//   rank: number | null;
//   played: number;
//   won: number;
//   drawn: number;
//   lost: number;
//   goalsFor: number;
//   goalsAgainst: number;
//   points: number;
// };

// const competitions: Competition[] = [
//   "La Liga",
//   "Champions League",
//   "Copa del Rey",
//   "Spanish Super Cup",
// ];

// const emptyStats = (): Stats => ({
//   appearances: 0,
//   starts: 0,
//   minutes: 0,
//   goals: 0,
//   assists: 0,
//   yellowCards: 0,
//   redCards: 0,
//   cleanSheets: 0,
//   saves: 0,
//   goalsConceded: 0,
// });

// function makeStats(data: Partial<Stats> = {}): Stats {
//   return { ...emptyStats(), ...data };
// }

// function statsSet(
//   liga: Partial<Stats> = {},
//   ucl: Partial<Stats> = {},
// ): Record<Competition, Stats> {
//   return {
//     "La Liga": makeStats(liga),
//     "Champions League": makeStats(ucl),
//     "Copa del Rey": makeStats(),
//     "Spanish Super Cup": makeStats(),
//   };
// }

 
// const initialPlayers: Player[] = [
//   // GOALKEEPERS
//   {
//     id: "joan",
//     name: "Joan García",
//     number: 1,
//     age: 25,
//     position: "GK",
//     role: "Starting Goalkeeper",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 9,
//         starts: 9,
//         minutes: 810,
//         cleanSheets: 4,
//         saves: 12,
//         savePercentage: 70.6,
//         goalsConceded: 5,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 180,
//         cleanSheets: 1,
//         saves: 4,
//         goalsConceded: 2,
//       },
//     ),
//   },
//   {
//     id: "szczesny",
//     name: "Wojciech Szczęsny",
//     number: 13,
//     age: 36,
//     position: "GK",
//     role: "Second Goalkeeper",
//     nationality: "Poland",
//     stats: statsSet(),
//   },
//   {
//     id: "livakovic",
//     name: "Dominik Livaković",
//     number: 25,
//     age: 31,
//     position: "GK",
//     role: "Reserve Goalkeeper",
//     nationality: "Croatia",
//     stats: statsSet(),
//   },

//   // DEFENDERS
//   {
//     id: "cubarsi",
//     name: "Pau Cubarsí",
//     number: 5,
//     age: 19,
//     position: "CB",
//     role: "Centre-back",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 9,
//         starts: 9,
//         minutes: 810,
//         assists: 1,
//         yellowCards: 1,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 180,
//         yellowCards: 1,
//       },
//     ),
//   },
//   {
//     id: "kounde",
//     name: "Jules Koundé",
//     number: 23,
//     age: 27,
//     position: "RB / CB",
//     role: "Defender",
//     nationality: "France",
//     stats: statsSet(
//       {
//         appearances: 8,
//         starts: 7,
//         minutes: 670,
//         goals: 1,
//         assists: 1,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 180,
//         assists: 1,
//       },
//     ),
//   },
//   {
//     id: "balde",
//     name: "Alejandro Balde",
//     number: 3,
//     age: 22,
//     position: "LB",
//     role: "Left-back",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 9,
//         starts: 8,
//         minutes: 720,
//         assists: 2,
//         yellowCards: 1,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 160,
//       },
//     ),
//   },
//   {
//     id: "eric",
//     name: "Eric García",
//     number: 24,
//     age: 25,
//     position: "CB",
//     role: "Centre-back",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 8,
//         starts: 8,
//         minutes: 720,
//         yellowCards: 2,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 180,
//       },
//     ),
//   },
//   {
//     id: "cancelo",
//     name: "João Cancelo",
//     number: 2,
//     age: 32,
//     position: "RB / LB",
//     role: "Full-back",
//     nationality: "Portugal",
//     stats: statsSet(
//       {
//         appearances: 6,
//         starts: 3,
//         minutes: 310,
//         assists: 1,
//         yellowCards: 1,
//       },
//       {
//         appearances: 1,
//         minutes: 30,
//       },
//     ),
//   },
//   {
//     id: "christensen",
//     name: "Andreas Christensen",
//     number: 15,
//     age: 30,
//     position: "CB / DM",
//     role: "Defender",
//     nationality: "Denmark",
//     stats: statsSet(
//       {
//         appearances: 4,
//         starts: 1,
//         minutes: 130,
//         yellowCards: 1,
//       },
//       {
//         appearances: 1,
//         minutes: 20,
//       },
//     ),
//   },
//   {
//     id: "martin",
//     name: "Gerard Martín",
//     number: 18,
//     age: 24,
//     position: "LB",
//     role: "Left-back",
//     nationality: "Spain",
//     stats: statsSet(
//       { appearances: 3, starts: 1, minutes: 95 },
//       { appearances: 1, minutes: 20 },
//     ),
//   },
//   {
//     id: "espart",
//     name: "Xavi Espart",
//     number: 12,
//     age: 19,
//     position: "RB / CM",
//     role: "Young Player",
//     nationality: "Spain",
//     stats: statsSet({
//       appearances: 2,
//       starts: 1,
//       minutes: 90,
//     }),
//   },

//   // MIDFIELDERS
//   {
//     id: "rodri",
//     name: "Rodri",
//     number: 16,
//     age: 30,
//     position: "DM",
//     role: "Defensive Midfielder",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 8,
//         starts: 8,
//         minutes: 720,
//         goals: 2,
//         assists: 1,
//         yellowCards: 1,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 180,
//       },
//     ),
//   },
//   {
//     id: "pedri",
//     name: "Pedri",
//     number: 8,
//     age: 23,
//     position: "CM",
//     role: "Central Midfielder",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 9,
//         starts: 9,
//         minutes: 810,
//         goals: 1,
//         assists: 3,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 180,
//         assists: 1,
//       },
//     ),
//   },
//   {
//     id: "gavi",
//     name: "Gavi",
//     number: 6,
//     age: 22,
//     position: "CM",
//     role: "Central Midfielder",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 5,
//         starts: 2,
//         minutes: 210,
//         assists: 1,
//         yellowCards: 2,
//       },
//       {
//         appearances: 1,
//         minutes: 35,
//         yellowCards: 1,
//       },
//     ),
//   },
//   {
//     id: "olmo",
//     name: "Dani Olmo",
//     number: 20,
//     age: 28,
//     position: "AM",
//     role: "Attacking Midfielder",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 7,
//         starts: 6,
//         minutes: 530,
//         goals: 4,
//         assists: 2,
//         yellowCards: 1,
//       },
//       {
//         appearances: 2,
//         starts: 1,
//         minutes: 110,
//         goals: 1,
//         assists: 1,
//       },
//     ),
//   },
//   {
//     id: "fermin",
//     name: "Fermín López",
//     number: 7,
//     age: 23,
//     position: "AM",
//     role: "Attacking Midfielder",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 9,
//         starts: 7,
//         minutes: 610,
//         goals: 5,
//         assists: 3,
//         yellowCards: 2,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 150,
//         goals: 3,
//       },
//     ),
//   },
//   {
//     id: "bernal",
//     name: "Marc Bernal",
//     number: 22,
//     age: 19,
//     position: "DM",
//     role: "Defensive Midfielder",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 3,
//         starts: 1,
//         minutes: 110,
//         yellowCards: 1,
//       },
//       {
//         appearances: 1,
//         minutes: 15,
//       },
//     ),
//   },
//   {
//     id: "dejong",
//     name: "Frenkie de Jong",
//     number: 21,
//     age: 29,
//     position: "CM",
//     role: "Central Midfielder",
//     nationality: "Netherlands",
//     status: "Injured",
//     stats: statsSet(),
//   },

//   // FORWARDS
//   {
//     id: "yamal",
//     name: "Lamine Yamal",
//     number: 10,
//     age: 19,
//     position: "RW",
//     role: "Right Winger",
//     nationality: "Spain",
//     stats: statsSet(
//       {
//         appearances: 9,
//         starts: 8,
//         minutes: 740,
//         goals: 8,
//         assists: 6,
//         yellowCards: 1,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 160,
//         goals: 2,
//       },
//     ),
//   },
//   {
//     id: "raphinha",
//     name: "Raphinha",
//     number: 11,
//     age: 29,
//     position: "LW / RW",
//     role: "Winger",
//     nationality: "Brazil",
//     stats: statsSet(
//       {
//         appearances: 9,
//         starts: 9,
//         minutes: 790,
//         goals: 14,
//         assists: 4,
//       },
//       {
//         appearances: 2,
//         starts: 2,
//         minutes: 170,
//         goals: 5,
//         assists: 1,
//       },
//     ),
//   },
//   {
//     id: "jesus",
//     name: "Gabriel Jesus",
//     number: 9,
//     age: 29,
//     position: "ST",
//     role: "Striker",
//     nationality: "Brazil",
//     stats: statsSet(
//       {
//         appearances: 6,
//         starts: 4,
//         minutes: 380,
//         goals: 3,
//         assists: 1,
//       },
//       {
//         appearances: 2,
//         starts: 1,
//         minutes: 100,
//         goals: 1,
//       },
//     ),
//   },
//   {
//     id: "gordon",
//     name: "Anthony Gordon",
//     number: 17,
//     age: 25,
//     position: "LW",
//     role: "Left Winger",
//     nationality: "England",
//     stats: statsSet(
//       {
//         appearances: 7,
//         starts: 5,
//         minutes: 460,
//         goals: 2,
//         assists: 3,
//         yellowCards: 1,
//       },
//       {
//         appearances: 2,
//         starts: 1,
//         minutes: 110,
//         goals: 1,
//       },
//     ),
//   },
//   {
//     id: "adeyemi",
//     name: "Karim Adeyemi",
//     number: 14,
//     age: 24,
//     position: "WG / SS",
//     role: "Winger / Second Striker",
//     nationality: "Germany",
//     stats: statsSet(
//       {
//         appearances: 6,
//         starts: 3,
//         minutes: 320,
//         goals: 3,
//         assists: 2,
//       },
//       {
//         appearances: 2,
//         starts: 1,
//         minutes: 95,
//         goals: 1,
//         assists: 1,
//       },
//     ),
//   },
//   {
//     id: "roony",
//     name: "Roony Bardghji",
//     number: 19,
//     age: 20,
//     position: "WG",
//     role: "Winger",
//     nationality: "Sweden",
//     status: "Injured · ACL",
//     stats: statsSet(),
//   },
// ];

// const initialLeagues: League[] = [
//   {
//     name: "La Liga",
//     rank: 1,
//     played: 9,
//     won: 9,
//     drawn: 0,
//     lost: 0,
//     goalsFor: 39,
//     goalsAgainst: 9,
//     points: 27,
//   },
//   {
//     name: "Champions League",
//     rank: 2,
//     played: 2,
//     won: 2,
//     drawn: 0,
//     lost: 0,
//     goalsFor: 10,
//     goalsAgainst: 3,
//     points: 6,
//   },
//   {
//     name: "Copa del Rey",
//     rank: null,
//     played: 0,
//     won: 0,
//     drawn: 0,
//     lost: 0,
//     goalsFor: 0,
//     goalsAgainst: 0,
//     points: 0,
//   },
//   {
//     name: "Spanish Super Cup",
//     rank: null,
//     played: 0,
//     won: 0,
//     drawn: 0,
//     lost: 0,
//     goalsFor: 0,
//     goalsAgainst: 0,
//     points: 0,
//   },
// ];

// function getInitialPlayers(): Player[] {
//   try {
//     const saved = localStorage.getItem("football-lab-players");
//     return saved ? JSON.parse(saved) as Player[] : initialPlayers;
//   } catch {
//     return initialPlayers;
//   }
// }

// function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
//   return (
//     <div className="section-heading">
//       <div>
//         <h2>{title}</h2>
//         {subtitle && <p>{subtitle}</p>}
//       </div>
//     </div>
//   );
// }

// function Metric({ label, value }: { label: string; value: number }) {
//   return (
//     <div className="metric">
//       <strong>{value}</strong>
//       <span>{label}</span>
//     </div>
//   );
// }

// function PlayerProfile({
//   player,
//   onBack,
//   competition,
//   setCompetition,
//   totalStats,
// }: {
//   player: Player;
//   onBack: () => void;
//   competition: Competition;
//   setCompetition: (competition: Competition) => void;
//   totalStats: Stats;
// }) {
//   const stats = player.stats[competition];

//   return (
//     <div className="player-profile">
//       <button className="primary-button" onClick={onBack}>← Back to squad</button>

//       <SectionTitle
//         title={player.name}
//         subtitle={`#${player.number} · ${player.position} · ${player.role}`}
//       />

//       <p>{player.nationality} · Age {player.age}{player.status ? ` · ${player.status}` : ""}</p>

//       <label>
//         Competition{" "}
//         <select
//           value={competition}
//           onChange={event => setCompetition(event.target.value as Competition)}
//         >
//           {competitions.map(item => <option key={item} value={item}>{item}</option>)}
//         </select>
//       </label>

//       <SectionTitle title={`${competition} statistics`} />
//       <div className="metrics">
//         <Metric label="Appearances" value={stats.appearances} />
//         <Metric label="Starts" value={stats.starts} />
//         <Metric label="Minutes" value={stats.minutes} />
//         <Metric label="Goals" value={stats.goals} />
//         <Metric label="Assists" value={stats.assists} />
//         <Metric label="Yellow cards" value={stats.yellowCards} />
//         <Metric label="Red cards" value={stats.redCards} />
//         <Metric label="Clean sheets" value={stats.cleanSheets} />
//         <Metric label="Saves" value={stats.saves} />
//         <Metric label="Goals conceded" value={stats.goalsConceded} />
//       </div>

//       <SectionTitle title="All competitions" />
//       <div className="metrics">
//         <Metric label="Appearances" value={totalStats.appearances} />
//         <Metric label="Goals" value={totalStats.goals} />
//         <Metric label="Assists" value={totalStats.assists} />
//         <Metric label="Minutes" value={totalStats.minutes} />
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [players, setPlayers] = useState<Player[]>(getInitialPlayers);
//   const [page, setPage] = useState("Overview");
//   const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
//   const [competition, setCompetition] = useState<Competition>("La Liga");
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   useEffect(() => {
//     localStorage.setItem("football-lab-players", JSON.stringify(players));
//   }, [players]);

//   const selectedPlayer = players.find(p => p.id === selectedPlayerId) ?? null;

//   const filteredPlayers = useMemo(() => {
//     return players.filter(p => {
//       const text = search.toLowerCase();
//       const matchesSearch =
//         p.name.toLowerCase().includes(text) ||
//         p.position.toLowerCase().includes(text) ||
//         String(p.number).includes(text);

//       const matchesFilter =
//         filter === "All" ||
//         (filter === "GK" && p.position.includes("GK")) ||
//         (filter === "DEF" && /CB|RB|LB/.test(p.position)) ||
//         (filter === "MID" && /CM|DM|AM/.test(p.position)) ||
//         (filter === "FWD" && /RW|LW|ST|WG|SS/.test(p.position));

//       return matchesSearch && matchesFilter;
//     });
//   }, [players, search, filter]);

//   function totalStats(player: Player): Stats {
//     const result = emptyStats();

//     for (const c of competitions) {
//       const s = player.stats[c];
//       result.appearances += s.appearances;
//       result.starts += s.starts;
//       result.minutes += s.minutes;
//       result.goals += s.goals;
//       result.assists += s.assists;
//       result.yellowCards += s.yellowCards;
//       result.redCards += s.redCards;
//       result.cleanSheets += s.cleanSheets;
//       result.saves += s.saves;
//       result.goalsConceded += s.goalsConceded;
//     }

//     return result;
//   }

//   const totalGoals = players.reduce(
//     (sum, p) => sum + totalStats(p).goals,
//     0,
//   );

//   const totalAssists = players.reduce(
//     (sum, p) => sum + totalStats(p).assists,
//     0,
//   );

//   const league = initialLeagues.find(l => l.name === competition)!;

//   function openPage(name: string) {
//     setPage(name);
//     setSelectedPlayerId(null);
//   }

//   return (
//     <div className="app">
//       <aside className="sidebar">
//         <div className="brand">
//           <div className="crest">FCB</div>
//           <div>
//             <strong>FOOTBALL LAB</strong>
//             <small>BARCELONA · 26/27</small>
//           </div>
//         </div>

//         <p className="nav-title">MAIN MENU</p>

//         {["Overview", "Players", "Competitions"].map(item => (
//           <button
//             key={item}
//             className={`nav-button ${page === item ? "active" : ""}`}
//             onClick={() => openPage(item)}
//           >
//             {item === "Overview" ? "▦" : item === "Players" ? "♙" : "🏆"}
//             <span>{item}</span>
//           </button>
//         ))}

//         <div className="sidebar-bottom">
//           <div className="mini-crest">FCB</div>
//           <div>
//             <strong>More than a club</strong>
//             <small>Season tracker</small>
//           </div>
//         </div>
//       </aside>

//       <main className="main">
//         <header className="topbar">
//           <span>FC BARCELONA / {page.toUpperCase()}</span>
//           <span className="season">● SEASON 2026–27</span>
//         </header>

//         {page === "Overview" && (
//           <section className="content">
//             <div className="hero">
//               <div className="eyebrow">THE BLAUGRANA REPORT</div>
//               <h1>
//                 Built on passion.
//                 <br />
//                 <span>Driven by numbers.</span>
//               </h1>
//               <p>
//                 Squad profiles and Barcelona's performance across
//                 competitions.
//               </p>
//               <button className="primary-button" onClick={() => openPage("Players")}>
//                 Explore the squad →
//               </button>
//               <div className="hero-badge">FCB</div>
//             </div>

//             <SectionTitle title="Season at a glance" />

//             <div className="metrics">
//               <Metric label="Squad players" value={players.length} />
//               <Metric label="Goals · all competitions" value={totalGoals} />
//               <Metric label="Assists · all competitions" value={totalAssists} />
//               <Metric label="Team matches" value={11} />
//             </div>

//             <SectionTitle title="Barcelona's campaigns" />

//             <div className="league-cards">
//               {initialLeagues.map(l => (
//                 <button
//                   className="league-card"
//                   key={l.name}
//                   onClick={() => {
//                     setCompetition(l.name);
//                     openPage("Competitions");
//                   }}
//                 >
//                   <div>
//                     <strong>{l.name}</strong>
//                     <p>{l.played} matches played</p>
//                     <span>
//                       {l.won} W&nbsp;&nbsp; {l.drawn} D&nbsp;&nbsp; {l.lost} L
//                     </span>
//                   </div>
//                   <b>{l.rank ? `#${l.rank}` : "—"}</b>
//                 </button>
//               ))}
//             </div>

//             <SectionTitle title="Top goalscorers" />

//             <div className="top-scorers">
//               {[...players]
//                 .sort((a, b) => totalStats(b).goals - totalStats(a).goals)
//                 .slice(0, 5)
//                 .map(p => (
//                   <button
//                     className="scorer"
//                     key={p.id}
//                     onClick={() => {
//                       setSelectedPlayerId(p.id);
//                       setPage("Players");
//                     }}
//                   >
//                     <span className="number">#{p.number}</span>
//                     <strong>{p.name}</strong>
//                     <span className="scorer-goals">{totalStats(p).goals} goals</span>
//                   </button>
//                 ))}
//             </div>

//             <p className="note">
//               Statistics are based on the information entered for this project.
//             </p>
//           </section>
//         )}

//         {page === "Players" && (
//           <section className="content">
//             {selectedPlayer ? (
//               <PlayerProfile
//                 player={selectedPlayer}
//                 onBack={() => setSelectedPlayerId(null)}
//                 competition={competition}
//                 setCompetition={setCompetition}
//                 totalStats={totalStats(selectedPlayer)}
//               />
//             ) : (
//               <>
//                 <SectionTitle title="First team squad" subtitle={`${players.length} players`} />

//                 <input
//                   className="search"
//                   placeholder="Search by player name, number, or position..."
//                   value={search}
//                   onChange={e => setSearch(e.target.value)}
//                 />

//                 <div className="filters">
//                   {["All", "GK", "DEF", "MID", "FWD"].map(f => (
//                     <button
//                       key={f}
//                       className={filter === f ? "chosen" : ""}
//                       onClick={() => setFilter(f)}
//                     >
//                       {f}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="players-grid">
//                   {filteredPlayers.map(p => {
//                     const totals = totalStats(p);

//                     return (
//                       <button
//                         className="player-card"
//                         key={p.id}
//                         onClick={() => setSelectedPlayerId(p.id)}
//                       >
//                         <div className="player-top">
//                           <span>#{p.number}</span>
//                           <span className="position">{p.position}</span>
//                         </div>
//                         <div className="avatar">{p.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</div>
//                         <h3>{p.name}</h3>
//                         <p>{p.role}</p>
//                         <div className="player-info">
//                           <span>AGE <b>{p.age}</b></span>
//                           <span>APPS <b>{totals.appearances}</b></span>
//                           <span>G+A <b>{totals.goals + totals.assists}</b></span>
//                         </div>
//                         {p.status && <div className="status">{p.status}</div>}
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {filteredPlayers.length === 0 && (
//                   <p className="note">No players found.</p>
//                 )}
//               </>
//             )}
//           </section>
//         )}

//       </main>
//     </div>
//   );
// }

// export default App;