class MyMap<T> {
  private collections: Array<{ key: string, item: T }> = [];

  // should create a new key-value pair
  setItem(key: string, item: T) {
    const newItem = { key, item };
    this.collections.push(newItem);
  }

  // should retrieve the value of the provided key
  getItem(key: string) {
    for (const c of this.collections) {
      if (c.key === key) {
        return c.item;
      }
    }
    return null;
  }

  // should remove all key-value pairs
  clear() {
    this.collections = [];
  }

  // should output key-value pairs
  printMap() {
    console.log(this.collections);
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap.getItem('bananas'));

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
stringMap.clear();
stringMap.printMap();