import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { organizationService } from "../services/organization.service";
import { authClient } from "../lib/auth-client";
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
 * Agora inclui lógica centralizada de organização ativa usando hooks oficiais
 */
export const useOrganization = () => {
    const queryClient = useQueryClient();
    const { data: activeOrgRes, isPending: isActiveOrgPending } = authClient.useActiveOrganization();
    const { data: organizations, isPending: isOrgListPending } = authClient.useListOrganizations();
    const { data: sessionData, isPending: isSessionPending } = authClient.useSession();

    // Prioritize official active organization, then session field, then fallback to first
    const activeOrg = activeOrgRes ||
        organizations?.find(org => org.id === (sessionData?.user as any)?.activeOrganizationId) ||
        organizations?.[0];

    const activeOrgId = activeOrg?.id || "";

    const createMutation = useCreateOrganization();
    const configureMutation = useConfigureAccount();

    const switchOrganization = async (organizationId: string) => {
        try {
            await authClient.organization.setActive({ organizationId });
            // Invalidate queries to trigger refreshes
            await queryClient.invalidateQueries({ queryKey: ["activeOrganization"] });
            await queryClient.invalidateQueries({ queryKey: ["organizations"] });
        } catch (error) {
            console.error("Failed to switch organization:", error);
            throw error;
        }
    };

    return {
        activeOrgId,
        activeOrg,
        isPending: isSessionPending || isOrgListPending || isActiveOrgPending,
        organizations,
        switchOrganization,
        createMutation,
        configureMutation,
        useUpdateOrganization,
        useGetOrganization,
        useListOrganizations,
        service: organizationService,
    };
};
