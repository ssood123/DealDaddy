import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: "Test",
            email: "test@example.com",
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: "John",
            email: "user@example.com",
            password: bcrypt.hashSync('1234',8),
            isAdmin: false,
        },
    ],
    products:[
        {
            _id:'1',
            name:'Honeywell HT-900 TurboForce Air Circulator Fan Black',
            category:'Fan',
            image:'/images/Fan1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Honeywell',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id:'2',
            name:'The PopFan Foldable Rechargeable Fan',
            category:'Fan',
            image:'/images/Fan2.jpg',
            price: 120,
            countInStock: 20,
            brand: 'Breville',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id:'3',
            name:'Professional Series 18" Stand Fan',
            category:'Fan',
            image:'/images/Fan3.png',
            price: 120,
            countInStock: 0,
            brand: 'Cem Global',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id:'4',
            name:'Commercial Floor Fan 3 Speed 20 inch 3450 CFM CF-20',
            category:'Fan',
            image:'/images/Fan4.jpg',
            price: 120,
            conuntInStock: 15,
            brand: 'TPI Corporation',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id:'5',
            name:'Airtop 16" Table Fan',
            category:'Fan',
            image:'/images/Fan5.jpeg',
            price: 120,
            countInStock: 5,
            brand: 'Air Top',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            _id:'6',
            name:'Vornado 6803 Pedestal Fan',
            category:'Fan',
            image:'/images/Fan6.jpg',
            price: 120,
            countInStock: 12,
            brand: 'Vornado',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
    ]
}

export default data;