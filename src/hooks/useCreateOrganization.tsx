import { useMutation } from "@tanstack/react-query";
import { authClient } from "../lib/auth-client";

export interface CreateOrganizationDTO {
    businessName: string;
}

export interface CreateOrganizationReturn {
    id: string;
    name: string;
    slug: string;
    createdAt: string;
}

export const useCreateOrganization = () => {
    return useMutation<CreateOrganizationReturn, Error, CreateOrganizationDTO>({
        mutationKey: ["create_organization"],

        mutationFn: async (payload: CreateOrganizationDTO) => {
            const { data: user, error } = await authClient.token();

            if (error || !user?.token) {
                throw new Error("Usuário não autenticado");
            }

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/organization/register`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                    body: JSON.stringify(payload),
                }
            );

            const text = await response.text();
            const data = text ? JSON.parse(text) : null;

            if (!response.ok) {
                throw new Error(data?.message || "Erro ao criar organização");
            }

            return data;
        },
    });
};
