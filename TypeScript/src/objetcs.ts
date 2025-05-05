// Type
type Order = {
    productId : string;
    price : number;
}
type Users = {
    firstName : String;
    age : number;
    email : string;
    passaword? : string; // '?' deixa o obejto como opcional
    orders: Order[]
    register(): string
};

const user: Users = {
    firstName : 'Jane',
    age : 20,
    email : 'lf860482@gmail.com',
    passaword : '123123123',
    orders : [{productId: '1', price : 2000}],
    register() {
        return "a";
    }
};

user.passaword

const printlog = (message: string) => {} 

printlog(user.passaword!);

// Unions

type Author = {
    books:string[]
}

const author : Author & Users = {
    age : 2,
    books : ['1'],
    email: 'teste@teste.com',
    firstName : 'Luiz felipe',
    orders: [],
    register(){
        return "a"
    }
};

// Interfaces

interface userInterface {
   readonly fisrtname: string;
    email: string;
    login(): string
}

const emailUser: userInterface = {
    email: 'teste@teste.com',
    fisrtname: 'felipe',
    login(){
        return "a"
    }
    
} 

interface authorInterface {
    books: string[]

}
const newAuthor: authorInterface & userInterface = {
    email: 'teste@teste.com',
    books: ['1'],
    fisrtname: 'Luiz',
    login() {
        return "a"
    },
}

type grade = number | string; // Interface não funciona isso
const grade: number | string = 1

