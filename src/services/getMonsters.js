export const getMonsters = async () => {
 const res = await fetch("https://www.dnd5eapi.co/api/monsters/");
 return res.json();
};

export const getMonsterInfo = async (url) => {
 const res = await fetch(`https://www.dnd5eapi.co${url}`);
 return res.json();
};
