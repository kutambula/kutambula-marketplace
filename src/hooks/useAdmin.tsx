import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminService } from "../services/admin.service";
import type {
    VerifyProductDTO,
    VerifyOrganizationDTO
} from "../types/admin.types";

/**
 * Hook centralizado para operações administrativas
 */
export const useAdmin = () => {
    const queryClient = useQueryClient();

    // Mutação para verificar produto
    const verifyProductMutation = useMutation({
        mutationKey: ["admin_verify_product"],
        mutationFn: (data: VerifyProductDTO) => adminService.verifyProduct(data),
        onSuccess: (data) => {
            // Invalidar cache de produtos
            queryClient.invalidateQueries({ queryKey: ["products"] });
            queryClient.invalidateQueries({ queryKey: ["products", "detail", data.id] });
        },
    });

    // Mutação para verificar organização
    const verifyOrganizationMutation = useMutation({
        mutationKey: ["admin_verify_organization"],
        mutationFn: (data: VerifyOrganizationDTO) => adminService.verifyOrganization(data),
        onSuccess: (data) => {
            // Invalidar cache de organizações
            queryClient.invalidateQueries({ queryKey: ["organizations"] });
            queryClient.invalidateQueries({ queryKey: ["organizations", "detail", data.id] });
        },
    });

    return {
        verifyProductMutation,
        verifyOrganizationMutation,
        service: adminService,
    };
};
