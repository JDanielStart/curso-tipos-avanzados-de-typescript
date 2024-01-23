import { Product } from "./product.model";

//Eliges los que omites
export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string;
}

//Eliges los que coges
type example = Pick<Product, "color" | "description">;

//Haces todos opcionales
export interface updateProductDto extends Partial<CreateProductDto> {}

//Haces todo requeridos
type example2 = Required<Product>;

export interface findProductDto extends Readonly<Partial<Product>> {}

type example3 = Readonly<Product>;
