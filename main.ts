import { Factory } from "./Factory";

// Utilizando fabrica para criar instancias
const computadorPc = Factory.FabricarPedido(16, 1000, 3.4, "pc");
const computadorServer = Factory.FabricarPedido(64, 4000, 4.0, "server");

// Utilizando o toString específico de cada computador
console.log(computadorPc.toString());
console.log();
console.log(computadorServer.toString());
console.log();

// Testando um computador de tipo inexistente
const c = Factory.FabricarPedido(1, 1, 1, "oi");