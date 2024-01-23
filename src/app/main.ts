import {faker} from "@faker-js/faker";

import { addProduct, products } from "./products/product.services";

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(["Dog", "cat"]),
    title: faker.commerce.productName(),
    stock: faker.number.int(),
    size: faker.helpers.arrayElement(["S", "M", "L", "XL"]),
    categoryId: faker.string.uuid()
  });
}

console.log(products);


