class Casa {
  constructor(color = "",habitacion = 0) {
    this.color = color;
    this.habitacion = habitacion
  }
  mostrarNHabitaciones() {
    console.log(`el numero de habitaciones es:${this.habitacion}`);
    
  }
}

class Habitacion {
  constructor(tamaño, tipo) {
    this.tamaño = tamaño;
    this.tipo = tipo;
  }
  abrirVentana() {
      console.log("abro la ventana");
      
    }
}

class Sala {
  constructor(tamaño, color) {
    this.tamaño = tamaño;
    this.color = color;
  }
  entrarASala() {
    console.log("estoy en la sala");
    
  }
}


const micasa = new Casa("blanco",3)
micasa.mostrarNHabitaciones()

const laHabitacion = new Habitacion(85, "rectangular");
laHabitacion.abrirVentana();

const miSala = new Sala(45, "ginda")
miSala.entrarASala()

//cambiar valores
class Chosa extends Casa{
  constructor(tamaño) {
    super();
    this.tamaño = tamaño
  }
  mostrarTamaño() {
    console.log(`el tamaño es de ${this.tamaño} metros cuadrados`);
    
  }
}


let miChosa = new Chosa(120)

miChosa.mostrarTamaño()
miChosa.mostrarNHabitaciones()