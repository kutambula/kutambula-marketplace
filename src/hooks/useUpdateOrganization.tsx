import { useMutation } from "@tanstack/react-query";

interface UpdateOrganizationPayload {
    [key: string]: any;
}

export const useUpdateOrganization = ({ organizationId }: { organizationId: string }) => {
    return useMutation<any, Error, UpdateOrganizationPayload>({
        mutationKey: ["update_organization"],

        mutationFn: async (payload: UpdateOrganizationPayload) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/organization/update/${organizationId}`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                console.log(data?.message)
                throw new Error(data?.message || "Erro ao criar produto");
            }

            return data;
        },
    });
};
