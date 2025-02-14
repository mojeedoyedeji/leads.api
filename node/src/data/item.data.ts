import { BaseItem, Item } from '../interfaces/item.interface';
import { Items } from '../interfaces/items.interface';

export const items: Items = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: 'Tasty',
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
}