## Transactions
Code challenge solved for a company specialized in online operations

## QUESTION 1 - Amount by category
Calculate the amount spent in a specific category within the specified time period

```js
getAmountByCategoryInPeriod(transactionsList, category, startTime, endTime)
```

### Input
You can assume that all parameters will always be present and valid.

- list of transactions (`Transaction[]`)
- category (`String`)
- start time (inclusive) (`Date`)
- end time (exclusive) (`Date`)

###  Output
 - Total amount (`Number`)

Negative number means money spent
*Remember, this is what a transaction looks like:*

```js
{
  id: 123,
  sourceAccount: 'my_account',
  targetAccount: 'coffee_shop',
  amount: -30,
  category: 'eating_out',
  time: '2018-03-12T12:34:00Z'
}
``` 

## QUESTION 2 - Duplicated Transactions

Sometimes when a customer is charged, there is a duplicate transaction created. We need to find those transactions so that they can be dealt with. Everything about the transaction should be identical, except the transaction id and the time at which it occurred, as there can be up to a minute delay.

`findDuplicateTransactions(transactions)`

Find all transactions that have the same `sourceAccount`, `targetAccount`, `category`, `amount`, and the time difference between each consecutive transaction is less than 1 minute.

## Input

-   list of transactions (`Transaction[]`)

## Output

-   list of all the duplicate transaction groups, ordered by time ascending (`Transaction[][]`)

### Example

Input transactions:

```js
[
  {
    id: 1,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:00.000Z"
  },
  {
    id: 2,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:50.000Z"
  },
  {
    id: 3,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:34:30.000Z"
  },
  {
    id: 4,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:36:00.000Z"
  },
  {
    id: 5,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:00.000Z"
  },
  {
    id: 6,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:05.000Z"
  }
];
```
### Expected output:

```js
[
  [
    {
      id: 1,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:00.000Z"
    },
    {
      id: 2,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:50.000Z"
    },
    {
      id: 3,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:34:30.000Z"
    }
  ],
  [
    {
      id: 5,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:00.000Z"
    },
    {
      id: 6,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:05.000Z"
    }
  ]
];
```
