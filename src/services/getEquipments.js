export const getEquipmentsCategory = async () => {
 const res = await fetch("http://www.dnd5eapi.co/api/equipment-categories/");
 return res.json();
};

export const getEquipments = async (url) => {
 const res = await fetch(`http://www.dnd5eapi.co${url}`);
 return res.json();
};
