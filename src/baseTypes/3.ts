let some: unknown;
some = "Text";

let str: unknown = some;
if (typeof str === "string") {
  str = some;
}

export {};
