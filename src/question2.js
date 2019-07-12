const isDuplicate = (trA, trB) => {
    return ((trA.sourceAccount === trB.sourceAccount)
        && (trA.targetAccount === trB.targetAccount)
        && (trA.category === trB.category)
        && (trA.amount === trB.amount)
        && (diffMinutes(trA.time, trB.time) < 1)) ? true : false;
};

const diffMinutes = (dateTimeA, dateTimeB) => {
    return Math.abs((new Date(dateTimeA) - new Date(dateTimeB))/60000);    
};

const sortTransactionsByTime = (trA, trB) => {
    return (new Date(trA.time)) - (new Date(trB.time));
};

const findDuplicateTransactions = (transactions = []) => {
    let duplicatedTransactions = [];
    if (transactions.length < 2) return duplicatedTransactions;
    transactions.sort(sortTransactionsByTime);
    transactions.forEach(transaction => {
        let foundDuplicatedGroup = false;
        for (let duplicatedGroup of duplicatedTransactions) {
            if (isDuplicate(transaction, duplicatedGroup[duplicatedGroup.length - 1])) {
                duplicatedGroup.push(transaction);
                foundDuplicatedGroup = true;
                break;
            }
        }
        if (!foundDuplicatedGroup) duplicatedTransactions.push([transaction]);
    });    
    return duplicatedTransactions.filter(duplicatedGroup => duplicatedGroup.length > 1);
};
