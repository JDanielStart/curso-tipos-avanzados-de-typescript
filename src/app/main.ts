import { addProduct } from "./products/product.services"

addProduct({
  id: 1,
  title: "p1",
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 20,
  size: "XS",
  category: {
    id: 12,
    name: "c1",
    createdAt: new Date(),
    updatedAt: new Date()
  }
});
