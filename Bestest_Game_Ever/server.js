import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
let names = [
  "Zoe Lozano",
  "Boone Duffy",
  "Addisyn Herrera",
  "River Obrien",
  "Joanna Jaramillo",
  "Riggs Montes",
  "Roselyn Villanueva",
  "Huxley Magana",
  "Amaris Charles",
  "Conrad Davidson",
  "Jayla Poole",
  "Quincy Reed",
  "Valentina Waller",
  "Marley Solomon",
  "Mylah McMahon",
  "Jakob Gillespie",
  "Alianna Alexander",
  "Kingston Andersen",
  "Zoie Vincent",
  "Aarav Wilkinson",
  "Siena Yates",
  "Braylon Erickson",
  "Sabrina Hubbard",
  "Forrest Best",
  "Lexie Harding",
  "Brodie Reed",
  "Valentina Munoz",
  "Justin Cantu",
  "Galilea Donovan",
  "Brayan Solis",
  "Miracle Rosario",
  "Jedidiah McDonald",
  "Daisy McCormick",
  "Jasiah Guerrero",
  "Margot Hammond",
  "Francis Scott",
  "Aurora Combs",
  "Ahmad Taylor",
  "Sofia Maxwell",
  "Eden Woods",
  "Reese Wyatt",
  "Sam Boone",
  "Mariam Oliver",
  "Karson Zavala",
  "Liv Jones",
  "William Ramsey",
  "Lyric Vaughn",
  "Remy Tapia",
  "Michaela Hanna",
  "Aydin Jordan",
  "Adalynn Jordan",
  "Sawyer Thomas",
  "Elizabeth Montes",
  "Darren Hunt",
  "Genevieve Shelton",
  "Leonel Watson",
  "Hailey Fischer",
  "Leonidas Webb",
  "Ariella Parrish",
  "Karsyn Roberts",
  "Paisley Guzman",
  "Jude Nielsen",
  "Vienna Avila",
  "Jaylen Dunlap",
  "Iliana Bowen",
  "Trevor Mejia",
  "Saylor Good",
  "Davian Deleon",
  "Gabrielle Sanders",
  "Jose Carpenter",
  "Lilly Shields",
  "Devon Pennington",
  "Yareli Bradshaw",
  "Emory Avery",
  "Meghan McGuire",
  "Casey Ramsey",
  "Lyric McCoy",
  "Jett Nicholson",
  "Justice Drake",
  "Jalen Farrell",
  "Kassidy Cohen",
  "Killian Zavala",
  "Liv Thompson",
  "Theodore Shields",
  "Analia Stone",
  "Finn Vega",
  "Dakota Conrad",
  "Dilan Kennedy",
  "Brianna Boyle",
  "Robin Delacruz",
  "Celine Lim",
  "Cal Medina",
  "Elliana Bennett",
  "Leonardo Dickerson",
  "Opal Blanchard",
  "Adler Strickland",
  "Nia Farmer",
  "Jamison Simon",
  "Kalani Duke",
  "Kalel Chang",
  "Ophelia Hall",
  "Thomas Rose",
  "Magnolia Ortiz",
  "Landon Crawford",
  "Aubree Ibarra",
  "Asa Palacios",
  "Bria Andersen",
  "Alistair Strickland",
  "Nia Roberts",
  "Josiah Owens",
  "Amaya Bullock",
  "Ben Brennan",
  "Elodie Warner",
  "Jaxton Kim",
  "Gabriella Donaldson",
  "Canaan Carrillo",
  "Kaylani Rhodes",
  "Titus Frank",
  "Dior Sharp",
  "Royce Turner",
  "Brooklyn Camacho",
  "Tatum Rivers",
  "Kiana Cox",
  "Connor Leach",
  "Martha Yu",
  "Bryant Cordova",
  "Florence Delgado",
  "Colt Dawson"
];
const players = new Map();

wss.on('connection', (ws) => {
  console.log('New player connected');
  const playerId = names[Math.floor(Math.random()*127)];
  players.set(playerId, ws);
  ws.send(JSON.stringify({
    type: 'assignId',
    playerId
  }));
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      console.log(`Received from ${playerId}:`, data);
      wss.clients.forEach((client) => {
  if (client !== ws && client.readyState === 1) {
    if(!(data.action.toString().trim()=="")){}
          client.send(JSON.stringify({
            type: 'gameAction',
            playerId,
            action: data.action
          }));
        }
      });
    
    } catch (err) {
      console.error('Error parsing message:', err);
    }
  });

  ws.on('close', () => {
    console.log(`Player disconnected: ${playerId}`);
    players.delete(playerId);
  })
})
console.log('WebSocket server running on ws://localhost:8080');