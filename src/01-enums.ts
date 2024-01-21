export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "custumer"
}

export type User = {
  username: string;
  role: ROLES
}

const nicoUser: User = {
  username: "nicobytes",
  role: ROLES.ADMIN
}
