import { apiClient } from "../utils/api.utils";
import type {
    CreateOrganizationDTO,
    ConfigureAccountDTO,
    UpdateOrganizationDTO,
    OrganizationResponse,
    ConfigureAccountResponse,
    UpdateOrganizationResponse,
    ListOrganizationResponse,
} from "../types/organization.types";

class OrganizationService {
    /**
     * Create a new organization
     */
    async createOrganization(
        payload: CreateOrganizationDTO
    ): Promise<OrganizationResponse> {
        try {
            const response = await apiClient.post<OrganizationResponse>(
                "/organization/register",
                payload
            );
            return response.data;
        } catch (error: any) {
            throw new Error(error.message || "Erro ao criar organização");
        }
    }

    /**
     * Configure account after registration
     */
    async configureAccount(
        payload: ConfigureAccountDTO
    ): Promise<ConfigureAccountResponse> {
        try {
            const response = await apiClient.post<ConfigureAccountResponse>(
                "/account/register-step",
                payload
            );
            return response.data;
        } catch (error: any) {
            throw new Error(error.message || "Erro ao configurar conta");
        }
    }

    /**
     * Update an existing organization
     */
    async updateOrganization(
        organizationId: string,
        payload: UpdateOrganizationDTO
    ): Promise<UpdateOrganizationResponse> {
        try {
            const response = await apiClient.patch<UpdateOrganizationResponse>(
                `/organization/update/${organizationId}`,
                payload
            );
            return response.data;
        } catch (error: any) {
            throw new Error(error.message || "Erro ao atualizar organização");
        }
    }

    /**
     * Get organization by ID
     */
    async getOrganization(organizationId: string): Promise<any> {
        try {
            const response = await apiClient.get(
                `/organization/${organizationId}`
            );
            return response.data;
        } catch (error: any) {
            throw new Error(error.message || "Erro ao buscar organização");
        }
    }

    /**
     * List organizations with pagination
     */
    async listOrganizations(
        limit: number = 5,
        page: number = 1
    ): Promise<ListOrganizationResponse> {
        try {
            const response = await apiClient.get<ListOrganizationResponse>(
                `/organization/list?limit=${limit}&page=${page}`
            );
            return response.data;
        } catch (error: any) {
            throw new Error(error.message || "Erro ao listar organizações");
        }
    }
}

export const organizationService = new OrganizationService();
