interface ICompFactory {
    getRam(): number;
    getHdd(): number;
    getCpu(): number;
    getType(): string;
    toString(): string;
}
export {ICompFactory};
