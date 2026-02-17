import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { organizationService } from "../services/organization.service";
import type {
    CreateOrganizationDTO,
    ConfigureAccountDTO,
    UpdateOrganizationDTO,
    OrganizationResponse,
    ConfigureAccountResponse,
    UpdateOrganizationResponse,
} from "../types/organization.types";

/**
 * Hook para criar uma nova organização
 */
export const useCreateOrganization = () => {
    return useMutation<
        OrganizationResponse,
        Error,
        CreateOrganizationDTO
    >({
        mutationKey: ["create_organization"],
        mutationFn: (payload) => organizationService.createOrganization(payload),
    });
};

/**
 * Hook para configurar a conta após registro
 */
export const useConfigureAccount = () => {
    return useMutation<
        ConfigureAccountResponse,
        Error,
        ConfigureAccountDTO
    >({
        mutationKey: ["configure_account"],
        mutationFn: (payload) => organizationService.configureAccount(payload),
    });
};

/**
 * Hook para atualizar uma organização
 */
export const useUpdateOrganization = (organizationId: string) => {
    const queryClient = useQueryClient();

    return useMutation<
        UpdateOrganizationResponse,
        Error,
        UpdateOrganizationDTO
    >({
        mutationKey: ["update_organization", organizationId],
        mutationFn: (payload) =>
            organizationService.updateOrganization(organizationId, payload),
        onSuccess: () => {
            // Invalida a query da organização específica após update
            queryClient.invalidateQueries({ queryKey: ["stores", organizationId] });
        }
    });
};

/**
 * Hook para buscar uma organização específica
 */
export const useGetOrganization = (organizationId: string) => {
    return useQuery({
        queryKey: ["stores", organizationId],
        queryFn: () => organizationService.getOrganization(organizationId),
        enabled: !!organizationId,
    });
};

/**
 * Hook para listar organizações
 */
export const useListOrganizations = (limit: number = 5, page: number = 1) => {
    return useQuery({
        queryKey: ["organizations", limit, page],
        queryFn: () => organizationService.listOrganizations(limit, page),
    });
};

/**
 * Hook "God" para quem prefere agrupar funcionalidades
 * Mantido para retrocompatibilidade
 */
export const useOrganization = () => {
    const createMutation = useCreateOrganization();
    const configureMutation = useConfigureAccount();

    return {
        createMutation,
        configureMutation,
        useUpdateOrganization,
        useGetOrganization,
        useListOrganizations,
        service: organizationService,
    };
};
