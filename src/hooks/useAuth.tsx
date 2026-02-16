import { authClient } from "../lib/auth-client";

export const handlerProvider = async (provider: "google" | "github" | "apple") => {
    try {
        const result = await authClient.signIn.social({
            provider,
            callbackURL: `${import.meta.env.VITE_SITE_URL}/dashboard`,
            errorCallbackURL: `${import.meta.env.VITE_SITE_URL}/error`,
            newUserCallbackURL: `${import.meta.env.VITE_SITE_URL}/auth/account_configure`,
            disableRedirect: false,
        });
        console.log("Signup via provider result:", result);
    } catch (error) {
        console.error("Erro ao criar conta via provedor:", error);
    }
}