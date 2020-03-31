export const modifiers = (value) => {
 if (value === 1) {
  return `${value} (-5)`;
 }
 if (value === 2 || value === 3) {
  return `${value} (-4)`;
 }
 if (value === 4 || value === 5) {
  return `${value} (-3)`;
 }
 if (value === 6 || value === 7) {
  return `${value} (-2)`;
 }
 if (value === 8 || value === 9) {
  return `${value} (-1)`;
 }
 if (value === 10 || value === 11) {
  return `${value} (+0)`;
 }
 if (value === 12 || value === 13) {
  return `${value} (+1)`;
 }
 if (value === 14 || value === 15) {
  return `${value} (+2)`;
 }
 if (value === 16 || value === 17) {
  return `${value} (+3)`;
 }
 if (value === 18 || value === 19) {
  return `${value} (+4)`;
 }
 if (value === 20 || value === 21) {
  return `${value} (+5)`;
 }
 if (value === 22 || value === 23) {
  return `${value} (+6)`;
 }
 if (value === 24 || value === 25) {
  return `${value} (+7)`;
 }
 if (value === 26 || value === 27) {
  return `${value} (+8)`;
 }
 if (value === 28 || value === 29) {
  return `${value} (+9)`;
 }
 return `${value} (+10)`;
};
