// Nico => [N,i,c,o] = string => string[]
// [N,i,c,o] => Nico =>  = string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join("");
  }
  else {
    return input.split("");
  }
}

const rtaArray = parseStr("Nico");
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log("rtaArray", rtaArray);

const rtaStr = parseStr(["N", "i", "c", "o"]);
if (typeof rtaStr === "string") {
  rtaStr.toLowerCase();
}
console.log("rtaStr", rtaStr);
