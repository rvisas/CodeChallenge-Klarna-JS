const app = {

    getBalanceByCategoryInPeriod: (transactions = [], category, start, end) => {
        return (transactions.length === 0) ? 0 : transactions.reduce((balance, transaction) => {
            return ((transaction.category === category)
                && (new Date(transaction.time) >= start)
                && (new Date(transaction.time) < end)) ? balance + transaction.amount : balance;
        }, 0);
    },

    isDuplicate: (trA, trB) => {
        return ((trA.sourceAccount === trB.sourceAccount)
            && (trA.targetAccount === trB.targetAccount)
            && (trA.category === trB.category)
            && (trA.amount === trB.amount)
            && (app.diffMinutes(trA.time, trB.time) < 1));
    },

    diffMinutes: (dateTimeA, dateTimeB) => {
        return Math.abs((new Date(dateTimeA) - new Date(dateTimeB)) / 60000);
    },

    sortTransactionsByTime: (trA, trB) => {
        return (new Date(trA.time)) - (new Date(trB.time));
    },

    findDuplicateTransactions: (transactions = []) => {
        let duplicatedTransactions = [];
        if (transactions.length < 2) return duplicatedTransactions;
        transactions.sort(app.sortTransactionsByTime);
        transactions.forEach(transaction => {
            let foundDuplicatedGroup = false;
            for (let duplicatedGroup of duplicatedTransactions) {
                if (app.isDuplicate(transaction, duplicatedGroup[duplicatedGroup.length - 1])) {
                    duplicatedGroup.push(transaction);
                    foundDuplicatedGroup = true;
                    break;
                }
            }
            if (!foundDuplicatedGroup) duplicatedTransactions.push([transaction]);
        });
        return duplicatedTransactions.filter(duplicatedGroup => duplicatedGroup.length > 1);
    }

};

module.exports = app;
