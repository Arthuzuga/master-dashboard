import npcs from "./npcs";
import challengeList from './challengeList'
import playlist from "./playlist";

const sessions = [
 {
  id: 1,
  title: "As Chamas da Noite",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[
      {
        id: 1,
        text: "A Taverna Chifre de dragão, é um local simples, onde aventureiros de passagem por Delorá se reunem para beber o tradicional Rum Deloriano, comer e descansar para suas demais afazeres. A estalagem está relativamente vazia, das que se somam 10 mesas, apenas 3 está ocupadas, poucos são os atendentes também, jovens, talvez filhos dos taverneiros. O cheiro de porco toma o ar e no fundo do salão principal é um anão bardo tocando em seu berimbal uma breve canção.",
        isSpeak: true
      },
      {
        id: 2,
        text: "Os aventureiros irão se encontrar na taverna Chifre de dragão e irão saber ou pelo taverneiro Harold ou pelo quadro de procurados sobre o caso de desaparecimento de pessoas em Delorá",
        isSpeak: false,
      },
    ],
    playlist: playlist
     .filter((playlist) => playlist.name === "Aventura")
     .flatMap((music) => music.songs),
    npcs: npcs,
    magicItems: [],
    challengers: challengeList,
    monsters: [],
   },
  ],
 },
 {
  id: 2,
  title: "O Segredo da Cidade",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 3,
  title: "Em Busca de Respostas",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 4,
  title: "A Casa Abandonada",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 5,
  title: "As Três Portas",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 6,
  title: "Reencontros",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 7,
  title: "Uma noite estranha",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 8,
  title: "A porta da esquerda",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 9,
  title: "A luz do lago",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 10,
  title: "A passagem dos deuses",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 11,
  title: "A ilha e o cristal",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 12,
  title: "O enigma de Svently",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 13,
  title: "A provação de Artrocitus",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 14,
  title: "O sacrifício de Rath'ka",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 15,
  title: "A prova de Natrono",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 16,
  title: "A quebra, a transformação e o sonho",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 17,
  title: "A fenda planar",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
 {
  id: 18,
  title: "De volta para o futuro",
  description: "Descrição",
  chapters: [
   {
    id: 1,
    description:[],
    playlist: [],
    npcs: [],
    magicItems: [],
    challengers: [],
    monsters: [],
   },
  ],
 },
];

export default sessions;
