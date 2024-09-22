class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
const storage1 = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage1.addItem("Droid");
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage1.removeItem("Prolonger");
console.log(storage1.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]