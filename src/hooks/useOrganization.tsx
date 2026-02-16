import { useMutation, useQuery } from "@tanstack/react-query";
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
 * Custom hook para gerenciar operações relacionadas a organizações
 * Consolida create, update, configure e fetch operations
 */
export const useOrganization = () => {
    /**
     * Mutation para criar uma nova organização
     */
    const createMutation = useMutation<
        OrganizationResponse,
        Error,
        CreateOrganizationDTO
    >({
        mutationKey: ["create_organization"],
        mutationFn: organizationService.createOrganization.bind(organizationService),
    });

    /**
     * Mutation para configurar a conta após registro
     */
    const configureMutation = useMutation<
        ConfigureAccountResponse,
        Error,
        ConfigureAccountDTO
    >({
        mutationKey: ["configure_account"],
        mutationFn: organizationService.configureAccount.bind(organizationService),
    });

    /**
     * Factory para criar mutation de update de organização
     * Retorna um hook específico para cada organização
     */
    const useUpdateOrganization = (organizationId: string) =>
        useMutation<
            UpdateOrganizationResponse,
            Error,
            UpdateOrganizationDTO
        >({
            mutationKey: ["update_organization", organizationId],
            mutationFn: (payload) =>
                organizationService.updateOrganization(organizationId, payload),
        });

    /**
     * Query para buscar uma organização específica
     */
    const useGetOrganization = (organizationId: string) =>
        useQuery({
            queryKey: ["organization", organizationId],
            queryFn: () => organizationService.getOrganization(organizationId),
            enabled: !!organizationId,
        });

    /**
     * Query para listar organizações
     */
    const useListOrganizations = (limit: number = 5, page: number = 1) =>
        useQuery({
            queryKey: ["organizations", limit, page],
            queryFn: () =>
                organizationService.listOrganizations(limit, page),
        });

    return {
        // Mutations
        createMutation,
        configureMutation,
        useUpdateOrganization,

        // Queries
        useGetOrganization,
        useListOrganizations,

        // Utility functions
        service: organizationService,
    };
};

// Export individual hooks para uso específico em componentes
export const useCreateOrganization = () => {
    return useOrganization().createMutation;
};

export const useConfigureAccount = () => {
    return useOrganization().configureMutation;
};

export const useUpdateOrganization = (organizationId: string) => {
    return useOrganization().useUpdateOrganization(organizationId);
};

export const useGetOrganization = (organizationId: string) => {
    return useOrganization().useGetOrganization(organizationId);
};

export const useListOrganizations = (limit: number = 5, page: number = 1) => {
    return useOrganization().useListOrganizations(limit, page);
};
