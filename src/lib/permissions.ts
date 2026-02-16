import { createAccessControl } from "better-auth/plugins/access";

export const statement = {
    product: ["create", "update", "delete", "publish", "view"],
    order: ["create", "update", "cancel", "view"],
    user: ["create", "update", "delete", "view"],
} as const;

export const ac = createAccessControl(statement);

export const personal = ac.newRole({
    product: ["view"],
    order: ["create", "cancel", "view"],
    user: ["update", "view"],
});

export const business = ac.newRole({
    product: ["create", "update", "delete", "publish", "view"],
    order: ["update", "view"],
    user: ["view"],
});

export const admin = ac.newRole({
    product: ["create", "update", "delete", "publish", "view"],
    order: ["create", "update", "cancel", "view"],
    user: ["create", "update", "delete", "view"],
});
