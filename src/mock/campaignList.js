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
  title: "Mares de Sal e Sangue",
  url: "/campaigns/maresDeSalESangue",
  system: "Dungeons and Dragons",
  players:[],
  sessions:[],
  npcs:[],
 },
 {
  title: "Sombras da Guerra",
  url: "/campaigns/sombrasDaGuerra",
  system: "Dungeons and Dragons",
  players:[],
  sessions:[],
  npcs:[],
 },
 {
  title: "Águas Passadas",
  url: "/campaigns/aguasPassadas",
  system: "Dungeons and Dragons",
  players:[],
  sessions:[],
  npcs:[],
 },
 {
  title: "A Ordem Paranormal",
  url: "/campaigns/ordemParanormal",
  system: "The Exoterrorism",
  players:[],
  sessions:[],
  npcs:[],
 },
];

export default campaigns;
