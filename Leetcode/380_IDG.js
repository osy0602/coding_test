class RandomizedSet {
  constructor() {
    this.arr = [];
    this.map = new Map();
  }

  insert(val) {
    if (this.map.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;

    const idx = this.map.get(val);
    const lastVal = this.arr[this.arr.length - 1];

    this.arr[idx] = lastVal;
    this.map.set(lastVal, idx);

    this.arr.pop();
    this.map.delete(val);
    return true;
  }

  getRandom() {
    const randIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIdx];
  }
}


const commands = [
  "RandomizedSet",
  "insert",
  "remove",
  "insert",
  "getRandom",
  "remove",
  "insert",
  "getRandom"
];

const values = [
  [],
  [1],
  [2],
  [2],
  [],
  [1],
  [2],
  []
];

let obj = null;
const output = [];

for (let i = 0; i < commands.length; i++) {
  const cmd = commands[i];
  const args = values[i];

  if (cmd === "RandomizedSet") {
    obj = new RandomizedSet();
    output.push(null);
  } else if (cmd === "insert") {
    output.push(obj.insert(args[0]));
  } else if (cmd === "remove") {
    output.push(obj.remove(args[0]));
  } else if (cmd === "getRandom") {
    output.push(obj.getRandom());
  }
}

console.log(output);
