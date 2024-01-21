import { User, ROLES} from "./01-enums";

const currentUser = {
  username: "nicobyte",
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if (currentUser.role == ROLES.ADMIN) {
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log("V1", rta);

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role == role1) {
    return true;
  }
  if (currentUser.role == role2) {
    return true;
  }
  return false;
}

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log("V2", rta3);

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log("V3", rta4);
