const yargs = require("yargs");

class Bank {
    constructor (loanAmount, interestRate) {
        this.loanAmount = loanAmount;
        this.interestRate = interestRate;
    }

    getMonthlyInstallment(loanTerm) {
        return this.loanAmount * (1 + (loanTerm * (this.interestRate / 100))) / loanTerm;
    }
}

class Metrobank extends Bank {
    constructor (loanAmount) {
        super(loanAmount, 1.5);
        this.loanAmount = loanAmount;
    }
}

class BPI extends Bank {
    constructor (loanAmount) {
        super(loanAmount, 1.2);
        this.loanAmount = loanAmount;
    }
}

class BDO extends Bank {
    constructor (loanAmount) {
        super(loanAmount, 1.7);
        this.loanAmount = loanAmount;
    }
}

class LoanCalculator {
    constructor(bankName, loanAmount, loanTerm) {
        this.bankName = bankName;
        this.loanAmount = loanAmount;
        this.loanTerm = loanTerm;
    }

    getMonthlyInstallment() {
        
        let bank = null;
        let bankName = args.bankName.toUpperCase();

        if (bankName === 'METROBANK') {
            bank = new Metrobank(args.loanAmount);
        } else if (bankName === 'BPI') {
            bank = new BPI(args.loanAmount);
        } else if (bankName === 'BDO') {
            bank = new BDO(args.loanAmount);
        } else {
            return -1;
        }
    
        return bank.getMonthlyInstallment(this.loanTerm)

    }
}



let args = yargs.argv;

if (args.bankName && args.loanAmount && args.loanTerm) {
    
    const calculator = new LoanCalculator(args.bankName, args.loanAmount, args.loanTerm);
    const monthlyInstallment = calculator.getMonthlyInstallment();

    if (monthlyInstallment === -1) {
        console.log(`${args.bankName} is not supported right now. Supported banks: Metrobank, BPI, BDO`);
    } else {
        console.log(`Monthly Installment: ${monthlyInstallment}`);
    }

} else {
    console.log(`Please input bankName, loanAmount, and loanTerm.`);
}

