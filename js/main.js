class Estudiante {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.activo = true;
  }
  cambiarEstado() {
    this.activo = !this.activo;
  }
  logout() {
    console.log("Sesión terminada");
  }
  mostrarDatos() {
    console.log(`El estudiante ${this.nombre} tiene ${this.edad} años`);
  }
}
const estudiante1 = new Estudiante("Christian", 29);
const estudiante2 = new Estudiante("Jose", 25);
const estudiante3 = new Estudiante("Joaquin", 24);
const estudiante4 = new Estudiante("Hernan", 22);
estudiante1.mostrarDatos();
