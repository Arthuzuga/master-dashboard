export const modifiers = (value) => {
  let mod = Number(value) - 10;

  if(mod % 2 === 0){
    mod = mod/2
  } else {
    mod = (mod-1)/2
  }

  if(isNaN(mod)){
    mod = ""
  } else if (mod >=0) {
    mod = "+" + mod
  }

  return `${value} (${mod})`
}