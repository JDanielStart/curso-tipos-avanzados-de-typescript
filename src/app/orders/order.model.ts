import { Product } from "./../products/product.model";
import { User } from "./../users/user.model";

interface Order {
  id: string | number;
  createAt: Date;
  products: Product[];
  user: User;
}
