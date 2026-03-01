import api from "../utils/api.utils";
import type {
    VerifyProductDTO,
    VerifyOrganizationDTO,
    VerifyProductResponse,
    VerifyOrganizationResponse
} from "../types/admin.types";

export const adminService = {
    /**
     * Verificar ou desverificar um produto
     * @param data - ID do produto e status de verificação
     */
    async verifyProduct(data: VerifyProductDTO): Promise<VerifyProductResponse> {
        const response = await api.patch("/admin/verify-product", data);
        return response.data;
    },

    /**
     * Verificar ou desverificar uma organização
     * @param data - ID da organização e status de verificação
     */
    async verifyOrganization(data: VerifyOrganizationDTO): Promise<VerifyOrganizationResponse> {
        const response = await api.patch("/admin/verify-organization", data);
        return response.data;
    },
};
