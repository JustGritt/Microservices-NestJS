export const PAYMENTS = [
    {
        id: 1,
        amount: 100,
        product: [
            {
                id: 1,
                name: 'Banana',
                price: 10,
                quantity: 4
            },
            {
                id: 2,
                name: 'Apple',
                price: 20,
                quantity: 6
            },
            {
                id: 3,
                name: 'Orange',
                price: 30,
                quantity: 8
            }
        ],
        status: 'success',
        createdAt: new Date('2020-01-01T00:00:00.000Z'),
        paidBy: {
            name: 'Jonatan sebastian',
            address: 'Calle 123',
            city: 'Madrid',
            country: 'Spain'

        }
    },
    {
        id: 2,
        amount: 1200,
        product: [
            {
                id: 6,
                name: 'Iphone 6s Plus',
                price: 500,
                quantity: 2
            },
            {
                id: 7,
                name: 'Playstation 4',
                price: 300,
                quantity: 3
            },
            {
                id: 8,
                name: 'Canon G7',
                price: 400,
                quantity: 1
            }
        ],
        status: 'success',
        createdAt: new Date('2022-01-01T00:00:00.000Z'),
        paidBy: {
            name: 'Ella Fitzgerald',
            address: '23, rue des Alpes',
            city: 'Paris',
            country: 'France'
        }

    },
    {
        id: 3,
        amount: 1500,
        product: [
            {
                id: 9,
                name: 'Macbook Pro',
                price: 1000,
                quantity: 1
            },
            {
                id: 7,
                name: 'Playstation 4',
                price: 300,
                quantity: 1
            },
            {
                id: 8,
                name: 'Canon G7',
                price: 400,
                quantity: 1
            }
        ],
        status: 'errored',
    }
]