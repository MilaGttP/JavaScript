
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        this.transactions.push({
            amount,
            type,
        });
    },

    deposit(amount) {
        this.createTransaction(amount, Transaction.DEPOSIT);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            alert(`Amount ${amount} > balance ${this.balance}`);
        }
        this.createTransaction(amount, Transaction.WITHDRAW);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction.id === id);
    },

    getTransactionTotal(type) {
        let total = 0;

        this.transactions.forEach(transaction => {
            if (transaction.type === type) {
                total += transaction.amount;
            }
        });

        return total;
    },
};