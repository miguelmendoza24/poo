/*
Simulación de Cuenta Bancaria con Métodos Estáticos
Descripción del problema: Crea una clase CuentaBancaria que contenga:

Propiedades: titular (string), saldo (número, inicializado en 0).
Métodos: depositar(cantidad) y retirar(cantidad). Si el saldo es insuficiente para la retirada, imprime un mensaje de error.
Crea un método estático llamado transferir(cuentaOrigen, cuentaDestino, cantidad) que transfiera dinero entre dos cuentas bancarias.

Crea dos instancias de CuentaBancaria y usa el método transferir() para transferir dinero entre ellas.
*/
//nueva clase
class CuentaBancaria{
  constructor(titular = "", saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  //metodo
  depositar(cantidad) {
    this.saldo += cantidad;
  }
  //metodo
  retirar(cantidad) {
    if (cantidad > this.saldo) {
      console.log("saldo insuficiente");
    }
    this.saldo -= cantidad;
    console.log(`el retiro de ${cantidad} se realizo con exito.`);
  }
 //metodo statico
  static transferir(cuentaOrigen, cuentaDestino, cantidad) {
    if (cantidad > cuentaOrigen.saldo) {
      console.error("saldo insuficiente para realizar la transferencia");
      return
    }
    cuentaOrigen.saldo -= cantidad;
    cuentaDestino.saldo += cantidad;
    console.log("transferencia realizada")
  }
}

//instancias
const cuentaUno = new CuentaBancaria("marciano", 500)
const cuentaDos = new CuentaBancaria("maricarmen", 100);
//prueba
CuentaBancaria.transferir(cuentaUno, cuentaDos, 500)
console.log(`saldo de ${cuentaUno.titular}: ${cuentaUno.saldo}`);
console.log(`saldo de ${cuentaDos.titular}: ${cuentaDos.saldo}`);
cuentaDos.depositar(100)
 console.log(`saldo de ${cuentaDos.titular}: ${cuentaDos.saldo}`);
 