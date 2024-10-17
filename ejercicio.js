class Libro {
  constructor(titulo = "", autor= "", disponible = false) {
    console.log("hola desde el constructor de la clase libro");
  
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = disponible;
  }

}

//const elLibro = new Libro();
//const elLibroDos = new Libro();

class LibroDigital extends Libro{
  constructor(idRegistro = "") {
    console.log("hola desde la clase heredera");
   super()
    this.idRegistro = idRegistro;
  }

}

const elLibroDigital = new LibroDigital();
