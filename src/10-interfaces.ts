type Sizes = "XS" | "S" | "M" | "L" | "XL";
/* type Product = {
  id: string |number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
} */

//La diferencia entre type e interface es que en type puedes
//crear tipos directos sin embargo en interface debe ser
//un cuerpo completo pero además interface se puede extender
//asi que para valores fijos que no se extenderán en el futuro
//o si lo hace será minimo es mejor type pero al contrario
//será mejor usar interface

type userId = string | number;

interface Product {
  id: string |number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: "p1",
  createdAt: new Date(),
  stock: 20,
  size: "XS"
});

const addProduct = (data: Product) => {
  products.push(data);
}
