



interface IAccount {
    name: string;
    balance: number;
    status?:string;
    deposit?:()=>void
}





const account:{
    name: string,
    balance: number,
    status?:string
} = {
    name:"Kha",
    balance:10
};

let accounts:IAccount;

class InvestmentAccount implements IAccount {
    constructor(public name, public balance){

    }

    private withdraw(){
        
    }
}