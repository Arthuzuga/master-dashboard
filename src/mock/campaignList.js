import playersList from './playersList'
import sessionList from './sessionList'
import npcs from './npcs'

const campaigns = [
  {
    id: 1,
    title: "Crônicas de Belat'nor",
    url: "/campaigns/cronicasBelatnor",
    system: "Dungeons and Dragons",
    players: playersList,
    sessions: sessionList,
    npcs: npcs,
  },
];

export default campaigns;
