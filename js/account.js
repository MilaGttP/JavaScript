
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        const transaction = {
            id: this.transactions.length + 1,
            amount,
            type,
        };
        return transaction;
    },

    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.balance += amount;
        this.transactions.push(transaction);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Зняття такої суми неможливе. Недостатньо коштів на рахунку.');
            return;
        }

        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.balance -= amount;
        this.transactions.push(transaction);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        const transaction = this.transactions.find(tran => tran.id === id);
        return transaction;
    },

    getTransactionTotal(type) {
        const totalAmount = this.transactions.reduce((total, tran) => {
            if (tran.type === type) {
                return total + tran.amount;
            }
            return total;
        }, 0);
        return totalAmount;
    },
};
