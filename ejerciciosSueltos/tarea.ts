/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
  name: string;
  age: number;
  address: Address;  //cuando tiene un objeto en la interfa, se crea otra interfaz para este objeto. L12
  showAddress: () => void;
}

interface Address {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.ciudad + ", " + this.address.pais;
  },
};

const address = superHeroe.showAddress();
console.log(address);

export {};
