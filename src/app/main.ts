import {faker} from "@faker-js/faker";

import { addProduct, products, updateProduct, findProducts } from "./products/product.services";

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
const product = products[0];
updateProduct(product.id, {
  title: "New Title",
  stock: 80
});

findProducts({
  stock: 10,
  color: "red",
  isNew: true,
  tags: ["as", "pe"]
});

