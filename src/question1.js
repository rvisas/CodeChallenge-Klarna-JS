const getBalanceByCategoryInPeriod = (transactions = [], category, start, end) => {
    return (transactions.length === 0) ? 0 : transactions.reduce((balance, transaction) => {
        return ((transaction.category === category)
            && (new Date(transaction.time) >= start)
            && (new Date(transaction.time) < end)) ? balance + transaction.amount : balance;
    }, 0);
};
