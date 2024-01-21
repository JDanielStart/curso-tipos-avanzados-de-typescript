enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTUMER = "custumer"
}

type User = {
  username: string;
  role: ROLES
}

const nicoUser: User = {
  username: "nicobytes",
  role: ROLES.ADMIN
}
