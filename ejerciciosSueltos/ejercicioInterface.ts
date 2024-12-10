interface Personaje {
  name: string;
  edad: number;
  poder: string;
}

const Personajes: Personaje[] = [
  { name: "Goku", edad: 30, poder: "kamehameha" },
  { name: "Krillin", edad: 30, poder: "kamehameha" },
  { name: "Vegeta", edad: 30, poder: "disco solar" },
];

//Mostrar personaje

function mostrarPersonajes() {
  for (let i = 0; i < Personajes.length; i++)
    console.log(
      `Personaje: ${Personajes[i].name}, Edad: ${Personajes[i].edad} Poder: ${Personajes[i].poder}`
    );
}

mostrarPersonajes();

//Agregar un personaje nuevo

function agregarPersonaje(name: string, edad: number, poder: string): void {
  const nuevoPersonaje: Personaje = { name, edad, poder };

  Personajes.push(nuevoPersonaje);
}

function buscarPersonaje(name: string): void {
    const encontrarPersonaje = Personajes.find(personaje => personaje.name === name);
  
    if (encontrarPersonaje) {
      console.log(
        `Personaje encontrado: ${encontrarPersonaje.name}, Edad: ${encontrarPersonaje.edad}, Poder: ${encontrarPersonaje.poder}`
      );
    } else {
      console.log(`Personaje con el nombre "${name}" no encontrado.`);
    }
  }
  
  // Usar la función buscarPersonaje
  buscarPersonaje("Goku"); // Personaje encontrado
  buscarPersonaje("Piccolo"); // Personaje no encontrado
  


