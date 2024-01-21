// Nico => [N,i,c,o] = string => string[]
// [N,i,c,o] => Nico =>  = string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// !!Si se va a usar unknown en la sobrecarga de tipo debe dejarse al final
// !!Si se puede usar union types o argumentos opcionales evitar la sobrecarga

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join("");
  }
  else if (typeof input === "string") {
    return input.split("");
  }
  else if (typeof input === "number") {
    return true;
  }
}

const rtaArray = parseStr("Nico");
console.log("rtaArray", rtaArray);

const rtaStr = parseStr(["N", "i", "c", "o"]);
console.log("rtaStr", rtaStr);

const rtaBoolean = parseStr(24);
console.log("rtaBoolean", rtaBoolean);
