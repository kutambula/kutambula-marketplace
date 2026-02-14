import { adminClient, jwtClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { ac, admin, business, personal } from "./permissions"

export const authClient = createAuthClient({
    baseURL: import.meta.env.VITE_BETTER_AUTH_URL,
    plugins: [
        organizationClient(),
        jwtClient(),
        adminClient({
            ac,
            roles: { admin, business, personal }
        })
    ]
});