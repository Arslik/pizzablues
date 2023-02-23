export function  formatPrice(price){
    return price.toLocaleString('KZ',{
        style:'currency',
        currency:'KZT'
    })
}

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza',
        price: 1600
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza',
        price: 2300
    },
    {
        name:'Chicken Pizza',
        img:'/img/chicken-pizza.jpeg',
        section: 'Pizza',
        price: 2150
    },
    {
        name:'Vegeterian Pizza',
        img:'/img/healthy-pizza.jpeg',
        section: 'Pizza',
        price: 2500
    },
    {
        name:'Burger',
        img:'/img/burger.jpeg',
        section: 'Burger',
        price: 1350
    },
    {
        name:'Gyro',
        img:'/img/gyro.jpeg',
        section: 'Sandwich',
        price: 1500
    },
    {
        name:'Sandwich',
        img:'/img/sandwich.jpeg',
        section: 'Sandwich',
        price: 1600
    },
    {
        name:'Fries',
        img:'/img/fries.jpeg',
        section: 'Sides',
        price: 800
    },
    {
        price: 1000,
        name: "Soda",
        section: "Drinks",
        choices: ["Coke", "Sprite", "Root Beer"]
    }

];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});