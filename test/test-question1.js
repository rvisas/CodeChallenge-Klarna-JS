let assert = require("chai").assert;

describe("getBalanceByCategoryInPeriod()", function () {
    it("returns 0 if there are no transactions", function () {
        assert.equal(
            getBalanceByCategoryInPeriod(
                [],
                "groceries",
                new Date("2019-03-01"),
                new Date("2019-03-31")
            ),
            0
        );
    });

    it("returns calculated balance for 'groceries' category from 2019-07-01 to 2019-07-31", function () {
        const transactions = [
            {
                id: 01,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -100,
                category: 'groceries',
                time: '2019-07-01T00:00:01Z'
            },
            {
                id: 02,
                sourceAccount: 'my_account',
                targetAccount: 'restaurant',
                amount: -50,
                category: 'eating_out',
                time: '2019-07-03T10:27:00Z'
            },
            {
                id: 03,
                sourceAccount: 'klarna',
                targetAccount: 'my_account',
                amount: 25000,
                category: 'salary',
                time: '2019-07-01T10:27:00Z'
            },
            {
                id: 04,
                sourceAccount: 'mini_market',
                targetAccount: 'my_account',
                amount: 200,
                category: 'groceries',
                time: '2019-07-31T10:27:00Z'
            },
            {
                id: 05,
                sourceAccount: 'my_account',
                targetAccount: 'mini_market',
                amount: -75,
                category: 'groceries',
                time: '2019-06-30T10:27:00Z'
            }
        ];

        assert.equal(
            getBalanceByCategoryInPeriod(
                transactions,
                "groceries",
                new Date("2019-07-01T00:00:00Z"),
                new Date("2019-07-31T23:59:59Z")
            ),
            100
        );
    });

    it("returns calculated balance for 'groceries' category from and including 2019-07-01", function () {
        const transactions = [
            {
                id: 01,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -100,
                category: 'groceries',
                time: '2019-07-01T00:00:00Z'
            },
            {
                id: 02,
                sourceAccount: 'my_account',
                targetAccount: 'restaurant',
                amount: -50,
                category: 'groceries',
                time: '2019-07-03T00:00:01Z'
            },
            {
                id: 03,
                sourceAccount: 'klarna',
                targetAccount: 'my_account',
                amount: 25000,
                category: 'groceries',
                time: '2019-06-30T23:59:59Z'
            },
            {
                id: 04,
                sourceAccount: 'mini_market',
                targetAccount: 'my_account',
                amount: 200,
                category: 'groceries',
                time: '2019-07-31T10:27:00Z'
            },
            {
                id: 05,
                sourceAccount: 'my_account',
                targetAccount: 'mini_market',
                amount: -75,
                category: 'groceries',
                time: '2019-08-01T10:27:00Z'
            }
        ];

        assert.equal(
            getBalanceByCategoryInPeriod(
                transactions,
                "groceries",
                new Date("2019-07-01T00:00:00Z"),
                new Date("2019-07-31T23:59:59Z")
            ),
            50
        );
    });

    it("returns calculated balance for 'groceries' category until and not including 2019-07-31", function () {
        const transactions = [
            {
                id: 01,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -100,
                category: 'groceries',
                time: '2019-07-31T00:00:00Z'
            },
            {
                id: 02,
                sourceAccount: 'my_account',
                targetAccount: 'restaurant',
                amount: -50,
                category: 'groceries',
                time: '2019-07-31T00:00:01Z'
            },
            {
                id: 03,
                sourceAccount: 'klarna',
                targetAccount: 'my_account',
                amount: 25000,
                category: 'groceries',
                time: '2019-06-30T23:59:59Z'
            },
            {
                id: 04,
                sourceAccount: 'mini_market',
                targetAccount: 'my_account',
                amount: 200,
                category: 'groceries',
                time: '2019-07-31T10:27:00Z'
            },
            {
                id: 05,
                sourceAccount: 'my_account',
                targetAccount: 'mini_market',
                amount: -75,
                category: 'groceries',
                time: '2019-07-30T10:27:00Z'
            }
        ];

        assert.equal(
            getBalanceByCategoryInPeriod(
                transactions,
                "groceries",
                new Date("2019-07-01T00:00:00Z"),
                new Date("2019-07-31T00:00:00Z")
            ),
            -75
        );
    });
});
