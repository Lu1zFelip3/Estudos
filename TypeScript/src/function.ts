interface mathFunc {
    (x: number, y: number): number;
    
};


const sum: mathFunc = (x:number,y:number): number => {
    return x + y;

};

const sub: mathFunc = (x:number, y: number) => {
    return x-y
};

const value = sum (2,3); 

const log  = (message:string): void => {
    console.log(message);
//Não tem retorno de function, e só serve pra function.
};

