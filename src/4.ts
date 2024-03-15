class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[];
  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(newKey: Key): boolean {
    if (this.key === newKey) {
      this.door = true;
    }
    return this.door;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
