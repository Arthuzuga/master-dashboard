import playersList from './playersList'
import sessionList from './sessionList'
import npcs from './npcs'

const campaigns = [
 {
  title: "Crônicas de Belat'nor",
  url: "/campaigns/cronicasBelatnor",
  system: "Dungeons and Dragons",
  players: playersList,
  sessions: sessionList,
  npcs: npcs,
},
{
  title: "Entre a Espada e o Escudo ",
  url: "/campaigns/skyfall",
  system: "Skyfall",
  players:[],
  sessions:[],
  npcs:[],
 },
];

export default campaigns;
