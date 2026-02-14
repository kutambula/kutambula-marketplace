import { useMutation } from "@tanstack/react-query";

interface RegisterDTO {
    firstName: string;
    lastName: string;
    businessName: string;
    email: string;
    password: string;
    accountType: "personal" | "business";
    country: string;
    onlyBuying: boolean;
}

export interface RegisterReturn {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
}

export const useRegister = () => {
    return useMutation<RegisterReturn, Error, RegisterDTO>({
        mutationKey: ["register_account"],

        mutationFn: async (payload: RegisterDTO) => {

            console.log(payload)
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/account/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.message || "Erro ao criar conta");
            }

            return data;
        },
    });
};
