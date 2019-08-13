## Transactions-CodeChallenge
Code challenge solved for a company specialized in online operations

## Amount by category
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
