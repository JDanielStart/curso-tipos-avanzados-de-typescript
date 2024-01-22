export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "custumer"
}

export interface User {
  id: string | number;
  username: string;
  role: ROLES;
}
