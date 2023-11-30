import { Pcxx } from "./Pcxx";
import { Server } from "./Server";

class Factory {
    static FabricarPedido(ram: number, hdd: number, cpu: number, type: string) {
        try {
            if (type === "pc") {
                return new Pcxx(ram, hdd, cpu, type);
            } else if (type === "server") {
                return new Server(ram, hdd, cpu, type);
            } else {
                throw new Error('Tipo de computador invalido!')
            }
        } catch (e: any) {
            console.log('ERRO:', e.message);
            return Error;
        }
    }
}
export {Factory};